var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:kirkbyo/kirkbyo.github.io.git',
  },
  (err) => {
    console.log(err)
    console.log('Deploy Complete!')
  }
)
