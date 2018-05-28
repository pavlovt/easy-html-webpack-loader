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
  else {
    var res = 'Error parsing the template ';
    /*try {
      res += ret.res.parseErrors[0].message + ' near ' + content.substr(ret.res.parseErrors[0].token.startOffset, 100);
    } catch(err) {}*/
  	//console.log('Error!!', ret.res);
  	// show the first error and where in the code it is happening
  	this.callback(res);
  	console.log(res);
  }
}