!function(){if(!window.amisLoader){var t={},e={},n="";try{throw new Error}catch(t){n=/(https?:\/\/[^\/]+)/.test(t.stack)&&RegExp.$1}window.amisLoader={loadScript:loadScript,loadScripts:function loadScripts(t,e){t.reduceRight((function(t,e){return function(){return loadScript(e,t)}}),(function(){return null==e?void 0:e()}))()},loadStyles:function loadStyles(t){for(var e=0,n=t;e<n.length;e++){var r=n[e],o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",r),document.head.appendChild(o)}},resolveUrl:resolveUrl,load:function(t,n){var r=function basename(t){var e=t.lastIndexOf("/"),n=t.lastIndexOf(".");return t.substring(e+1,n)}(t);e[r]?null==n||n(e[r]):loadScript(resolveUrl(t),n?function(){e[r].load(n)}:void 0)},setPage:function(t,n){e[t]=n},getPage:function(t){return e[t]},setApp:function(e,n){t[e]=n},getApp:function(e){return t[e]}}}function loadScript(t,e){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",t),n.onload=e||null,document.body.appendChild(n)}function resolveUrl(t){return/^(https?\:)?\/\//.test(t)?t:"".concat(n).concat(t)}}();