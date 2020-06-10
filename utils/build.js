// run snowpack build
// commit the changes in /dist
// push up submodule
const exec = require('@actions/exec');
const fs = require('fs-extra')


async function buildAndDist() {
  console.log("🎉 Building assets")
  await exec.exec('npm run build')
  console.log("🔥 Deploying static code")
  await exec.exec('firebase deploy');
}

buildAndDist();