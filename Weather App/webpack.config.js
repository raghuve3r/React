var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js', 'script-loader!foundation-sites/dist/js/foundation.min.js', './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new webpack.ProvidePlugin({'$': 'jquery', 'jQuery': 'jquery'})],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname, 'node_modules'
    ],
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      About: 'app/components/About.jsx',
      Example: 'app/components/Example.jsx',
      openweathermap: 'app/api/openweathermap.jsx',
      AlertMessage: 'app/components/AlertMessage.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
