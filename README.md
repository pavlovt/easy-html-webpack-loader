# Webpack plugin for using easy html (ehtml)

## Installation

`yarn add easy-html-webpack-loader`

## Usage

Since easy-html's output is HTML, it's best served in conjunction with the [raw-loader](https://github.com/webpack/raw-loader).

### Angular 2+
Here you just need to be able to import *.ehtml files. 

```javascript
const macros = require('../src/app/shared/easy-html-macros');
...
return {
    ...
    module: {
        rules: [{
                test: /\.ehtml$/,
                use: [
                    {
                        loader: "raw-loader"
                    },
                    {
                        loader: "easy-html-webpack-loader",
                        options: {macros: macros}
                    }
                ]
            }]
    }
}
```
The example code is found [here](https://github.com/pavlovt/angular5-starter/blob/master/config/webpack.common.js)
And in your angular component now you can write: 
```js
const txt = require('./about.component.ehtml');
console.log('txt1', txt);

@Component({
  selector: "about",
  styles: [],
  templateUrl: "./about.component.ehtml"
})
export class AboutComponent implements OnInit {}
```
The example code is found [here](https://github.com/pavlovt/angular5-starter/blob/master/src/app/about/about.component.ts)

### Vue
For Vue it is required not only to recognise the ehtml file but also to recognise the ehtml code inside the Vue component and this required a llitle bit different webpack config. To vue.config.js (vue-cli 3.0) add the following code:
```js
  configureWebpack: config => {
    const use = [{loader: 'raw-loader'},
            {
              loader: "easy-html-webpack-loader",
              options: {
                // macros: macros,
              }
            }
          ]

    config.module.rules.push({
          test: /\.ehtml$/,
          oneOf: [
                    {
                      resourceQuery: /^\?vue/,
                      use: [
            {
              loader: "easy-html-webpack-loader",
              options: {
                // macros: macros,
              }
            }
          ]
                    },
              // use: ['raw-loader', 'easy-html'],
              {use: use}
          ]
        })
  }
```
The example code is found [here](https://github.com/pavlovt/nuxt-blog/blob/master/admin1/vue.config.js)
Now after Webpack restart you can use it in your components:
```
<template lang="ehtml">
  .row {
      .col {
          form @submit.prevent=submit {
              input v-model="frm.z" {}

              button.btn.btn-primary { 'Submit' }
          }
      }
  }
</template>
```
The example code is found [here](https://github.com/pavlovt/nuxt-blog/blob/master/admin1/src/views/Home.vue)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)