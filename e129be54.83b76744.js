(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{104:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=s(n),p=r,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";var r=n(0),a=n(115);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},137:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(114),l=n(104),c=n(62),o=n.n(c);const u=37,s=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:b,groupId:d,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(i.a)(),[g,f]=Object(r.useState)(c),O=r.Children.toArray(e.children);if(null!=d){const e=m[d];null!=e&&e!==g&&b.some((t=>t.value===e))&&f(e)}const v=e=>{f(e),null!=d&&h(d,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},p)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(r.cloneElement)(O.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},138:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(105)),l=n(137),c=n(138),o={id:"dockerbuild",title:"Building Netkit-JH with Docker",sidebar_label:"Building with Docker"},u={unversionedId:"dev/guides/dockerbuild",id:"dev/guides/dockerbuild",isDocsHomePage:!1,title:"Building Netkit-JH with Docker",description:"The current Netkit-JH build scripts currently rely on being run on a Debian Bullseye host. An alternative to creating a full VM for Netkit development is using a docker container based on a Debian Bullseye image.",source:"@site/docs/dev/guides/dockerbuildguide.mdx",slug:"/dev/guides/dockerbuild",permalink:"/docs/dev/guides/dockerbuild",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/dev/guides/dockerbuildguide.mdx",version:"current",sidebar_label:"Building with Docker",sidebar:"someSidebar",previous:{title:"Bugs",permalink:"/docs/dev/currentbugs"},next:{title:"Building Netkit-JH with Debian Bullseye",permalink:"/docs/dev/guides/debianbuild"}},s=[{value:"Install Docker",id:"install-docker",children:[]},{value:"Clone the Netkit Build Repo",id:"clone-the-netkit-build-repo",children:[]},{value:"Building the Docker Image",id:"building-the-docker-image",children:[]},{value:"Running the Build Process in the Docker Image",id:"running-the-build-process-in-the-docker-image",children:[]}],b={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The current Netkit-JH build scripts currently rely on being run on a Debian Bullseye host. An alternative to creating a full VM for Netkit development is using a docker container based on a Debian Bullseye image."),Object(i.b)("h2",{id:"install-docker"},"Install Docker"),Object(i.b)("p",null,"Install docker using the instructions ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"here"),"."),Object(i.b)("h2",{id:"clone-the-netkit-build-repo"},"Clone the Netkit Build Repo"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/netkit-jh/netkit-jh-build.git\n$ cd netkit-jh-build\n")),Object(i.b)("p",null,"The following commands assume that your working directory\nis the root of this repo."),Object(i.b)("h2",{id:"building-the-docker-image"},"Building the Docker Image"),Object(i.b)("p",null,"First we need to build a docker image which will be used for building Netkit-JH."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker build -t netkit-builder-deb .\n")),Object(i.b)("p",null,"This creates an image under the name 'netkit-builder-deb'."),Object(i.b)("h2",{id:"running-the-build-process-in-the-docker-image"},"Running the Build Process in the Docker Image"),Object(i.b)("p",null,"To compile all components of Netkit-JH (the kernel, the filesystem and the core executables) run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ docker run --privileged -v $(pwd):/netkit-build -it netkit-builder-deb\n")),Object(i.b)("p",null,"If you would like to pass your own arguments to ",Object(i.b)("inlineCode",{parentName:"p"},"make"),", you can add ",Object(i.b)("inlineCode",{parentName:"p"},'-e MAKE_ARGS=""')," to the docker command, with the necessary ",Object(i.b)("inlineCode",{parentName:"p"},"make")," arguments. Some examples are shown below:"),Object(i.b)(l.a,{defaultValue:"kern",values:[{label:"Kernel",value:"kern"},{label:"Filesystem",value:"fs"},{label:"Core",value:"core"},{label:"Clean",value:"clean"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"kern",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="build-kernel" -it netkit-builder-deb\n\n'))),Object(i.b)(c.a,{value:"fs",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="build-fs" -it netkit-builder-deb\n\n'))),Object(i.b)(c.a,{value:"core",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="build-core" -it netkit-builder-deb\n\n'))),Object(i.b)(c.a,{value:"clean",mdxType:"TabItem"},Object(i.b)("p",null,"To clean up the files used in the build process run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'$ docker run --privileged -v $(pwd):/netkit-build -e MAKE_ARGS="mrproper" -it netkit-builder-deb\n\n')))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The kernel must be built before the filesystem! This is because the kernel modules are copied over to the filesystem as part of the fs build process. If you don't give any MAKE_ARGS this won't be an issue, but if you decide to give ",Object(i.b)("inlineCode",{parentName:"p"},'MAKE_ARGS="build-fs"')," before the kernel has been built, it will not build successfully."))))}d.isMDXComponent=!0}}]);