<#
.SYNOPSIS
    Installs dev-lifecycle-suite (garbsamu-suite) skills into the local repository or user's agent skills directory.
#>

param (
    [string]$TargetDir = "$PSScriptRoot\..\..\.agents\skills"
)

$SourceSkillsDir = "$PSScriptRoot\..\skills"

if (-not (Test-Path $SourceSkillsDir)) {
    Write-Error "Source skills directory not found at $SourceSkillsDir"
    exit 1
}

Write-Host "Installing dev-lifecycle-suite skills into $TargetDir..." -ForegroundColor Green

Get-ChildItem -Path $SourceSkillsDir -Directory | ForEach-Object {
    $SkillName = $_.Name
    $Destination = Join-Path $TargetDir $SkillName
    
    if (-not (Test-Path $Destination)) {
        New-Item -ItemType Directory -Path $Destination -Force | Out-Null
    }
    
    Copy-Item -Path "$($_.FullName)\*" -Destination $Destination -Recurse -Force
    Write-Host "  [+] Installed skill: $SkillName" -ForegroundColor Cyan
}

Write-Host "Installation complete! The garbsamu-suite skills are ready to use." -ForegroundColor Green
