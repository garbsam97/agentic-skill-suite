import * as path from 'path';
import * as fs from 'fs';

export interface InstallOptions {
  targetPath: string;
  force?: boolean;
  sourceSkillsPath?: string;
}

export interface InstallResult {
  installedSkills: string[];
  skippedSkills: string[];
  targetPath: string;
  success: boolean;
}

export function copyDirRecursiveSync(src: string, dest: string): void {
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

export async function installSkills(options: InstallOptions): Promise<InstallResult> {
  const result: InstallResult = {
    installedSkills: [],
    skippedSkills: [],
    targetPath: options.targetPath,
    success: false,
  };

  // Determine source skills directory
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
      // Check if SKILL.md already exists
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
