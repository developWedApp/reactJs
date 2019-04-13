const path = require('path');

module.exports = {
  entry: './src/index.js',   //시작점이라고 생각하면 된다. 상속받고 의존관계에 있는 모든 파일의 시작 파일.
  output: {                  //path 라이브러리를 통해서 절대경로를 통해 파일을 다시 저장한다.
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{                                  //webpack 과 babel 을 동시에 수행하면서 webpack 과정에서 babel 기능까지 해주는 것. ;loader은 번들하는 과정에서 여러가지 기능들을 loader해주는것......
                                            //webpack dev server은 자동적으로 서버를 만들어주기 때문에 app.js를 만들어 노드로 서버를 띄울 필요가 없다??
      rules:[
          {
              test:/\.m?js$/,
              exclude:/(node_modules|dist)/,
              use:{
                  loader: 'babel-loader',
                  options:{
                      presets:['@babel/preset-env']
                  }
              }
          }
      ]
  }
};