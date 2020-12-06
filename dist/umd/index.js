!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self)["x-weather"]={})}(this,(function(t){"use strict";function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const r=new WeakMap,s=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},a=t=>"function"==typeof t&&r.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,l=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},c={},h={},d=`{{lit-${String(Math.random()).slice(2)}}}`,p=`\x3c!--${d}--\x3e`,u=new RegExp(`${d}|${p}`),m="$lit$";class f{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let s=0,a=-1,o=0;const{strings:l,values:{length:c}}=t;for(;o<c;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)g(e[t].name,m)&&i++;for(;i-- >0;){const e=l[o],n=y.exec(e)[2],i=n.toLowerCase()+m,r=t.getAttribute(i);t.removeAttribute(i);const s=r.split(u);this.parts.push({type:"attribute",index:a,name:n,strings:s}),o+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const i=t.parentNode,r=e.split(u),s=r.length-1;for(let e=0;e<s;e++){let n,s=r[e];if(""===s)n=v();else{const t=y.exec(s);null!==t&&g(t[2],m)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-m.length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++a})}""===r[s]?(i.insertBefore(v(),t),n.push(t)):t.data=r[s],o+=s}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&a!==s||(a++,e.insertBefore(v(),t)),s=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(n.push(t),a--),o++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),o++}}else r.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const g=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},_=t=>-1!==t.index,v=()=>document.createComment(""),y=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
class b{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,l=i.nextNode();for(;s<n.length;)if(r=n[s],_(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const w=` ${d} `;class S{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const s=y.exec(t);e+=null===s?t+(n?w:p):t.substr(0,s.index)+s[1]+s[2]+m+s[3]+d}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const C=t=>null===t||!("object"==typeof t||"function"==typeof t),z=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new M(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(C(t)||!z(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class M{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===c||C(t)&&t===this.value||(this.value=t,a(t)||(this.committer.dirty=!0))}commit(){for(;a(this.value);){const t=this.value;this.value=c,t(this)}this.value!==c&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(v()),this.endNode=t.appendChild(v())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=v()),t.__insert(this.endNode=v())}insertAfterPart(t){t.__insert(this.startNode=v()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;a(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}const t=this.__pendingValue;t!==c&&(C(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):z(t)?this.__commitIterable(t):t===h?(this.value=h,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof b&&this.value.template===e)this.value.update(t.values);else{const n=new b(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)void 0===(n=e[i])&&(n=new T(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){l(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;a(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=c}}class P extends x{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new H(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class H extends M{}let k=!1;try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class L{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;a(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=c,t(this)}if(this.__pendingValue===c)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=c}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */const O=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new P(t,e.slice(1),n).parts}return"@"===r?[new L(t,e.slice(1),i.eventContext)]:"?"===r?[new E(t,e.slice(1),n)]:new x(t,e,n).parts}handleTextExpression(t){return new T(t)}};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */function V(t){let e=N.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},N.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(d);return void 0===(n=e.keyString.get(i))&&(n=new f(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const N=new Map,R=new WeakMap;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(t,...e)=>new S(t,e,"html",O),I=133;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */function F(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,I,null,!1);let s=U(i),a=i[s],o=-1,l=0;const c=[];let h=null;for(;r.nextNode();){o++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==a&&a.index===o;)a.index=null!==h?-1:a.index-l,a=i[s=U(i,s)]}c.forEach(t=>t.parentNode.removeChild(t))}const j=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,I,null,!1);for(;n.nextNode();)e++;return e},U=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(_(e))return n}return-1};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
const B=(t,e)=>`${t}--${e}`;let q=!0;void 0===window.ShadyCSS?q=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),q=!1);const $=t=>e=>{const n=B(e.type,t);let i=N.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},N.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(d);if(void 0===(r=i.keyString.get(s))){const n=e.getTemplateElement();q&&window.ShadyCSS.prepareTemplateDom(n,t),r=new f(e,n),i.keyString.set(s,r)}return i.stringsArray.set(e.strings,r),r},W=["html","svg"],Y=new Set,K=(t,e,n)=>{Y.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{W.forEach(e=>{const n=N.get(B(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),F(t,n)})})})(t);const o=i.content;n?function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const s=document.createTreeWalker(i,I,null,!1);let a=U(r),o=0,l=-1;for(;s.nextNode();){for(l++,s.currentNode===n&&(o=j(e),n.parentNode.insertBefore(e,n));-1!==a&&r[a].index===l;){if(o>0){for(;-1!==a;)r[a].index+=o,a=U(r,a);return}a=U(r,a)}}}(n,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),F(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const G={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},J=(t,e)=>e!==t&&(e==e||t==t),X={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:J},Q=Promise.resolve(!0),Z=1,tt=4,et=8,nt=16,it=32,rt="finalized";class st extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Q,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=X){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const i=this[t];this[n]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(rt)||t.finalize(),this[rt]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=J){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||G,r="function"==typeof i?i:i.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||G.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|it,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=X){const i=this.constructor,r=i._attributeNameForProperty(t,n);if(void 0!==r){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|et,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~et}}_attributeToProperty(t,e){if(this._updateState&et)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i)||X;this._updateState=this._updateState|nt,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~nt}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||X;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&nt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|tt;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{t=n,e=i});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&it}get _hasRequestedUpdate(){return this._updateState&tt}get hasUpdated(){return this._updateState&Z}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Z||(this._updateState=this._updateState|Z,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~tt}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}st[rt]=!0;
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
const at=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),ot=(t,e,n)=>{e.constructor.createProperty(n,t)};function lt(t){return(e,n)=>void 0!==n?ot(t,e,n):at(t,e)}const ct=(t,e,n)=>{Object.defineProperty(e,n,t)},ht=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),dt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol();class ut{constructor(t,e){if(e!==pt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(dt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const mt=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof ut)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new ut(n,pt)};
/**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const ft=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,n):n.push(r)}return n}(t);class gt extends st{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){ft(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?dt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof S&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}gt.finalized=!0,gt.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=R.has(e),s=q&&11===e.nodeType&&!!e.host,a=s&&!Y.has(i),o=a?document.createDocumentFragment():e;if(((t,e,n)=>{let i=R.get(e);void 0===i&&(l(e,e.firstChild),R.set(e,i=new T(Object.assign({templateFactory:V},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,o,Object.assign({templateFactory:$(i)},n)),a){const t=R.get(o);R.delete(o);const n=t.value instanceof b?t.value.template:void 0;K(i,o,n),l(e,e.firstChild),e.appendChild(o),R.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const _t=!(window.ShadyDOM&&window.ShadyDOM.inUse);let vt,yt;function bt(t){vt=(!t||!t.shimcssproperties)&&(_t||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(yt=window.ShadyCSS.cssBuild);const wt=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?vt=window.ShadyCSS.nativeCss:window.ShadyCSS?(bt(window.ShadyCSS),window.ShadyCSS=void 0):bt(window.WebComponents&&window.WebComponents.flags);const St=vt;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */class Ct{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function zt(t){return function t(e,n){let i=n.substring(e.start,e.end-1);e.parsedCssText=e.cssText=i.trim();if(e.parent){let t=e.previous?e.previous.end:e.parent.start;i=(i=(i=function(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t}))}(i=n.substring(t,e.start-1))).replace(Pt.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=i.trim();e.atRule=0===r.indexOf(Lt),e.atRule?0===r.indexOf(kt)?e.type=Mt.MEDIA_RULE:r.match(Pt.keyframesRule)&&(e.type=Mt.KEYFRAMES_RULE,e.keyframesName=e.selector.split(Pt.multipleSpaces).pop()):0===r.indexOf(Ht)?e.type=Mt.MIXIN_RULE:e.type=Mt.STYLE_RULE}let r=e.rules;if(r)for(let e,i=0,s=r.length;i<s&&(e=r[i]);i++)t(e,n);return e}(function(t){let e=new Ct;e.start=0,e.end=t.length;let n=e;for(let i=0,r=t.length;i<r;i++)if(t[i]===Tt){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;(n=new Ct).start=i+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[i]===Et&&(n.end=i+1,n=n.parent||e);return e}(t=t.replace(Pt.comments,"").replace(Pt.port,"")),t)}function xt(t,e,n=""){let i="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(Ht)}(n))for(let t,r=0,s=n.length;r<s&&(t=n[r]);r++)i=xt(t,e,i);else(i=(i=e?t.cssText:function(t){return function(t){return t.replace(Pt.mixinApply,"").replace(Pt.varApply,"")}(t=function(t){return t.replace(Pt.customProp,"").replace(Pt.mixinProp,"")}(t))}(t.cssText)).trim())&&(i="  "+i+"\n")}return i&&(t.selector&&(n+=t.selector+" "+Tt+"\n"),n+=i,t.selector&&(n+=Et+"\n\n")),n}const Mt={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Tt="{",Et="}",Pt={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ht="--",kt="@media",Lt="@",At=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ot=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Vt=/@media\s(.*)/,Nt=new Set,Rt="shady-unscoped";function Dt(t){const e=t.textContent;if(!Nt.has(e)){Nt.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}function It(t){return t.hasAttribute(Rt)}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Ft(t,e){return t?("string"==typeof t&&(t=zt(t)),e&&Ut(t,e),xt(t,St)):""}function jt(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=zt(t.textContent)),t.__cssRules||null}function Ut(t,e,n,i){if(!t)return;let r=!1,s=t.type;if(i&&s===Mt.MEDIA_RULE){let e=t.selector.match(Vt);e&&(window.matchMedia(e[1]).matches||(r=!0))}s===Mt.STYLE_RULE?e(t):n&&s===Mt.KEYFRAMES_RULE?n(t):s===Mt.MIXIN_RULE&&(r=!0);let a=t.rules;if(a&&!r)for(let t,r=0,s=a.length;r<s&&(t=a[r]);r++)Ut(t,e,n,i)}window.ShadyDOM&&window.ShadyDOM.wrap;const Bt="css-build";function qt(t){if(void 0!==yt)return yt;if(void 0===t.__cssBuild){const e=t.getAttribute(Bt);if(e)t.__cssBuild=e;else{const e=function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;if(e instanceof Comment){const t=e.textContent.trim().split(":");if(t[0]===Bt)return t[1]}return""}(t);""!==e&&function(t){const e="template"===t.localName?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */(t),t.__cssBuild=e}}return t.__cssBuild||""}function $t(t){return""!==qt(t)}function Wt(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function Yt(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const Kt=/;\s*/m,Gt=/^\s*(initial)|(inherit)\s*$/,Jt=/\s*!important/,Xt="_-_";class Qt{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Zt=null;class te{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Qt}detectMixin(t){return function(t){const e=Ot.test(t)||At.test(t);return Ot.lastIndex=0,At.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const i=n[t];It(i)?_t||(Dt(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=jt(t);return this.transformRules(n,e),t.textContent=Ft(n),n}transformCustomStyle(t){let e=jt(t);return Ut(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=Ft(e),e}transformRules(t,e){this._currentElement=e,Ut(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,e){return t=t.replace(At,(t,n,i,r)=>this._produceCssProperties(t,n,i,r,e)),this._consumeCssProperties(t,e)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let e=t;for(;e.parent;)e=e.parent;const n={};let i=!1;return Ut(e,e=>{(i=i||e===t)||e.selector===t.selector&&Object.assign(n,this._cssTextToMap(e.parsedCssText))}),n}_consumeCssProperties(t,e){let n=null;for(;n=Ot.exec(t);){let i=n[0],r=n[1],s=n.index,a=s+i.indexOf("@apply"),o=s+i.length,l=t.slice(0,a),c=t.slice(o),h=e?this._fallbacksFromPreviousRules(e):{};Object.assign(h,this._cssTextToMap(l));let d=this._atApplyToCssProperties(r,h);t=`${l}${d}${c}`,Ot.lastIndex=s+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(Kt,"");let n=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){let r,s,a;this._currentElement&&(i.dependants[this._currentElement]=!0);const o=i.properties;for(r in o)a=e&&e[r],s=[r,": var(",t,Xt,r],a&&s.push(",",a.replace(Jt,"")),s.push(")"),Jt.test(o[r])&&s.push(" !important"),n.push(s.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=Gt.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t,e=!1){let n,i,r=t.split(";"),s={};for(let t,a,o=0;o<r.length;o++)(t=r[o])&&(a=t.split(":")).length>1&&(n=a[0].trim(),i=a.slice(1).join(":"),e&&(i=this._replaceInitialOrInherit(n,i)),s[n]=i);return s}_invalidateMixinEntry(t){if(Zt)for(let e in t.dependants)e!==this._currentElement&&Zt(e)}_produceCssProperties(t,e,n,i,r){if(n&&function t(e,n){let i=e.indexOf("var(");if(-1===i)return n(e,"","","");let r=function(t,e){let n=0;for(let i=e,r=t.length;i<r;i++)if("("===t[i])n++;else if(")"===t[i]&&0==--n)return i;return-1}(e,i+3),s=e.substring(i+4,r),a=e.substring(0,i),o=t(e.substring(r+1),n),l=s.indexOf(",");return-1===l?n(a,s.trim(),"",o):n(a,s.substring(0,l).trim(),s.substring(l+1).trim(),o)}(n,(t,e)=>{e&&this._map.get(e)&&(i=`@apply ${e};`)}),!i)return t;let s=this._consumeCssProperties(""+i,r),a=t.slice(0,t.indexOf("--")),o=this._cssTextToMap(s,!0),l=o,c=this._map.get(e),h=c&&c.properties;h?l=Object.assign(Object.create(h),o):this._map.set(e,l);let d,p,u=[],m=!1;for(d in l)void 0===(p=o[d])&&(p="initial"),!h||d in h||(m=!0),u.push(`${e}${Xt}${d}: ${p}`);return m&&this._invalidateMixinEntry(c),c&&(c.properties=l),n&&(a=`${t};${a}`),`${a}${u.join("; ")};`}}te.prototype.detectMixin=te.prototype.detectMixin,te.prototype.transformStyle=te.prototype.transformStyle,te.prototype.transformCustomStyle=te.prototype.transformCustomStyle,te.prototype.transformRules=te.prototype.transformRules,te.prototype.transformRule=te.prototype.transformRule,te.prototype.transformTemplate=te.prototype.transformTemplate,te.prototype._separator=Xt,Object.defineProperty(te.prototype,"invalidCallback",{get:()=>Zt,set(t){Zt=t}});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const ee={},ne="_applyShimCurrentVersion",ie="_applyShimNextVersion",re="_applyShimValidatingVersion",se=Promise.resolve();
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function ae(t){let e=ee[t];e&&function(t){t[ne]=t[ne]||0,t[re]=t[re]||0,t[ie]=(t[ie]||0)+1}(e)}function oe(t){return t[ne]===t[ie]}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let le,ce=null,he=window.HTMLImports&&window.HTMLImports.whenReady||null;function de(t){requestAnimationFrame((function(){he?he(t):(ce||(ce=new Promise(t=>{le=t}),"complete"===document.readyState?le():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&le()})),ce.then((function(){t&&t()})))}))}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const pe="__seenByShadyCSS",ue="__shadyCSSCachedStyle";let me=null,fe=null;class ge{constructor(){this.customStyles=[],this.enqueued=!1,de(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&fe&&(this.enqueued=!0,de(fe))}addCustomStyle(t){t[pe]||(t[pe]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[ue])return t[ue];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[ue])continue;const i=this.getStyleForCustomStyle(n);if(i){const t=i.__appliedElement||i;me&&me(t),n[ue]=t}}return t}}ge.prototype.addCustomStyle=ge.prototype.addCustomStyle,ge.prototype.getStyleForCustomStyle=ge.prototype.getStyleForCustomStyle,ge.prototype.processStyles=ge.prototype.processStyles,Object.defineProperties(ge.prototype,{transformCallback:{get:()=>me,set(t){me=t}},validateCallback:{get:()=>fe,set(t){let e=!1;fe||(e=!0),fe=t,e&&this.enqueueDocumentValidation()}}});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const _e=new te;class ve{constructor(){this.customStyleInterface=null,_e.invalidCallback=ae}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{_e.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,e){if(this.ensure(),$t(t))return;ee[e]=t;let n=_e.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&_e.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Wt(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",i="";return e?e.indexOf("-")>-1?n=e:(i=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,i=t.extends),{is:n,typeExtension:i}}(t),n=ee[e];if((!n||!$t(n))&&n&&!oe(n)){(function(t){return!oe(t)&&t[re]===t[ie]})(n)||(this.prepareTemplate(n,e),function(t){t[re]=t[ie],t._validating||(t._validating=!0,se.then((function(){t[ne]=t[ie],t._validating=!1})))}(n));let i=t.shadowRoot;if(i){let t=i.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=Ft(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new ve;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,i){t.flushCustomStyles(),t.prepareTemplate(e,n)},prepareTemplateStyles(t,e,n){window.ShadyCSS.prepareTemplate(t,e,n)},prepareTemplateDom(t,e){},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>Yt(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:St,nativeShadow:_t,cssBuild:yt,disableRuntime:wt},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=_e,
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
window.JSCompiler_renameProperty=function(t,e){return t};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let ye,be,we=/(url\()([^)]*)(\))/g,Se=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Ce(t,e){if(t&&Se.test(t))return t;if("//"===t)return t;if(void 0===ye){ye=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",ye="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),ye)try{return new URL(t,e).href}catch(e){return t}return be||((be=document.implementation.createHTMLDocument("temp")).base=be.createElement("base"),be.head.appendChild(be.base),be.anchor=be.createElement("a"),be.body.appendChild(be.anchor)),be.base.href=e,be.anchor.href=t,be.anchor.href||t}function ze(t,e){return t.replace(we,(function(t,n,i,r){return n+"'"+Ce(i.replace(/["']/g,""),e)+"'"+r}))}function xe(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const Me=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let Te=xe(document.baseURI||window.location.href),Ee=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Pe=!1,He=!1,ke=!1,Le=!1,Ae=!1,Oe=!0,Ve=0;const Ne=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=Ve++;return function(i){let r=i.__mixinSet;if(r&&r[n])return i;let s=e,a=s.get(i);a||(a=t(i),s.set(i,a));let o=Object.create(a.__mixinSet||r||null);return o[n]=!0,a.__mixinSet=o,a}};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */let Re={},De={};function Ie(t,e){Re[t]=De[t.toLowerCase()]=e}function Fe(t){return Re[t]||De[t.toLowerCase()]}class je extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=Fe(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,i){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=Ce(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=xe(e)}return this.__assetpath}register(t){if(t=t||this.id){if(He&&void 0!==Fe(t))throw Ie(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ie(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}je.prototype.modules=Re,customElements.define("dom-module",je);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const Ue="link[rel=import][type~=css]",Be="include",qe="shady-unscoped";function $e(t){return je.import(t)}function We(t){const e=ze((t.body?t.body:t).textContent,t.baseURI),n=document.createElement("style");return n.textContent=e,n}function Ye(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...Ke(e[t]));return n}function Ke(t){const e=$e(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...Je(e));const n=e.querySelector("template");n&&t.push(...Ge(n,e.assetpath)),e._styles=t}return e._styles}function Ge(t,e){if(!t._styles){const n=[],i=t.content.querySelectorAll("style");for(let t=0;t<i.length;t++){let r=i[t],s=r.getAttribute(Be);s&&n.push(...Ye(s).filter((function(t,e,n){return n.indexOf(t)===e}))),e&&(r.textContent=ze(r.textContent,e)),n.push(r)}t._styles=n}return t._styles}function Je(t){const e=[],n=t.querySelectorAll(Ue);for(let t=0;t<n.length;t++){let i=n[t];if(i.import){const t=i.import,n=i.hasAttribute(qe);if(n&&!t._unscopedStyle){const e=We(t);e.setAttribute(qe,""),t._unscopedStyle=e}else t._style||(t._style=We(t));e.push(n?t._unscopedStyle:t._style)}}return e}function Xe(t){let e=$e(t);if(e&&void 0===e._cssText){let t=function(t){let e="",n=Je(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const i=Ge(t,e);for(let t=0;t<i.length;t++){let e=i[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}const Qe=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Ze(t){return t.indexOf(".")>=0}function tn(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function en(t,e){return 0===t.indexOf(e+".")}function nn(t,e){return 0===e.indexOf(t+".")}function rn(t,e,n){return e+n.slice(t.length)}function sn(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let i=t[n].toString().split(".");for(let t=0;t<i.length;t++)e.push(i[t])}return e.join(".")}return t}function an(t){return Array.isArray(t)?sn(t).split("."):t.toString().split(".")}function on(t,e,n){let i=t,r=an(e);for(let t=0;t<r.length;t++){if(!i)return;i=i[r[t]]}return n&&(n.path=r.join(".")),i}function ln(t,e,n){let i=t,r=an(e),s=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(!(i=i[r[t]]))return}i[s]=n}else i[e]=n;return r.join(".")}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const cn={},hn=/-[a-z]/g,dn=/([A-Z])/g;function pn(t){return cn[t]||(cn[t]=t.indexOf("-")<0?t:t.replace(hn,t=>t[1].toUpperCase()))}function un(t){return cn[t]||(cn[t]=t.replace(dn,"-$1").toLowerCase())}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */let mn=0,fn=0,gn=[],_n=0,vn=document.createTextNode("");new window.MutationObserver((function(){const t=gn.length;for(let e=0;e<t;e++){let t=gn[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}gn.splice(0,t),fn+=t})).observe(vn,{characterData:!0});const yn={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},bn={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},wn={run:t=>(vn.textContent=_n++,gn.push(t),mn++),cancel(t){const e=t-fn;if(e>=0){if(!gn[e])throw new Error("invalid async handle: "+t);gn[e]=null}}},Sn=wn,Cn=Ne(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let i=this.__data[t],r=this._shouldPropertyChange(t,e,i);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=i),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Sn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,i){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,i)}_attributeToProperty(t,e,n){if(!this.__serializing){const i=this.__dataAttributes,r=i&&i[t]||t;this[r]=this._deserializeValue(e,n||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const i=this._serializeValue(e);"class"!==n&&"name"!==n&&"slot"!==n||(t=Qe(t)),void 0===i?t.removeAttribute(n):t.setAttribute(n,i)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}}),zn={};let xn=HTMLElement.prototype;for(;xn;){let t=Object.getOwnPropertyNames(xn);for(let e=0;e<t.length;e++)zn[t[e]]=!0;xn=Object.getPrototypeOf(xn)}const Mn=Ne(t=>{const e=Cn(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(pn(t[e]))}static attributeNameForProperty(t){return un(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!zn[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),Tn={"dom-if":!0,"dom-repeat":!0};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function En(t){let e=t.getAttribute("is");if(e&&Tn[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function Pn(t,e){let n=e.parentInfo&&Pn(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,i=0;t;t=t.nextSibling)if(e.parentIndex===i++)return t}function Hn(t,e,n,i){i.id&&(e[i.id]=n)}function kn(t,e,n){if(n.events&&n.events.length)for(let i,r=0,s=n.events;r<s.length&&(i=s[r]);r++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function Ln(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const An=Ne(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let i=!1,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(r,e,n)||i,r.firstChild&&this._parseTemplateChildNodes(r,e,n),r.hasAttributes&&r.hasAttributes()&&(i=this._parseTemplateNodeAttributes(r,e,n)||i),i}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let i,r=t.firstChild,s=0;r;r=i){if("template"==r.localName&&(r=En(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,i=n.nextSibling,t.removeChild(n),n=i;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let a={parentIndex:s,parentInfo:n};this._parseTemplateNode(r,e,a)&&(a.infoIndex=e.nodeInfoList.push(a)-1),r.parentNode&&s++}}static _parseTemplateNestedTemplate(t,e,n){let i=t,r=this._parseTemplate(i,e);return(r.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),n.templateInfo=r,!0}static _parseTemplateNodeAttributes(t,e,n){let i=!1,r=Array.from(t.attributes);for(let s,a=r.length-1;s=r[a];a--)i=this._parseTemplateNodeAttribute(t,e,n,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(t,e,n,i,r){return"on-"===i.slice(0,3)?(t.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:r}),!0):"id"===i&&(n.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,i=e.content||t.content,r=document.importNode(i,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let s=r.nodeList=new Array(n.length);r.$={};for(let t,e=0,i=n.length;e<i&&(t=n[e]);e++){let n=s[e]=Pn(r,t);Hn(0,r.$,n,t),Ln(0,n,t),kn(this,n,t)}return r=r}_addMethodEventListenerToNode(t,e,n,i){let r=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||t,0,n);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}});
/**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */let On=0;const Vn={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Nn=/[A-Z]/;function Rn(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],i=n[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}}else n=t[e]={};return n}function Dn(t,e,n,i,r,s){if(e){let a=!1,o=On++;for(let l in n)In(t,e,o,l,n,i,r,s)&&(a=!0);return a}return!1}function In(t,e,n,i,r,s,a,o){let l=!1,c=e[a?tn(i):i];if(c)for(let e,h=0,d=c.length;h<d&&(e=c[h]);h++)e.info&&e.info.lastRun===n||a&&!Fn(i,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,i,r,s,e.info,a,o),l=!0);return l}function Fn(t,e){if(e){let n=e.name;return n==t||!(!e.structured||!en(n,t))||!(!e.wildcard||!nn(n,t))}return!0}function jn(t,e,n,i,r){let s="string"==typeof r.method?t[r.method]:r.method,a=r.property;s?s.call(t,t.__data[a],i[a]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Un(t,e,n){let i=tn(e);if(i!==e){return Bn(t,un(i)+"-changed",n[e],e),!0}return!1}function Bn(t,e,n,i){let r={value:n,queueProperty:!0};i&&(r.path=i),Qe(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function qn(t,e,n,i,r,s){let a=(s?tn(e):e)!=e?e:null,o=a?on(t,a):t.__data[e];a&&void 0===o&&(o=n[e]),Bn(t,r.eventName,o,a)}function $n(t,e,n,i,r){let s=t.__data[e];Ee&&(s=Ee(s,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,s)}function Wn(t,e,n,i,r){let s=Zn(t,e,n,i,r),a=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,s,!0):t[a]=s}function Yn(t,e,n,i,r,s,a){n.bindings=n.bindings||[];let o={kind:i,target:r,parts:s,literal:a,isCompound:1!==s.length};if(n.bindings.push(o),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(o)){let{event:t,negate:e}=o.parts[0];o.listenerEvent=t||un(r)+"-changed",o.listenerNegate=e}let l=e.nodeInfoList.length;for(let n=0;n<o.parts.length;n++){let i=o.parts[n];i.compoundIndex=n,Kn(t,e,o,i,l)}}function Kn(t,e,n,i,r){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,a={index:r,binding:n,part:i,evaluator:t};for(let n=0;n<s.length;n++){let i=s[n];"string"==typeof i&&((i=ri(i)).wildcard=!0),t._addTemplatePropertyEffect(e,i.rootProperty,{fn:Gn,info:a,trigger:i})}}}function Gn(t,e,n,i,r,s,a){let o=a[r.index],l=r.binding,c=r.part;if(s&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let i=n[e];e=rn(c.source,l.target,e),o._setPendingPropertyOrPath(e,i,!1,!0)&&t._enqueueClient(o)}else{!function(t,e,n,i,r){r=function(t,e,n,i){if(n.isCompound){let r=t.__dataCompoundStorage[n.target];r[i.compoundIndex]=e,e=r.join("")}"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e));return e}(e,r,n,i),Ee&&(r=Ee(r,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,r,n.target);else{let i=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?e[Vn.READ_ONLY]&&e[Vn.READ_ONLY][i]||e._setPendingProperty(i,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,r)}}(t,o,l,c,r.evaluator._evaluateBinding(t,c,e,n,i,s))}}function Jn(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,r=new Array(i.length);for(let t=0;t<i.length;t++)r[t]=i[t].literal;let s=e.target;n[s]=r,e.literal&&"property"==e.kind&&("className"===s&&(t=Qe(t)),t[s]=e.literal)}}function Xn(t,e,n){if(n.listenerEvent){let i=n.parts[0];t.addEventListener(n.listenerEvent,(function(t){!function(t,e,n,i,r){let s,a=t.detail,o=a&&a.path;o?(i=rn(n,i,o),s=a&&a.value):s=t.currentTarget[n],s=r?!s:s,e[Vn.READ_ONLY]&&e[Vn.READ_ONLY][i]||!e._setPendingPropertyOrPath(i,s,!0,Boolean(o))||a&&a.queueProperty||e._invalidateProperties()}(t,e,n.target,i.source,i.negate)}))}}function Qn(t,e,n,i,r,s){s=e.static||s&&("object"!=typeof s||s[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:s};for(let r,s=0;s<e.args.length&&(r=e.args[s]);s++)r.literal||t._addPropertyEffect(r.rootProperty,n,{fn:i,info:a,trigger:r});s&&t._addPropertyEffect(e.methodName,n,{fn:i,info:a})}function Zn(t,e,n,i,r){let s=t._methodHost||t,a=s[r.methodName];if(a){let i=t._marshalArgs(r.args,e,n);return a.apply(s,i)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const ti=[],ei=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function ni(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function ii(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:ti};if(e[2].trim()){return function(t,e){return e.args=t.map((function(t){let n=ri(t);return n.literal||(e.static=!1),n}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function ri(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=tn(e),n.structured=Ze(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function si(t,e,n){let i=on(t,n);return void 0===i&&(i=e[n]),i}function ai(t,e,n,i){t.notifyPath(n+".splices",{indexSplices:i}),t.notifyPath(n+".length",e.length)}function oi(t,e,n,i,r,s){ai(t,e,n,[{index:i,addedCount:r,removed:s,object:e,type:"splice"}])}const li=Ne(t=>{const e=An(Mn(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return Vn}_initializeProperties(){super._initializeProperties(),ci.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Vn.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==Vn.READ_ONLY);let i=Rn(this,e)[t];i||(i=this[e][t]=[]),i.push(n)}_removePropertyEffect(t,e,n){let i=Rn(this,e)[t],r=i.indexOf(n);r>=0&&i.splice(r,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Vn.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Vn.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Vn.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Vn.COMPUTE)}_setPendingPropertyOrPath(t,e,n,i){if(i||tn(Array.isArray(t)?t[0]:t)!==t){if(!i){let n=on(this,t);if(!(t=ln(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let i=t.__dataLinkedPaths;if(i){let r;for(let s in i){let a=i[s];nn(s,e)?(r=rn(s,a,e),t._setPendingPropertyOrPath(r,n,!0,!0)):nn(a,e)&&(r=rn(a,s,e),t._setPendingPropertyOrPath(r,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||("className"===e&&(t=Qe(t)),t[e]=n)}_setPendingProperty(t,e,n){let i=this.__dataHasPaths&&Ze(t),r=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),i?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(i||this[Vn.NOTIFY]&&this[Vn.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[Vn.READ_ONLY]&&this[Vn.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,i){let r=t[Vn.COMPUTE];if(r){let s=e;for(;Dn(t,r,s,n,i);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),s=t.__dataPending,t.__dataPending=null}}(this,e,n,i);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,i),this._flushClients(),Dn(this,this[Vn.REFLECT],e,n,i),Dn(this,this[Vn.OBSERVE],e,n,i),r&&function(t,e,n,i,r){let s,a,o=t[Vn.NOTIFY],l=On++;for(let a in e)e[a]&&(o&&In(t,o,l,a,n,i,r)?s=!0:r&&Un(t,a,n)&&(s=!0));s&&(a=t.__dataHost)&&a._invalidateProperties&&a._invalidateProperties()}(this,r,e,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[Vn.PROPAGATE]&&Dn(this,this[Vn.PROPAGATE],t,e,n);let i=this.__templateInfo;for(;i;)Dn(this,i.propertyEffects,t,e,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(t,e){t=sn(t),e=sn(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=sn(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};ai(this,on(this,t,n),n.path,e)}get(t,e){return on(e||this,t)}set(t,e,n){n?ln(n,t,e):this[Vn.READ_ONLY]&&this[Vn.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},i=on(this,t,n),r=i.length,s=i.push(...e);return e.length&&oi(this,i,n.path,r,e.length,[]),s}pop(t){let e={path:""},n=on(this,t,e),i=Boolean(n.length),r=n.pop();return i&&oi(this,n,e.path,n.length,0,[r]),r}splice(t,e,n,...i){let r,s={path:""},a=on(this,t,s);return e<0?e=a.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?a.splice(e):a.splice(e,n,...i),(i.length||r.length)&&oi(this,a,s.path,e,i.length,r),r}shift(t){let e={path:""},n=on(this,t,e),i=Boolean(n.length),r=n.shift();return i&&oi(this,n,e.path,0,0,[r]),r}unshift(t,...e){let n={path:""},i=on(this,t,n),r=i.unshift(...e);return e.length&&oi(this,i,n.path,0,e.length,[]),r}notifyPath(t,e){let n;if(1==arguments.length){let i={path:""};e=on(this,t,i),n=i.path}else n=Array.isArray(t)?sn(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,Vn.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let i={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,Vn.OBSERVE,{fn:jn,info:i,trigger:{name:t}}),n&&this._addPropertyEffect(e,Vn.OBSERVE,{fn:jn,info:i,trigger:{name:e}})}_createMethodObserver(t,e){let n=ii(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");Qn(this,n,Vn.OBSERVE,Zn,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Vn.NOTIFY,{fn:qn,info:{eventName:un(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Vn.REFLECT,{fn:$n,info:{attrName:e}})}_createComputedProperty(t,e,n){let i=ii(e);if(!i)throw new Error("Malformed computed expression '"+e+"'");Qn(this,i,Vn.COMPUTE,Wn,t,n)}_marshalArgs(t,e,n){const i=this.__data,r=[];for(let s=0,a=t.length;s<a;s++){let{name:a,structured:o,wildcard:l,value:c,literal:h}=t[s];if(!h)if(l){const t=nn(a,e),r=si(i,n,t?e:a);c={path:t?e:a,value:r,base:t?on(i,a):r}}else c=o?si(i,n,a):i[a];r[s]=c}return r}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),i=this.__templateInfo==n;if(!i)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&((n=Object.create(n)).wasPreBound=i,!i&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let i=t.propertyEffects=t.propertyEffects||{};(i[e]=i[e]||[]).push(n)}_stampTemplate(t){ci.beginHosting(this);let e=super._stampTemplate(t);ci.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:i}=e;if(i.length)for(let e=0;e<i.length;e++){let r=i[e],s=n[e],a=r.bindings;if(a)for(let e=0;e<a.length;e++){let n=a[e];Jn(s,n),Xn(s,t,n)}s.__dataHost=t}}(this,n),this.__dataReady&&Dn(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,n,i){let r=e._parseTemplateNode.call(this,t,n,i);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,n);e&&(t.textContent=ni(e)||" ",Yn(this,n,i,"text","textContent",e),r=!0)}return r}static _parseTemplateNodeAttribute(t,n,i,r,s){let a=this._parseBindings(s,n);if(a){let e=r,s="property";Nn.test(r)?s="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),s="attribute");let o=ni(a);return o&&"attribute"==s&&("class"==r&&t.hasAttribute("class")&&(o+=" "+t.getAttribute(r)),t.setAttribute(r,o)),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===s&&(r=pn(r)),Yn(this,n,i,s,r,a,o),!0}return e._parseTemplateNodeAttribute.call(this,t,n,i,r,s)}static _parseTemplateNestedTemplate(t,n,i){let r=e._parseTemplateNestedTemplate.call(this,t,n,i),s=i.templateInfo.hostProps;for(let t in s){Yn(this,n,i,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return r}static _parseBindings(t,e){let n,i=[],r=0;for(;null!==(n=ei.exec(t));){n.index>r&&i.push({literal:t.slice(r,n.index)});let s=n[1][0],a=Boolean(n[2]),o=n[3].trim(),l=!1,c="",h=-1;"{"==s&&(h=o.indexOf("::"))>0&&(c=o.substring(h+2),o=o.substring(0,h),l=!0);let d=ii(o),p=[];if(d){let{args:t,methodName:n}=d;for(let e=0;e<t.length;e++){let n=t[e];n.literal||p.push(n)}let i=e.dynamicFns;(i&&i[n]||d.static)&&(p.push(n),d.dynamicFn=!0)}else p.push(o);i.push({source:o,mode:s,negate:a,customEvent:l,signature:d,dependencies:p,event:c}),r=ei.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&i.push({literal:e})}return i.length?i:null}static _evaluateBinding(t,e,n,i,r,s){let a;return a=e.signature?Zn(t,n,i,0,e.signature):n!=e.source?on(t,e.source):s&&Ze(n)?on(t,n):t.__data[n],e.negate&&(a=!a),a}}});const ci=new class{constructor(){this.stack=[]}registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const hi=Ne(t=>{const e=Cn(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function i(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const n=t.properties;n&&(e=
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function(t){const e={};for(let n in t){const i=t[n];e[n]="function"==typeof i?{type:i}:i}return e}(n))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){this.prototype;const t=this._properties;this.__observedAttributes=t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=i(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,i(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),di="3.3.0",pi=window.ShadyCSS&&window.ShadyCSS.cssBuild,ui=Ne(t=>{const e=hi(li(t));function n(t,e,n,i){n.computed&&(n.readOnly=!0),n.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,n.computed,i)),n.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!n.computed):!1===n.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),n.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===n.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),n.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===n.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),n.observer&&t._createPropertyObserver(e,n.observer,i[n.observer]),t._addPropertyToAttributeMap(e)}function i(t,e,n,i){if(!pi){const r=e.content.querySelectorAll("style"),s=Ge(e),a=function(t){let e=$e(t);return e?Je(e):[]}(n),o=e.content.firstElementChild;for(let n=0;n<a.length;n++){let r=a[n];r.textContent=t._processStyleText(r.textContent,i),e.content.insertBefore(r,o)}let l=0;for(let e=0;e<s.length;e++){let n=s[e],a=r[l];a!==n?(n=n.cloneNode(!0),a.parentNode.insertBefore(n,a)):l++,n.textContent=t._processStyleText(n.textContent,i)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}return class extends e{static get polymerElementVersion(){return di}static _finalizeClass(){e._finalizeClass.call(this);const t=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):Le||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)n(this.prototype,e,t[e],t)}static createObservers(t,e){const n=this.prototype;for(let i=0;i<t.length;i++)n._createMethodObserver(t[i],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!He||ke)&&(e=je.import(t,"template"),He&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=xe(t.url);else{const t=je.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Te,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let i=e[n];"value"in i&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=i)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return ze(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const n=this.importPath;i(this,e,t,n?Ce(n):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=Qe(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t)),Ae&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=Ce(this.importPath)),Ce(t,e)}static _parseTemplateContent(t,n,i){return n.dynamicFns=n.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,n,i)}static _addTemplatePropertyEffect(t,n,i){return!Le||n in this._properties||console.warn(`Property '${n}' used in template but not declared in 'properties'; `+"attribute will not be observed."),e._addTemplatePropertyEffect.call(this,t,n,i)}}});
/**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class mi{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,fi.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),fi.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,n){return t instanceof mi?t._cancelAsync():t=new mi,t.setConfig(e,n),t}}let fi=new Set;const gi=function(t){fi.add(t)},_i=function(){const t=Boolean(fi.size);return fi.forEach(t=>{try{t.flush()}catch(t){setTimeout(()=>{throw t})}}),t};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let vi="string"==typeof document.head.style.touchAction,yi="__polymerGestures",bi="__polymerGesturesHandled",wi="__polymerGesturesTouchAction",Si=25,Ci=5,zi=2500,xi=["mousedown","mousemove","mouseup","click"],Mi=[0,1,4,2],Ti=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function Ei(t){return xi.indexOf(t)>-1}let Pi=!1;function Hi(t){if(!Ei(t)&&"touchend"!==t)return vi&&Pi&&Pe?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){Pi=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let ki=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Li=[],Ai={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Oi={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Vi(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let i=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<i.length;t++)e.push(i[t])}}return e}let Ni=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[bi]={skip:!0},"click"===t.type)){let e=!1,i=Ui(t);for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)Li.push(i[t]);else if(n=i[t],Ai[n.localName]){let n=Vi(i[t]);for(let t=0;t<n.length;t++)e=e||Li.indexOf(n[t])>-1}if(i[t]===Ii.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Ri(t){let e=ki?["click"]:xi;for(let n,i=0;i<e.length;i++)n=e[i],t?(Li.length=0,document.addEventListener(n,Ni,!0)):document.removeEventListener(n,Ni,!0)}function Di(t){let e=t.type;if(!Ei(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!Ti&&(e=Mi[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let Ii={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Fi(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function ji(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}Oe&&document.addEventListener("touchend",(function(t){if(!Oe)return;Ii.mouse.mouseIgnoreJob||Ri(!0),Ii.mouse.target=Ui(t)[0],Ii.mouse.mouseIgnoreJob=mi.debounce(Ii.mouse.mouseIgnoreJob,yn.after(zi),(function(){Ri(),Ii.mouse.target=null,Ii.mouse.mouseIgnoreJob=null}))}),!!Pi&&{passive:!0});const Ui=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Bi={},qi=[];function $i(t){const e=Ui(t);return e.length>0?e[0]:t.target}function Wi(t){let e,n=t.type,i=t.currentTarget[yi];if(!i)return;let r=i[n];if(r){if(!t[bi]&&(t[bi]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(Ii.touch.id=e.identifier),Ii.touch.id!==e.identifier)return;vi||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)Ii.touch.x=e.clientX,Ii.touch.y=e.clientY,Ii.touch.scrollDecided=!1;else if("touchmove"===n){if(Ii.touch.scrollDecided)return;Ii.touch.scrollDecided=!0;let n=function(t){let e="auto",n=Ui(t);for(let t,i=0;i<n.length;i++)if((t=n[i])[wi]){e=t[wi];break}return e}(t),i=!1,r=Math.abs(Ii.touch.x-e.clientX),s=Math.abs(Ii.touch.y-e.clientY);t.cancelable&&("none"===n?i=!0:"pan-x"===n?i=s>r:"pan-y"===n&&(i=r>s)),i?t.preventDefault():Qi("track")}}(t)}if(!(e=t[bi]).skip){for(let n,i=0;i<qi.length;i++)r[(n=qi[i]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let i,s=0;s<qi.length;s++)r[(i=qi[s]).name]&&!e[i.name]&&(e[i.name]=!0,i[n](t))}}}function Yi(t,e,n){return!!Bi[e]&&(function(t,e,n){let i=Bi[e],r=i.deps,s=i.name,a=t[yi];a||(t[yi]=a={});for(let e,n,i=0;i<r.length;i++)e=r[i],ki&&Ei(e)&&"click"!==e||((n=a[e])||(a[e]=n={_count:0}),0===n._count&&t.addEventListener(e,Wi,Hi(e)),n[s]=(n[s]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),i.touchAction&&Ji(t,i.touchAction)}(t,e,n),!0)}function Ki(t,e,n){return!!Bi[e]&&(function(t,e,n){let i=Bi[e],r=i.deps,s=i.name,a=t[yi];if(a)for(let e,n,i=0;i<r.length;i++)e=r[i],(n=a[e])&&n[s]&&(n[s]=(n[s]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,Wi,Hi(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function Gi(t){qi.push(t);for(let e=0;e<t.emits.length;e++)Bi[t.emits[e]]=t}function Ji(t,e){vi&&t instanceof HTMLElement&&wn.run(()=>{t.style.touchAction=e}),t[wi]=e}function Xi(t,e,n){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,Qe(t).dispatchEvent(i),i.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function Qi(t){let e=function(t){for(let e,n=0;n<qi.length;n++){e=qi[n];for(let n,i=0;i<e.emits.length;i++)if((n=e.emits[i])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Zi(t,e,n,i){e&&Xi(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(t){return Qi(t)}})}function tr(t,e,n){if(t.prevent)return!1;if(t.started)return!0;let i=Math.abs(t.x-e),r=Math.abs(t.y-n);return i>=Ci||r>=Ci}function er(t,e,n){if(!e)return;let i,r=t.moves[t.moves.length-2],s=t.moves[t.moves.length-1],a=s.x-t.x,o=s.y-t.y,l=0;r&&(i=s.x-r.x,l=s.y-r.y),Xi(e,"track",{state:t.state,x:n.clientX,y:n.clientY,dx:a,dy:o,ddx:i,ddy:l,sourceEvent:n,hover:function(){return function(t,e){let n=document.elementFromPoint(t,e),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){if(i===(i=i.shadowRoot.elementFromPoint(t,e)))break;i&&(n=i)}return n}(n.clientX,n.clientY)}})}function nr(t,e,n){let i=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),s=$i(n||e);!s||Oi[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=Si&&r<=Si||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=$i(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),i=t.pageX,r=t.pageY;return!(i>=n.left&&i<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(t.prevent||Xi(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:n}))}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */Gi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){ji(this.info)},mousedown:function(t){if(!Di(t))return;let e=$i(t),n=this;Fi(this.info,(function(t){Di(t)||(Zi("up",e,t),ji(n.info))}),(function(t){Di(t)&&Zi("up",e,t),ji(n.info)})),Zi("down",e,t)},touchstart:function(t){Zi("down",$i(t),t.changedTouches[0],t)},touchend:function(t){Zi("up",$i(t),t.changedTouches[0],t)}}),Gi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,ji(this.info)},mousedown:function(t){if(!Di(t))return;let e=$i(t),n=this,i=function(t){let i=t.clientX,r=t.clientY;tr(n.info,i,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&Qi("tap"),n.info.addMove({x:i,y:r}),Di(t)||(n.info.state="end",ji(n.info)),e&&er(n.info,e,t),n.info.started=!0)};Fi(this.info,i,(function(t){n.info.started&&i(t),ji(n.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=$i(t),n=t.changedTouches[0],i=n.clientX,r=n.clientY;tr(this.info,i,r)&&("start"===this.info.state&&Qi("tap"),this.info.addMove({x:i,y:r}),er(this.info,e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=$i(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),er(this.info,e,n))}}),Gi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){Di(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){Di(t)&&nr(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){nr(this.info,t.changedTouches[0],t)}});const ir=Ne(t=>{return class extends t{_addEventListenerToNode(t,e,n){Yi(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Ki(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}}),rr=/:host\(:dir\((ltr|rtl)\)\)/g,sr=':host([dir="$1"])',ar=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,or=':host([dir="$2"]) $1',lr=/:dir\((?:ltr|rtl)\)/,cr=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),hr=[];
/**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */let dr=null,pr="";function ur(){pr=document.documentElement.getAttribute("dir")}function mr(t){if(!t.__autoDirOptOut){t.setAttribute("dir",pr)}}function fr(){ur(),pr=document.documentElement.getAttribute("dir");for(let t=0;t<hr.length;t++)mr(hr[t])}const gr=Ne(t=>{cr||dr||(ur(),(dr=new MutationObserver(fr)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Mn(t);class n extends e{static _processStyleText(t,n){return t=e._processStyleText.call(this,t,n),!cr&&lr.test(t)&&(t=this._replaceDirInCssText(t),this.__activateDir=!0),t}static _replaceDirInCssText(t){let e=t;return e=(e=e.replace(rr,sr)).replace(ar,or)}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(dr&&dr.takeRecords().length&&fr(),hr.push(this),mr(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=hr.indexOf(this);t>-1&&hr.splice(t,1)}}}return n.__activateDir=!1,n});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */let _r=!1,vr=[],yr=[];function br(){_r=!0,requestAnimationFrame((function(){_r=!1,function(t){for(;t.length;)wr(t.shift())}(vr),setTimeout((function(){!function(t){for(let e=0,n=t.length;e<n;e++)wr(t.shift())}(yr)}))}))}function wr(t){const e=t[0],n=t[1],i=t[2];try{n.apply(e,i)}catch(t){setTimeout(()=>{throw t})}}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function Sr(){document.body.removeAttribute("unresolved")}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function Cr(t,e,n){return{index:t,removed:e,addedCount:n}}"interactive"===document.readyState||"complete"===document.readyState?Sr():window.addEventListener("DOMContentLoaded",Sr);const zr=0,xr=1,Mr=2,Tr=3;function Er(t,e,n,i,r,s){let a,o=0,l=0,c=Math.min(n-e,s-r);if(0==e&&0==r&&(o=function(t,e,n){for(let i=0;i<n;i++)if(!Hr(t[i],e[i]))return i;return n}(t,i,c)),n==t.length&&s==i.length&&(l=function(t,e,n){let i=t.length,r=e.length,s=0;for(;s<n&&Hr(t[--i],e[--r]);)s++;return s}(t,i,c-o)),r+=o,s-=l,(n-=l)-(e+=o)==0&&s-r==0)return[];if(e==n){for(a=Cr(e,[],0);r<s;)a.removed.push(i[r++]);return[a]}if(r==s)return[Cr(e,[],n-e)];let h=function(t){let e=t.length-1,n=t[0].length-1,i=t[e][n],r=[];for(;e>0||n>0;){if(0==e){r.push(Mr),n--;continue}if(0==n){r.push(Tr),e--;continue}let s,a=t[e-1][n-1],o=t[e-1][n],l=t[e][n-1];(s=o<l?o<a?o:a:l<a?l:a)==a?(a==i?r.push(zr):(r.push(xr),i=a),e--,n--):s==o?(r.push(Tr),e--,i=o):(r.push(Mr),n--,i=l)}return r.reverse(),r}(function(t,e,n,i,r,s){let a=s-r+1,o=n-e+1,l=new Array(a);for(let t=0;t<a;t++)l[t]=new Array(o),l[t][0]=t;for(let t=0;t<o;t++)l[0][t]=t;for(let n=1;n<a;n++)for(let s=1;s<o;s++)if(Hr(t[e+s-1],i[r+n-1]))l[n][s]=l[n-1][s-1];else{let t=l[n-1][s]+1,e=l[n][s-1]+1;l[n][s]=t<e?t:e}return l}(t,e,n,i,r,s));a=void 0;let d=[],p=e,u=r;for(let t=0;t<h.length;t++)switch(h[t]){case zr:a&&(d.push(a),a=void 0),p++,u++;break;case xr:a||(a=Cr(p,[],0)),a.addedCount++,p++,a.removed.push(i[u]),u++;break;case Mr:a||(a=Cr(p,[],0)),a.addedCount++,p++;break;case Tr:a||(a=Cr(p,[],0)),a.removed.push(i[u]),u++}return a&&d.push(a),d}function Pr(t,e){return Er(t,0,t.length,e,0,e.length)}function Hr(t,e){return t===e}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function kr(t){return"slot"===t.localName}let Lr=class{static getFlattenedNodes(t){const e=Qe(t);return kr(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>kr(t)?Qe(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){kr(this._target)?this._listenSlots([this._target]):Qe(this._target).children&&(this._listenSlots(Qe(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){kr(this._target)?this._unlistenSlots([this._target]):Qe(this._target).children&&(this._unlistenSlots(Qe(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,wn.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=Pr(e,this._effectiveNodes);for(let e,i=0;i<n.length&&(e=n[i]);i++)for(let n,i=0;i<e.removed.length&&(n=e.removed[i]);i++)t.removedNodes.push(n);for(let i,r=0;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let i=!1;return(t.addedNodes.length||t.removedNodes.length)&&(i=!0,this.callback.call(this._target,t)),i}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];kr(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];kr(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const Ar=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=_i()}while(t||e)},Or=Element.prototype,Vr=Or.matches||Or.matchesSelector||Or.mozMatchesSelector||Or.msMatchesSelector||Or.oMatchesSelector||Or.webkitMatchesSelector,Nr=function(t,e){return Vr.call(t,e)};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */class Rr{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Lr(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(Qe(this.node).contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=Qe(e).parentNode||Qe(e).host;return e===this.node}getOwnerRoot(){return Qe(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Qe(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=Qe(this.node).assignedSlot;for(;e;)t.push(e),e=Qe(e).assignedSlot;return t}importNode(t,e){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return Qe(n).importNode(t,e)}getEffectiveChildNodes(){return Lr.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let i,r=0,s=e.length;r<s&&(i=e[r]);r++)i.nodeType===Node.ELEMENT_NODE&&Nr(i,t)&&n.push(i);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function Dr(t,e){for(let n=0;n<e.length;n++){let i=e[n];Object.defineProperty(t,i,{get:function(){return this.node[i]},configurable:!0})}}class Ir{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Rr.prototype.cloneNode,Rr.prototype.appendChild,Rr.prototype.insertBefore,Rr.prototype.removeChild,Rr.prototype.replaceChild,Rr.prototype.setAttribute,Rr.prototype.removeAttribute,Rr.prototype.querySelector,Rr.prototype.querySelectorAll,Rr.prototype.parentNode,Rr.prototype.firstChild,Rr.prototype.lastChild,Rr.prototype.nextSibling,Rr.prototype.previousSibling,Rr.prototype.firstElementChild,Rr.prototype.lastElementChild,Rr.prototype.nextElementSibling,Rr.prototype.previousElementSibling,Rr.prototype.childNodes,Rr.prototype.children,Rr.prototype.classList,Rr.prototype.textContent,Rr.prototype.innerHTML;let Fr=Rr;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Rr.prototype).forEach(e=>{"activeElement"!=e&&(t.prototype[e]=Rr.prototype[e])}),Dr(t.prototype,["classList"]),Fr=t,Object.defineProperties(Ir.prototype,{localTarget:{get(){const t=this.event.currentTarget,e=t&&jr(t).getOwnerRoot(),n=this.path;for(let t=0;t<n.length;t++){const i=n[t];if(jr(i).getOwnerRoot()===e)return i}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(t,e){for(let n=0;n<e.length;n++){let i=e[n];t[i]=function(){return this.node[i].apply(this.node,arguments)}}}(Rr.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),Dr(Rr.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let i=e[n];Object.defineProperty(t,i,{get:function(){return this.node[i]},set:function(t){this.node[i]=t},configurable:!0})}}(Rr.prototype,["textContent","innerHTML","className"]);const jr=function(t){if((t=t||document)instanceof Fr)return t;if(t instanceof Ir)return t;let e=t.__domApi;return e||(e=t instanceof Event?new Ir(t):new Fr(t),t.__domApi=e),e},Ur=window.ShadyDOM,Br=window.ShadyCSS;
/**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function qr(t,e){return Qe(t).getRootNode()===e}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let $r=window.ShadyCSS;const Wr=Ne(t=>{const e=gr(ir(ui(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,i){e!==n&&(super.attributeChangedCallback(t,e,n,i),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(this._registered(),t.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let i,r=0;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(e,i);n&&Object.defineProperty(t,i,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null==e?{}:e;let i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});i.detail=e;let r=n.node||this;return Qe(r).dispatchEvent(i),i}listen(t,e,n){t=t||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),r=i.get(t);r||(r={},i.set(t,r));let s=e+n;r[s]||(r[s]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let i=this.__boundListeners&&this.__boundListeners.get(t),r=e+n,s=i&&i[r];s&&(this._removeEventListenerFromNode(t,e,s),i[r]=null)}setScrollDirection(t,e){Ji(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=Qe(this).getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){const t=jr(this);window.ShadyDOM&&t.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return jr(this).getEffectiveChildNodes()}queryDistributedElements(t){return jr(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,i=0;n=t[i];i++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?jr(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter((function(t){return t.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(t){return this!==t&&Qe(this).contains(t)&&Qe(this).getRootNode()===Qe(t).getRootNode()}isLocalDescendant(t){return this.root===Qe(t).getRootNode()}scopeSubtree(t,e=!1){return function(t,e=!1){if(!Ur||!Br)return null;if(!Ur.handlesDynamicScoping)return null;const n=Br.ScopingShim;if(!n)return null;const i=n.scopeForNode(t),r=Qe(t).getRootNode(),s=t=>{if(!qr(t,r))return;const e=Array.from(Ur.nativeMethods.querySelectorAll.call(t,"*"));e.push(t);for(let t=0;t<e.length;t++){const s=e[t];if(!qr(s,r))continue;const a=n.currentScopeForNode(s);a!==i&&(""!==a&&n.unscopeNode(s,a),n.scopeNode(s,i))}};if(s(t),e){const e=new MutationObserver(t=>{for(let e=0;e<t.length;e++){const n=t[e];for(let t=0;t<n.addedNodes.length;t++){const e=n.addedNodes[t];e.nodeType===Node.ELEMENT_NODE&&s(e)}}});return e.observe(t,{childList:!0,subtree:!0}),e}return null}(t,e)}getComputedStyleValue(t){return $r.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=mi.debounce(this._debouncers[t],n>0?yn.after(n):wn,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?yn.run(t.bind(this),e):~wn.run(t.bind(this))}cancelAsync(t){t<0?wn.cancel(~t):yn.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return Nr(e||this,t)}toggleAttribute(t,e){let n=this;return 3===arguments.length&&(n=arguments[2]),1==arguments.length&&(e=!n.hasAttribute(t)),e?(Qe(n).setAttribute(t,""),!0):(Qe(n).removeAttribute(t),!1)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,i){i=i||this,this.transform("translate3d("+t+","+e+","+n+")",i)}arrayDelete(t,e){let n;if(Array.isArray(t)){if((n=t.indexOf(e))>=0)return t.splice(n,1)}else{if((n=on(this,t).indexOf(e))>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return i.prototype.is="",i}),Yr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Kr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Gr=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Kr);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Jr(t,e,n,i){!function(t,e,n){const i=t._noAccessors,r=Object.getOwnPropertyNames(t);for(let s=0;s<r.length;s++){let a=r[s];if(!(a in n))if(i)e[a]=t[a];else{let n=Object.getOwnPropertyDescriptor(t,a);n&&(n.configurable=!0,Object.defineProperty(e,a,n))}}}(e,t,i);for(let t in Yr)e[t]&&(n[t]=n[t]||[],n[t].push(e[t]))}function Xr(t,e){for(const n in e){const i=t[n],r=e[n];t[n]=!("value"in r)&&i&&"value"in i?Object.assign({value:i.value},r):r}}function Qr(t,e,n){let i;const r={};class s extends e{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(i)for(let t,e=0;e<i.length;e++)(t=i[e]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}else e._finalizeClass.call(this)}static get properties(){const e={};if(i)for(let t=0;t<i.length;t++)Xr(e,i[t].properties);return Xr(e,t.properties),e}static get observers(){let e=[];if(i)for(let t,n=0;n<i.length;n++)(t=i[n]).observers&&(e=e.concat(t.observers));return t.observers&&(e=e.concat(t.observers)),e}created(){super.created();const t=r.created;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}_registered(){const t=s.prototype;if(!t.hasOwnProperty("__hasRegisterFinished")){t.__hasRegisterFinished=!0,super._registered(),Le&&a(t);const e=Object.getPrototypeOf(this);let n=r.beforeRegister;if(n)for(let t=0;t<n.length;t++)n[t].call(e);if(n=r.registered)for(let t=0;t<n.length;t++)n[t].call(e)}}_applyListeners(){super._applyListeners();const t=r.listeners;if(t)for(let e=0;e<t.length;e++){const n=t[e];if(n)for(let t in n)this._addMethodEventListenerToNode(this,t,n[t])}}_ensureAttributes(){const t=r.hostAttributes;if(t)for(let e=t.length-1;e>=0;e--){const n=t[e];for(let t in n)this._ensureAttribute(t,n[t])}super._ensureAttributes()}ready(){super.ready();let t=r.ready;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attached(){super.attached();let t=r.attached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}detached(){super.detached();let t=r.detached;if(t)for(let e=0;e<t.length;e++)t[e].call(this)}attributeChanged(t,e,n){super.attributeChanged();let i=r.attributeChanged;if(i)for(let r=0;r<i.length;r++)i[r].call(this,t,e,n)}}if(n){Array.isArray(n)||(n=[n]);let t=e.prototype.behaviors;i=function t(e,n,i){n=n||[];for(let r=e.length-1;r>=0;r--){let s=e[r];s?Array.isArray(s)?t(s,n):n.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&n.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return n}(n,null,t),s.prototype.behaviors=t?t.concat(n):i}const a=e=>{i&&function(t,e,n){for(let i=0;i<e.length;i++)Jr(t,e[i],n,Gr)}(e,i,r),Jr(e,t,r,Kr)};return Le||a(s.prototype),s.generatedFrom=t,s}const Zr=function(t){let e;return e="function"==typeof t?t:Zr.Class(t),customElements.define(e.is,e),e};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function ts(t,e,n,i,r){let s;r&&(s="object"==typeof n&&null!==n)&&(i=t.__dataTemp[e]);let a=i!==n&&(i==i||n==n);return s&&a&&(t.__dataTemp[e]=n),a}Zr.Class=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let n=e?e(Wr(HTMLElement)):Wr(HTMLElement);return(n=Qr(t,n,t.behaviors)).is=n.prototype.is=t.is,n};const es=Ne(t=>{return class extends t{_shouldPropertyChange(t,e,n){return ts(this,t,e,n,!0)}}}),ns=Ne(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return ts(this,t,e,n,this.mutableData)}}});es._mutablePropertyChange=ts;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let is=null;function rs(){return is}rs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:rs,writable:!0}});const ss=li(rs),as=es(ss);const os=li(class{});class ls extends os{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let i=e[n];if(Boolean(t)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)t?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(t)i.__polymerReplaced__=document.createComment("hidden-slot"),Qe(Qe(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const t=i.__polymerReplaced__;t&&Qe(Qe(t).parentNode).replaceChild(i,t)}else i.style&&(t?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=t,i._showHideChildren&&i._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}ls.prototype.__dataHost,ls.prototype.__templatizeOptions,ls.prototype._methodHost,ls.prototype.__templatizeOwner,ls.prototype.__hostProps;const cs=es(ls);function hs(t){let e=t.__dataHost;return e&&e._methodHost||e}function ds(t,e,n){let i=n.mutableData?cs:ls;fs.mixin&&(i=fs.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(t),function(t,e,n,i){let r=n.hostProps||{};for(let e in i.instanceProps){delete r[e];let n=i.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ms(e,n)})}if(i.forwardHostProp&&e.__dataHost)for(let e in r)n.hasHostProps||(n.hasHostProps=!0),t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(r,t,e,n),r}function ps(t,e,n){let i=n.forwardHostProp;if(i&&e.hasHostProps){let r=e.templatizeTemplateClass;if(!r){let t=n.mutableData?as:ss;r=e.templatizeTemplateClass=class extends t{};let s=e.hostProps;for(let t in s)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:us(t,i)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){is=t,Object.setPrototypeOf(t,e.prototype),new e,is=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function us(t,e){return function(t,n,i){e.call(t.__templatizeOwner,n.substring("_host_".length),i[n])}}function ms(t,e){return function(t,n,i){e.call(t.__templatizeOwner,t,n,i[n])}}function fs(t,e,n){if(He&&!hs(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=(e?e.constructor:ls)._parseTemplate(t),r=i.templatizeInstanceClass;r||(r=ds(t,i,n),i.templatizeInstanceClass=r),ps(t,i,n);let s=class extends r{};return s.prototype._methodHost=hs(t),s.prototype.__dataHost=t,s.prototype.__templatizeOwner=e,s.prototype.__hostProps=i.hostProps,s=s}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let gs=!1;function _s(){if(Le&&!Me){if(!gs){gs=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const vs=ir(ns(li(HTMLElement)));customElements.define("dom-bind",class extends vs{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),He)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,e,n,i){this.mutableData=!0}connectedCallback(){_s()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Qe(Qe(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class ys{constructor(t){this.value=t.toString()}toString(){return this.value}}function bs(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof ys)return function(t){if(t instanceof ys)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const ws=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,i)=>e+bs(n)+t[i+1],t[0]),n},Ss=ui(HTMLElement),Cs=ns(Ss);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */class zs extends Cs{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),_s()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=Qe(Qe(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=fs(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let i,r=0;r<n.length&&(i=n[r]);r++)i.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if((i=this.as)===(r=e)||en(i,r)||nn(i,r)){let i=t[this.itemsIndexAs];e==this.as&&(this.items[i]=n);let r=rn(this.as,`${JSCompiler_renameProperty("items",this)}.${i}`,e);this.notifyPath(r,n)}var i,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=mi.debounce(this.__renderDebouncer,e>0?yn.after(e):wn,t.bind(this)),gi(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Ar()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,i)=>this.__filterFn(t[e],n,i))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const r=Math.min(e.length,this.__limit);for(;i<r;i++){let r=this.__instances[i],s=e[i],a=t[s];n[s]=i,r?(r._setPendingProperty(this.as,a),r._setPendingProperty(this.indexAs,i),r._setPendingProperty(this.itemsIndexAs,s),r._flushProperties()):this.__insertInstance(a,i,s)}for(let t=this.__instances.length-1;t>=i;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];const n=Qe(e.root);for(let t=0;t<e.children.length;t++){let i=e.children[t];n.appendChild(i)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(t,e,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,t),i._setPendingProperty(this.indexAs,e),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(t,e,n);let r=this.__instances[e+1],s=r?r.children[0]:this;return Qe(Qe(this).parentNode).insertBefore(i.root,s),this.__instances[e]=i,i}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let t=i<0?"":n.substring(i+1);this.__handleObservedPaths(t);let s=this.__itemsIdxToInstIdx[r],a=this.__instances[s];if(a){let n=this.as+(t?"."+t:"");a._setPendingPropertyOrPath(n,e,!1,!0),a._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return function(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=Qe(e).parentNode;return null}(this.template,t)}}customElements.define(zs.is,zs);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class xs extends Ss{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=mi.debounce(this.__renderDebouncer,wn,()=>this.__render()),gi(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=Qe(this).parentNode;t&&(t.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Qe(t).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),_s()||(this.style.display="none"),this.if&&this.__debounceRender()}render(){Ar()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=Qe(this).parentNode;if(t){if(!this.__ctor){let t=Qe(this).querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!Qe(this).querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=fs(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[tn(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(Qe(this).previousSibling!==e[e.length-1])for(let n,i=0;i<e.length&&(n=e[i]);i++)Qe(t).insertBefore(n,this)}}else this.__instance=new this.__ctor,Qe(t).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=Qe(t[0]).parentNode;if(e){e=Qe(e);for(let n,i=0;i<t.length&&(n=t[i]);i++)e.removeChild(n)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(xs.is,xs);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let Ms=Ne(t=>{let e=ui(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if(n==JSCompiler_renameProperty("items",this)){let n=e.base||[],i=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),i){let t=Pr(n,i);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if(e.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(e.value.indexSplices);else{let t=n.slice(`${JSCompiler_renameProperty("items",this)}.`.length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let i=t[n];e.forEach((t,n)=>{t<i.index||(t>=i.index+i.removed.length?e.set(n,t+i.addedCount-i.removed.length):e.set(n,-1))});for(let t=0;t<i.addedCount;t++){let n=i.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,i)=>{t<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null,e.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${e}`,`${JSCompiler_renameProperty("selected",this)}.${t++}`)})}else this.__selectedMap.forEach(t=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${t}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${t}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,i)=>{e==t++&&this.deselect(i)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${t}`];if(e)return parseInt(e.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),e):this.selected=this.selectedItem=e)}}})(Ss);class Ts extends Ms{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ts.is,Ts);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const Es=new ge;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,n){},styleSubtree(t,e){Es.processStyles(),Wt(t,e)},styleElement(t){Es.processStyles()},styleDocument(t){Es.processStyles(),Wt(document.body,t)},getComputedStyleValue:(t,e)=>Yt(t,e),flushCustomStyles(){},nativeCss:St,nativeShadow:_t,cssBuild:yt,disableRuntime:wt}),window.ShadyCSS.CustomStyleInterface=Es;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const Ps="include",Hs=window.ShadyCSS.CustomStyleInterface;class ks extends HTMLElement{constructor(){super(),this._style=null,Hs.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(Ps);return e&&(t.removeAttribute(Ps),t.textContent=function(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=Xe(e[t]);return n}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",ks);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const Ls=Wr(HTMLElement).prototype,As=ws`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */As.setAttribute("style","display: none;"),document.head.appendChild(As.content);var Os=document.createElement("style");Os.textContent="[hidden] { display: none !important; }",document.head.appendChild(Os),
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
Zr({_template:ws`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){var t,e,n;t=this,e=function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")},_r||br(),yr.push([t,e,n]),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(t){27===t.keyCode&&(t.preventDefault(),this.close())},_track:function(t){if(!this.persistent&&!this.disableSwipe)switch(t.preventDefault(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackMove(t);break;case"end":this._trackEnd(t)}},_trackStart:function(t){this._drawerState=this._DRAWER_STATE.TRACKING;var e=this.$.contentContainer.getBoundingClientRect();this._savedWidth=e.width,"left"===this.position?this._translateOffset=e.left:this._translateOffset=e.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(t){this._translateDrawer(t.detail.dx+this._translateOffset),this._trackDetails.push({dx:t.detail.dx,timeStamp:Date.now()})},_trackEnd:function(t){var e=t.detail.dx+this._translateOffset,n=this.getWidth(),i="left"===this.position?e>=0||e<=-n:e<=0||e>=n;if(!i){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(t,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var s=n/2;t.detail.dx<-s?this.opened="right"===this.position:t.detail.dx>s&&(this.opened="left"===this.position),i?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(t,e){for(var n,i=Date.now(),r=i-100,s=0,a=e.length-1;s<=a;){var o=s+a>>1,l=e[o];l.timeStamp>=r?(n=l,a=o-1):s=o+1}return n?(t.detail.dx-n.dx)/(i-n.timeStamp||1):0},_flingDrawer:function(t,e){var n=this._calculateVelocity(t,e);if(!(Math.abs(n)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var i,r=t.detail.dx+this._translateOffset,s=this.getWidth(),a="left"===this.position,o=n>0;i=!o&&a?-(r+s):o&&!a?s-r:-r,o?(n=Math.max(n,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(n=Math.min(n,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*i/n;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(t){this.style.transitionDuration=t+"ms",this.$.contentContainer.style.transitionDuration=t+"ms",this.$.scrim.style.transitionDuration=t+"ms"},_styleTransitionTimingFunction:function(t){this.$.contentContainer.style.transitionTimingFunction=t,this.$.scrim.style.transitionTimingFunction=t},_translateDrawer:function(t){var e=this.getWidth();"left"===this.position?(t=Math.max(-e,Math.min(t,0)),this.$.scrim.style.opacity=1+t/e):(t=Math.max(0,Math.min(t,e)),this.$.scrim.style.opacity=1-t/e),this.translate3d(t+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var t=this._drawerState;t===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,t!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),t!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var t=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),e=jr(this).querySelectorAll(t);e.length>0?(this._firstTabStop=e[0],this._lastTabStop=e[e.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var n=this.getAttribute("tabindex");n&&parseInt(n,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(t){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===t.keyCode&&(t.shiftKey?this._firstTabStop&&jr(t).localTarget===this._firstTabStop&&(t.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&jr(t).localTarget===this._lastTabStop&&(t.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(t,e){this.toggleClass("visible",t&&!e,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
var Vs=new Set;const Ns={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(Vs.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this),this._fireResize())},assignParentResizable:function(t){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=t,t&&-1===t._interestedResizables.indexOf(this)&&(t._interestedResizables.push(this),t._subscribeIronResize(this))},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this._unsubscribeIronResize(t))},_subscribeIronResize:function(t){t.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(t){t.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():Me||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=jr(t).rootTarget;e!==this&&(e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function e(){document.removeEventListener("readystatechange",e),t()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(t){t!==this&&t._findParent()}),this):(Vs.forEach((function(t){t!==this&&t._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?Vs.delete(this):Vs.add(this)}},Rs={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var n=this.domHost;this.scrollTarget=n&&n.$?n.$[t]:jr(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var n;"object"==typeof t?(n=t.left,e=t.top):n=t,n=n||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(n,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=n,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var n=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),n.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(n.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}},Ds={},Is=[Rs,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var n=Ds[t];if(!n)throw new ReferenceError(this._getUndefinedMsg(t));var i=this._boundEffect(n,e||{});return i.setUp(),i},_effectsChanged:function(t,e,n){this._tearDownEffects(),t&&n&&(t.split(" ").forEach((function(t){var n;""!==t&&((n=Ds[t])?this._effects.push(this._boundEffect(n,e[t])):console.warn(this._getUndefinedMsg(t)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var n=parseFloat(e.startsAt||0),i=parseFloat(e.endsAt||1),r=i-n,s=function(){},a=0===n&&1===i?t.run:function(e,i){t.run.call(this,Math.max(0,(e-n)/r),i)};return{setUp:t.setUp?t.setUp.bind(this,e):s,run:t.run?a.bind(this):s,tearDown:t.tearDown?t.tearDown.bind(this):s}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(t){t.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach((function(n){n(t,e)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}];
/**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
Zr({_template:ws`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[Is,[Ns,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){jr(t).path[0]!==this&&(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var t=this._updateLayoutStates.bind(this);this._layoutDebouncer=mi.debounce(this._layoutDebouncer,bn,t),gi(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var t=this;requestAnimationFrame((function(){t.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)}),this)}}]],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,e=jr(this.$.slot).getDistributedNodes(),n=0;t=e[n];n++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,n=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=n}},_updateScrollState:function(t,e){if(0!==this._height){var n=0,i=0,r=this._top,s=(this._lastScrollTop,this._maxHeaderTop),a=t-this._lastScrollTop,o=Math.abs(a),l=t>this._lastScrollTop,c=performance.now();if(this._mayMove()&&(i=this._clamp(this.reveals?r+a:t,0,s)),t>=this._dHeight&&(i=this.condenses&&!this.fixed?Math.max(this._dHeight,i):i,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&o<100&&((c-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=c),t>=s))if(Math.abs(this._initScrollTop-t)>30||o>10){l&&t>=s?i=s:!l&&t>=this._dHeight&&(i=this.condenses&&!this.fixed?this._dHeight:0);var h=a/(c-this._lastTimestamp);this.style.transitionDuration=this._clamp((i-r)/h,0,300)+"ms"}else i=this._top;n=0===this._dHeight?t>0?1:0:i/this._dHeight,e||(this._lastScrollTop=t,this._top=i,this._wasScrollingDown=l,this._lastTimestamp=c),(e||n!==this._progress||r!==i||0===t)&&(this._progress=n,this._runEffects(n,i),this._transformHeader(i))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,n){return Math.min(n,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),jr(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return jr(this).querySelector("[main-title]");case"condensedTitle":return jr(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
Zr({_template:ws`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
var Fs=function(t,e){return(Fs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var js,Us=function(){return(Us=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function Bs(t,e,n,i){var r,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(s<3?r(a):s>3?r(e,n,a):r(e,n))||a);return s>3&&a&&Object.defineProperty(e,n,a),a
/**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */}function qs(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===js||e){var n=!1;try{t.document.addEventListener("test",(function(){}),{get passive(){return n=!0}})}catch(t){}js=n}return!!js&&{passive:!0}}
/**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
/**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
var $s,Ws=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),Ys={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ks={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Gs={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
/**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   */
var Js=["touchstart","pointerdown","mousedown","keydown"],Xs=["touchend","pointerup","mouseup","contextmenu"],Qs=[],Zs=function(t){function e(n){var i=t.call(this,Us({},e.defaultAdapter,n))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(t){return i.activate_(t)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return function(t,e){function n(){this.constructor=t}Fs(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Ys},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ks},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Gs},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,s=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(r),t.adapter_.isUnbounded()&&(t.adapter_.addClass(s),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(Js.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):Xs.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;Js.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),Xs.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==t&&i.type!==t.type))n.isActivated=!0,n.isProgrammatic=void 0===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&Qs.length>0&&Qs.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(Qs.push(t.target),this.registerDeactivationHandlers_(t)),n.wasElementMadeActive=this.checkElementMadeActive_(t),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){Qs=[],n.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(n.wasElementMadeActive=e.checkElementMadeActive_(t),n.wasElementMadeActive&&e.animateActivation_()),n.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,s=e.cssClasses,a=s.FG_DEACTIVATION,o=s.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",h="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),p=d.startPoint,u=d.endPoint;c=p.x+"px, "+p.y+"px",h=u.x+"px, "+u.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,h),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(o),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),l)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,n=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,n){if(!t)return{x:0,y:0};var i,r,s=e.x,a=e.y,o=s+n.left,l=a+n.top;if("touchstart"===t.type){var c=t;i=c.changedTouches[0].pageX-o,r=c.changedTouches[0].pageY-l}else{var h=t;i=h.pageX-o,r=h.pageY-l}return{x:i,y:r}}(n,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,s=i.isActivated;(r||!s)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(n)}),Gs.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var n=Us({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(n)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(n),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,n=t.wasElementMadeActive;(e||n)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,s=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(s,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))},e}(Ws);
/**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */
const ta=mt`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}`
/**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */,ea=function(t,e){void 0===e&&(e=!1);var n=t.CSS,i=$s;if("boolean"==typeof $s&&!e)return $s;if(!(n&&"function"==typeof n.supports))return!1;var r=n.supports("--css-vars","yes"),s=n.supports("(--css-vars: yes)")&&n.supports("color","#00000000");return i=!(!r&&!s)&&!function(t){var e=t.document,n=e.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(n);var i=t.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.parentNode&&n.parentNode.removeChild(n),r}(t),e||($s=i),i}(window),na=navigator.userAgent.match(/Safari/);let ia=!1;const ra=t=>{na&&!ia&&(()=>{ia=!0;const t=new T({templateFactory:V});t.appendInto(document.head),t.setValue(ta),t.commit()})();const e=t.surfaceNode,n=t.interactionNode||e;n.getRootNode()!==e.getRootNode()&&""===n.style.position&&(n.style.position="relative");const i=new Zs({browserSupportsCssVars:()=>ea,isUnbounded:()=>void 0===t.unbounded||t.unbounded,isSurfaceActive:()=>(function(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)})(n,":active"),isSurfaceDisabled:()=>Boolean(t.disabled),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),containsEventTarget:t=>n.contains(t),registerInteractionHandler:(t,e)=>n.addEventListener(t,e,qs()),deregisterInteractionHandler:(t,e)=>n.removeEventListener(t,e,qs()),registerDocumentInteractionHandler:(t,e)=>document.documentElement.addEventListener(t,e,qs()),deregisterDocumentInteractionHandler:(t,e)=>document.documentElement.removeEventListener(t,e,qs()),registerResizeHandler:t=>window.addEventListener("resize",t),deregisterResizeHandler:t=>window.removeEventListener("resize",t),updateCssVariable:(t,n)=>e.style.setProperty(t,n),computeBoundingRect:()=>e.getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})});return i.init(),i},sa=new WeakMap,aa=s((t={})=>e=>{const n=e.committer.element,i=t.interactionNode||n;let r=e.value;const s=sa.get(r);void 0!==s&&s!==i&&(r.destroy(),r=c),r===c?(r=ra(Object.assign({},t,{surfaceNode:n})),sa.set(r,i),e.setValue(r)):(void 0!==t.unbounded&&r.setUnbounded(t.unbounded),void 0!==t.disabled&&r.setUnbounded(t.disabled)),!0===t.active?r.activate():!1===t.active&&r.deactivate()}),oa=new WeakMap,la=s(t=>e=>{if(!(e instanceof M)||e instanceof H||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:n}=e,{element:i}=n;oa.has(e)||(i.className=n.strings.join(" "));const{classList:r}=i,s=oa.get(e);for(const e in s)e in t||r.remove(e);for(const e in t){const n=t[e];if(!s||n!==s[e]){r[n?"add":"remove"](e)}}oa.set(e,t)});class ca extends gt{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.icon="",this.label=""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const t=this.buttonElement;if(t){const e=t.ripple;e&&e.handleFocus(),t.focus()}}blur(){const t=this.buttonElement;if(t){const e=t.ripple;e&&e.handleBlur(),t.blur()}}render(){const t={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense},e=D`<span class="material-icons mdc-button__icon">${this.icon}</span>`,n=aa({unbounded:!1});return D`
      <button id="button"
              .ripple="${n}"
              class="mdc-button ${la(t)}"
              ?disabled="${this.disabled}"
              aria-label="${this.label||this.icon}">
        <div class="mdc-button__ripple"></div>
        ${this.icon&&!this.trailingIcon?e:""}
        <span class="mdc-button__label">${this.label}</span>
        ${this.icon&&this.trailingIcon?e:""}
        <slot></slot>
      </button>`}}var ha;Bs([lt({type:Boolean})],ca.prototype,"raised",void 0),Bs([lt({type:Boolean})],ca.prototype,"unelevated",void 0),Bs([lt({type:Boolean})],ca.prototype,"outlined",void 0),Bs([lt({type:Boolean})],ca.prototype,"dense",void 0),Bs([lt({type:Boolean,reflect:!0})],ca.prototype,"disabled",void 0),Bs([lt({type:Boolean})],ca.prototype,"trailingIcon",void 0),Bs([lt()],ca.prototype,"icon",void 0),Bs([lt()],ca.prototype,"label",void 0),Bs([(ha="#button",(t,e)=>{const n={get(){return this.renderRoot.querySelector(ha)},enumerable:!0,configurable:!0};return void 0!==e?ct(n,t,e):ht(n,t)})],ca.prototype,"buttonElement",void 0);
/**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */
const da=mt`.mdc-button{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;left:0;height:48px;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover .mdc-button__ripple::before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-button .mdc-button__ripple{position:absolute;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-button{height:36px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;outline:none}:host([disabled]){pointer-events:none}.mdc-button{flex:auto}`;let pa=class extends ca{};pa.styles=da,pa=Bs([(t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e))("mwc-button")],pa);
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
class ua{constructor(t){ua[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,e=this.key;if(t&&e)return ua.types[t]&&ua.types[t][e]}set value(t){var e=this.type,n=this.key;e&&n&&(e=ua.types[e]=ua.types[e]||{},null==t?delete e[n]:e[n]=t)}get list(){if(this.type){var t=ua.types[this.type];return t?Object.keys(t).map((function(t){return ma[this.type][t]}),this):[]}}byKey(t){return this.key=t,this.value}}ua[" "]=function(){},ua.types={};var ma=ua.types;Zr({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(t,e,n){var i=new ua({type:t,key:e});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(t){t&&(this.value=this)},byKey:function(t){return new ua({type:this.type,key:t}).value}}),
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
Zr({_template:ws`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Ls.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(t){var e=(t||"").split(":");this._iconName=e.pop(),this._iconsetName=e.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(t){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&jr(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,jr(this.root).appendChild(this._img))}});
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
const fa=ws`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;fa.setAttribute("style","display: none;"),document.head.appendChild(fa.content);
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
const ga=ws`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;ga.setAttribute("style","display: none;"),document.head.appendChild(ga.content);
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
const _a={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused("focus"===t.type)},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var va={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},ya={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},ba={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},wa=/[a-z0-9*]/,Sa=/U\+/,Ca=/^arrow/,za=/^space(bar)?/,xa=/^escape$/;function Ma(t,e){var n="";if(t){var i=t.toLowerCase();" "===i||za.test(i)?n="space":xa.test(i)?n="esc":1==i.length?e&&!wa.test(i)||(n=i):n=Ca.test(i)?i.replace("arrow",""):"multiply"==i?"*":i}return n}function Ta(t,e){return t.key?Ma(t.key,e):t.detail&&t.detail.key?Ma(t.detail.key,e):(n=t.keyIdentifier,i="",n&&(n in va?i=va[n]:Sa.test(n)?(n=parseInt(n.replace("U+","0x"),16),i=String.fromCharCode(n).toLowerCase()):i=n.toLowerCase()),i||function(t){var e="";return Number(t)&&(e=t>=65&&t<=90?String.fromCharCode(32+t):t>=112&&t<=123?"f"+(t-112+1):t>=48&&t<=57?String(t-48):t>=96&&t<=105?String(t-96):ya[t]),e}(t.keyCode)||"");var n,i}function Ea(t,e){return Ta(e,t.hasModifiers)===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function Pa(t){return t.trim().split(" ").map((function(t){return function(t){return 1===t.length?{combo:t,key:t,event:"keydown"}:t.split("+").reduce((function(t,e){var n=e.split(":"),i=n[0],r=n[1];return i in ba?(t[ba[i]]=!0,t.hasModifiers=!0):(t.key=i,t.event=r||"keydown"),t}),{combo:t.split(":").shift()})}(t)}))}const Ha={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var n=Pa(e),i=0;i<n.length;++i)if(Ea(n[i],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map((function(t){return t.keyBindings}));return-1===t.indexOf(this.keyBindings)&&t.push(this.keyBindings),t},_prepKeyBindings:function(){for(var t in this._keyBindings={},this._collectKeyBindings().forEach((function(t){for(var e in t)this._addKeyBinding(e,t[e])}),this),this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort((function(t,e){var n=t[0].hasModifiers;return n===e[0].hasModifiers?0:n?-1:1}))},_addKeyBinding:function(t,e){Pa(t).forEach((function(t){this._keyBindings[t.event]=this._keyBindings[t.event]||[],this._keyBindings[t.event].push([t,e])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(t){var e=this._keyBindings[t],n=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,n]),this.keyEventTarget.addEventListener(t,n)}),this)},_unlistenKeyEventListeners:function(){for(var t,e,n,i;this._boundKeyHandlers.length;)e=(t=this._boundKeyHandlers.pop())[0],n=t[1],i=t[2],e.removeEventListener(n,i)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var n=0;n<t.length;n++){var i=t[n][0],r=t[n][1];if(Ea(i,e)&&(this._triggerKeyHandler(i,r,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,n){var i=Object.create(t);i.keyboardEvent=n;var r=new CustomEvent(t.event,{detail:i,cancelable:!0});this[e].call(this,r),r.defaultPrevented&&n.preventDefault()}},ka={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,n=jr(e).localTarget;this.isLightDescendant(n)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,n=jr(e).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},La=[Ha,ka];
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
/**
  @license
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
var Aa={distance:function(t,e,n,i){var r=t-n,s=e-i;return Math.sqrt(r*r+s*s)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Oa(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Va(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),jr(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Oa.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var n=Aa.distance(t,e,0,0),i=Aa.distance(t,e,this.width,0),r=Aa.distance(t,e,0,this.height),s=Aa.distance(t,e,this.width,this.height);return Math.max(n,i,r,s)}},Va.MAX_RADIUS=300,Va.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=Aa.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?Aa.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,n=1.1*Math.min(Math.sqrt(t+e),Va.MAX_RADIUS)+5,i=1.1-n/Va.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/i,s=n*(1-Math.pow(80,-r));return Math.abs(s)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=.3*this.mouseUpElapsedSeconds,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Va.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Va.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Oa(this.element)},draw:function(){var t,e,n;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+n+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+n+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Aa.now(),this.center?(this.xStart=e,this.yStart=n,this.slideDistance=Aa.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=n,this.slideDistance=Aa.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=Aa.now())},remove:function(){jr(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Zr({_template:ws`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Ha],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==this.parentNode.nodeType?this.keyEventTarget=jr(this).getOwnerRoot().host:this.keyEventTarget=this.parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(t),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach((function(e){e.upAction(t)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var t=new Va(this);return jr(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)(e=this.ripples[t]).draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){void 0!==e&&(t?this.downAction():this.upAction())}});
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
const Na={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){ka._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&jr(e).appendChild(this._ripple),t){var n=jr(this._rippleContainer||this),i=jr(t).rootTarget;n.deepContains(i)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}},Ra={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(t){t&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=t)},_createRipple:function(){var t=Na._createRipple();return t.id="ink",t.setAttribute("center",""),t.classList.add("circle"),t}};
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
Zr({is:"paper-icon-button",_template:ws`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,hostAttributes:{role:"button",tabindex:"0"},behaviors:[[La,_a,Na,Ra]],registered:function(){this._template.setAttribute("strip-whitespace","")},properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(t,e){var n=this.getAttribute("aria-label");n&&e!=n||this.setAttribute("aria-label",t)}}),
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
Zr({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new ua({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map((function(t){return this.name+":"+t}),this)},applyIcon:function(t,e){this.removeIcon(t);var n=this._cloneIcon(e,this.rtlMirroring&&this._targetIsRTL(t));if(n){var i=jr(t.root||t);return i.insertBefore(n,i.childNodes[0]),t._svgIcon=n}return null},removeIcon:function(t){t._svgIcon&&(jr(t.root||t).removeChild(t._svgIcon),t._svgIcon=null)},_targetIsRTL:function(t){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var e=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===e.getAttribute("dir")}else t&&t.nodeType!==Node.ELEMENT_NODE&&(t=t.host),this.__targetIsRTL=t&&"rtl"===window.getComputedStyle(t).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var t=Object.create(null);return jr(this).querySelectorAll("[id]").forEach((function(e){t[e.id]=e})),t},_cloneIcon:function(t,e){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[t],this.size,e)},_prepareSvgClone:function(t,e,n){if(t){var i=t.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=i.getAttribute("viewBox")||"0 0 "+e+" "+e,a="pointer-events: none; display: block; width: 100%; height: 100%;";return n&&i.hasAttribute("mirror-in-rtl")&&(a+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",s),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=a,r.appendChild(i).removeAttribute("id"),r}return null}});
/**
  @license
  Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
const Da=ws`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`;document.head.appendChild(Da.content);var Ia=(t,e)=>{customElements.get(t)||customElements.define(t,e)},Fa=()=>{var t=window.location.pathname.match(/\/([a-z0-9_-]*[\/]?)$/);return t?t[0].replace(/\//g,""):""};function ja(){var t=i(['\n      <paper-icon-button\n        @click="','"\n        aria-label="Featured Cities"\n        icon="menu"\n      ></paper-icon-button>\n    ']);return ja=function(){return t},t}function Ua(){var t=i(["\n      :host {\n        display: block;\n\n        width: 1.5rem;\n      }\n\n      paper-icon-button {\n        --mdc-theme-primary: #cccccc;\n        --mdc-theme-on-primary: white;\n        pointer-events: all;\n        position: relative;\n        height: 3rem;\n        width: 3rem;\n      }\n\n      svg {\n        height: 1.5rem;\n        pointer-events: none;\n        width: 1.5rem;\n      }\n    "]);return Ua=function(){return t},t}function Ba(){var t=i(["\n      <div><a href=",">","</a></div>\n    "]);return Ba=function(){return t},t}function qa(){var t=i(["\n      :host {\n        margin-left: var(--x-weather-branding-margin-left, -1rem);\n        text-align: var(--x-weather-branding-text-align, center);\n        width: 100%;\n      }\n\n      a {\n        text-decoration: none;\n        color: white;\n      }\n    "]);return qa=function(){return t},t}Ia("x-weather-hamburger",class extends gt{static get styles(){return mt(Ua())}_handleDrawerChange(t){this.shadowRoot.dispatchEvent(new CustomEvent("x-weather-drawer-change",{bubbles:!0,composed:!0,detail:t}))}render(){return D(ja(),t=>this._handleDrawerChange(t))}});Ia("x-weather-branding",class extends gt{static get styles(){return mt(qa())}static get properties(){return{sitetitle:{reflect:!0,type:String},siteurl:{reflect:!0,type:String}}}render(){return D(Ba(),this.siteurl,this.sitetitle)}});Ia("x-weather-bouncer",class extends gt{constructor(){super();window.addEventListener("popstate",t=>{console.log("redirecting..."),(()=>{if("x-postpress-app"===Fa()){var t=document.location.origin,e="".concat(t,"/").concat(Fa(),"/");"http://localhost:8000"===t||(document.location.href=e)}})()})}});var $a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cToF",n=t=>t+273.15,i=t=>t-273.15,r=t=>1.8*t+32,s=t=>5*(t-32)/9;return{cToK:n,kToC:i,cToF:r,fToC:s,kToF:t=>r(i(t)),fToK:t=>n(s(t))}[e](t)},Wa=(t,e)=>t.reduce((t,e)=>t&&t.hasOwnProperty(e)?t[e]:null,e),Ya="PRIMARY_SCALE_CURRENT_SWAP",Ka="PRIMARY_SCALE_FORECAST_SWAP",Ga="CURRENT_WEATHER_UPDATE",Ja="FORECAST_WEATHER_UPDATE",Xa="LOCATION_UPDATE",Qa=t=>{var{appid:e,host:n,latitude:i,longitude:r,placename:s}=t;if(e&&n&&i&&r&&s)return(t=>{var{appid:e,host:n,latitude:i,longitude:r,placename:s}=t,a="https://".concat(n,"/data/2.5/weather?lat=").concat(i,"&lon=").concat(r,"&appid=").concat(e);return fetch(a,{method:"GET"}).then(t=>{if(t.ok)return t.json()})})({appid:e,host:n,latitude:i,longitude:r,placename:s}).then(t=>{if(!t)throw new Error("failed to get result from the current weather service using: appid: ".concat(e,", host: ").concat(n,", latitude: ").concat(i,", longitude: ").concat(r,", placename: ").concat(s));var{coord:a,weather:o,base:l,main:c,visibility:h,wind:d,clouds:p,dt:u,sys:m,timezone:f,id:g,name:_,cod:v}=t;return JSON.stringify({sunrise:m.sunrise,sunset:m.sunset,timezone:f,iconAlt:o[0].description,iconSrc:o[0].icon,temperature:{kelvin:c.temp,celsius:$a(c.temp,"kToC"),fahrenheit:$a(c.temp,"kToF")},timestamp:u})})},Za=t=>{var{appid:e,host:n}=t;return(t,i)=>{var{latitude:r,longitude:s,placename:a}=i().weather.preferences.location;return Qa({appid:e,host:n,latitude:r,longitude:s,placename:a}).then(e=>{e.length>0&&t((t=>{var{json:e}=t;return{type:Ga,payload:JSON.parse(e)}})({json:e}))})}},to=t=>{var{appid:e,host:n}=t;return(t,i)=>{var{latitude:r,longitude:s,placename:a}=i().weather.preferences.location;return(t=>{var{appid:e,host:n,latitude:i,longitude:r,placename:s}=t;if(e&&n&&i&&r&&s)return(t=>{var{appid:e,host:n,latitude:i,longitude:r,placename:s}=t,a="https://".concat(n,"/data/2.5/forecast/daily?lat=").concat(i,"&lon=").concat(r,"&mode=json&units=metric&cnt=14&appid=").concat(e);return fetch(a,{method:"GET"}).then(t=>{if(t.ok)return t.json()})})({appid:e,host:n,latitude:i,longitude:r,placename:s}).then(t=>{if(!t)throw new Error("failed to get result from the forecast weather service using: appid: ".concat(e,", host: ").concat(n,", latitude: ").concat(i,", longitude: ").concat(r,", placename: ").concat(s));var{city:a,cod:o,message:l,cnt:c,list:h}=t;return JSON.stringify(h)})})({appid:e,host:n,latitude:r,longitude:s,placename:a}).then(e=>{e.length>0&&t((t=>{var{json:e}=t;return{type:Ja,payload:JSON.parse(e)}})({json:e}))})}};function eo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function no(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function io(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?no(n,!0).forEach((function(e){eo(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):no(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ro(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const so=new WeakMap,ao=t=>"function"==typeof t&&so.has(t),oo=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,lo=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},co={},ho={},po=`{{lit-${String(Math.random()).slice(2)}}}`,uo=`\x3c!--${po}--\x3e`,mo=new RegExp(`${po}|${uo}`),fo="$lit$";class go{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let s=0,a=-1,o=0;const{strings:l,values:{length:c}}=t;for(;o<c;){const t=r.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let i=0;for(let t=0;t<n;t++)_o(e[t].name,fo)&&i++;for(;i-- >0;){const e=l[o],n=bo.exec(e)[2],i=n.toLowerCase()+fo,r=t.getAttribute(i);t.removeAttribute(i);const s=r.split(mo);this.parts.push({type:"attribute",index:a,name:n,strings:s}),o+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(po)>=0){const i=t.parentNode,r=e.split(mo),s=r.length-1;for(let e=0;e<s;e++){let n,s=r[e];if(""===s)n=yo();else{const t=bo.exec(s);null!==t&&_o(t[2],fo)&&(s=s.slice(0,t.index)+t[1]+t[2].slice(0,-fo.length)+t[3]),n=document.createTextNode(s)}i.insertBefore(n,t),this.parts.push({type:"node",index:++a})}""===r[s]?(i.insertBefore(yo(),t),n.push(t)):t.data=r[s],o+=s}}else if(8===t.nodeType)if(t.data===po){const e=t.parentNode;null!==t.previousSibling&&a!==s||(a++,e.insertBefore(yo(),t)),s=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(n.push(t),a--),o++}else{let e=-1;for(;-1!==(e=t.data.indexOf(po,e+1));)this.parts.push({type:"node",index:-1}),o++}}else r.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const _o=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},vo=t=>-1!==t.index,yo=()=>document.createComment(""),bo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class wo{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=oo?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,s=0,a=0,o=i.nextNode();for(;s<n.length;)if(r=n[s],vo(r)){for(;a<r.index;)a++,"TEMPLATE"===o.nodeName&&(e.push(o),i.currentNode=o.content),null===(o=i.nextNode())&&(i.currentNode=e.pop(),o=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(o,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return oo&&(document.adoptNode(t),customElements.upgrade(t)),t}}const So=` ${po} `;class Co{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const s=bo.exec(t);e+=null===s?t+(n?So:uo):t.substr(0,s.index)+s[1]+s[2]+fo+s[3]+po}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const zo=t=>null===t||!("object"==typeof t||"function"==typeof t),xo=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Mo{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new To(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(zo(t)||!xo(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class To{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===co||zo(t)&&t===this.value||(this.value=t,ao(t)||(this.committer.dirty=!0))}commit(){for(;ao(this.value);){const t=this.value;this.value=co,t(this)}this.value!==co&&this.committer.commit()}}class Eo{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(yo()),this.endNode=t.appendChild(yo())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=yo()),t.__insert(this.endNode=yo())}insertAfterPart(t){t.__insert(this.startNode=yo()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;ao(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=co,t(this)}const t=this.__pendingValue;t!==co&&(zo(t)?t!==this.value&&this.__commitText(t):t instanceof Co?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):xo(t)?this.__commitIterable(t):t===ho?(this.value=ho,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof wo&&this.value.template===e)this.value.update(t.values);else{const n=new wo(e,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)void 0===(n=e[i])&&(n=new Eo(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){lo(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Po{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;ao(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=co,t(this)}if(this.__pendingValue===co)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=co}}class Ho extends Mo{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ko(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ko extends To{}let Lo=!1;try{const t={get capture(){return Lo=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch($a){}class Ao{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;ao(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=co,t(this)}if(this.__pendingValue===co)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Oo(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=co}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Oo=t=>t&&(Lo?{capture:t.capture,passive:t.passive,once:t.once}:t.capture),Vo=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];return"."===r?new Ho(t,e.slice(1),n).parts:"@"===r?[new Ao(t,e.slice(1),i.eventContext)]:"?"===r?[new Po(t,e.slice(1),n)]:new Mo(t,e,n).parts}handleTextExpression(t){return new Eo(t)}};function No(t){let e=Ro.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Ro.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(po);return void 0===(n=e.keyString.get(i))&&(n=new go(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const Ro=new Map,Do=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const Io=(t,...e)=>new Co(t,e,"html",Vo),Fo=133;function jo(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,Fo,null,!1);let s=Bo(i),a=i[s],o=-1,l=0;const c=[];let h=null;for(;r.nextNode();){o++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(c.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==a&&a.index===o;)a.index=null!==h?-1:a.index-l,a=i[s=Bo(i,s)]}c.forEach(t=>t.parentNode.removeChild(t))}const Uo=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,Fo,null,!1);for(;n.nextNode();)e++;return e},Bo=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(vo(e))return n}return-1},qo=(t,e)=>`${t}--${e}`;let $o=!0;void 0===window.ShadyCSS?$o=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),$o=!1);const Wo=t=>e=>{const n=qo(e.type,t);let i=Ro.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Ro.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const s=e.strings.join(po);if(void 0===(r=i.keyString.get(s))){const n=e.getTemplateElement();$o&&window.ShadyCSS.prepareTemplateDom(n,t),r=new go(e,n),i.keyString.set(s,r)}return i.stringsArray.set(e.strings,r),r},Yo=["html","svg"],Ko=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const Go={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Jo=(t,e)=>e!==t&&(e==e||t==t),Xo={attribute:!0,type:String,converter:Go,reflect:!1,hasChanged:Jo},Qo=Promise.resolve(!0),Zo=1,tl=4,el=8,nl=16,il=32,rl="finalized";class sl extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Qo,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const i=this._attributeNameForProperty(n,e);void 0!==i&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Xo){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const i=this[t];this[n]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(rl)||t.finalize(),this[rl]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=Jo){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,i=e.converter||Go,r="function"==typeof i?i:i.fromAttribute;return r?r(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,i=e.converter;return(i&&i.toAttribute||Go.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|il,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Xo){const i=this.constructor,r=i._attributeNameForProperty(t,n);if(void 0!==r){const t=i._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|el,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~el}}_attributeToProperty(t,e){if(this._updateState&el)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i)||Xo;this._updateState=this._updateState|nl,this[i]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~nl}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||Xo;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&nl||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|tl;const n=this._updatePromise;this._updatePromise=new Promise((n,i)=>{t=n,e=i});try{await n}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&il}get _hasRequestedUpdate(){return this._updateState&tl}get hasUpdated(){return this._updateState&Zo}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Zo||(this._updateState=this._updateState|Zo,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~tl}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}sl[rl]=!0;const al="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ol=Symbol();class ll{constructor(t,e){if(e!==ol)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(al?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const cl=(t,...e)=>{const n=e.reduce((e,n,i)=>e+(t=>{if(t instanceof ll)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[i+1],t[0]);return new ll(n,ol)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const hl=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,n):n.push(r)}return n}(t);class dl extends sl{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];return Array.isArray(t)?hl(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t)):t&&e.push(t),e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?al?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof Co&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}function pl(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function ul(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}dl.finalized=!0,dl.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const i=n.scopeName,r=Do.has(e),s=$o&&11===e.nodeType&&!!e.host,a=s&&!Ko.has(i),o=a?document.createDocumentFragment():e;if(((t,e,n)=>{let i=Do.get(e);void 0===i&&(lo(e,e.firstChild),Do.set(e,i=new Eo(Object.assign({templateFactory:No},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,o,Object.assign({templateFactory:Wo(i)},n)),a){const t=Do.get(o);Do.delete(o),((t,e,n)=>{Ko.add(t);const i=n?n.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<s;t++){const e=r[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{Yo.forEach(e=>{const n=Ro.get(qo(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),jo(t,n)})})})(t);const o=i.content;n?function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const s=document.createTreeWalker(i,Fo,null,!1);let a=Bo(r),o=0,l=-1;for(;s.nextNode();)for(l++,s.currentNode===n&&(o=Uo(e),n.parentNode.insertBefore(e,n));-1!==a&&r[a].index===l;){if(o>0){for(;-1!==a;)r[a].index+=o,a=Bo(r,a);return}a=Bo(r,a)}}(n,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),jo(n,t)}})(i,o,t.value instanceof wo?t.value.template:void 0),lo(e,e.firstChild),e.appendChild(o),Do.set(e,t)}!r&&s&&window.ShadyCSS.styleElement(e.host)};var ml=6e4,fl={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function gl(t){return function(e){var n=e||{},i=n.width?String(n.width):t.defaultWidth;return t.formats[i]||t.formats[t.defaultWidth]}}var _l={date:gl({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:gl({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:gl({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},vl={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function yl(t){return function(e,n){var i,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,a=r.width?String(r.width):s;i=t.formattingValues[a]||t.formattingValues[s]}else{var o=t.defaultWidth,l=r.width?String(r.width):t.defaultWidth;i=t.values[l]||t.values[o]}return i[t.argumentCallback?t.argumentCallback(e):e]}}function bl(t){return function(e,n){var i=String(e),r=n||{},s=r.width,a=s&&t.matchPatterns[s]||t.matchPatterns[t.defaultMatchWidth],o=i.match(a);if(!o)return null;var l,c=o[0],h=s&&t.parsePatterns[s]||t.parsePatterns[t.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(h)?h.findIndex((function(t){return t.test(i)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(h,(function(t){return t.test(i)})),l=t.valueCallback?t.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:i.slice(c.length)}}}var wl,Sl={formatDistance:function(t,e,n){var i;return n=n||{},i="string"==typeof fl[t]?fl[t]:1===e?fl[t].one:fl[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+i:i+" ago":i},formatLong:_l,formatRelative:function(t,e,n,i){return vl[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:yl({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:yl({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:yl({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:yl({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:yl({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(wl={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),i=e||{},r=n.match(wl.matchPattern);if(!r)return null;var s=r[0],a=n.match(wl.parsePattern);if(!a)return null;var o=wl.valueCallback?wl.valueCallback(a[0]):a[0];return{value:o=i.valueCallback?i.valueCallback(o):o,rest:n.slice(s.length)}}),era:bl({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:bl({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:bl({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:bl({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:bl({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Cl(t,e){for(var n=t<0?"-":"",i=Math.abs(t).toString();i.length<e;)i="0"+i;return n+i}function zl(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=pl(t),n=e.getUTCDay(),i=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-i),e.setUTCHours(0,0,0,0),e}function xl(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=pl(t),n=e.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(n+1,0,4),i.setUTCHours(0,0,0,0);var r=zl(i),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var a=zl(s);return e.getTime()>=r.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}var Ml=6048e5;function Tl(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},i=n.locale,r=i&&i.options&&i.options.weekStartsOn,s=null==r?0:ul(r),a=null==n.weekStartsOn?s:ul(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var o=pl(t),l=o.getUTCDay(),c=(l<a?7:0)+l-a;return o.setUTCDate(o.getUTCDate()-c),o.setUTCHours(0,0,0,0),o}function El(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=pl(t,e),i=n.getUTCFullYear(),r=e||{},s=r.locale,a=s&&s.options&&s.options.firstWeekContainsDate,o=null==a?1:ul(a),l=null==r.firstWeekContainsDate?o:ul(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(i+1,0,l),c.setUTCHours(0,0,0,0);var h=Tl(c,e),d=new Date(0);d.setUTCFullYear(i,0,l),d.setUTCHours(0,0,0,0);var p=Tl(d,e);return n.getTime()>=h.getTime()?i+1:n.getTime()>=p.getTime()?i:i-1}var Pl=6048e5;var Hl={G:function(t,e,n){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var i=t.getUTCFullYear(),r=i>0?i:1-i;return n.ordinalNumber(r,{unit:"year"})}return function(t,e){var n=t.getUTCFullYear(),i=n>0?n:1-n;return Cl("yy"===e?i%100:i,e.length)}(t,e)},Y:function(t,e,n,i){var r=El(t,i),s=r>0?r:1-r;return"YY"===e?Cl(s%100,2):"Yo"===e?n.ordinalNumber(s,{unit:"year"}):Cl(s,e.length)},R:function(t,e){return Cl(xl(t),e.length)},u:function(t,e){return Cl(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return Cl(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,n){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return Cl(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,n){var i=t.getUTCMonth();switch(e){case"M":case"MM":return function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Cl(n+1,2)}(t,e);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,n){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return Cl(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,n,i){var r=function(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=pl(t),i=Tl(n,e).getTime()-function(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var n=e||{},i=n.locale,r=i&&i.options&&i.options.firstWeekContainsDate,s=null==r?1:ul(r),a=null==n.firstWeekContainsDate?s:ul(n.firstWeekContainsDate),o=El(t,e),l=new Date(0);return l.setUTCFullYear(o,0,a),l.setUTCHours(0,0,0,0),Tl(l,e)}(n,e).getTime();return Math.round(i/Pl)+1}(t,i);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):Cl(r,e.length)},I:function(t,e,n){var i=function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=pl(t),n=zl(e).getTime()-function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=xl(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),zl(n)}(e).getTime();return Math.round(n/Ml)+1}(t);return"Io"===e?n.ordinalNumber(i,{unit:"week"}):Cl(i,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):function(t,e){return Cl(t.getUTCDate(),e.length)}(t,e)},D:function(t,e,n){var i=function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=pl(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var i=n-e.getTime();return Math.floor(i/864e5)+1}(t);return"Do"===e?n.ordinalNumber(i,{unit:"dayOfYear"}):Cl(i,e.length)},E:function(t,e,n){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,n,i){var r=t.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return Cl(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,i){var r=t.getUTCDay(),s=(r-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return Cl(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var i=t.getUTCDay(),r=0===i?7:i;switch(e){case"i":return String(r);case"ii":return Cl(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,n){var i=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){var i,r=t.getUTCHours();switch(i=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){var i,r=t.getUTCHours();switch(i=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var i=t.getUTCHours()%12;return 0===i&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return function(t,e){return Cl(t.getUTCHours()%12||12,e.length)}(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):function(t,e){return Cl(t.getUTCHours(),e.length)}(t,e)},K:function(t,e,n){var i=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(i,{unit:"hour"}):Cl(i,e.length)},k:function(t,e,n){var i=t.getUTCHours();return 0===i&&(i=24),"ko"===e?n.ordinalNumber(i,{unit:"hour"}):Cl(i,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):function(t,e){return Cl(t.getUTCMinutes(),e.length)}(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):function(t,e){return Cl(t.getUTCSeconds(),e.length)}(t,e)},S:function(t,e){return function(t,e){var n=e.length,i=t.getUTCMilliseconds();return Cl(Math.floor(i*Math.pow(10,n-3)),e.length)}(t,e)},X:function(t,e,n,i){var r=(i._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Ll(r);case"XXXX":case"XX":return Al(r);case"XXXXX":case"XXX":default:return Al(r,":")}},x:function(t,e,n,i){var r=(i._originalDate||t).getTimezoneOffset();switch(e){case"x":return Ll(r);case"xxxx":case"xx":return Al(r);case"xxxxx":case"xxx":default:return Al(r,":")}},O:function(t,e,n,i){var r=(i._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+kl(r,":");case"OOOO":default:return"GMT"+Al(r,":")}},z:function(t,e,n,i){var r=(i._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+kl(r,":");case"zzzz":default:return"GMT"+Al(r,":")}},t:function(t,e,n,i){var r=i._originalDate||t;return Cl(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,i){return Cl((i._originalDate||t).getTime(),e.length)}};function kl(t,e){var n=t>0?"-":"+",i=Math.abs(t),r=Math.floor(i/60),s=i%60;if(0===s)return n+String(r);var a=e||"";return n+String(r)+a+Cl(s,2)}function Ll(t,e){return t%60==0?(t>0?"-":"+")+Cl(Math.abs(t)/60,2):Al(t,e)}function Al(t,e){var n=e||"",i=t>0?"-":"+",r=Math.abs(t);return i+Cl(Math.floor(r/60),2)+n+Cl(r%60,2)}function Ol(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Vl(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var Nl={p:Vl,P:function(t,e){var n,i=t.match(/(P+)(p+)?/),r=i[1],s=i[2];if(!s)return Ol(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",Ol(r,e)).replace("{{time}}",Vl(s,e))}},Rl=["D","DD"],Dl=["YY","YYYY"];function Il(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var Fl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ul=/^'([^]*?)'?$/,Bl=/''/g,ql=/[a-zA-Z]/;function $l(t,e,n){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var i=String(e),r=n||{},s=r.locale||Sl,a=s.options&&s.options.firstWeekContainsDate,o=null==a?1:ul(a),l=null==r.firstWeekContainsDate?o:ul(r.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=s.options&&s.options.weekStartsOn,h=null==c?0:ul(c),d=null==r.weekStartsOn?h:ul(r.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var p=pl(t);if(!function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=pl(t);return!isNaN(e)}(p))throw new RangeError("Invalid time value");var u=function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");return function(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=pl(t).getTime(),i=ul(e);return new Date(n+i)}(t,-ul(e))}(p,function(t){var e=new Date(t.getTime()),n=e.getTimezoneOffset();e.setSeconds(0,0);var i=e.getTime()%ml;return n*ml+i}(p)),m={firstWeekContainsDate:l,weekStartsOn:d,locale:s,_originalDate:p};return i.match(jl).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Nl[e])(t,s.formatLong,m):t})).join("").match(Fl).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return t.match(Ul)[1].replace(Bl,"'");var n,i=Hl[e];if(i)return r.useAdditionalWeekYearTokens||(n=t,-1===Dl.indexOf(n))||Il(t),!r.useAdditionalDayOfYearTokens&&function(t){return-1!==Rl.indexOf(t)}(t)&&Il(t),i(u,t,s.localize,m);if(e.match(ql))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}function Wl(){var t=ro(["\n          <div>\n            ","\n          </div>\n        "]);return Wl=function(){return t},t}function Yl(){var t=ro(["\n      <div>\n        ","\n      </div>\n      ","\n    "]);return Yl=function(){return t},t}function Kl(){var t=ro(["\n      :host {\n        display: var(--x-date-time-display, block);\n        flex-direction: var(--x-date-time-flex-direction, initial);\n        font-size: var(--x-date-time-font-size, initial);\n        font-weight: var(--x-date-time-font-weight, initial);\n      }\n    "]);return Kl=function(){return t},t}function Gl(){var t=ro(['\n      <div>\n        <slot name="x-date-time"></slot>\n      </div>\n      <div>\n        <slot name="x-weather-item-temperature"></slot>\n      </div>\n      <div>\n        <img alt="','" src="','" />\n      </div>\n    ']);return Gl=function(){return t},t}function Jl(){var t=ro(["\n      :host {\n        display: var(--x-weather-item-display, block);\n        flex-direction: var(--x-weather-item-flex-direction, initial);\n        text-align: var(--x-weather-item-text-align, initial);\n        justify-content: space-evenly;\n        align-items: center;\n      }\n\n      img {\n        display: var(--x-weather-item-icon-display, block);\n        height: var(--x-weather-item-icon-height, 7.5rem);\n        margin: var(--x-weather-item-icon-margin, auto);\n        width: var(--x-weather-item-icon-width, 7.5rem);\n      }\n    "]);return Jl=function(){return t},t}customElements.get("x-date-time")||customElements.define("x-date-time",class extends dl{static get styles(){return cl(Kl())}static get properties(){return{displayTime:{type:Boolean},datefmt:{type:String},timefmt:{type:String},timestamp:{type:String}}}constructor(){super(),this.displayTime=!1,this.datefmt="yyyy-MM-dd",this.timefmt="h:mm:ss a",this.timestamp="0"}render(){var t=new Date(function(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");return pl(1e3*ul(t))}(this.timestamp)),e=$l(t,this.datefmt),n=$l(t,this.timefmt);return Io(Yl(),e,this.displayTime?Io(Wl(),n):null)}});function Xl(){var t=ro(['\n      <span id="max">','</span>°<span id="maxScale" data-scale>','</span>&nbsp;\n      <span id="min">','</span>°<span id="minScale" data-scale>',"</span>\n    "]);return Xl=function(){return t},t}function Ql(){var t=ro(["\n      :host {\n        display: block;\n      }\n\n      #min,\n      #minScale {\n        color: var(--x-weather-item-temperature-min-color, rgb(0, 0, 128));\n        font-size: var(--x-weather-item-temperature-font-size, 0.75rem);\n        font-weight: var(--x-weather-item-temperature-font-weight, bold);\n      }\n\n      #max,\n      #maxScale {\n        font-size: var(--x-weather-item-temperature-max-color, 1.25rem);\n        font-weight: var(--x-weather-item-temperature-font-weight, bold);\n      }\n    "]);return Ql=function(){return t},t}customElements.get("x-weather-item")||customElements.define("x-weather-item",class extends dl{static get styles(){return cl(Jl())}static get properties(){return{datetime:{type:Number},iconalt:{type:String},iconsrc:{type:String}}}render(){var t="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/".concat(this.iconsrc,".png");return Io(Gl(),this.iconalt,t)}});customElements.get("x-weather-item-temperature")||customElements.define("x-weather-item-temperature",class extends dl{static get styles(){return cl(Ql())}static get properties(){return{mintemp:{type:Number},maxtemp:{type:Number},minscale:{type:String},maxscale:{type:String}}}render(){return Io(Xl(),this.maxtemp,this.maxscale,this.mintemp,this.minscale)}});const Zl=t=>e=>(class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=t.subscribe(()=>this.stateChanged(t.getState())),this.stateChanged(t.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}});var tc=function(t){var e,n=("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()).Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}(),ec=function(){return Math.random().toString(36).substring(7).split("").join(".")},nc={INIT:"@@redux/INIT"+ec(),REPLACE:"@@redux/REPLACE"+ec(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ec()}};function ic(t,e,n){var i;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(ic)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var r=t,s=e,a=[],o=a,l=!1;function c(){o===a&&(o=a.slice())}function h(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function d(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return c(),o.push(t),function(){if(e){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,c();var n=o.indexOf(t);o.splice(n,1)}}}function p(t){if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=r(s,t)}finally{l=!1}for(var e=a=o,n=0;n<e.length;n++)(0,e[n])();return t}return p({type:nc.INIT}),(i={dispatch:p,subscribe:d,getState:h,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");r=t,p({type:nc.REPLACE})}})[tc]=function(){var t,e=d;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(h())}return n(),{unsubscribe:e(n)}}})[tc]=function(){return this},t},i}function rc(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function sc(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var r=e[i];"function"==typeof t[r]&&(n[r]=t[r])}var s,a=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(e){var n=t[e];if(void 0===n(void 0,{type:nc.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:nc.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+nc.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(t){s=t}return function(t,e){if(void 0===t&&(t={}),s)throw s;for(var i=!1,r={},o=0;o<a.length;o++){var l=a[o],c=n[l],h=t[l],d=c(h,e);if(void 0===d){var p=rc(l,e);throw new Error(p)}r[l]=d,i=i||d!==h}return i?r:t}}function ac(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oc(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n}function lc(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?oc(n,!0).forEach((function(e){ac(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oc(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function cc(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}var hc=(t,e)=>(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1?arguments[1]:void 0;return!0===e.hasOwnProperty(i.type)?e[i.type](n,i):n}),dc=sc({current:hc({},{[Ga](t,e){var{payload:n}=e;return io({},t,{},n)}}),forecast:hc({},{[Ja](t,e){var{payload:n}=e;return io({},t,{},n)}}),preferences:hc({},{[Xa](t,e){var{payload:n}=e;return io({},t,{location:io({},t.location,{},n)})},[Ka](t,e){var{payload:n}=e;return io({},t,{primaryScaleForecast:n})},[Ya](t,e){var{payload:n}=e;return io({},t,{primaryScaleCurrent:n})}})}),pc=sc({weather:dc});function uc(t){return function(e){var n=e.dispatch,i=e.getState;return function(e){return function(r){return"function"==typeof r?r(n,i,t):e(r)}}}}var mc=uc();function fc(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}mc.withExtraArgument=uc;var gc="object"==typeof global&&global&&global.Object===Object&&global,_c="object"==typeof self&&self&&self.Object===Object&&self,vc=gc||_c||Function("return this")(),yc=function(){return vc.Date.now()},bc=vc.Symbol,wc=Object.prototype,Sc=wc.hasOwnProperty,Cc=wc.toString,zc=bc?bc.toStringTag:void 0,xc=Object.prototype.toString,Mc="[object Null]",Tc="[object Undefined]",Ec=bc?bc.toStringTag:void 0;var Pc="[object Symbol]",Hc=NaN,kc=/^\s+|\s+$/g,Lc=/^[-+]0x[0-9a-f]+$/i,Ac=/^0b[01]+$/i,Oc=/^0o[0-7]+$/i,Vc=parseInt;function Nc(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&function(t){return null==t?void 0===t?Tc:Mc:Ec&&Ec in Object(t)?function(t){var e=Sc.call(t,zc),n=t[zc];try{t[zc]=void 0;var i=!0}catch(t){}var r=Cc.call(t);return i&&(e?t[zc]=n:delete t[zc]),r}(t):function(t){return xc.call(t)}(t)}(t)==Pc}(t))return Hc;if(fc(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=fc(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(kc,"");var n=Ac.test(t);return n||Oc.test(t)?Vc(t.slice(2),n?2:8):Lc.test(t)?Hc:+t}var Rc="Expected a function",Dc=Math.max,Ic=Math.min;var Fc=(t=>ic(pc,t,cc(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),i=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:n.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=e.map((function(t){return t(r)}));return lc({},n,{dispatch:i=cc.apply(void 0,s)(n.dispatch)})}}}(mc))))(io({},{weather:{current:{iconAlt:"shower rain",iconSrc:"09d",temperature:{kelvin:283.4,celsius:10.25,fahrenheit:50.45},timestamp:1570576970,sunrise:1570543089,sunset:1570583768,timezone:-25200},forecast:{0:{dt:1570518e3,sunrise:1570543089,sunset:1570583768,temp:{day:10.25,min:10.25,max:10.25,night:10.25,eve:10.25,morn:10.25},pressure:1007,humidity:34,weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02d"}],speed:7.062,deg:253,clouds:17},1:{dt:1570604400,sunrise:1570629574,sunset:1570670049,temp:{day:3.16,min:-1.65,max:8.94,night:2.75,eve:-1.65,morn:8.94},pressure:1014,humidity:87,weather:[{id:600,main:"Snow",description:"light snow",icon:"13d"}],speed:1.939,deg:266,clouds:100,rain:1.69,snow:1.31},2:{dt:1570690800,sunrise:1570716059,sunset:1570756331,temp:{day:-.04,min:-2.25,max:5.63,night:4.9,eve:-2.25,morn:5.63},pressure:1032,humidity:41,weather:[{id:800,main:"Clear",description:"sky is clear",icon:"01n"}],speed:.785,deg:159,clouds:0},3:{dt:1570777200,sunrise:1570802544,sunset:1570842614,temp:{day:1.09,min:-1.13,max:6.52,night:5.33,eve:-1.13,morn:6.52},pressure:1031,humidity:50,weather:[{id:800,main:"Clear",description:"sky is clear",icon:"01n"}],speed:1.571,deg:86,clouds:0},4:{dt:1570863600,sunrise:1570889029,sunset:1570928897,temp:{day:3.67,min:.82,max:9.36,night:7.98,eve:.82,morn:9.36},pressure:1022,humidity:52,weather:[{id:801,main:"Clouds",description:"few clouds",icon:"02n"}],speed:1.647,deg:59,clouds:25},5:{dt:157095e4,sunrise:1570975515,sunset:1571015182,temp:{day:6.19,min:5.06,max:10.74,night:5.47,eve:5.06,morn:10.74},pressure:1013,humidity:54,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],speed:.761,deg:220,clouds:100,rain:.25},6:{dt:1571036400,sunrise:1571062001,sunset:1571101467,temp:{day:6.06,min:4.65,max:10.79,night:10.79,eve:4.65,morn:8.15},pressure:1015,humidity:68,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}],speed:1.532,deg:178,clouds:87},7:{dt:1571122800,sunrise:1571148488,sunset:1571187753,temp:{day:6.17,min:3.96,max:11.51,night:10.36,eve:3.99,morn:11.51},pressure:1020,humidity:72,weather:[{id:800,main:"Clear",description:"sky is clear",icon:"01n"}],speed:1.499,deg:77,clouds:0},8:{dt:1571209200,sunrise:1571234975,sunset:1571274040,temp:{day:9.94,min:7.41,max:13.26,night:12.95,eve:7.41,morn:13.26},pressure:1016,humidity:56,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}],speed:1.271,deg:136,clouds:100},9:{dt:1571295600,sunrise:1571321462,sunset:1571360327,temp:{day:11.68,min:8.71,max:14.91,night:8.71,eve:9.68,morn:14.91},pressure:1002,humidity:50,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],speed:.799,deg:89,clouds:100,rain:1.5},10:{dt:1571382e3,sunrise:1571407950,sunset:1571446616,temp:{day:6.12,min:5.25,max:11.14,night:7.79,eve:6.05,morn:11.14},pressure:1002,humidity:70,weather:[{id:500,main:"Rain",description:"light rain",icon:"10d"}],speed:3.418,deg:185,clouds:26,rain:2.81},11:{dt:1571468400,sunrise:1571494438,sunset:1571532906,temp:{day:4.85,min:3.01,max:8.77,night:6.1,eve:4.15,morn:8.77},pressure:1006,humidity:71,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}],speed:1.632,deg:180,clouds:86},12:{dt:1571554800,sunrise:1571580927,sunset:1571619196,temp:{day:6.24,min:5.19,max:8.67,night:5.32,eve:5.27,morn:8.67},pressure:1019,humidity:70,weather:[{id:501,main:"Rain",description:"moderate rain",icon:"10d"}],speed:3.716,deg:192,clouds:100,rain:9.94},13:{dt:1571641200,sunrise:1571667415,sunset:1571705488,temp:{day:12.68,min:11.2,max:14.27,night:14.25,eve:14.27,morn:11.2},pressure:1014,humidity:84,weather:[{id:804,main:"Clouds",description:"overcast clouds",icon:"04n"}],speed:7.944,deg:222,clouds:100}},preferences:{primaryScaleCurrent:"c",primaryScaleForecast:"c",location:{latitude:49.2406,longitude:-98.5375,placename:"Manitou, Manitoba"},locations:[{latitude:42.35,longitude:-83.06,placename:"Detroit, Michigan"},{latitude:33.43,longitude:-112.11,placename:"Phoenix, Arizona"},{latitude:42.57,longitude:-84.42,placename:"Mason, Michigan"},{latitude:47.62,longitude:-117.43,placename:"Spokane, Washington"},{latitude:41.4081,longitude:-92.9164,placename:"Pella, Iowa"},{latitude:43.6834,longitude:-80.433,placename:"Elora, Ontario"},{latitude:49.2406,longitude:-98.5375,placename:"Manitou, Manitoba"},{latitude:43.5501,longitude:-80.2497,placename:"Guelph, Ontario"},{latitude:37.6597,longitude:-97.5754,placename:"Wichita, Kansas"},{latitude:52.1058,longitude:-101.2676,placename:"Swan River, Manitoba"},{latitude:44.4001,longitude:-79.6664,placename:"Barrie, Ontario"},{latitude:49.8844,longitude:-97.1471,placename:"Winnipeg, Manitoba"},{latitude:41.6834,longitude:-86.2501,placename:"South Bend, Indiana"},{latitude:40.0379,longitude:-76.3056,placename:"Lancaster, Pennsylvania"}]}}},{},(()=>{try{var t=localStorage.getItem("x-weather-state");if(null===t)return;return JSON.parse(t)}catch(t){return}})()));Fc.subscribe(function(t,e,n){var i=!0,r=!0;return fc(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(t,e,n){var i,r,s,a,o,l,c=0,h=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError(Rc);function u(e){var n=i,s=r;return i=r=void 0,c=e,a=t.apply(s,n)}function m(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-c>=s}function f(){var t=yc();if(m(t))return g(t);o=setTimeout(f,function(t){var n=e-(t-l);return d?Ic(n,s-(t-c)):n}(t))}function g(t){return o=void 0,p&&i?u(t):(i=r=void 0,a)}function _(){var t=yc(),n=m(t);if(i=arguments,r=this,l=t,n){if(void 0===o)return function(t){return c=t,o=setTimeout(f,e),h?u(t):a}(l);if(d)return clearTimeout(o),o=setTimeout(f,e),u(l)}return void 0===o&&(o=setTimeout(f,e)),a}return e=Nc(e)||0,fc(n)&&(h=!!n.leading,s=(d="maxWait"in n)?Dc(Nc(n.maxWait)||0,e):s,p="trailing"in n?!!n.trailing:p),_.cancel=function(){void 0!==o&&clearTimeout(o),c=0,i=l=r=o=void 0},_.flush=function(){return void 0===o?a:g(yc())},_}(t,1e3,{leading:i,maxWait:1e3,trailing:r})}(()=>{(t=>{try{var e=JSON.stringify(t);localStorage.setItem("x-weather-state",e)}catch(t){}})(Fc.getState())}));var jc=t=>{var{appid:e,host:n,latitude:i,longitude:r,placename:s}=t;Fc.dispatch(Za({appid:e,host:n,latitude:i,longitude:r,placename:s}))},Uc=t=>{var{appid:e,host:n,latitude:i,longitude:r,placename:s}=t;Fc.dispatch(to({appid:e,host:n,latitude:i,longitude:r,placename:s}))},Bc=t=>{Fc.dispatch((t=>({type:Ya,payload:t}))(t))},qc=t=>{Fc.dispatch((t=>({type:Ka,payload:t}))(t))},$c=t=>{Fc.dispatch((t=>({type:Xa,payload:t}))(t))};function Wc(){var t=ro(['\n          <div>\n            <span id="temperature">','</span> °<span id="primaryScale">F</span>\n          </div>\n          <div>\n            <span>',' °<a id="alternateScale" @click=',">C</a></span>\n          </div>\n        "]);return Wc=function(){return t},t}function Yc(){var t=ro(['\n          <div>\n            <span id="temperature">','</span> °<span id="primaryScale">C</span>\n          </div>\n          <div>\n            <span>',' °<a id="alternateScale" @click=',">F</a></span>\n          </div>\n        "]);return Yc=function(){return t},t}function Kc(){var t=ro(["\n      :host {\n        align-items: var(--x-current-temperature-align-items, center);\n        display: var(--x-current-temperature-display, block);\n        flex-direction: var(--x-current-temperature-flex-direction, initial);\n        height: var(--x-current-temperature-height, initial);\n        justify-content: var(--x-current-temperature-justify-content, initial);\n      }\n\n      #alternateScale {\n        cursor: pointer;\n        border-bottom: 1px dotted;\n      }\n\n      #temperature {\n        font-size: var(--x-current-temperature-font-size, initial);\n        font-weight: var(--x-current-temperature-font-weight, initial);\n      }\n    "]);return Kc=function(){return t},t}var Gc=class extends(Zl(Fc)(dl)){static get styles(){return cl(Kc())}static get properties(){return{celsius:{type:Number},fahrenheit:{type:Number},primaryscale:{type:String}}}stateChanged(t){var{weather:e}=t;this.celsius=String(e.current.temperature.celsius).slice(0,5),this.fahrenheit=String(e.current.temperature.fahrenheit).slice(0,5),this.primaryscale=e.current.primaryScale||this.primaryscale}constructor(){super(),this.celsius="10.00",this.fahrenheit="50.00",this.primaryscale="c"}_handleScaleSwap(t){return()=>{Bc(t),qc(t)}}render(){return"c"===this.primaryscale?Io(Yc(),this.celsius,this.fahrenheit,this._handleScaleSwap("f")):Io(Wc(),this.fahrenheit,this.celsius,this._handleScaleSwap("c"))}};function Jc(){var t=ro(['\n      <x-weather-item iconalt="','" iconsrc="','">\n        <x-date-time ?displayTime="','" slot="x-date-time" timestamp="','"></x-date-time>\n        <x-current-temperature\n          primaryscale=','\n          slot="x-weather-item-temperature"\n        ></x-current-temperature>\n      </x-weather-item>\n    ']);return Jc=function(){return t},t}function Xc(){var t=ro(["\n      :host {\n        display: block;\n        margin: var(--x-current-margin, initial);\n      }\n\n      x-date-time {\n        text-decoration: var(--x-current-x-date-time, initial);\n        --x-date-time-font-size: var(--x-current-x-date-time-font-size, 1.25rem);\n        --x-date-time-font-weight: var(--x-current-x-date-time-font-weight, initial);\n      }\n\n      x-weather-item {\n        margin-bottom: 0.5rem;\n\n        --x-weather-item-display: var(--x-current-x-weather-item-display, initial);\n        --x-weather-item-flex-direction: var(--x-current-x-weather-item-flex-direction, initial);\n        --x-weather-item-text-align: var(--x-current-x-weather-item-text-align, initial);\n      }\n\n      x-current-temperature {\n        --x-current-temperature-font-size: var(--x-current-x-current-temperature-font-size, 1.25rem);\n        --x-current-temperature-font-weight: var(--x-current-x-current-temperature-font-weight, bold);\n      }\n    "]);return Xc=function(){return t},t}customElements.get("x-current-temperature")||customElements.define("x-current-temperature",Gc);var Qc=class extends(Zl(Fc)(dl)){static get styles(){return cl(Xc())}static get properties(){return{currentweather:{type:Object},primaryscale:{type:String}}}stateChanged(t){var{weather:e}=t;this.currentweather=e.current,this.primaryscale=Wa(["preferences","primaryScaleCurrent"],e)||this.primaryscale}render(){return Io(Jc(),this.currentweather.iconAlt,this.currentweather.iconSrc,!0,this.currentweather.timestamp,this.primaryscale)}};function Zc(){var t=ro(['\n              <x-weather-item iconalt="','" iconsrc="','">\n                <x-date-time datefmt="LLL dd (EEE)" slot="x-date-time" timestamp="','"></x-date-time>\n                <x-weather-item-temperature\n                  minscale="','"\n                  mintemp="','"\n                  maxscale="','"\n                  maxtemp="','"\n                  slot="x-weather-item-temperature"\n                ></x-weather-item-temperature>\n              </x-weather-item>\n            ']);return Zc=function(){return t},t}function th(){var t=ro(["\n      ","\n    "]);return th=function(){return t},t}function eh(){var t=ro(["\n      :host {\n        display: var(--x-forecast-display, grid);\n\n        grid-template-columns: var(\n          --x-forecast-date-container-grid-template-columns,\n          repeat(auto-fill, minmax(12rem, 1fr))\n        );\n      }\n\n      x-date-time {\n        text-decoration: var(--x-forecast-x-date-time, initial);\n      }\n\n      x-weather-item {\n        margin-bottom: 0.5rem;\n      }\n      "]);return eh=function(){return t},t}customElements.get("x-current")||customElements.define("x-current",Qc);var nh=class extends(Zl(Fc)(dl)){static get styles(){return cl(eh())}static get properties(){return{days:{type:Number,reflect:!0},forecastweather:{type:Object,reflect:!1},primaryscale:{type:String,reflect:!0}}}getIcon(t){var e=t[0].icon;return"".concat(e.slice(0,2),"d")}stateChanged(t){var{weather:e}=t;this.forecastweather=e.forecast,this.primaryscale=Wa(["preferences","primaryScaleCurrent"],e)||this.primaryscale}setTemp(t,e){var n="f"===e?$a(t,"cToF"):t;return String(n).slice(0,4)}render(){return Io(th(),Object.keys(this.forecastweather).map(t=>{var e=this.forecastweather[t];return e.weather&&t<this.days?Io(Zc(),e.weather[0].description,this.getIcon(e.weather),e.dt,this.primaryscale.toUpperCase(),this.setTemp(e.temp.min,this.primaryscale),this.primaryscale.toUpperCase(),this.setTemp(e.temp.max,this.primaryscale)):""}))}};function ih(){var t=ro(["\n      <header><strong>","</strong></header>\n    "]);return ih=function(){return t},t}function rh(){var t=ro(["\n      :host {\n        display: block;\n      }\n\n      header {\n        font-size: var(--x-location-header-font-size, 1.5rem);\n        text-align: center;\n      }\n\n      ul {\n        list-style: none;\n        padding: none;\n      }\n\n      ul > li {\n        margin-top: 1rem;\n      }\n    "]);return rh=function(){return t},t}customElements.get("x-forecast")||customElements.define("x-forecast",nh);var sh=class extends(Zl(Fc)(dl)){static get styles(){return cl(rh())}static get properties(){return{location:{type:Object}}}stateChanged(t){var{weather:e}=t;this.location=e.preferences.location||this.location}render(){return Io(ih(),this.location.placename)}};function ah(){var t=ro(["\n          <div>\n            Please make sure required attributes (appid, host, latitude, longitude, placename) are set on\n            &lt;x-weather&gt;.\n          </div>\n        "]);return ah=function(){return t},t}function oh(){var t=ro(["\n          <x-location></x-location>\n          <slot></slot>\n        "]);return oh=function(){return t},t}function lh(){var t=ro(["\n      :host {\n        display: block;\n      }\n    "]);return lh=function(){return t},t}customElements.get("x-location")||customElements.define("x-location",sh);function ch(){var t=i(['\n      <x-weather\n        appid="','"\n        host="','"\n        latitude="','"\n        longitude="','"\n        placename="','"\n      >\n        <x-current primaryscale="','"></x-current>\n\n        <header><strong>Forecast</strong></header>\n        <x-forecast days="','" primaryscale="','"></x-forecast>\n      </x-weather>\n    ']);return ch=function(){return t},t}function hh(){var t=i(["\n      :host {\n        padding: 1rem;\n      }\n\n      header {\n        font-size: var(--x-weather-content-forecast-header-font-size, 1.5rem);\n        margin-bottom: 1rem;\n        text-align: center;\n      }\n    "]);return hh=function(){return t},t}customElements.get("x-weather")||customElements.define("x-weather",class extends dl{static get styles(){return cl(lh())}static get properties(){return{appid:{type:String,reflect:!1},host:{type:String,reflect:!0},latitude:{type:Number,reflect:!0},longitude:{type:Number,reflect:!0},placename:{type:String,reflect:!0}}}constructor(){super(),this.appid=void 0,this.host="api.openweathermap.org",this.latitude=void 0,this.longitude=void 0,this.placename=void 0}_hasRequiredAttributes(){return this.appid&&this.host&&this.latitude&&this.longitude&&this.placename}firstUpdated(){this._hasRequiredAttributes()&&($c({latitude:this.latitude,longitude:this.longitude,placename:this.placename}),jc({appid:this.appid,host:this.host}),Uc({appid:this.appid,host:this.host}))}render(){return this._hasRequiredAttributes()?Io(oh()):Io(ah())}});function dh(){var t=i(['\n                    <li>\n                      <mwc-button\n                        @click="','"\n                        label=','\n                        class="location"\n                      ></mwc-button>\n                    </li>\n                  ']);return dh=function(){return t},t}function ph(){var t=i(["\n                    <li>\n                      <mwc-button\n                        @click=","\n                        label=",'\n                        class="theme"\n                      ></mwc-button>\n                    </li>\n                  ']);return ph=function(){return t},t}function uh(){var t=i(['\n      <div class="drawer-container">\n        <ul>\n          <li>\n            <h1>Theme</h1>\n            <div>\n              <ul>\n                ',"\n              </ul>\n            </div>\n          </li>\n          <li>\n            <h1>Featured Cities</h1>\n            <div>\n              <ul>\n                ",'\n              </ul>\n            </div>\n          </li>\n          <li>\n            <h1>Links</h1>\n            <div>\n              <ul>\n                <li>\n                  <mwc-button\n                    @click="','"\n                    label="GIFWorks"\n                    class="location"\n                  ></mwc-button>\n                </li>\n                <li>\n                  <mwc-button\n                    @click="','"\n                    label="TFJS Component Playground"\n                    class="location"\n                  ></mwc-button>\n                </li>\n                <li>\n                  <mwc-button\n                    @click="','"\n                    label="pwgen"\n                    class="location"\n                  ></mwc-button>\n                </li>\n                <li>\n                  <mwc-button\n                    @click="','"\n                    label="Infinity M"\n                    class="location"\n                  ></mwc-button>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n    ']);return uh=function(){return t},t}function mh(){var t=i(["\n      .drawer-container {\n        background-color: var(--primary-foreground-color, #111);\n        color: var(--primary-background-color, #ccc);\n        height: 100%;\n\n        /* scroll without scrollbars */\n        overflow: auto;\n        -ms-overflow-style: none; /* IE 10+ */\n        scrollbar-width: none; /* Firefox */\n      }\n\n      /* scroll without scrollbars */\n      .drawer-container::-webkit-scrollbar {\n        display: none; /* Safari and Chrome */\n      }\n\n      .location, .theme {\n        --mdc-theme-on-primary: #111111;\n        --mdc-theme-primary: #cccccc;\n\n        margin-top: 1rem;\n        width: 100%;\n      }\n\n      .location:hover, .theme:hover {\n        text-decoration: underline;\n      }\n\n      h1 {\n        font-size: 1.5rem;\n        color: #ddd;\n      }\n\n      ul {\n        list-style-type: none;\n        padding: 0 1rem 0 1rem;\n      }\n\n      .drawer-container > ul > li {\n        margin-bottom: 2rem;\n      }\n\n      ul > li ul > li {\n        list-style-type: none;\n        margin-left: -0.5rem;\n      }\n\n      mwc-button {\n        background-color: var(--x-weather-drawer-children-mwc-button, #222);\n      }\n    "]);return mh=function(){return t},t}Ia("x-weather-content",class extends gt{static get styles(){return mt(hh())}static get properties(){return{appid:{reflect:!0,type:String},host:{reflect:!0,type:String},location:{reflect:!0,type:String},primaryscale:{reflect:!0,type:String},forecastdays:{reflect:!0,type:String}}}render(){return D(ch(),this.appid,this.host,JSON.parse(this.location).latitude,JSON.parse(this.location).longitude,JSON.parse(this.location).placename,this.primaryscale,this.forecastdays,this.primaryscale)}});function fh(){var t=i(["\n          &lt;x-weather-app&gt; requires the location attribute.\n        "]);return fh=function(){return t},t}function gh(){var t=i(['\n          <x-weather-bouncer></x-weather-bouncer>\n          <app-header reveals>\n            <app-toolbar>\n              <x-weather-hamburger>Menu</x-weather-hamburger>\n              <x-weather-branding sitetitle="','" siteurl="','"></x-weather-branding>\n            </app-toolbar>\n          </app-header>\n\n          <app-drawer swipe-open>\n            <x-weather-drawer-children></x-weather-drawer-children>\n          </app-drawer>\n\n          <x-weather-content\n            appid="','"\n            host="','"\n            forecastdays="14"\n            location="','"\n            primaryscale="f"\n          ></x-weather-content>\n        ']);return gh=function(){return t},t}function _h(){var t=i(["\n      app-header {\n        background-color: #000;\n        color: #fff;\n\n        --app-header-background-front-layer: {\n          background-color: #000;\n        }\n\n        --app-header-background-rear-layer: {\n          background-color: #000;\n        }\n      }\n\n      app-toolbar {\n        background-color: #000;\n        font-size: 1.5rem;\n      }\n\n      app-drawer {\n        --app-drawer-scrim-background: rgba(0, 0, 0, 0.8);\n      }\n\n      x-weather-hamburger {\n        pointer-events: unset;\n      }\n    "]);return _h=function(){return t},t}Ia("x-weather-drawer-children",class extends gt{constructor(){super(...arguments),e(this,"_themeOptions",["light","dark"])}static get styles(){return mt(mh())}_handleDrawerChange(t){this.shadowRoot.dispatchEvent(new CustomEvent("x-weather-drawer-change",{bubbles:!0,composed:!0,detail:t}))}_handleMenuLocationChange(t){return e=>{this.shadowRoot.dispatchEvent(new CustomEvent("x-weather-drawer-children",{bubbles:!0,composed:!0,detail:t})),this._handleDrawerChange(e)}}_handleMenuRedirect(t){return e=>{document.location.href=t}}get locations(){return[{latitude:42.35,longitude:-83.06,placename:"Detroit, Michigan"},{latitude:33.43,longitude:-112.11,placename:"Phoenix, Arizona"},{latitude:42.57,longitude:-84.42,placename:"Mason, Michigan"},{latitude:47.62,longitude:-117.43,placename:"Spokane, Washington"},{latitude:41.4081,longitude:-92.9164,placename:"Pella, Iowa"},{latitude:43.6834,longitude:-80.433,placename:"Elora, Ontario"},{latitude:43.5501,longitude:-80.2497,placename:"Guelph, Ontario"},{latitude:49.2406,longitude:-98.5375,placename:"Manitou, Manitoba"},{latitude:37.6597,longitude:-97.5754,placename:"Wichita, Kansas"},{latitude:52.1058,longitude:-101.2676,placename:"Swan River, Manitoba"},{latitude:44.4001,longitude:-79.6664,placename:"Barrie, Ontario"},{latitude:49.8844,longitude:-97.1471,placename:"Winnipeg, Manitoba"},{latitude:41.6834,longitude:-86.2501,placename:"South Bend, Indiana"},{latitude:40.0379,longitude:-76.3056,placename:"Lancaster, Pennsylvania"}]}_enableTheme(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=document.documentElement;t="light"===e?"dark":"light",i.classList.add("theme-".concat(e)),i.classList.remove("theme-".concat(t)),n&&this._persistToStorage("preference-theme",e)}_getThemeFromBrowser(){var t=window.matchMedia("(prefers-color-scheme: dark)");return t.matches?"dark":(t=window.matchMedia("(prefers-color-scheme: light)")).matches?"light":void 0}_getThemeFromStorage(){var t=localStorage.getItem("preference-theme"),e=localStorage.getItem("preference-theme-last-change"),n=new Date,i=((n=n.getTime())-e)/6e4;return i<120&&"light"===t?"light":i<120&&"dark"===t?"dark":void 0}_getThemeFromTime(){var t=(new Date).getHours();return t>20||t<5?"dark":"light"}_keepInSync(){window.addEventListener("storage",t=>{"preference-theme"===t.key&&("light"===t.newValue?this._enableTheme("light",!0,!1):"dark"===t.newValue&&this._enableTheme("dark",!0,!1))})}_persistToStorage(t,e){var n=new Date;n=n.getTime(),localStorage.setItem(t,e),localStorage.setItem("".concat(t,"-last-change"),n)}_watchPreferesColorScheme(){window.matchMedia("(prefers-color-scheme: dark)").addListener(t=>{var e=document.documentElement;!0!==t.matches?e.classList.contains("theme-light")||this._enableTheme("light",!0):e.classList.contains("theme-dark")||this._enableTheme("dark",!0)})}firstUpdated(){this._keepInSync(),this._watchPreferesColorScheme(),this._enableTheme(this._getThemeFromStorage()||this._getThemeFromBrowser()||this._getThemeFromTime(),!1)}render(){return D(uh(),this._themeOptions.map(t=>D(ph(),()=>this._enableTheme(t,!0),t)),this.locations.map(t=>D(dh(),this._handleMenuLocationChange(t),t.placename)),this._handleMenuRedirect("https://plainandeasy.com"),this._handleMenuRedirect("https://kherrick.github.io/tfjs-component-playground/"),this._handleMenuRedirect("https://kherrick.github.io/pwgen/"),this._handleMenuRedirect("https://infinitym.ca/"))}});t.XWeatherApp=class extends gt{static get styles(){return mt(_h())}static get properties(){return{appid:{reflect:!1,type:String},host:{reflect:!0,type:String},location:{reflect:!0,type:String},sitetitle:{reflect:!0,type:String},siteurl:{reflect:!0,type:String}}}_handleDrawerChange(t){var e=this.shadowRoot.querySelector("app-drawer");""!==e.getAttribute("opened")?e.setAttribute("opened",""):e.removeAttribute("opened")}_handleDrawerLocationStorage(t){var e=localStorage.getItem("x-weather-app-current-location");if(e===t)return e;try{localStorage.setItem("x-weather-app-current-location",t)}catch(t){console.error(t)}return t}_handleDrawerLocationChange(t){var i,r=this._handleDrawerLocationStorage(t);try{i=JSON.parse(r)}catch(t){i={},console.error(t)}$c(function(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?n(r,!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},i)),jc({appid:this.appid,host:this.host}),Uc({appid:this.appid,host:this.host})}_handleLocationStorageOnRender(t){var e=localStorage.getItem("x-weather-app-current-location");if(e!==t&&null!==e)return e;try{localStorage.setItem("x-weather-app-current-location",t)}catch(t){console.error(t)}return t}firstUpdated(){this.addEventListener("x-weather-drawer-change",t=>{this._handleDrawerChange(t)}),this.addEventListener("x-weather-drawer-children",t=>{var{detail:e}=t,n=JSON.stringify(e);this.setAttribute("location",n),this._handleDrawerLocationChange(n)})}render(){var t=this._handleLocationStorageOnRender(this.location);return t?D(gh(),this.sitetitle,this.siteurl,this.appid,this.host,t):D(fh())}},Object.defineProperty(t,"__esModule",{value:!0})}));
