import { Command } from 'commander';
import { resolveTargetPath } from './detector.js';
import { installSkills } from './installer.js';

const program = new Command();

program
  .name('dev-lifecycle-suite')
  .description('CLI installer for garbsamu-suite agentic development skills')
  .version('1.1.0');

program
  .command('install')
  .description('Install garbsamu-suite skills into your workspace or global agent directory')
  .argument('[target-dir]', 'Custom target directory for installation')
  .option('-g, --global', 'Install skills globally to user home directory')
  .option('-f, --force', 'Force overwrite existing skills')
  .action(async (targetDirArg, options) => {
    try {
      console.log('\n🚀 dev-lifecycle-suite (garbsamu-suite) Installer\n');

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

        console.log('\n💡 You can now invoke `/garbsamu-pipeline <idea>` in your AI agent workspace.\n');
      }
    } catch (err: any) {
      console.error('❌ Installation failed:', err.message || err);
      process.exit(1);
    }
  });

// Handle default command if no args provided or if "install" is omitted
if (process.argv.length === 2) {
  process.argv.push('install');
}

program.parse(process.argv);
