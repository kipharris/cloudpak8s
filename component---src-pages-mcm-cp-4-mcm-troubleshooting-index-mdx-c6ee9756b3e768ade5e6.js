(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),i=a("NmYn"),c=a.n(i),o=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},d=a("pEPl"),j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,i=r.subDirectory,c=l+"/edit/"+r.branch+i+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},h=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),l=r===n,i=new RegExp(n+"(?!-)"),o=a.replace(i,r);return Object(m.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(m.b)(v.Link,{className:f.link,to:""+o},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},n}(l.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,d=s.tabs,j=s.title,v=s.theme,f=s.description,w=s.keywords,C=n.data.site.pathPrefix,x=C?r.pathname.replace(C,""):r.pathname,P=d?x.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"";return Object(m.b)(b.a,{tabs:d,homepage:!1,theme:v,pageTitle:j,pageDescription:f,pageKeywords:w,titleType:u},Object(m.b)(O,{title:l?Object(m.b)(l,null):j,label:"label",tabs:d}),d&&Object(m.b)(N,{slug:x,tabs:d,currentTab:P}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:p})),Object(m.b)(h.a,{pageContext:t,location:r,slug:x,tabs:d,currentTab:P}),Object(m.b)(o.a,null))}},"86GP":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},o=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(o,l({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"CAM Installation"),Object(n.b)("h3",null,"509: certificate signed by unknown authority"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If doing an offline install, make sure to use OCP host install box"),Object(n.b)("li",{parentName:"ul"},"Confirm your ",Object(n.b)("strong",{parentName:"li"},"Image Repository URL")," is set correctly under ",Object(n.b)("strong",{parentName:"li"},"Install Configurations"))),Object(n.b)("h3",null,"ErrImagePull fail build"),Object(n.b)("p",null,"Check to make sure docker registry secret was created and accessible."),Object(n.b)("h3",null,"Uninstall CAM"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to MCM UI"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"helm init")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("inlineCode",{parentName:"li"},"helm delete cam --purge --debug")),Object(n.b)("li",{parentName:"ol"},"Delete the provisioned pvcs with ",Object(n.b)("inlineCode",{parentName:"li"},"oc delete pvc <cam_pvc_name>"))),Object(n.b)("img",{src:"/assets/img/cp4mcm/cam_troubleshoot.png",alt:"CAM PVC Policy"}),Object(n.b)("p",null,"Alternatively,\nRun ",Object(n.b)("inlineCode",{parentName:"p"},"oc get all")," to get the CAM job name, then run ",Object(n.b)("inlineCode",{parentName:"p"},"oc delete JOB_NAME")))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-mcm-cp-4-mcm-troubleshooting-index-mdx-c6ee9756b3e768ade5e6.js.map