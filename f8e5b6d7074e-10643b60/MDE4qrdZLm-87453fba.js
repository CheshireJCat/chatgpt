(function(exports) {
var JSSDK_PAGE=function(){function JSSDK_PAGE(t){this.options=t,this.loader=window.amisLoader,this.schema=t.body}return JSSDK_PAGE.prototype.load=function(t){var o=this,n=this.options,i=n.appUrl,s=n.appHashId,a=this.loader.getApp(s);if(a)return this.app=a,void(null==t||t(this));this.loader.loadScript(i,(function(){var n=o.loader.getApp(s);o.app=n,n.load((function(){return null==t?void 0:t(o)}))}))},JSSDK_PAGE.prototype.updateProps=function(t){var o;null===(o=this.instance)||void 0===o||o.updateProps(t)},JSSDK_PAGE.prototype.mount=function(t,o,n,i,s){var a;void 0===o&&(o=this.options.body),void 0===n&&(n={}),void 0===i&&(i={});var p=s||this.options.historyMode;null===(a=this.instance)||void 0===a||a.unmount(),this.instance=this.app.render(t,o,n,i,p)},JSSDK_PAGE.prototype.unmount=function(){var t;null===(t=this.instance)||void 0===t||t.unmount(),this.instance=null},JSSDK_PAGE}();amisLoader.setPage("MDE4qrdZLm-87453fba",new JSSDK_PAGE({"appUrl":"/f8e5b6d7074e-10643b60/app-a72988df.js","appKey":"f8e5b6d7074e","appHashId":"app-a72988df","pageHashId":"MDE4qrdZLm-87453fba","key":"MDE4qrdZLm","body":{"type":"page","title":"GPT3 API 测试 DEMO","regions":["body"],"body":[{"type":"form","id":"form","title":"参数设定","body":[{"type":"flex","id":"u:b64c74dad830","items":[{"type":"tpl","id":"u:3f64f22ab237","tpl":"GPT3 API测试DEMO","wrapperComponent":"","style":{"fontFamily":"","fontSize":14},"className":"m:hidden"},{"type":"button","label":"帮助文档","onEvent":{"click":{"actions":[{"args":{"url":"https://platform.openai.com/docs/api-reference/chat"},"actionType":"url"}]}},"id":"u:c2c5071fbe2e","level":"link","size":"default","editorState":"default","icon":{"name":"提示","id":"svg-xsmC1gavvWi2nfXE7Hhzgr","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM7.997 4v1.2M7.997 6.5V12\"/></g></svg>'"},"className":"m:hidden"},{"type":"input-text","label":"API key","name":"key","id":"u:f37a30a6f856","editorState":"default","keyboard":true,"step":0.01,"value":"${ls:pageMakerGPT3APIKEY|default:''}","min":0,"max":1,"precision":2,"description":"","required":true,"onEvent":{"change":{"weight":0,"actions":[{"args":{},"script":"event.data.value && localStorage.setItem('pageMakerGPT3APIKEY', event.data.value)","actionType":"custom"}]}},"mode":"inline","labelRemark":{"icon":"fa fa-question-circle","trigger":["hover"],"className":"Remark--warning m:hidden","placement":"bottom","content":"API key，<a href=https: //platform.openai.com/account/api-keys target=_blank>在这里找</a>"},"className":"ml-auto mb-0 m:ml-0 m:flex-1 key","size":"sm"},{"type":"button","label":"配置","onEvent":{"click":{"actions":[{"actionType":"drawer","drawer":{"type":"drawer","title":"配置API参数","body":[{"type":"form","body":[{"label":"模型","type":"select","name":"model","id":"u:d426876ad8aa","value":"gpt-3.5-turbo","description":"模型，区别请<a href=\"https://platform.openai.com/docs/models\" target=\"_blank\">参考</a>","required":true,"multiple":false,"options":[{"label":"gpt-3.5-turbo","value":"gpt-3.5-turbo"},{"label":"gpt-3.5-turbo-0301","value":"gpt-3.5-turbo-0301"}],"creatable":true,"editable":true,"removable":true},{"label":"回答文本最大token数","type":"input-number","name":"max_tokens","description":"","id":"u:0ed3608a7c12","value":1000,"required":true,"editorState":"default","labelRemark":{"icon":"fa fa-question-circle","trigger":["hover"],"className":"Remark--warning","placement":"top","content":"OpenAI的模型是基于token来处理文本的。token是文本中的最小单位，可以是一个字母，一个汉字，一个词，或者一个标点符号等。不同的模型可能使用不同的tokenization方法来切分文本。"},"keyboard":true,"step":1,"min":1,"max":2048},{"label":"随机性","type":"input-number","name":"temperature","id":"u:50a30ef7e85c","editorState":"default","value":0.5,"description":"","labelRemark":{"icon":"fa fa-question-circle","trigger":["hover"],"className":"Remark--warning","placement":"top","content":"文本的多样性的度量，温度越高，文本越随机，温度越低，文本越保守"},"keyboard":true,"step":0.01,"min":0,"max":1,"precision":2},{"label":"概率阈值","type":"input-number","name":"top_p","id":"u:1e0c0ecfd510","editorState":"default","step":0.01,"value":1,"min":0,"max":1,"precision":2,"labelRemark":{"icon":"fa fa-question-circle","trigger":["hover"],"className":"Remark--warning","placement":"top","content":"文本的概率的阈值，GPT-3只会选择概率高于top_p的单词，这样可以避免生成一些不合理的单词"}},{"label":"重复惩罚力度","type":"input-number","name":"frequency_penalty","id":"u:cf2c6b0e8f33","editorState":"default","value":0,"labelRemark":{"icon":"fa fa-question-circle","trigger":["hover"],"className":"Remark--warning","placement":"top","content":"重复性的惩罚，频率惩罚越高，GPT-3越不倾向于生成重复的单词或短语"},"step":0.01,"min":0,"max":1,"precision":2},{"label":"新颖性奖励","type":"input-text","name":"presence_penalty","id":"u:b8798ac5794d","editorState":"default","value":0,"labelRemark":{"icon":"fa fa-question-circle","trigger":["hover"],"className":"Remark--warning","placement":"top","content":"文本的新颖性的奖励，存在惩罚越高，GPT-3越倾向于生成之前没有出现过的单词或短语"},"step":0.01,"min":0,"max":1,"precision":2}],"id":"u:c3e25fcb020a","target":"form","reload":"form"}],"id":"u:452fd661c346","resizable":false,"dataMapSwitch":false}}]}},"id":"u:27c61b4e8946","level":"default","size":"default","editorState":"default","icon":{"name":"设置","id":"svg-b72WZNyHSbg92A3jmdLkCe","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m1.5 8 3.25-5.63h6.5L14.5 8l-3.25 5.63h-6.5z\"/><circle cx=\"8\" cy=\"8\" r=\"1.5\"/></g></svg>'"}}],"direction":"row","justify":"flex-start","alignItems":"center","isFixedHeight":false,"isFixedWidth":false,"className":"px-4 py-2 shadow"},{"type":"container","body":[{"type":"each","items":[{"type":"container","body":[{"type":"markdown","className":{"bg-green-200":"${!isSelf}","bg-primary":"${isSelf}","text-white":"${isSelf}","text-black":"${!isSelf}","r":true,"p-2":true,"ml-2":true,"word-break":true,"shadow":true,"pull-left":"${!isSelf}","pull-right":"${isSelf}","max-w-full":true,"overflow-auto":true},"id":"u:61941ddcb393","name":"content","visibleOn":"${!system}"},{"visibleOn":"${system}","type":"flex","style":{"position":"static","display":"block","flexWrap":"nowrap"},"wrapperBody":false,"id":"u:f58ce495b565","isFixedHeight":false,"isFixedWidth":false,"className":"clear pl-2","items":[{"type":"button","label":"","onEvent":{"click":{"actions":[]}},"visibleOn":"${system === 'success'}","id":"u:e3dd232f553b","level":"link","size":"default","editorState":"default","icon":{"name":"选择","id":"svg-bCJzBzNSQqaycx1RE772z2","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m14.51 3.94-7.778 7.778L2.49 7.475\" fill=\"none\" fill-rule=\"evenodd\"/></svg>'"},"css":{"className":{"font:default":{"color":"var(--colors-success-5)"},"padding-and-margin:default":{"marginTop":"0","marginRight":"8px","marginBottom":"0","marginLeft":"0","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0"}}},"className":"className-e3dd232f553b mr-2"},{"type":"button","label":"","onEvent":{"click":{"actions":[]}},"id":"u:5d915858ac1f","level":"link","size":"default","editorState":"default","icon":{"name":"警示","id":"svg-argzpXfPCedNQWwC6Unpaj","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m8 2 7 12H1zM7.997 5v5.5M7.997 11.8V13\"/></g></svg>'"},"visibleOn":"${system === 'error'}","css":{"className":{"font:default":{"color":"var(--colors-error-5)"},"padding-and-margin:default":{"marginTop":"0","marginRight":"8px","marginBottom":"0","marginLeft":"0","paddingTop":"0","paddingRight":"0","paddingBottom":"0","paddingLeft":"0"}}},"className":"className-5d915858ac1f"},{"type":"tpl","tpl":"${content}","inline":true,"wrapperComponent":"","id":"u:4d98d69127f3"}],"direction":"row","justify":"flex-start","alignItems":"center"}],"id":"u:aca6a35bc57e","style":{"position":"static"},"direction":"row","className":"mb-4 clearfix"}],"id":"u:1cd9da9f64cb","source":"${chatData}"}],"style":{"overflowY":"auto","height":"calc(100vh - 100px)","padding":"16px"},"id":"u:ad4985527fb3"},{"type":"flex","className":"p-1","items":[{"type":"button","id":"u:4d62c8f829e1","label":"清空","level":"enhance","size":"default","editorState":"default","icon":{"name":"回收站","id":"svg-jqMkVNNYin3uTpvaEakjzd","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 2h4M2 4h12M4 4h8v10H4zM6.5 7.5v4M9.5 7.5v4\"/></g></svg>'"},"onEvent":{"click":{"weight":0,"actions":[{"componentId":"form","args":{"value":{"chatData":"${[]}"}},"actionType":"setValue"}]}}},{"type":"input-text","isFixedHeight":false,"id":"u:a0d7c51fc089","label":"","name":"question","editorState":"default","className":"flex-grow key","placeholder":"输入问题，回车键【Enter】发送","css":{"inputControlClassName":{"border:default":{"top-border-width":"[object Object]","left-border-width":"[object Object]","right-border-width":"[object Object]","bottom-border-width":"[object Object]","top-border-style":"var(--borders-style-2)","left-border-style":"var(--borders-style-2)","right-border-style":"var(--borders-style-2)","bottom-border-style":"var(--borders-style-2)","top-border-color":"#4a90e2","left-border-color":"#4a90e2","right-border-color":"#4a90e2","bottom-border-color":"#4a90e2"},"background:default":"#ffffff"}},"inputControlClassName":"inputControlClassName-a0d7c51fc089","value":"","mode":"normal","addOn":{"label":"发送","type":"button","id":"u:c2c5071fbe2e","onEvent":{"click":{"actions":[{"componentId":"form","args":{},"outputVar":"responseResult","actionType":"submit"}]}},"level":"primary","editorState":"default","icon":{"name":"发送","id":"svg-w9JvVB4PJSvT5iXLRRBdY6","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"currentColor\" stroke-linecap=\"round\" d=\"M13.899 7.983 2.5 13l1.466-3.383L7.31 7.983 3.966 6.33 2.5 3z\" fill=\"none\" fill-rule=\"evenodd\" stroke-linejoin=\"round\"/></svg>'"}},"required":true,"validateOnChange":false,"description":""}],"style":{"position":"sticky","flexWrap":"nowrap","inset":"auto auto 0px auto","zIndex":0,"backgroundColor":"rgba(255, 255, 255, 1)"},"direction":"row","justify":"space-between","alignItems":"stretch","id":"u:6251c6e31ccf","isFixedHeight":false,"isFixedWidth":false,"stickyStatus":true,"stickyPosition":"bottom"}],"mode":"horizontal","actions":[],"wrapWithPanel":false,"onEvent":{"submitSucc":{"weight":0,"actions":[{"actionType":"custom","script":"console.log(event.data)\nconst chatData = event.data.chatData || [];\nconst value = event.data?.result?.data?.answer || '';\nif (!value) return;\ndoAction(\n  {\n    \"componentId\": \"form\",\n    \"args\": {\n      \"fromPage\": true,\n      \"value\": {\n        \"chatData\": [\n          ...chatData.slice(0, -1),\n          {\n            content: value\n          }\n        ]\n      }\n    },\n    \"actionType\": \"setValue\"\n  });\n"},{"componentId":"u:a0d7c51fc089","args":{"value":""},"actionType":"setValue"}]},"validateSucc":{"weight":0,"actions":[{"actionType":"custom","script":"const chatData = event.data.chatData || [];\nconst value = event.data.question || '';\nif (!value) return;\ndoAction(\n  {\n    \"componentId\": \"form\",\n    \"args\": {\n      \"fromPage\": true,\n      \"value\": {\n        \"chatData\": [\n          ...chatData,\n          {\n            content: value,\n            isSelf: 1\n          },\n          {\n            content: '正在为你生成答案...',\n            system: 'success'\n          }\n        ]\n      }\n    },\n    \"actionType\": \"setValue\"\n  });\n"}]},"submitFail":{"weight":0,"actions":[{"actionType":"custom","script":"const chatData = event.data.chatData || [];\nconst value = event.data.question || '';\nif (!value) return;\ndoAction(\n  {\n    \"componentId\": \"form\",\n    \"args\": {\n      \"fromPage\": true,\n      \"value\": {\n        \"chatData\": [\n          ...chatData.slice(0, -1),\n          {\n            content: '请求失败',\n            system: 'error'\n          }\n        ]\n      }\n    },\n    \"actionType\": \"setValue\"\n  });\n"}]}},"api":{"url":"https://api.openai.com/v1/chat/completions","method":"post","data":{"&":"$$"},"dataType":"json","headers":{"Content-Type":"application/json","Authorization":"Bearer sk-${key}"},"requestAdaptor":"const data = {\n  \"messages\": [{\n    \"role\": \"user\",\n    \"content\": api.data.question\n  }],\n  \"model\": api.data.model,\n  \"n\": 1, // How many chat completion choices to generate for each input message.\n  \"temperature\": parseFloat(api.data.temperature),\n  \"max_tokens\": parseInt(api.data.max_tokens),\n  \"top_p\": parseFloat(api.data.top_p),\n  \"frequency_penalty\": parseFloat(api.data.frequency_penalty),\n  \"presence_penalty\": parseFloat(api.data.presence_penalty),\n  \"stream\": false\n}\napi.data = data;\napi.config = {\n  ...api.config,\n  withCredentials: false\n}\nconsole.log('api', api);\nreturn api;","adaptor":"console.log('Q:', api.data.messages,'A:',payload);\nlet answer = payload?.choices?.[0]?.message?.content || '';\nreturn {\n  status: 0,\n  msg: '',\n  data: {\n    answer\n  }\n}","messages":{"failed":"请求失败"},"sendOn":""},"data":{"chatData":[{"content":"聊点什么？（请先填写 API)","isSelf":false}],"model":"gpt-3.5-turbo","temperature":0.5,"max_tokens":1000,"top_p":1,"frequency_penalty":0,"presence_penalty":0},"loadingConfig":{"show":false},"name":"form"}],"id":"u:66f7186bed13","style":{"boxShadow":"var(--shadows-shadow-none)","height":"calc(100vh)","overflow":"hidden"},"pullRefresh":{"disabled":true},"data":{"qaData":"${[]}"},"asideResizor":false,"toolbar":[{"type":"button","label":"帮助文档","onEvent":{"click":{"actions":[{"args":{"url":"https://platform.openai.com/docs/api-reference/chat"},"actionType":"url"}]}},"id":"u:c2c5071fbe2e","level":"link","size":"default","editorState":"default","icon":{"name":"提示","id":"svg-xsmC1gavvWi2nfXE7Hhzgr","svg":"'<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM7.997 4v1.2M7.997 6.5V12\"/></g></svg>'"}}],"cssVars":{"--Card-borderWidth":"0px"},"css":{".markdown-body":{"padding":0,"font-size":"14px","min-width":"20px"},".text-white .markdown-body":{"color":"#fff"},".text-white .markdown-body a":{"background":"#fff"},".cxd-Form .cxd-Form-item.key":{"padding":0},".markdown-body.markdown-body pre":{"max-width":"80vw","overflow":"auto"}},".markdown-body pre":".markdown-body pre-66f7186bed13",".markdown-body":".markdown-body-66f7186bed13","..markdown-body":"..markdown-body-66f7186bed13",".text.markdown-body":".text.markdown-body-66f7186bed13",".text-.markdown-body":".text-.markdown-body-66f7186bed13",".text-wh.markdown-body":".text-wh.markdown-body-66f7186bed13",".text-white.markdown-body":".text-white.markdown-body-66f7186bed13",".text-white .markdown-body":".text-white .markdown-body-66f7186bed13",".text-white .markdown-body,":".text-white .markdown-body,-66f7186bed13",".text-white .markdown-body a":".text-white .markdown-body a-66f7186bed13","onEvent":{"init":{"weight":0,"actions":[]}},"className":"","bodyClassName":"p-0",".cxd-Form .cxd-Form-item.key":".cxd-Form .cxd-Form-item.key-66f7186bed13",".markdown-body ":".markdown-body -66f7186bed13",".markdown-body pre.markdown-body pre":".markdown-body pre.markdown-body pre-66f7186bed13",".markdown-body.markdown-body pre":".markdown-body.markdown-body pre-66f7186bed13"},"historyMode":"hash","requestAdaptor":"console.log('global api', api);\napi.withCredentials = false;\nreturn api;","responseAdaptor":"","env":{"AISUDA_HOST":"https://pagemaker.baidu-int.com"}}));
})({});
