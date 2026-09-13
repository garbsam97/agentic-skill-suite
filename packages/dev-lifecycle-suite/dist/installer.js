const path = require('path');
const fs = require('fs');

function copyDirRecursiveSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function installSkills(options) {
  const result = {
    installedSkills: [],
    skippedSkills: [],
    targetPath: options.targetPath,
    success: false,
  };

  // Determine source skills directory relative to package root
  const defaultSource = path.resolve(__dirname, '..', 'skills');
  const sourceSkillsDir = options.sourceSkillsPath
    ? path.resolve(options.sourceSkillsPath)
    : (fs.existsSync(defaultSource) ? defaultSource : path.resolve(__dirname, 'skills'));

  if (!fs.existsSync(sourceSkillsDir)) {
    throw new Error(`Source skills directory not found at: ${sourceSkillsDir}`);
  }

  fs.mkdirSync(options.targetPath, { recursive: true });

  const entries = fs.readdirSync(sourceSkillsDir, { withFileTypes: true });
  const skillDirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  for (const skillName of skillDirs) {
    const srcSkillDir = path.join(sourceSkillsDir, skillName);
    const destSkillDir = path.join(options.targetPath, skillName);

    if (fs.existsSync(destSkillDir) && !options.force) {
      const skillFile = path.join(destSkillDir, 'SKILL.md');
      if (fs.existsSync(skillFile)) {
        result.skippedSkills.push(skillName);
        copyDirRecursiveSync(srcSkillDir, destSkillDir);
        result.installedSkills.push(skillName);
        continue;
      }
    }

    copyDirRecursiveSync(srcSkillDir, destSkillDir);
    result.installedSkills.push(skillName);
  }

  result.success = true;
  return result;
}

module.exports = {
  copyDirRecursiveSync,
  installSkills,
};
