var gitrev = require('git-rev-sync');

var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'particles-cloudsploit-scans.us-east-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'us-west-2',
        bucket: 'particles-cloudsploit-scans.us-west-2'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'us-west-1',
        bucket: 'particles-cloudsploit-scans.us-west-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'eu-west-1',
        bucket: 'particles-cloudsploit-scans.eu-west-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'eu-central-1',
        bucket: 'particles-cloudsploit-scans.eu-central-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'ap-southeast-1',
        bucket: 'particles-cloudsploit-scans.ap-southeast-1'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'ap-southeast-2',
        bucket: 'particles-cloudsploit-scans.ap-southeast-2'
      },
      prefix: gitrev.branch(),
      clean: true,
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'ap-northeast-1',
        bucket: 'particles-cloudsploit-scans.ap-northeast-1'
      },
      clean: true,
      prefix: gitrev.branch(),
      validate: false,
      create: true
    },
    {
      aws: {
        region: 'sa-east-1',
        bucket: 'particles-cloudsploit-scans.sa-east-1'
      },
      clean: true,
      prefix: gitrev.branch(),
      validate: false,
      create: true
    }
  ],
  dist: 'dist',
  lambdaSrcModule: 'particles-cloudsploit-scans',
  lambdaSrc: 'cloudsploit-scans'
};

module.exports = config;
