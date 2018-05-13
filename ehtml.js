const HTMLAsset = require('parcel-bundler/src/assets/HTMLAsset');
const ehtml = require('easy-html');

module.exports = class MarkdownAsset extends HTMLAsset {
    constructor(name, pkg, options) {
        super(name, pkg, options);
        this.type = 'js';
    }

    parse(code) {
        this.contents = ehtml(code);
        return super.parse(this.contents);
    }
    
    generate() {
        return {
            js: `module.exports=\`${super.generate()}\``
        };
    }
}
