"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[410],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Transpilers"},p=void 0,l={unversionedId:"transpilers",id:"transpilers",title:"Transpilers",description:"ts-node supports third-party transpilers as plugins.  Transpilers such as swc can transform TypeScript into JavaScript",source:"@site/docs/transpilers.md",sourceDirName:".",slug:"/transpilers",permalink:"/ts-node/docs/transpilers",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/transpilers.md",tags:[],version:"current",frontMatter:{title:"Transpilers"},sidebar:"primarySidebar",previous:{title:"Third-party compilers",permalink:"/ts-node/docs/compilers"},next:{title:"Module type overrides",permalink:"/ts-node/docs/module-type-overrides"}},c={},d=[{value:"Third-party plugins",id:"third-party-plugins",level:2},{value:"Write your own plugin",id:"write-your-own-plugin",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ts-node supports third-party transpilers as plugins.  Transpilers such as swc can transform TypeScript into JavaScript\nmuch faster than the TypeScript compiler.  You will still benefit from ts-node's automatic ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," discovery,\nsourcemap support, and global ts-node CLI. Plugins automatically derive an appropriate configuration from your existing\n",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," which simplifies project boilerplate."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"What is the difference between a compiler and a transpiler?")),(0,o.kt)("p",{parentName:"blockquote"},"For our purposes, a compiler implements TypeScript's API and can perform typechecking.\nA third-party transpiler does not.  Both transform TypeScript into JavaScript.")),(0,o.kt)("h2",{id:"third-party-plugins"},"Third-party plugins"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"transpiler")," option allows using third-party transpiler plugins with ts-node.  ",(0,o.kt)("inlineCode",{parentName:"p"},"transpiler")," must be given the\nname of a module which can be ",(0,o.kt)("inlineCode",{parentName:"p"},"require()"),"d.  The built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"swc")," plugin is exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node/transpilers/swc"),"."),(0,o.kt)("p",null,'For example, to use a hypothetical "@cspotcode/fast-ts-compiler", first install it into your project: ',(0,o.kt)("inlineCode",{parentName:"p"},"npm install @cspotcode/fast-ts-compiler")),(0,o.kt)("p",null,"Then add the following to your tsconfig:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light with-title",style:{backgroundColor:"#ffffff",color:"#24292e"},title:"tsconfig.json"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"ts-node"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"transpileOnly"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"true"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},'"transpiler"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"@cspotcode/fast-ts-compiler"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord with-title",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"},title:"tsconfig.json"},(0,o.kt)("div",{parentName:"pre",className:"code-title"},"tsconfig.json"),(0,o.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"ts-node"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"transpileOnly"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"true"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"transpiler"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"@cspotcode/fast-ts-compiler"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,o.kt)("h2",{id:"write-your-own-plugin"},"Write your own plugin"),(0,o.kt)("p",null,"To write your own transpiler plugin, check our ",(0,o.kt)("a",{parentName:"p",href:"https://typestrong.org/ts-node/api/interfaces/TranspilerModule.html"},"API docs"),"."),(0,o.kt)("p",null,"Plugins are ",(0,o.kt)("inlineCode",{parentName:"p"},"require()"),"d by ts-node, so they can be a local script or a node module published to npm.  The module must\nexport a ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," function described by our\n",(0,o.kt)("a",{parentName:"p",href:"https://typestrong.org/ts-node/api/interfaces/TranspilerModule.html"},(0,o.kt)("inlineCode",{parentName:"a"},"TranspilerModule"))," interface.  ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," is\ninvoked by ts-node at startup to create one or more transpiler instances.  The instances are used to transform\nTypeScript into JavaScript."),(0,o.kt)("p",null,"For a working example, check out out our bundled swc plugin: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node/blob/main/src/transpilers/swc.ts"},"https://github.com/TypeStrong/ts-node/blob/main/src/transpilers/swc.ts")))}u.isMDXComponent=!0}}]);