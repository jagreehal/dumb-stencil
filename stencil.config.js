exports.config = {
  autoprefixer: ['> 1%',
    'last 2 versions',
    'IE 11'
  ],
  namespace: 'dumb-stencil',
  outputTargets: [{
    type: 'www'
  }, {
    type: 'dist'
  }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
