// const loaderUtils = require("loader-utils");
const parser = require('easy-html')
const loaderUtils = require("loader-utils")

/**
 * Main function
 * @param   {String}  content   jhtml file content
 */
module.exports = function loader(content, map) {
  const options = loaderUtils.getOptions(this)

  this.cacheable()

  const ret = parser(content, options)

  if (ret.content) this.callback(null, ret.content, map)
  else this.callback(ret.res)
}