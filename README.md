# Webpack plugin for using easy html (ehtml)

## Installation

`yarn add easy-html-webpack-plugin`

## Usage

Since easy-html's output is HTML, it's best served in conjunction with the [html-loader](https://github.com/webpack/html-loader).

### Webpack 2

```javascript
{
    module: {
        rules: [{
                test: /\.ehtml$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "easy-html-webpack-plugin"
                    }
                ]
            }]
    }
}
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)