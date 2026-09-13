import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';

export interface DetectOptions {
  global?: boolean;
  targetDir?: string;
}

export interface TargetPathResult {
  targetPath: string;
  detectedType: 'local-agents' | 'local-gemini' | 'global-home' | 'custom';
}

export function resolveTargetPath(options: DetectOptions = {}): TargetPathResult {
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
