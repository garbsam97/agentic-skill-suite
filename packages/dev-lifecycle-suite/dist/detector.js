const path = require('path');
const os = require('os');
const fs = require('fs');

function resolveTargetPath(options = {}) {
  if (options.targetDir) {
    return {
      targetPath: path.resolve(options.targetDir),
      detectedType: 'custom',
    };
  }

  if (options.global) {
    const homeDir = os.homedir();
    const globalGeminiPath = path.join(homeDir, '.gemini', 'antigravity', 'skills');
    return {
      targetPath: globalGeminiPath,
      detectedType: 'global-home',
    };
  }

  const cwd = process.cwd();
  const localAgentsPath = path.join(cwd, '.agents', 'skills');
  const localGeminiPath = path.join(cwd, '.gemini', 'skills');

  if (fs.existsSync(localGeminiPath) && !fs.existsSync(localAgentsPath)) {
    return {
      targetPath: localGeminiPath,
      detectedType: 'local-gemini',
    };
  }

  return {
    targetPath: localAgentsPath,
    detectedType: 'local-agents',
  };
}

module.exports = {
  resolveTargetPath,
};
