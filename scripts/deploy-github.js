var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/kirkbyo/kirkbyo.github.io',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
