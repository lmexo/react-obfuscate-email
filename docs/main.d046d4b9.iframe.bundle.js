(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{456:function(module,exports,__webpack_require__){__webpack_require__(457),__webpack_require__(617),__webpack_require__(618),__webpack_require__(821),__webpack_require__(822),__webpack_require__(823),__webpack_require__(824),__webpack_require__(826),module.exports=__webpack_require__(815)},524:function(module,exports){},618:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(333)},815:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(333).configure)([__webpack_require__(816),__webpack_require__(817)],module,!1)}).call(this,__webpack_require__(190)(module))},816:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=816},817:function(module,exports,__webpack_require__){var map={"./Email.stories.tsx":825};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=817},825:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Simple",(function(){return Simple})),__webpack_require__.d(__webpack_exports__,"Body",(function(){return Body})),__webpack_require__.d(__webpack_exports__,"Subject",(function(){return Subject})),__webpack_require__.d(__webpack_exports__,"Children",(function(){return Children})),__webpack_require__.d(__webpack_exports__,"Attributes",(function(){return Attributes}));__webpack_require__(14),__webpack_require__(818);var react=__webpack_require__(0);__webpack_require__(4),__webpack_require__(8),__webpack_require__(18),__webpack_require__(17),__webpack_require__(6),__webpack_require__(25),__webpack_require__(20),__webpack_require__(819),__webpack_require__(61),__webpack_require__(28),__webpack_require__(151),__webpack_require__(7),__webpack_require__(12),__webpack_require__(11),__webpack_require__(13),__webpack_require__(242),__webpack_require__(412),__webpack_require__(53),__webpack_require__(21),__webpack_require__(45),__webpack_require__(79);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function isValidParam(param){var value=_slicedToArray(param,2)[1];return"string"==typeof value&&value.length>0}var jsx_runtime=__webpack_require__(83),_excluded=["body","subject","children","className","email"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function Email_slicedToArray(arr,i){return function Email_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Email_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Email_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Email_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Email_arrayLikeToArray(o,minLen)}(arr,i)||function Email_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Email_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Email(_ref){var _ref$body=_ref.body,body=void 0===_ref$body?"":_ref$body,_ref$subject=_ref.subject,subject=void 0===_ref$subject?"":_ref$subject,children=_ref.children,className=_ref.className,email=_ref.email,rest=_objectWithoutProperties(_ref,_excluded),_useState2=Email_slicedToArray(Object(react.useState)(!1),2),hovered=_useState2[0],setHovered=_useState2[1],emailUrl=new URL("mailto:"+email);function handleHover(){setHovered(!0)}emailUrl.search=function percentEncodeParams(params){return Object.entries(params).filter(isValidParam).map((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];return key+"="+encodeURIComponent(value)})).join("&")}({body:body,subject:subject});var displayText=children||email,obfuscatedText=children||function obfuscateEmail(email){var _email$split2=Email_slicedToArray(email.split("@"),2),username=_email$split2[0],domain=_email$split2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("style",{dangerouslySetInnerHTML:{__html:'\n          a>span.roe::after {\n            content: "@";\n          }\n        '}}),username,Object(jsx_runtime.jsx)("span",{className:"roe"}),domain]})}(email);return Object(jsx_runtime.jsx)("a",Object.assign({className:className,href:hovered?emailUrl.href:"#",onFocus:handleHover,onMouseOver:handleHover},rest,{children:hovered?displayText:obfuscatedText}))}Email.displayName="Email";try{Email.displayName="Email",Email.__docgenInfo={description:"",displayName:"Email",props:{body:{defaultValue:{value:""},description:"",name:"body",required:!1,type:{name:"string"}},email:{defaultValue:null,description:"",name:"email",required:!0,type:{name:"string"}},subject:{defaultValue:{value:""},description:"",name:"subject",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Email.tsx#Email"]={docgenInfo:Email.__docgenInfo,name:"Email",path:"src/Email.tsx#Email"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Examples",component:Email,args:{email:"test@example.com"}};var Email_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Email,Object.assign({style:{color:"aqua"}},args))};Email_stories_Template.displayName="Template";var Simple=Email_stories_Template.bind({});Simple.args={};var Body=Email_stories_Template.bind({});Body.args={body:"You rock!"};var Subject=Email_stories_Template.bind({});Subject.args={subject:"Hi 👋"};var Children=Email_stories_Template.bind({});Children.args={children:"📧 Email me!"};var Attributes=Email_stories_Template.bind({});Attributes.args={title:"📧 Email me!",rel:"noreferrer noopener",target:"_blank"},Simple.parameters=Object.assign({storySource:{source:'(args) => (\n  <Email style={{ color: "aqua" }} {...args} />\n)'}},Simple.parameters),Body.parameters=Object.assign({storySource:{source:'(args) => (\n  <Email style={{ color: "aqua" }} {...args} />\n)'}},Body.parameters),Subject.parameters=Object.assign({storySource:{source:'(args) => (\n  <Email style={{ color: "aqua" }} {...args} />\n)'}},Subject.parameters),Children.parameters=Object.assign({storySource:{source:'(args) => (\n  <Email style={{ color: "aqua" }} {...args} />\n)'}},Children.parameters),Attributes.parameters=Object.assign({storySource:{source:'(args) => (\n  <Email style={{ color: "aqua" }} {...args} />\n)'}},Attributes.parameters)},826:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(20),__webpack_require__(4),__webpack_require__(45),__webpack_require__(411),__webpack_require__(812),__webpack_require__(50),__webpack_require__(813),__webpack_require__(814),__webpack_require__(410);var client_api=__webpack_require__(832),esm=__webpack_require__(5),parameters={docs:{theme:__webpack_require__(133).a.dark}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[456,2,3]]]);