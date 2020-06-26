(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"013z":function(t,e,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),o=a("NmYn"),b=a.n(o),i=a("OKom"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a("qKvR"),u=function(t){var e,a=t.title,n=t.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(e={},e[m.withTabs]=r.length,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},O=a("pEPl"),f=a("BAC9"),j=function(t){var e=t.relativePagePath,a=t.repository,n=O.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,o=r.subDirectory,b=l+"/edit/"+r.branch+o+"/src/pages"+e;return l?Object(d.b)("div",{className:"bx--row "+f.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:f.link,href:b},"Edit this page on GitHub"))):null},g=a("FCXl"),h=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var y=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=e.map((function(t){var e,r=b()(t,{lower:!0}),l=r===n,o=new RegExp(n+"(?!-)"),i=a.replace(o,r);return Object(d.b)("li",{key:t,className:p()((e={},e[N.selectedItem]=l,e),N.listItem)},Object(d.b)(h.Link,{className:N.link,to:""+i},t))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},r))))))},n}(l.a.Component),C=a("MjG9");e.a=function(t){var e=t.pageContext,a=t.children,r=t.location,l=t.Title,o=e.frontmatter,s=void 0===o?{}:o,p=e.relativePagePath,m=e.titleType,O=s.tabs,f=s.title,h=s.theme,N=s.description,P=s.keywords,v=n.data.site.pathPrefix,w=v?r.pathname.replace(v,""):r.pathname,k=O?w.split("/").filter(Boolean).slice(-1)[0]||b()(O[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:O,homepage:!1,theme:h,pageTitle:f,pageDescription:N,pageKeywords:P,titleType:m},Object(d.b)(u,{title:l?Object(d.b)(l,null):f,label:"label",tabs:O}),O&&Object(d.b)(y,{slug:w,tabs:O,currentTab:k}),Object(d.b)(C.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:e,location:r,slug:w,tabs:O,currentTab:k}),Object(d.b)(i.a,null))}},GknM:function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}var o={},b={_frontmatter:o},i=r.a;function c(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,["components"]);return Object(n.b)(i,l({},b,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This section covers hardware and software requirements for an IBM\nCloud Pak for Security 1.2 installation."),Object(n.b)("p",null,"IBM Cloud Pak for Security 1.2 requires Red Hat OpenShift Container\nPlatform (OCP) 4.2 and IBM® Cloud Platform (ICP) Common Services to be\ninstalled as prerequisites. The installation of OpenShift Container\nPlatform is covered in ",Object(n.b)("a",l({parentName:"p"},{href:"/ocp/introduction"}),"this section")," of the Playbook.\nThe installation of ICP Common Services is included in the Cloud Pak for\nSecurity ",Object(n.b)("a",l({parentName:"p"},{href:"/security/install"}),"installation instructions"),"."),Object(n.b)("h3",null,"Minimum Hardware Requirements"),Object(n.b)("p",null,"You can install all of the IBM® Cloud Pak for Security components on amd64 hardware."),Object(n.b)("p",null,"Figure 1. 6+-node cluster ",Object(n.b)("img",l({parentName:"p"},{src:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/security-pak/images/sysreq_rec.png",alt:"System requirements"}))),Object(n.b)("p",null,"Table 1. 6+-node cluster"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Node type"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Number of nodes"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"CPU"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"RAM"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"System disk"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"Master"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"3"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"4 cores"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"16 GB"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"120 GB")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"Worker"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"3"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"8 cores"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"32 GB"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"120 GB")))),Object(n.b)("h3",null,"IBM Passport Advantage (PPA) Part Numbers"),Object(n.b)("p",null,"IBM® Cloud Pak for Security Version 1.2, CJ764EN eAssembly consists of the following files."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Part number"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"VRM"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Languages"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Platform"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"File name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"CC61XEN"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"IBM Cloud Pak for Security Quick Start Guide"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"1.2.0"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"English"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"NA"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"CC61XEN.pdf")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"XXXXXXX"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"IBM Cloud Pak for Security image secret"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"1.2.0"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"NA"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"Multiplatform"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"ibmcp4s-image-secret.yaml")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"CC61YEN"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"IBM Cloud Pak for Security for Red Hat OpenShift"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"1.2.0"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"English"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"Multiplatform"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"CPS_1.2_OS_EN.tgz")))),Object(n.b)("h3",null,"Command-line Tools"),Object(n.b)("p",null,"The following table details the command-line interface (CLI) tools and\nversions that are required for IBM Cloud Pak for Security."),Object(n.b)("p",null,"You can copy and paste commands to download each of the CLI tools for\nany of the supported operating systems from the IBM Cloud Private\nmanagement console. For more information, see the Knowledge Center\n",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSBS6K_3.2.1/manage_cluster/cli_guide.html?view=kc"}),"IBM Cloud Private CLI tools guide"),"."),Object(n.b)("h3",null,Object(n.b)("strong",{parentName:"h3"},"Note:")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"IBM Cloud Private")," is the name of a former IBM product that has been withdrawn\nfrom marketing. It was referred to by the acronym ",Object(n.b)("strong",{parentName:"p"},"ICP"),". While the product has\nbeen withdrawn, some of its product components are still being used for the\nCommon Services layer used by this and other IBM Cloud Paks. The ICP acronym\nis being re-purposed to mean ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Platform"),". However in some of the\ndocumentation links and in some of the product components, you will sometimes\nsee the name IBM Cloud Private still being used. For the purposes of the\ninstructions in this Playbook, the terms ",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Private")," and\n",Object(n.b)("strong",{parentName:"p"},"IBM Cloud Platform Common Services")," can be understood as synonymous."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Tool"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Download"),Object(n.b)("th",l({parentName:"tr"},{align:"left"}),"Version"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"oc")),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"Red Hat OpenShift Container Platform console path: /console/command-line"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"4.1.16 or later")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"kubectl")),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"Red Hat OpenShift Container Platform console path: /console/tools/cli For more information about the latest version, see ",Object(n.b)("a",l({parentName:"td"},{href:"https://www.ibm.com/links?url=https%3A%2F%2Fkubernetes.io%2Fdocs%2Ftasks%2Ftools%2Finstall-kubectl%2F"}),"kubernetes.io"),"."),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"1.13.5 or later")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"cloudctl")),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"IBM Cloud Private console path: /console/tools/cli"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"3.2.0-634")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",l({parentName:"tr"},{align:"left"}),Object(n.b)("inlineCode",{parentName:"td"},"helm")),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"IBM Cloud Private console path: /console/tools/cli"),Object(n.b)("td",l({parentName:"tr"},{align:"left"}),"2.12.3")))),Object(n.b)("p",null,"Complete information about planning for Cloud Pak for Security can be found at this\n",Object(n.b)("a",l({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/security-pak/planning.html"}),"IBM Knowledge Center"),"\npage."))}c.isMDXComponent=!0},pEPl:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(t){t.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-security-prereq-index-mdx-5d691e42612d46286570.js.map