'use-strict'

const config = require('./config.js')()

const src = config.root + config.src
const build = config.root + config.build

module.exports = {
  to: {
    src,
    build,
    sass: {
      in: src + config.sass.dir,
      out: build + config.css
    },
    pug: {
      in: src + config.pug.dir,
      out: build
    }
  }
}
