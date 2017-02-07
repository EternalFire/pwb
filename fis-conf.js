
fis.hook('commonjs', {
  extList: ['.js', '.jsx']
});

fis.match('{/module/**.js,/view/*.jsx}', {
  parser: fis.plugin('babel-6.x', {
    sourceMaps: true
  }),
  rExt: '.js',  
  isMod: true
});

fis.media('publish')
  // 选择要发布的文件
  .match('{/*.css,/index.html,/app.js,/third/*,/static/*}', {
    release: '/pwb/$0'
  })
  .match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
      resourceType: 'commonJs',
      useInlineMap: true // 资源映射表内嵌
    })
  })
  .match('/module/(**)/*.js', {
    packTo: '/static/$1.js'
  })
  .match('/view/*.jsx', {
    packTo: '/static/view.js'
  })
  .match('/test/**', {
    release: false
  })
  .match('*.{js,jsx}', {
    optimizer: fis.plugin('uglify-js')
  })
