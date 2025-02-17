const downloadRelease = require('download-github-release');
const path = require('path');
const fs = require('fs');

const user = 'huintech';
const repo = 'external-resources-v2';
const outputdir = path.resolve('./external-resources');
const leaveZipped = false;

const filterRelease = release => release.prerelease === false;

const filterAsset = () => true;

if (!fs.existsSync(outputdir)) {
    fs.mkdirSync(outputdir, {recursive: true});
}

downloadRelease(user, repo, outputdir, filterRelease, filterAsset, leaveZipped)
    .then(() => {
        console.log('Firmwares download complete');
    })
    .catch(err => {
        console.error(err.message);
    });
