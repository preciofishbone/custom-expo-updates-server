param ([string]$directory)
Write-Host "input directory:" $directory
cd ../expo-updates-client
npx expo export 
cd ../expo-updates-server

Copy-Item -Recurse ../expo-updates-client/dist/ updates/$directory

node ./scripts/exportClientExpoConfig.js > updates/$directory/expoConfig.json