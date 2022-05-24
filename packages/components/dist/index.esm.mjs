function e(e){var t={exports:{}};return e(t,t.exports),t.exports}var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var g=b.prototype=new v;g.constructor=b,y(g,h.prototype),g.isPureReactComponent=!0;var _=Array.isArray,w=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)w.call(r,o)&&!k.hasOwnProperty(o)&&(a[o]=r[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:t,type:e,key:u,ref:i,props:a,_owner:S.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var O=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function j(e,n,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return u=u(c=e),e=""===a?"."+E(c,0):a,_(u)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),j(u,n,o,"",function(e){return e})):null!=u&&(R(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+e)),n.push(u)),1;if(c=0,a=""===a?".":a+":",_(e))for(var s=0;s<e.length;s++){var l=a+E(i=e[s],s);c+=j(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)c+=j(i=i.value,n,o,l=a+E(i,s++),u);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return j(e,n,"","",function(e){return t.call(r,e,o++)}),n}function x(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},D={Children:{map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},Component:h,Fragment:n,Profiler:a,PureComponent:b,StrictMode:o,Suspense:s,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:S},cloneElement:function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=S.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in r)w.call(r,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:t,type:e.type,key:a,ref:u,props:o,_owner:i}},createContext:function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},createElement:C,createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},createRef:function(){return{current:null}},forwardRef:function(e){return{$$typeof:c,render:e}},isValidElement:R,lazy:function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:x}},memo:function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},startTransition:function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},unstable_act:function(){throw Error("act(...) is not supported in production builds of React.")},useCallback:function(e,t){return $.current.useCallback(e,t)},useContext:function(e){return $.current.useContext(e)},useDebugValue:function(){},useDeferredValue:function(e){return $.current.useDeferredValue(e)},useEffect:function(e,t){return $.current.useEffect(e,t)},useId:function(){return $.current.useId()},useImperativeHandle:function(e,t,r){return $.current.useImperativeHandle(e,t,r)},useInsertionEffect:function(e,t){return $.current.useInsertionEffect(e,t)},useLayoutEffect:function(e,t){return $.current.useLayoutEffect(e,t)},useMemo:function(e,t){return $.current.useMemo(e,t)},useReducer:function(e,t,r){return $.current.useReducer(e,t,r)},useRef:function(e){return $.current.useRef(e)},useState:function(e){return $.current.useState(e)},useSyncExternalStore:function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},useTransition:function(){return $.current.useTransition()},version:"18.1.0"},I=e(function(e,t){"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator;function h(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e["@@iterator"];return"function"==typeof t?t:null}var v={current:null},b={transition:null},g={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},_={current:null},w={},S=null;function k(e){S=e}w.setExtraStackFrame=function(e){S=e},w.getCurrentStack=null,w.getStackAddendum=function(){var e="";S&&(e+=S);var t=w.getCurrentStack;return t&&(e+=t()||""),e};var C={ReactCurrentDispatcher:v,ReactCurrentBatchConfig:b,ReactCurrentOwner:_};function R(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];E("warn",e,r)}function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];E("error",e,r)}function E(e,t,r){var n=C.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map(function(e){return String(e)});o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}C.ReactDebugCurrentFrame=w,C.ReactCurrentActQueue=g;var j={};function P(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;j[o]||(O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),j[o]=!0)}var x={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){P(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){P(e,"replaceState")},enqueueSetState:function(e,t,r,n){P(e,"setState")}},$=Object.assign,T={};function D(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}Object.freeze(T),D.prototype.isReactComponent={},D.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},D.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var I={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},F=function(e,t){Object.defineProperty(D.prototype,e,{get:function(){R("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var L in I)I.hasOwnProperty(L)&&F(L,I[L]);function N(){}function A(e,t,r){this.props=e,this.context=t,this.refs=T,this.updater=r||x}N.prototype=D.prototype;var M=A.prototype=new N;M.constructor=A,$(M,D.prototype),M.isPureReactComponent=!0;var V=Array.isArray;function U(e){return V(e)}function z(e){return""+e}function q(e){if(function(e){try{return z(e),!1}catch(e){return!0}}(e))return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),z(e)}function B(e){return e.displayName||"Context"}function Y(e){if(null==e)return null;if("number"==typeof e.tag&&O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case o:return"Fragment";case n:return"Portal";case u:return"Profiler";case a:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return B(e)+".Consumer";case i:return B(e._context)+".Provider";case s:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?"ForwardRef("+o+")":"ForwardRef"}(e,e.render);case p:var t=e.displayName||null;return null!==t?t:Y(e.type)||"Memo";case d:var r=e._payload,y=e._init;try{return Y(y(r))}catch(e){return null}}return null}var H,W,G,K=Object.prototype.hasOwnProperty,J={key:!0,ref:!0,__self:!0,__source:!0};function X(e){if(K.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function Q(e){if(K.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function Z(e,t){var r=function(){H||(H=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function ee(e,t){var r=function(){W||(W=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function te(e){if("string"==typeof e.ref&&_.current&&e.__self&&_.current.stateNode!==e.__self){var t=Y(_.current.type);G[t]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),G[t]=!0)}}G={};var re=function(e,t,n,o,a,u,i){var c={$$typeof:r,type:e,key:t,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ne(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in X(t)&&(u=t.ref,te(t)),Q(t)&&(q(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)K.call(t,n)&&!J.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&Z(o,d),u&&ee(o,d)}return re(e,a,u,i,c,_.current,o)}function oe(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=$({},e.props),u=e.key,i=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(n in X(t)&&(i=t.ref,l=_.current),Q(t)&&(q(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)K.call(t,n)&&!J.hasOwnProperty(n)&&(a[n]=void 0===t[n]&&void 0!==o?o[n]:t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return re(e.type,u,i,c,s,l,a)}function ae(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var ue,ie=!1,ce=/\/+/g;function se(e){return e.replace(ce,"$&/")}function le(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(q(e.key),r={"=":"=0",":":"=2"},"$"+(""+e.key).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function fe(e,t,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c,s,l,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f){var p=e,d=u(p),y=""===a?"."+le(p,0):a;if(U(d)){var m="";null!=y&&(m=se(y)+"/"),fe(d,t,m,"",function(e){return e})}else null!=d&&(ae(d)&&(!d.key||p&&p.key===d.key||q(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?"":se(""+d.key)+"/")+y,d=re(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),t.push(d));return 1}var v=0,b=""===a?".":a+":";if(U(e))for(var g=0;g<e.length;g++)v+=fe(l=e[g],t,o,b+le(l,g),u);else{var _=h(e);if("function"==typeof _){var w=e;_===w.entries&&(ie||R("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ie=!0);for(var S,k=_.call(w),C=0;!(S=k.next()).done;)v+=fe(l=S.value,t,o,b+le(l,C++),u)}else if("object"===i){var O=String(e);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}}return v}function pe(e,t,r){if(null==e)return e;var n=[],o=0;return fe(e,n,"","",function(e){return t.call(r,e,o++)}),n}function de(e){if(-1===e._status){var t=(0,e._result)();if(t.then(function(t){if(0===e._status||-1===e._status){var r=e;r._status=1,r._result=t}},function(t){if(0===e._status||-1===e._status){var r=e;r._status=2,r._result=t}}),-1===e._status){var r=e;r._status=0,r._result=t}}if(1===e._status){var n=e._result;return void 0===n&&O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function ye(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===l||e===f||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===ue||void 0!==e.getModuleId)}function me(){var e=v.current;return null===e&&O("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ue=Symbol.for("react.module.reference");var he,ve,be,ge,_e,we,Se,ke=0;function Ce(){}Ce.__reactDisabledLog=!0;var Re,Oe=C.ReactCurrentDispatcher;function Ee(e,t,r){if(void 0===Re)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Re=n&&n[1]||""}return"\n"+Re+e}var je,Pe=!1,xe="function"==typeof WeakMap?WeakMap:Map;function $e(e,t){if(!e||Pe)return"";var r,n=je.get(e);if(void 0!==n)return n;Pe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Oe.current,Oe.current=null,function(){if(0===ke){he=console.log,ve=console.info,be=console.warn,ge=console.error,_e=console.group,we=console.groupCollapsed,Se=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}ke++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),c=r.stack.split("\n"),s=i.length-1,l=c.length-1;s>=1&&l>=0&&i[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(i[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||i[s]!==c[l]){var f="\n"+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&je.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{Pe=!1,Oe.current=o,function(){if(0==--ke){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:$({},e,{value:he}),info:$({},e,{value:ve}),warn:$({},e,{value:be}),error:$({},e,{value:ge}),group:$({},e,{value:_e}),groupCollapsed:$({},e,{value:we}),groupEnd:$({},e,{value:Se})})}ke<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Ee(p):"";return"function"==typeof e&&je.set(e,d),d}function Te(e,t,r){if(null==e)return"";if("function"==typeof e)return $e(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Ee(e);switch(e){case l:return Ee("Suspense");case f:return Ee("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case s:return $e(e.render,!1);case p:return Te(e.type,t,r);case d:var n=e._payload,o=e._init;try{return Te(o(n),t,r)}catch(e){}}return""}je=new xe;var De,Ie={},Fe=C.ReactDebugCurrentFrame;function Le(e){if(e){var t=e._owner,r=Te(e.type,e._source,t?t.type:null);Fe.setExtraStackFrame(r)}else Fe.setExtraStackFrame(null)}function Ne(e){if(e){var t=e._owner;k(Te(e.type,e._source,t?t.type:null))}else k(null)}function Ae(){if(_.current){var e=Y(_.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function Me(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}De=!1;var Ve={};function Ue(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=Ae();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ve[r]){Ve[r]=!0;var n="";e&&e._owner&&e._owner!==_.current&&(n=" It was passed a child from "+Y(e._owner.type)+"."),Ne(e),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ne(null)}}}function ze(e,t){if("object"==typeof e)if(U(e))for(var r=0;r<e.length;r++){var n=e[r];ae(n)&&Ue(n,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var o=h(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ae(a.value)&&Ue(a.value,t)}}function qe(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==s&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=Y(r);!function(e,t,r,n,o){var a=Function.call.bind(K);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": prop type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(Le(o),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),Le(null)),i instanceof Error&&!(i.message in Ie)&&(Ie[i.message]=!0,Le(o),O("Failed %s type: %s",r,i.message),Le(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||De||(De=!0,O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",Y(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Be(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ne(e),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ne(null);break}}null!==e.ref&&(Ne(e),O("Invalid attribute `ref` supplied to `React.Fragment`."),Ne(null))}function Ye(e,t,n){var a=ye(e);if(!a){var u="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,c=Me(t);u+=c||Ae(),null===e?i="null":U(e)?i="array":void 0!==e&&e.$$typeof===r?(i="<"+(Y(e.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof e,O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var s=ne.apply(this,arguments);if(null==s)return s;if(a)for(var l=2;l<arguments.length;l++)ze(arguments[l],e);return e===o?Be(s):qe(s),s}var He=!1,We=!1,Ge=null,Ke=0,Je=!1;function Xe(e){e!==Ke-1&&O("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Ke=e}function Qe(t,r,n){var o=g.current;if(null!==o)try{et(o),function(a){if(null===Ge)try{var u=("require"+Math.random()).slice(0,7);Ge=(e&&e[u]).call(e,"timers").setImmediate}catch(e){Ge=function(e){!1===We&&(We=!0,"undefined"==typeof MessageChannel&&O("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}Ge(function(){0===o.length?(g.current=null,r(t)):Qe(t,r,n)})}()}catch(e){n(e)}else r(t)}var Ze=!1;function et(e){if(!Ze){Ze=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{Ze=!1}}}var tt=Ye,rt={map:pe,forEach:function(e,t,r){pe(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return pe(e,function(){t++}),t},toArray:function(e){return pe(e,function(e){return e})||[]},only:function(e){if(!ae(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=rt,t.Component=D,t.Fragment=o,t.Profiler=u,t.PureComponent=A,t.StrictMode=a,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=function(e,t,r){for(var n=oe.apply(this,arguments),o=2;o<arguments.length;o++)ze(arguments[o],n.type);return qe(n),n},t.createContext=function(e){var t={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:c,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||(R("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=tt,t.createFactory=function(e){var t=Ye.bind(null,e);return t.type=e,He||(He=!0,R("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return R("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===p?O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?O("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&O("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:s,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},t.isValidElement=ae,t.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:-1,_result:e},_init:de};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){ye(e)||O("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},t.startTransition=function(e,t){var r=b.transition;b.transition={};var n=b.transition;b.transition._updatedFibers=new Set;try{e()}finally{b.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},t.unstable_act=function(e){var t=Ke;Ke++,null===g.current&&(g.current=[]);var r,n=g.isBatchingLegacy;try{if(g.isBatchingLegacy=!0,r=e(),!n&&g.didScheduleLegacyUpdate){var o=g.current;null!==o&&(g.didScheduleLegacyUpdate=!1,et(o))}}catch(e){throw Xe(t),e}finally{g.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then(function(n){Xe(t),0===Ke?Qe(n,e,r):e(n)},function(e){Xe(t),r(e)})}};return Je||"undefined"==typeof Promise||Promise.resolve().then(function(){}).then(function(){u||(Je=!0,O("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),i}var c=r;if(Xe(t),0===Ke){var s=g.current;return null!==s&&(et(s),g.current=null),{then:function(e,t){null===g.current?(g.current=[],Qe(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}},t.useCallback=function(e,t){return me().useCallback(e,t)},t.useContext=function(e){var t=me();if(void 0!==e._context){var r=e._context;r.Consumer===e?O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return me().useDebugValue(e,t)},t.useDeferredValue=function(e){return me().useDeferredValue(e)},t.useEffect=function(e,t){return me().useEffect(e,t)},t.useId=function(){return me().useId()},t.useImperativeHandle=function(e,t,r){return me().useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return me().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return me().useLayoutEffect(e,t)},t.useMemo=function(e,t){return me().useMemo(e,t)},t.useReducer=function(e,t,r){return me().useReducer(e,t,r)},t.useRef=function(e){return me().useRef(e)},t.useState=function(e){return me().useState(e)},t.useSyncExternalStore=function(e,t,r){return me().useSyncExternalStore(e,t,r)},t.useTransition=function(){return me().useTransition()},t.version="18.1.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()}),F=e(function(e){e.exports="production"===process.env.NODE_ENV?D:I});module.exports={Button:function(e){/*#__PURE__*/return F.createElement(Fragment,null,/*#__PURE__*/F.createElement("button",{className:"button",onClick:e.onClick},e.children),/*#__PURE__*/F.createElement("style",{jsx:"true"},"\n            .button  {\n            margin: 20px 0;\n            background-color: #0070f3;\n            border: 0;\n            cursor: pointer;\n            color: #FFFFFF;\n            font-size: 1.3em;\n            padding: 8px 16px;\n            }\n        "))}};
//# sourceMappingURL=index.esm.mjs.map
