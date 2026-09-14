#!/usr/bin/env node

const path = require('path');
const { resolveTargetPath } = require('./detector');
const { installSkills } = require('./installer');

const pkg = require('../package.json');

function printHelp() {
  console.log(`
🚀 ${pkg.name} v${pkg.version} - ${pkg.description}

Usage:
  npx ${pkg.name} [command] [options] [target-dir]

Commands:
  install [target-dir]   Install garbsamu-suite skills into your workspace or global agent directory (default)
  help                   Display help information

Options:
  -g, --global           Install skills globally to user home directory (~/.gemini/antigravity/skills)
  -f, --force            Force overwrite existing skill files
  -v, --version          Display version number
  -h, --help             Display help information

Examples:
  npx ${pkg.name} install
  npx ${pkg.name} install --global
  npx ${pkg.name} install ./custom-skills-folder --force
`);
}

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('-v') || args.includes('--version')) {
    console.log(`${pkg.name} v${pkg.version}`);
    process.exit(0);
  }

  if (args.includes('-h') || args.includes('--help') || args[0] === 'help') {
    printHelp();
    process.exit(0);
  }

  let command = 'install';
  let positionalArgs = [];
  const options = {
    global: false,
    force: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === 'install') {
      command = 'install';
    } else if (arg === '-g' || arg === '--global') {
      options.global = true;
    } else if (arg === '-f' || arg === '--force') {
      options.force = true;
    } else if (!arg.startsWith('-')) {
      positionalArgs.push(arg);
    }
  }

  const targetDirArg = positionalArgs.length > 0 ? positionalArgs[0] : undefined;

  if (command === 'install') {
    try {
      console.log(`\n🚀 dev-lifecycle-suite (garbsamu-suite) Installer v${pkg.version}\n`);

      const targetResult = resolveTargetPath({
        global: options.global,
        targetDir: targetDirArg,
      });

      console.log(`📍 Target Directory: ${targetResult.targetPath}`);
      console.log(`🔍 Location Type:   ${targetResult.detectedType}\n`);

      const result = await installSkills({
        targetPath: targetResult.targetPath,
        force: options.force,
      });

      if (result.success) {
        console.log('✅ Installation Successful!\n');
        console.log('Installed Skills:');
        for (const skill of result.installedSkills) {
          console.log(`  [+] ${skill}`);
        }

        console.log('\n💡 You can now invoke `/garbsamu-pipeline <idea> [--track backend|frontend|fullstack]` in your AI agent workspace.\n');
      }
    } catch (err) {
      console.error('❌ Installation failed:', err.message || err);
      process.exit(1);
    }
  }
}

main();
