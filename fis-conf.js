fis.hook('commonjs', {
  // 配置项
});

fis.match('::package', {
  // npm install [-g] fis3-postpackager-loader
  // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
  postpackager: fis.plugin('loader', {
    resourceType: 'commonJs',
    useInlineMap: true // 资源映射表内嵌
  })
});

fis.match('/module/**/*.js', {
  isMod: true
});

fis.match('/module/(**)/*.js', {
  packTo: '/static/$1.js'
});

// 编译所有后缀为 jsx 的文件为 js
fis.match('{*.jsx,*:jsx}', {
    parser: fis.plugin('babel-6.x', {
        sourceMaps: true
    }),
    rExt: '.js'
});


fis.match('/test/**', {
  release: false
});

