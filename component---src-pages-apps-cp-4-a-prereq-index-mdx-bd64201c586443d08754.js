(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),n=a("q1tI"),i=a.n(n),o=a("NmYn"),s=a.n(o),l=a("OKom"),c=a("k4MR"),p=a("TSYQ"),b=a.n(p),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(d.b)("div",{className:b()(u.pageHeader,(t={},t[u.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},f=a("pEPl"),h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=f.data.site.siteMetadata.repository,n=a||r,i=n.baseUrl,o=n.subDirectory,s=i+"/edit/"+n.branch+o+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},j=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),g=a("I8xM");var w=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=s()(e,{lower:!0}),i=n===r,o=new RegExp(r+"(?!-)"),l=a.replace(o,n);return Object(d.b)("li",{key:e,className:b()((t={},t[g.selectedItem]=i,t),g.listItem)},Object(d.b)(v.Link,{className:g.link,to:""+l},e))}));return Object(d.b)("div",{className:g.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:g.list},n))))))},r}(i.a.Component),y=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,p=void 0===o?{}:o,b=t.relativePagePath,u=t.titleType,f=p.tabs,h=p.title,v=p.theme,g=p.description,x=p.keywords,N=r.data.site.pathPrefix,k=N?n.pathname.replace(N,""):n.pathname,q=f?k.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:f,homepage:!1,theme:v,pageTitle:h,pageDescription:g,pageKeywords:x,titleType:u},Object(d.b)(m,{title:i?Object(d.b)(i,null):h,label:"label",tabs:f}),f&&Object(d.b)(w,{slug:k,tabs:f,currentTab:q}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:b})),Object(d.b)(j.a,{pageContext:t,location:n,slug:k,tabs:f,currentTab:q}),Object(d.b)(l.a,null))}},eIlY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Refer to Knowledge Center ",Object(r.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.1.x/install-prerequisites.html"}),"prerequisites")," for details on what is required before starting an install."),Object(r.b)("p",null,"Refer to the ",Object(r.b)("a",i({parentName:"p"},{href:"../../ocp/prereqs-openshift4/"}),"OpenShift Container Platform section")," for prerequisites on installing a cluster."),Object(r.b)("p",null,"Refer to ",Object(r.b)("a",i({parentName:"p"},{href:"../cp4a_install_dev_tools_mac/"}),"tools installation")," for prerequisites for developer client install."),Object(r.b)("p",null,"Sizing information is also available in the ",Object(r.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSCSJL_4.1.x/install-prerequisites.html"}),"prerequisites"),"  In addition, beyond the sizing required to support the Cloud Pak, the most important consideration is to appropriately plan for the resources needed to support the application workloads that will be deployed to the cluster.  Sizing for applications varies depending on number of applications, size of application and runtimes."))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-prereq-index-mdx-bd64201c586443d08754.js.map