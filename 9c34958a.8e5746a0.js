(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,l(l({ref:t},u),{},{components:r})):i.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=(r(0),r(104));const a={slug:"netkitv1release",title:"Netkit Version 1.0 Released!",author:"TechSupportJosh",author_title:"TechSupportJosh",author_url:"https://github.com/TechSupportJosh",author_image_url:"https://avatars1.githubusercontent.com/u/5190840?s=400&v=4",tags:["release","v1","docker","terminal","bugfixes"]},o={permalink:"/blog/netkitv1release",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/blog/blog/2020-12-25-v1-release.md",source:"@site/blog/2020-12-25-v1-release.md",description:"Netkit V1 Release",date:"2020-12-25T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"v1",permalink:"/blog/tags/v-1"},{label:"docker",permalink:"/blog/tags/docker"},{label:"terminal",permalink:"/blog/tags/terminal"},{label:"bugfixes",permalink:"/blog/tags/bugfixes"}],title:"Netkit Version 1.0 Released!",readingTime:1.385,truncated:!1},l=[{value:"Compiling",id:"compiling",children:[]},{value:"New in this release",id:"new-in-this-release",children:[]},{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"Removed",id:"removed",children:[]},{value:"Coming in the future",id:"coming-in-the-future",children:[]}],s={toc:l};function u({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"netkit-v1-release"},"Netkit V1 Release"),Object(i.b)("h2",{id:"compiling"},"Compiling"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Improved build process for the filesystem (decreasing build times from 40 minutes to 10 minutes!) which will make updating and maintaining the filesystem easier."),Object(i.b)("li",{parentName:"ul"},"Improved build process for all modules"),Object(i.b)("li",{parentName:"ul"},"Moved core tools into the build repo"),Object(i.b)("li",{parentName:"ul"},"Updated UML tools to 64 bit (hoorah!)"),Object(i.b)("li",{parentName:"ul"},"Use the UK debian repos to make downloading packages that little bit faster"),Object(i.b)("li",{parentName:"ul"},"Added dockerfile to compile using Docker - thanks @b177y")),Object(i.b)("h2",{id:"new-in-this-release"},"New in this release"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"LFTP & at packages"),Object(i.b)("li",{parentName:"ul"},"Added support for Kitty & Alacritty terminal emulators"),Object(i.b)("li",{parentName:"ul"},"New install script which asks what terminal emulator you wish to use (and handles installation of it!)"),Object(i.b)("li",{parentName:"ul"},"Added message about 'lclean' when labs don't start properly")),Object(i.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Removed mmapper_init failed error message"),Object(i.b)("li",{parentName:"ul"},"Removed failed to load autofs4 module error message"),Object(i.b)("li",{parentName:"ul"},"Set timeout of startup script service to 5 minutes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vstart --version")," now lists the correct kernel/fs version")),Object(i.b)("h2",{id:"removed"},"Removed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Netkit welcome message has been removed (was broken before due to a bad systemd service config)")),Object(i.b)("h2",{id:"coming-in-the-future"},"Coming in the future"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Removing net-tools dependancy from core tools"),Object(i.b)("li",{parentName:"ul"},"Exploring the concept of different distros for filesystems"),Object(i.b)("li",{parentName:"ul"},"Making it more stable :-)")),Object(i.b)("p",null,"Massive thanks to @okman12 and @b177y for assisting me in improving this version :-)"),Object(i.b)("p",null,"Most importantly, we're now at v1.0.0 of our new Netkit :) Our improvements to the building process (removal of rootstrap, combining of the two repos) and our upgrade to Debian Bullseye + Linux Kernel 5.9 justify a big version jump in my opinion. So welcome to v1.0.0, the best update we've had so far :-)"))}u.isMDXComponent=!0}}]);