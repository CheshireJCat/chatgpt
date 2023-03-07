## 使用指南

页面通过`index.html`中的以下代码进行渲染，您可以将其拷贝到任意 js 文件下，然后执行这段代码，就可以将页面挂载到指定 dom 节点上。

```html
<script>
  amisLoader.load('/xxx/xxx.js', page => {
    /**
     * 挂载页面到指定节点
     *
     * @param selector ID 选择器
     * @param schema 页面 schema，非必须
     * @param props 数据，非必须
     * @param env 环境，非必须
     */
    page.mount('#root', page.schema, data);
    // page.unmount("#root"); 卸载页面
  });
</script>
```

## 注意事项

- 1. 部署目录用于指定静态资源存放的目录。使用时，请将除 `index.html` 以外的所有文件拷贝到您配置的『部署目录』路径下。
- 2. 不要调整目录结构，只能调整目录前缀，并且需要在导出页面前设置目录前缀。
- 3. 如果目录前缀发生变更，需要在导出页面设置目录前缀并重新下载。
