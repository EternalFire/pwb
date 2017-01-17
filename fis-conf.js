
fis.hook('commonjs', {
  extList: ['.js', '.jsx']
});

fis.match('/module/(**)/*.js', {
  packTo: '/static/$1.js'
});

fis.match('{/module/**.js,/view/*.jsx}', {
  parser: fis.plugin('babel-6.x', {
    sourceMaps: true
  }),
  rExt: '.js',  
  isMod: true
});

fis.match('/test/**', {
  release: false
});

// fis.match('*.{js,jsx}', {
//   optimizer: fis.plugin('uglify-js')
// });

fis.match('::package', {
  // npm install [-g] fis3-postpackager-loader
  // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
  postpackager: fis.plugin('loader', {
    resourceType: 'commonJs',
    useInlineMap: true // 资源映射表内嵌
  })
});
