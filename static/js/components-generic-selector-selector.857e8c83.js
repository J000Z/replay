(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/replay/components/common.js":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return o}),n.d(t,"k",function(){return a}),n.d(t,"g",function(){return i}),n.d(t,"d",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return p}),n.d(t,"j",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"b",function(){return b}),n.d(t,"e",function(){return h});var o="replay-";function a(e){for(var t=null==e?"":e,n=[],r=0;r<(arguments.length<=1?0:arguments.length-1);r++)(r+1<1||arguments.length<=r+1?void 0:arguments[r+1])&&n.push(t+(r+1<1||arguments.length<=r+1?void 0:arguments[r+1]));return n.join(" ")}var l=function(e){return e};function i(e){var t=e.classes,n=e.selectClasses,o=e.classNames,i=e.classNamePrefix;if(t&&n){var s=n(t);return Array.isArray(s)?s.filter(l).join(" "):s}if(o)return a.apply(void 0,[i].concat(r(o)))}function s(e,t){var n,r=(t||e.currentTarget).getBoundingClientRect();return n=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(n.pageX-r.left,r.width)),y:Math.max(0,Math.min(n.pageY-r.top,r.height)),width:r.width,height:r.height}}function c(e){return function(t){e.indexOf(t.key)>=0&&(t.preventDefault(),t.stopPropagation())}}var u=function(e,t){return e!==t&&(!(e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime())&&!(Number.isNaN(e)&&Number.isNaN(t)))},f=function(e){return null!=e&&e.constructor==={}.constructor},p=function(e,t){if(e===t)return!0;if(f(e)&&f(t)){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&(!(n.filter(function(n){return u(e[n],t[n])}).length>0)&&0===r.filter(function(n){return u(t[n],e[n])}).length)}if(Array.isArray(e)&&Array.isArray(t)&&e.length===t.length){for(var o=e.length;o--;)if(e[o]!==t[o])return!1;return!0}return!1};function d(e){if(null==e)return{};var t={},n=e;return Object.keys(e).forEach(function(e){f(n[e])?t[e]=d(n[e]):t[e]=n[e]}),t}function m(e,t){var n=d(e);if(t){var r=t;Object.getOwnPropertyNames(r).forEach(function(e){f(r[e])?f(n[e])?n[e]=m(n[e],r[e]):n[e]=d(r[e]):n[e]=r[e]})}return n}var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return n&&0===e?"":e<10&&r?"0".concat(e).concat(t):"".concat(e).concat(t)},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=Math.round(e),r="";"number"!==typeof e||isNaN(e)||e===1/0?n=0:n<0&&(n=-n,r=t);var o=Math.floor(n/86400),a=86400*o,l=Math.floor((n-a)/3600),i=a+3600*l,s=Math.floor((n-i)/60),c=n-i-60*s;return r+y(o,".",!0,!1)+y(l,":",0===o)+y(s,":",!1)+y(c)},b=function(e){var t=e instanceof Date&&!isNaN(e.getTime()),n=0,r=0,o=0;return t&&null!=e&&(n=t?e.getHours():0,r=t?e.getMinutes():0,o=t?e.getSeconds():0),y(n,":",!1)+y(r,":",!1)+y(o)},h=function(e,t){var n=null;return{start:function(){n||(n=setInterval(e,1e3*t))},stop:function(){n&&(clearInterval(n),n=null)}}}},"./src/replay/components/generic/Selector/Selector.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js"),a=n("./src/replay/components/generic/ToggleButton/ToggleButton.js");function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return e.selectorItem},d=function(e){return e.selectorItemSelected||e.selectorItem},m=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),p=0;p<i;p++)c[p]=arguments[p];return r=this,a=(e=s(t)).call.apply(e,[this].concat(c)),n=!a||"object"!==l(a)&&"function"!==typeof a?u(r):a,f(u(u(n)),"handleRef",function(e){n.props.onRef(e,n.props.index)}),f(u(u(n)),"handleClick",function(){return n.props.onSelect&&n.props.onSelect(n.props.item.data)}),f(u(u(n)),"handleKeyDown",Object(o.f)(["Enter"," "])),f(u(u(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,a,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,a=e.classes,l=e.defaultItemClassName,i=e.item,s=e.isSelected,c=e.canReceiveFocus,u=e.selectedClassName,f=i.label,m=Object(o.g)({classes:a,classNamePrefix:n,selectClasses:s?d:p,classNames:[t,l,s?u:null]}),y=c?0:void 0;return r.createElement("div",{role:"option","aria-selected":s,className:m,ref:this.handleRef,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,tabIndex:y},r.createElement("div",{tabIndex:-1},f))}}])&&i(n.prototype,a),m&&i(n,m),t}();function y(e,t,n,r){for(var o=(t?n.slice(0).reverse():n).concat(r),a=0;a<o.length;a++)if(o[a]===document.activeElement)if(e){if(a>0)for(var l=a-1;l>=0;l--){var i=o[l];if(i)return i.focus(),i}}else if(a<o.length-1)for(var s=a+1;s<o.length;s++){var c=o[s];if(c)return c.focus(),c}}function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}m.__docgenInfo={description:"",methods:[{name:"handleRef",docblock:null,modifiers:[],params:[{name:"element",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"SelectorItem",props:{item:{required:!0,flowType:{name:"signature",type:"object",raw:"{\n  label: string,\n  id?: Id,\n  data?: any\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"id",value:{name:"Id",required:!1}},{key:"data",value:{name:"any",required:!1}}]}},description:""},index:{required:!0,flowType:{name:"number"},description:""},isSelected:{required:!0,flowType:{name:"boolean"},description:""},canReceiveFocus:{required:!0,flowType:{name:"boolean"},description:""},defaultItemClassName:{required:!0,flowType:{name:"string"},description:""},selectedClassName:{required:!0,flowType:{name:"string"},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""},onRef:{required:!0,flowType:{name:"signature",type:"function",raw:"(?HTMLElement, number) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}},{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}};var T="selector-item",E="selected",k=function(e){return e.selectorCollapsed||e.selector},j=function(e){return e.selectorExpanded||e.selector},S=function(e){return e.selectorItemsContainer},N=function(e){function t(e){var n,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,a=h(t).call(this,e),n=!a||"object"!==g(a)&&"function"!==typeof a?w(o):a,O(w(w(n)),"focusableItems",[]),O(w(w(n)),"toggleElement",null),O(w(w(n)),"onToggleRef",function(e){n.toggleElement=e}),O(w(w(n)),"handleToggle",function(e){return n.setState({isExpanded:e})}),O(w(w(n)),"handleItemRef",function(e,t){n.focusableItems[t]=e}),O(w(w(n)),"renderSelectorItem",function(e,t){var o=n.props.itemMapper(e);return r.createElement(m,{key:o.id,item:o,index:t,onSelect:n.props.onSelect,onRef:n.handleItemRef,isSelected:e===n.props.selectedItem,canReceiveFocus:n.state.isExpanded,selectedClassName:E,defaultItemClassName:T,className:n.props.itemClassName,classes:n.props.classes,classNamePrefix:n.props.classNamePrefix})}),O(w(w(n)),"handleKeyDown",function(e){switch(e.key){case"ArrowUp":case"Up":return void e.preventDefault();case"ArrowDown":case"Down":return void(n.state.isExpanded&&e.preventDefault());default:return}}),O(w(w(n)),"handleKeyUp",function(e){n.state.isExpanded?("ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),y(!0,n.props.reverseOrder||!1,n.focusableItems,n.toggleElement)),("ArrowDown"===e.key||"Down"===e.key)&&(e.preventDefault(),y(!1,n.props.reverseOrder||!1,n.focusableItems,n.toggleElement)===n.toggleElement&&n.setState({isExpanded:!1}))):"ArrowUp"!==e.key&&"Up"!==e.key||(e.preventDefault(),n.setState({isExpanded:!0}))}),O(w(w(n)),"handleMouseLeave",function(){n.setState({isExpanded:!1})}),n.state={isExpanded:!1},n}var n,l,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r["Component"]),n=t,(l=[{key:"render",value:function(){var e=this.props,t=e.className,n=e.classNamePrefix,l=e.classes,i=e.items,s=e.collapsedToggleContent,c=e.expandedToggleContent,u=e.reverseOrder,f=e.label,p=i?u?i.map(this.renderSelectorItem).reverse():i.map(this.renderSelectorItem):null,d=Object(o.g)({classes:l,classNamePrefix:n,selectClasses:this.state.isExpanded?j:k,classNames:[t,"selector",this.state.isExpanded?"expanded":"collapsed"]}),m=Object(o.g)({classes:l,selectClasses:S,classNamePrefix:n,classNames:["selector-items"]}),y=l?{toggleButtonOff:l.selectorToggle||l.selectorToggleOff,toggleButtonOn:l.selectorToggleOn}:null;return r.createElement("div",{className:d,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onMouseLeave:this.handleMouseLeave},r.createElement(a.a,{isOn:this.state.isExpanded,className:"selector-toggle",classNamePrefix:n,classes:y,label:f,onToggle:this.handleToggle,onRef:this.onToggleRef,toggledOffContent:s,toggledOnContent:c}),r.createElement("div",{role:"listbox",className:m},p))}}])&&b(n.prototype,l),i&&b(n,i),t}();O(N,"defaultProps",{useDefaultClassNaming:!0});t.a=N;N.__docgenInfo={description:"",methods:[{name:"onToggleRef",docblock:null,modifiers:[],params:[{name:"toggleElement",type:{name:"HTMLElement",nullable:!0}}],returns:null},{name:"handleToggle",docblock:null,modifiers:[],params:[{name:"isOn",type:{name:"boolean"}}],returns:null},{name:"handleItemRef",docblock:null,modifiers:[],params:[{name:"itemElement",type:{name:"HTMLElement",nullable:!0}},{name:"index",type:{name:"number"}}],returns:null},{name:"renderSelectorItem",docblock:null,modifiers:[],params:[{name:"item",type:{name:"any"}},{name:"index",type:{name:"number"}}],returns:null},{name:"handleKeyDown",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Selector",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},items:{required:!0,flowType:{name:"Array",elements:[{name:"any"}],raw:"Array<any>"},description:""},selectedItem:{required:!1,flowType:{name:"any"},description:""},reverseOrder:{required:!1,flowType:{name:"boolean"},description:""},itemClassName:{required:!1,flowType:{name:"string"},description:""},collapsedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},expandedToggleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},label:{required:!1,flowType:{name:"string"},description:""},itemMapper:{required:!0,flowType:{name:"signature",type:"function",raw:"any => ItemData",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"ItemData"}}},description:""},onSelect:{required:!1,flowType:{name:"signature",type:"function",raw:"any => void",signature:{arguments:[{name:"",type:{name:"any"}}],return:{name:"void"}}},description:""}}}},"./src/replay/components/generic/Selector/Selector.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),i=n("./src/replay/components/generic/Selector/Selector.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).layout=null,n}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=c(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"selector"}},"Selector"),o.a.createElement(a.MDXTag,{name:"p",components:t},"A generic component containing a button and an expandable/collapsable list of selectable items."),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"summary"}},"Summary"),o.a.createElement(a.MDXTag,{name:"p",components:t},"It operates on a list of items which can be objects or primitive values. The AudioSelector and SubtitlesSelector uses a Selector with a list of AvailableTrack. The QualitySelector makes the Selector operate on a list of numbers."),o.a.createElement(a.MDXTag,{name:"p",components:t},"When marking an item as selected, it depends on strict equality between the specified selectedItem, and one of the items in the list. This means an object, e.g. AvailableTrack, cannot be cloned or recreated."),o.a.createElement(a.MDXTag,{name:"p",components:t},"When an item is selected, the onSelect callback is invoked with the item object from the list as an argument."),o.a.createElement(a.MDXTag,{name:"p",components:t},"An item mapper must be used for making the list items presentable in the selector. This converts the item object of the specific type into an object with ID, label, and the original item as a data property."),o.a.createElement(l.Playground,{__codesandbox:"undefined",__position:0,__code:"<Selector />",__scope:{props:this?this.props:n,Selector:i.a}},o.a.createElement(i.a,null)),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),o.a.createElement(l.PropsTable,{of:i.a}))}}])&&u(n.prototype,r),s&&u(n,s),t}();m.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/replay/components/generic/ToggleButton/ToggleButton.js":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./src/replay/components/common.js");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){return e.toggleButtonOff||e.toggleButton},p=function(e){return e.toggleButtonOn||e.toggleButton},d=function(e){function t(){var e,n,r,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,f=new Array(s),p=0;p<s;p++)f[p]=arguments[p];return r=this,l=(e=i(t)).call.apply(e,[this].concat(f)),n=!l||"object"!==a(l)&&"function"!==typeof l?c(r):l,u(c(c(n)),"handleClick",function(){return n.props.onToggle&&n.props.onToggle(!n.props.isOn)}),u(c(c(n)),"handleKeyDown",Object(o.f)(["Enter"," "])),u(c(c(n)),"handleKeyUp",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),n.handleClick())}),n}var n,d,m;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(d=[{key:"render",value:function(){var e=this.props,t=e.isOn,n=e.label,a=e.className,l=e.classNamePrefix,i=e.toggledOnContent,s=e.toggledOffContent,c=e.onRef,u=e.classes,d=t?"toggled-on":"toggled-off",m=Object(o.g)({classes:u,selectClasses:t?p:f,classNamePrefix:l,classNames:[a,"toggle-button",d]}),y=t?i:s;return r.createElement("div",{role:"button","aria-pressed":t,title:n,onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,ref:c,className:m,tabIndex:0},r.createElement("div",{tabIndex:-1},y))}}])&&l(n.prototype,d),m&&l(n,m),t}();u(d,"defaultProps",{useDefaultClassNaming:!0}),t.a=d,d.__docgenInfo={description:"Renders a button with two states - toggled on and off. When clicked, it reports back the opposite state.",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null}],displayName:"ToggleButton",props:{useDefaultClassNaming:{defaultValue:{value:"true",computed:!1},required:!1},isOn:{required:!1,flowType:{name:"boolean"},description:"Set to true if the button should be in the toggled on mode."},label:{required:!1,flowType:{name:"string"},description:"The label will appear in the title attribute of the root DOM element of the toggle button."},toggledOffContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled off."},toggledOnContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:"The button content to be displayed when the button is toggled on."},onToggle:{required:!1,flowType:{name:"signature",type:"function",raw:"boolean => void",signature:{arguments:[{name:"",type:{name:"boolean"}}],return:{name:"void"}}},description:"A callback method that will be invoked when the button is clicked and the value toggled. If the button has been toggled on, true is passed to the callback."},onRef:{required:!1,flowType:{name:"signature",type:"function",raw:"(?HTMLElement) => void",signature:{arguments:[{name:"",type:{name:"HTMLElement",nullable:!0}}],return:{name:"void"}}},description:"A callback method invoked with the rendered button element, for focus purposes."}}}}}]);
//# sourceMappingURL=components-generic-selector-selector.1c5c9ab4c22a66c75265.js.map