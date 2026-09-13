#!/usr/bin/env bash
# Installs dev-lifecycle-suite (garbsamu-suite) skills into local or target skills directory

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_SKILLS="$SCRIPT_DIR/../skills"
TARGET_DIR="${1:-$SCRIPT_DIR/../../.agents/skills}"

if [ ! -d "$SOURCE_SKILLS" ]; then
    echo "Error: Source skills directory not found at $SOURCE_SKILLS" >&2
    exit 1
fi

echo "Installing dev-lifecycle-suite skills into $TARGET_DIR..."

for skill_path in "$SOURCE_SKILLS"/*; do
    if [ -d "$skill_path" ]; then
        skill_name="$(basename "$skill_path")"
        dest_path="$TARGET_DIR/$skill_name"
        mkdir -p "$dest_path"
        cp -r "$skill_path"/* "$dest_path/"
        echo "  [+] Installed skill: $skill_name"
    fi
done

echo "Installation complete! The garbsamu-suite skills are ready to use."
