// const loaderUtils = require("loader-utils");
const parser = require('easy-html');

module.exports = function (ehtml) {
    // merge params and default config
    // const options = loaderUtils.getOptions(this);

    this.cacheable();

    return parser(ehtml);
};