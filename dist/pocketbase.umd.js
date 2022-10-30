!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).PocketBase=e()}(this,(function(){"use strict";var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}var n=function(){return n=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};function o(t,e,n,o){return new(n||(n=Promise))((function(i,r){function s(t){try{u(o.next(t))}catch(t){r(t)}}function a(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))}function i(t,e){var n,o,i,r,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,o=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){s.label=r[1];break}if(6===r[0]&&s.label<i[1]){s.label=i[1],i=r;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(r);break}i[2]&&s.ops.pop(),s.trys.pop();continue}r=e.call(t,s)}catch(t){r=[6,t],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}var r,s=function(t){function o(e){var n,i=this;return(i=t.call(this,"ClientResponseError")||this).url="",i.status=0,i.data={},i.isAbort=!1,i.originalError=null,Object.setPrototypeOf(i,o.prototype),e instanceof o||(i.originalError=e),null!==e&&"object"==typeof e&&(i.url="string"==typeof e.url?e.url:"",i.status="number"==typeof e.status?e.status:0,i.data=null!==e.data&&"object"==typeof e.data?e.data:{}),"undefined"!=typeof DOMException&&e instanceof DOMException&&(i.isAbort=!0),i.name="ClientResponseError "+i.status,i.message=null===(n=i.data)||void 0===n?void 0:n.message,i.message||(i.message=i.isAbort?"The request was autocancelled. More info you could find in https://github.com/pocketbase/js-sdk#auto-cancellation.":"Something went wrong while processing your request."),i}return e(o,t),o.prototype.toJSON=function(){return n({},this)},o}(Error),a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function u(t,e,n){var o=Object.assign({},n||{}),i=o.encode||c;if(!a.test(t))throw new TypeError("argument name is invalid");var r=i(e);if(r&&!a.test(r))throw new TypeError("argument val is invalid");var s=t+"="+r;if(null!=o.maxAge){var u=o.maxAge-0;if(isNaN(u)||!isFinite(u))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(u)}if(o.domain){if(!a.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!a.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if(!function(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}(o.expires)||isNaN(o.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(s+="; HttpOnly"),o.secure&&(s+="; Secure"),o.priority)switch("string"==typeof o.priority?o.priority.toLowerCase():o.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function l(t){return-1!==t.indexOf("%")?decodeURIComponent(t):t}function c(t){return encodeURIComponent(t)}function d(t){if(t)try{var e=decodeURIComponent(r(t.split(".")[1]).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(e)||{}}catch(t){}return{}}r="function"==typeof atob?atob:function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,i=0,r=0,s="";o=e.charAt(r++);~o&&(n=i%4?64*n+o:o,i++%4)?s+=String.fromCharCode(255&n>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s};var h=function(){function t(t){void 0===t&&(t={}),this.load(t||{})}return t.prototype.load=function(t){for(var e=0,n=Object.entries(t);e<n.length;e++){var o=n[e],i=o[0],r=o[1];this[i]=r}this.id=void 0!==t.id?t.id:"",this.created=void 0!==t.created?t.created:"",this.updated=void 0!==t.updated?t.updated:""},Object.defineProperty(t.prototype,"isNew",{get:function(){return!this.id},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new this.constructor(JSON.parse(JSON.stringify(this)))},t.prototype.export=function(){return Object.assign({},this)},t}(),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.collectionId="string"==typeof e.collectionId?e.collectionId:"",this.collectionName="string"==typeof e.collectionName?e.collectionName:"",this.expand="object"==typeof e.expand&&null!==e.expand?e.expand:{}},n}(h),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.avatar="number"==typeof e.avatar?e.avatar:0,this.email="string"==typeof e.email?e.email:""},n}(h),v="pb_auth",y=function(t){function n(e){void 0===e&&(e="pocketbase_auth");var n=t.call(this)||this;return n.storageFallback={},n.storageKey=e,n}return e(n,t),Object.defineProperty(n.prototype,"token",{get:function(){return(this._storageGet(this.storageKey)||{}).token||""},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"model",{get:function(){var t,e=this._storageGet(this.storageKey)||{};return null===e||"object"!=typeof e||null===e.model||"object"!=typeof e.model?null:void 0===(null===(t=e.model)||void 0===t?void 0:t.collectionId)?new f(e.model):new p(e.model)},enumerable:!1,configurable:!0}),n.prototype.save=function(e,n){this._storageSet(this.storageKey,{token:e,model:n}),t.prototype.save.call(this,e,n)},n.prototype.clear=function(){this._storageRemove(this.storageKey),t.prototype.clear.call(this)},n.prototype._storageGet=function(t){if("undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)){var e=window.localStorage.getItem(t)||"";try{return JSON.parse(e)}catch(t){return e}}return this.storageFallback[t]},n.prototype._storageSet=function(t,e){if("undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)){var n=e;"string"!=typeof e&&(n=JSON.stringify(e)),window.localStorage.setItem(t,n)}else this.storageFallback[t]=e},n.prototype._storageRemove=function(t){var e;"undefined"!=typeof window&&(null===window||void 0===window?void 0:window.localStorage)&&(null===(e=window.localStorage)||void 0===e||e.removeItem(t)),delete this.storageFallback[t]},n}(function(){function t(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}return Object.defineProperty(t.prototype,"token",{get:function(){return this.baseToken},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"model",{get:function(){return this.baseModel},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isValid",{get:function(){return!function(t,e){void 0===e&&(e=0);var n=d(t);return!(Object.keys(n).length>0&&(!n.exp||n.exp-e>Date.now()/1e3))}(this.token)},enumerable:!1,configurable:!0}),t.prototype.save=function(t,e){this.baseToken=t||"",this.baseModel=null!==e&&"object"==typeof e?void 0!==e.collectionId?new p(e):new f(e):null,this.triggerChange()},t.prototype.clear=function(){this.baseToken="",this.baseModel=null,this.triggerChange()},t.prototype.loadFromCookie=function(t,e){void 0===e&&(e=v);var n=function(t,e){var n={};if("string"!=typeof t)return n;for(var o=Object.assign({},e||{}).decode||l,i=0;i<t.length;){var r=t.indexOf("=",i);if(-1===r)break;var s=t.indexOf(";",i);if(-1===s)s=t.length;else if(s<r){i=t.lastIndexOf(";",r-1)+1;continue}var a=t.slice(i,r).trim();if(void 0===n[a]){var u=t.slice(r+1,s).trim();34===u.charCodeAt(0)&&(u=u.slice(1,-1));try{n[a]=o(u)}catch(t){n[a]=u}}i=s+1}return n}(t||"")[e]||"",o={};try{(null===typeof(o=JSON.parse(n))||"object"!=typeof o||Array.isArray(o))&&(o={})}catch(t){}this.save(o.token||"",o.model||null)},t.prototype.exportToCookie=function(t,e){var n,o,i;void 0===e&&(e=v);var r={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},s=d(this.token);(null==s?void 0:s.exp)?r.expires=new Date(1e3*s.exp):r.expires=new Date("1970-01-01"),t=Object.assign({},r,t);var a={token:this.token,model:(null===(n=this.model)||void 0===n?void 0:n.export())||null},l=u(e,JSON.stringify(a),t),c="undefined"!=typeof Blob?new Blob([l]).size:l.length;return a.model&&c>4096&&(a.model={id:null===(o=null==a?void 0:a.model)||void 0===o?void 0:o.id,email:null===(i=null==a?void 0:a.model)||void 0===i?void 0:i.email},this.model instanceof p&&(a.model.username=this.model.username,a.model.verified=this.model.verified,a.model.collectionId=this.model.collectionId),l=u(e,JSON.stringify(a),t)),l},t.prototype.onChange=function(t,e){var n=this;return void 0===e&&(e=!1),this._onChangeCallbacks.push(t),e&&t(this.token,this.model),function(){for(var e=n._onChangeCallbacks.length-1;e>=0;e--)if(n._onChangeCallbacks[e]==t)return delete n._onChangeCallbacks[e],void n._onChangeCallbacks.splice(e,1)}},t.prototype.triggerChange=function(){for(var t=0,e=this._onChangeCallbacks;t<e.length;t++){var n=e[t];n&&n(this.token,this.model)}},t}()),m=function(t){this.client=t},b=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getAll=function(t){return void 0===t&&(t={}),this.client.send("/api/settings",{method:"GET",params:t}).then((function(t){return t||{}}))},n.prototype.update=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send("/api/settings",{method:"PATCH",params:e,body:t}).then((function(t){return t||{}}))},n.prototype.testS3=function(t){return void 0===t&&(t={}),this.client.send("/api/settings/test/s3",{method:"POST",params:t}).then((function(){return!0}))},n.prototype.testEmail=function(t,e,n){void 0===n&&(n={});var o={email:t,template:e};return this.client.send("/api/settings/test/email",{method:"POST",params:n,body:o}).then((function(){return!0}))},n}(m),g=function(t,e,n,o,i){this.page=t>0?t:1,this.perPage=e>=0?e:0,this.totalItems=n>=0?n:0,this.totalPages=o>=0?o:0,this.items=i||[]},w=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype._getFullList=function(t,e,n){var r=this;void 0===e&&(e=100),void 0===n&&(n={});var s=[],a=function(u){return o(r,void 0,void 0,(function(){return i(this,(function(o){return[2,this._getList(t,u,e,n).then((function(t){var e=t,n=e.items,o=e.totalItems;return s=s.concat(n),n.length&&o>s.length?a(u+1):s}))]}))}))};return a(1)},n.prototype._getList=function(t,e,n,o){var i=this;return void 0===e&&(e=1),void 0===n&&(n=30),void 0===o&&(o={}),o=Object.assign({page:e,perPage:n},o),this.client.send(t,{method:"GET",params:o}).then((function(t){var e=[];if(null==t?void 0:t.items){t.items=t.items||[];for(var n=0,o=t.items;n<o.length;n++){var r=o[n];e.push(i.decode(r))}}return new g((null==t?void 0:t.page)||1,(null==t?void 0:t.perPage)||0,(null==t?void 0:t.totalItems)||0,(null==t?void 0:t.totalPages)||0,e)}))},n.prototype._getOne=function(t,e,n){var o=this;return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"GET",params:n}).then((function(t){return o.decode(t)}))},n.prototype._getFirstListItem=function(t,e,n){return void 0===n&&(n={}),n=Object.assign({filter:e,$cancelKey:"one_by_filter_"+t+"_"+e},n),this._getList(t,1,1,n).then((function(t){var e;if(!(null===(e=null==t?void 0:t.items)||void 0===e?void 0:e.length))throw new s({status:404,data:{code:404,message:"The requested resource wasn't found.",data:{}}});return t.items[0]}))},n.prototype._create=function(t,e,n){var o=this;return void 0===e&&(e={}),void 0===n&&(n={}),this.client.send(t,{method:"POST",params:n,body:e}).then((function(t){return o.decode(t)}))},n.prototype._update=function(t,e,n,o){var i=this;return void 0===n&&(n={}),void 0===o&&(o={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"PATCH",params:o,body:n}).then((function(t){return i.decode(t)}))},n.prototype._delete=function(t,e,n){return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"DELETE",params:n}).then((function(){return!0}))},n}(m),S=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getFullList=function(t,e){return void 0===t&&(t=200),void 0===e&&(e={}),this._getFullList(this.baseCrudPath,t,e)},n.prototype.getList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),this._getList(this.baseCrudPath,t,e,n)},n.prototype.getFirstListItem=function(t,e){return void 0===e&&(e={}),this._getFirstListItem(this.baseCrudPath,t,e)},n.prototype.getOne=function(t,e){return void 0===e&&(e={}),this._getOne(this.baseCrudPath,t,e)},n.prototype.create=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this._create(this.baseCrudPath,t,e)},n.prototype.update=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._update(this.baseCrudPath,t,e,n)},n.prototype.delete=function(t,e){return void 0===e&&(e={}),this._delete(this.baseCrudPath,t,e)},n}(w),O=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.decode=function(t){return new f(t)},Object.defineProperty(n.prototype,"baseCrudPath",{get:function(){return"/api/admins"},enumerable:!1,configurable:!0}),n.prototype.update=function(e,n,o){var i=this;return void 0===n&&(n={}),void 0===o&&(o={}),t.prototype.update.call(this,e,n,o).then((function(t){var e,n;return i.client.authStore.model&&void 0===(null===(e=i.client.authStore.model)||void 0===e?void 0:e.collectionId)&&(null===(n=i.client.authStore.model)||void 0===n?void 0:n.id)===(null==t?void 0:t.id)&&i.client.authStore.save(i.client.authStore.token,t),t}))},n.prototype.delete=function(e,n){var o=this;return void 0===n&&(n={}),t.prototype.delete.call(this,e,n).then((function(t){var n,i;return t&&o.client.authStore.model&&void 0===(null===(n=o.client.authStore.model)||void 0===n?void 0:n.collectionId)&&(null===(i=o.client.authStore.model)||void 0===i?void 0:i.id)===e&&o.client.authStore.clear(),t}))},n.prototype.authResponse=function(t){var e=this.decode((null==t?void 0:t.admin)||{});return(null==t?void 0:t.token)&&(null==t?void 0:t.admin)&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:(null==t?void 0:t.token)||"",admin:e})},n.prototype.authWithPassword=function(t,e,n,o){return void 0===n&&(n={}),void 0===o&&(o={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCrudPath+"/auth-with-password",{method:"POST",params:o,body:n,headers:{Authorization:""}}).then(this.authResponse.bind(this))},n.prototype.authRefresh=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCrudPath+"/auth-refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},n.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath+"/request-password-reset",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmPasswordReset=function(t,e,n,o,i){return void 0===o&&(o={}),void 0===i&&(i={}),o=Object.assign({token:t,password:e,passwordConfirm:n},o),this.client.send(this.baseCrudPath+"/confirm-password-reset",{method:"POST",params:i,body:o}).then(this.authResponse.bind(this))},n}(S),C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.recordId="string"==typeof e.recordId?e.recordId:"",this.collectionId="string"==typeof e.collectionId?e.collectionId:"",this.provider="string"==typeof e.provider?e.provider:"",this.providerId="string"==typeof e.providerId?e.providerId:""},n}(h),P=function(t){function n(e,n){var o=t.call(this,e)||this;return o.collectionIdOrName=n,o}return e(n,t),n.prototype.decode=function(t){return new p(t)},Object.defineProperty(n.prototype,"baseCrudPath",{get:function(){return this.baseCollectionPath+"/records"},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"baseCollectionPath",{get:function(){return"/api/collections/"+encodeURIComponent(this.collectionIdOrName)},enumerable:!1,configurable:!0}),n.prototype.subscribe=function(t){return o(this,void 0,void 0,(function(){return i(this,(function(e){return[2,this.client.realtime.subscribe(this.collectionIdOrName,t)]}))}))},n.prototype.subscribeOne=function(t,e){return o(this,void 0,void 0,(function(){return i(this,(function(n){return[2,this.client.realtime.subscribe(this.collectionIdOrName+"/"+t,e)]}))}))},n.prototype.unsubscribe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o(this,void 0,void 0,(function(){var e,n,o,r,s;return i(this,(function(i){if(t&&t.length){for(e=[],n=0,o=t;n<o.length;n++)r=o[n],e.push(this.collectionIdOrName+"/"+r);return[2,(s=this.client.realtime).unsubscribe.apply(s,e)]}return[2,this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName)]}))}))},n.prototype.update=function(e,n,o){var i=this;return void 0===n&&(n={}),void 0===o&&(o={}),t.prototype.update.call(this,e,n,o).then((function(t){var e,n;return void 0!==(null===(e=i.client.authStore.model)||void 0===e?void 0:e.collectionId)&&(null===(n=i.client.authStore.model)||void 0===n?void 0:n.id)===(null==t?void 0:t.id)&&i.client.authStore.save(i.client.authStore.token,t),t}))},n.prototype.delete=function(e,n){var o=this;return void 0===n&&(n={}),t.prototype.delete.call(this,e,n).then((function(t){var n,i;return t&&void 0!==(null===(n=o.client.authStore.model)||void 0===n?void 0:n.collectionId)&&(null===(i=o.client.authStore.model)||void 0===i?void 0:i.id)===e&&o.client.authStore.clear(),t}))},n.prototype.authResponse=function(t){var e=this.decode((null==t?void 0:t.record)||{});return this.client.authStore.save(null==t?void 0:t.token,e),Object.assign({},t,{token:(null==t?void 0:t.token)||"",record:e})},n.prototype.listAuthMethods=function(t){return void 0===t&&(t={}),this.client.send(this.baseCollectionPath+"/auth-methods",{method:"GET",params:t}).then((function(t){return Object.assign({},t,{usernamePassword:!!(null==t?void 0:t.usernamePassword),emailPassword:!!(null==t?void 0:t.emailPassword),authProviders:Array.isArray(null==t?void 0:t.authProviders)?null==t?void 0:t.authProviders:[]})}))},n.prototype.authWithPassword=function(t,e,n,o){var i=this;return void 0===n&&(n={}),void 0===o&&(o={}),n=Object.assign({identity:t,password:e},n),this.client.send(this.baseCollectionPath+"/auth-with-password",{method:"POST",params:o,body:n,headers:{Authorization:""}}).then((function(t){return i.authResponse(t)}))},n.prototype.authWithOAuth2=function(t,e,n,o,i,r,s){var a=this;return void 0===i&&(i={}),void 0===r&&(r={}),void 0===s&&(s={}),r=Object.assign({provider:t,code:e,codeVerifier:n,redirectUrl:o,createData:i},r),this.client.send(this.baseCollectionPath+"/auth-with-oauth2",{method:"POST",params:s,body:r}).then((function(t){return a.authResponse(t)}))},n.prototype.authRefresh=function(t,e){var n=this;return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCollectionPath+"/auth-refresh",{method:"POST",params:e,body:t}).then((function(t){return n.authResponse(t)}))},n.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-password-reset",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmPasswordReset=function(t,e,n,o,i){var r=this;return void 0===o&&(o={}),void 0===i&&(i={}),o=Object.assign({token:t,password:e,passwordConfirm:n},o),this.client.send(this.baseCollectionPath+"/confirm-password-reset",{method:"POST",params:i,body:o}).then((function(t){return r.authResponse(t)}))},n.prototype.requestVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCollectionPath+"/request-verification",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmVerification=function(t,e,n){var o=this;return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({token:t},e),this.client.send(this.baseCollectionPath+"/confirm-verification",{method:"POST",params:n,body:e}).then((function(t){return o.authResponse(t)}))},n.prototype.requestEmailChange=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({newEmail:t},e),this.client.send(this.baseCollectionPath+"/request-email-change",{method:"POST",params:n,body:e}).then((function(){return!0}))},n.prototype.confirmEmailChange=function(t,e,n,o){var i=this;return void 0===n&&(n={}),void 0===o&&(o={}),n=Object.assign({token:t,password:e},n),this.client.send(this.baseCollectionPath+"/confirm-email-change",{method:"POST",params:o,body:n}).then((function(t){return i.authResponse(t)}))},n.prototype.listExternalAuths=function(t,e){return void 0===e&&(e={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths",{method:"GET",params:e}).then((function(t){var e=[];if(Array.isArray(t))for(var n=0,o=t;n<o.length;n++){var i=o[n];e.push(new C(i))}return e}))},n.prototype.unlinkExternalAuth=function(t,e,n){return void 0===n&&(n={}),this.client.send(this.baseCrudPath+"/"+encodeURIComponent(t)+"/external-auths/"+encodeURIComponent(e),{method:"DELETE",params:n}).then((function(){return!0}))},n}(S),I=function(){function t(t){void 0===t&&(t={}),this.load(t||{})}return t.prototype.load=function(t){this.id=void 0!==t.id?t.id:"",this.name=void 0!==t.name?t.name:"",this.type=void 0!==t.type?t.type:"text",this.system=!!t.system,this.required=!!t.required,this.unique=!!t.unique,this.options="object"==typeof t.options&&null!==t.options?t.options:{}},t}(),j=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),this.system=!!e.system,this.name="string"==typeof e.name?e.name:"",this.type="string"==typeof e.type?e.type:"base",this.options=void 0!==e.options?e.options:{},this.listRule="string"==typeof e.listRule?e.listRule:null,this.viewRule="string"==typeof e.viewRule?e.viewRule:null,this.createRule="string"==typeof e.createRule?e.createRule:null,this.updateRule="string"==typeof e.updateRule?e.updateRule:null,this.deleteRule="string"==typeof e.deleteRule?e.deleteRule:null,e.schema=Array.isArray(e.schema)?e.schema:[],this.schema=[];for(var n=0,o=e.schema;n<o.length;n++){var i=o[n];this.schema.push(new I(i))}},Object.defineProperty(n.prototype,"isBase",{get:function(){return"base"===this.type},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isAuth",{get:function(){return"auth"===this.type},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isSingle",{get:function(){return"single"===this.type},enumerable:!1,configurable:!0}),n}(h),k=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.decode=function(t){return new j(t)},Object.defineProperty(n.prototype,"baseCrudPath",{get:function(){return"/api/collections"},enumerable:!1,configurable:!0}),n.prototype.import=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n={}),o(this,void 0,void 0,(function(){return i(this,(function(o){return[2,this.client.send(this.baseCrudPath+"/import",{method:"PUT",params:n,body:{collections:t,deleteMissing:e}}).then((function(){return!0}))]}))}))},n}(S),R=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(e){t.prototype.load.call(this,e),e.remoteIp=e.remoteIp||e.ip,this.url="string"==typeof e.url?e.url:"",this.method="string"==typeof e.method?e.method:"GET",this.status="number"==typeof e.status?e.status:200,this.auth="string"==typeof e.auth?e.auth:"guest",this.remoteIp="string"==typeof e.remoteIp?e.remoteIp:"",this.userIp="string"==typeof e.userIp?e.userIp:"",this.referer="string"==typeof e.referer?e.referer:"",this.userAgent="string"==typeof e.userAgent?e.userAgent:"",this.meta="object"==typeof e.meta&&null!==e.meta?e.meta:{}},n}(h),T=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.getRequestsList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),n=Object.assign({page:t,perPage:e},n),this.client.send("/api/logs/requests",{method:"GET",params:n}).then((function(t){var e=[];if(null==t?void 0:t.items){t.items=(null==t?void 0:t.items)||[];for(var n=0,o=t.items;n<o.length;n++){var i=o[n];e.push(new R(i))}}return new g((null==t?void 0:t.page)||1,(null==t?void 0:t.perPage)||0,(null==t?void 0:t.totalItems)||0,(null==t?void 0:t.totalPages)||0,e)}))},n.prototype.getRequest=function(t,e){return void 0===e&&(e={}),this.client.send("/api/logs/requests/"+encodeURIComponent(t),{method:"GET",params:e}).then((function(t){return new R(t)}))},n.prototype.getRequestsStats=function(t){return void 0===t&&(t={}),this.client.send("/api/logs/requests/stats",{method:"GET",params:t}).then((function(t){return t}))},n}(m),E=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.clientId="",e.eventSource=null,e.subscriptions={},e}return e(n,t),n.prototype.subscribe=function(t,e){var n;return o(this,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:if(!t)throw new Error("subscription must be set.");return this.subscriptions[t]&&(null===(n=this.eventSource)||void 0===n||n.removeEventListener(t,this.subscriptions[t])),this.subscriptions[t]=function(t){var n,o=t;try{n=JSON.parse(null==o?void 0:o.data)}catch(t){}e(n||{})},this.eventSource?[3,1]:(this.connect(),[3,3]);case 1:return this.clientId?[4,this.submitSubscriptions()]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2]}}))}))},n.prototype.unsubscribeByPrefix=function(t){return o(this,void 0,void 0,(function(){var e,n;return i(this,(function(o){for(n in e=[],this.subscriptions)n.startsWith(t)&&e.push(n);return e.length?[2,this.unsubscribe.apply(this,e)]:[2]}))}))},n.prototype.unsubscribe=function(){for(var t,e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return o(this,void 0,void 0,(function(){var n,o,r,s;return i(this,(function(i){switch(i.label){case 0:if(e&&0!=e.length){for(n=!1,o=0,r=e;o<r.length;o++)s=r[o],n=!0,null===(t=this.eventSource)||void 0===t||t.removeEventListener(s,this.subscriptions[s]),delete this.subscriptions[s];if(!n)return[2]}else this.removeSubscriptionListeners(),this.subscriptions={};return this.clientId?[4,this.submitSubscriptions()]:[3,2];case 1:i.sent(),i.label=2;case 2:return Object.keys(this.subscriptions).length||this.disconnect(),[2]}}))}))},n.prototype.submitSubscriptions=function(){return o(this,void 0,void 0,(function(){return i(this,(function(t){return this.addSubscriptionListeners(),[2,this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:Object.keys(this.subscriptions)},params:{$autoCancel:!1}}).then((function(){return!0}))]}))}))},n.prototype.addSubscriptionListeners=function(){if(this.eventSource)for(var t in this.removeSubscriptionListeners(),this.subscriptions)this.eventSource.addEventListener(t,this.subscriptions[t])},n.prototype.removeSubscriptionListeners=function(){if(this.eventSource)for(var t in this.subscriptions)this.eventSource.removeEventListener(t,this.subscriptions[t])},n.prototype.connectHandler=function(t){var e=t;this.clientId=null==e?void 0:e.lastEventId,this.submitSubscriptions()},n.prototype.connect=function(){var t=this;this.disconnect(),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.addEventListener("PB_CONNECT",(function(e){return t.connectHandler(e)}))},n.prototype.disconnect=function(){var t,e,n=this;this.removeSubscriptionListeners(),null===(t=this.eventSource)||void 0===t||t.removeEventListener("PB_CONNECT",(function(t){return n.connectHandler(t)})),null===(e=this.eventSource)||void 0===e||e.close(),this.eventSource=null,this.clientId=""},n}(m);return function(){function t(t,e,n){void 0===t&&(t="/"),void 0===n&&(n="en-US"),this.cancelControllers={},this.recordServices={},this.enableAutoCancellation=!0,this.baseUrl=t,this.lang=n,this.authStore=e||new y,this.admins=new O(this),this.collections=new k(this),this.logs=new T(this),this.settings=new b(this),this.realtime=new E(this)}return t.prototype.collection=function(t){return this.recordServices[t]||(this.recordServices[t]=new P(this,t)),this.recordServices[t]},t.prototype.autoCancellation=function(t){return this.enableAutoCancellation=!!t,this},t.prototype.cancelRequest=function(t){return this.cancelControllers[t]&&(this.cancelControllers[t].abort(),delete this.cancelControllers[t]),this},t.prototype.cancelAllRequests=function(){for(var t in this.cancelControllers)this.cancelControllers[t].abort();return this.cancelControllers={},this},t.prototype.send=function(t,e){var n,r,a,u,l,c,d,h;return o(this,void 0,void 0,(function(){var p,f,v,y,m,b=this;return i(this,(function(g){return(p=Object.assign({method:"GET"},e)).body&&"FormData"!==p.body.constructor.name&&("string"!=typeof p.body&&(p.body=JSON.stringify(p.body)),void 0===(null===(n=null==p?void 0:p.headers)||void 0===n?void 0:n["Content-Type"])&&(p.headers=Object.assign({},p.headers,{"Content-Type":"application/json"}))),void 0===(null===(r=null==p?void 0:p.headers)||void 0===r?void 0:r["Accept-Language"])&&(p.headers=Object.assign({},p.headers,{"Accept-Language":this.lang})),(null===(a=this.authStore)||void 0===a?void 0:a.token)&&void 0===(null===(u=null==p?void 0:p.headers)||void 0===u?void 0:u.Authorization)&&(p.headers=Object.assign({},p.headers,{Authorization:this.authStore.token})),this.enableAutoCancellation&&!1!==(null===(l=p.params)||void 0===l?void 0:l.$autoCancel)&&(f=(null===(c=p.params)||void 0===c?void 0:c.$cancelKey)||(p.method||"GET")+t,this.cancelRequest(f),v=new AbortController,this.cancelControllers[f]=v,p.signal=v.signal),null===(d=p.params)||void 0===d||delete d.$autoCancel,null===(h=p.params)||void 0===h||delete h.$cancelKey,y=this.buildUrl(t),void 0!==p.params&&((m=this.serializeQueryParams(p.params))&&(y+=(y.includes("?")?"&":"?")+m),delete p.params),this.beforeSend&&(p=Object.assign({},this.beforeSend(y,p))),[2,fetch(y,p).then((function(t){return o(b,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:e={},n.label=1;case 1:return n.trys.push([1,3,,4]),[4,t.json()];case 2:return e=n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:if(this.afterSend&&(e=this.afterSend(t,e)),t.status>=400)throw new s({url:t.url,status:t.status,data:e});return[2,e]}}))}))})).catch((function(t){throw new s(t)}))]}))}))},t.prototype.getFileUrl=function(t,e,n){void 0===n&&(n={});var o=[];o.push("api"),o.push("files"),o.push(encodeURIComponent(t.collectionId||t.collectionName)),o.push(encodeURIComponent(t.id)),o.push(encodeURIComponent(e));var i=this.buildUrl(o.join("/"));if(Object.keys(n).length){var r=new URLSearchParams(n);i+=(i.includes("?")?"&":"?")+r}return i},t.prototype.buildUrl=function(t){var e=this.baseUrl+(this.baseUrl.endsWith("/")?"":"/");return t&&(e+=t.startsWith("/")?t.substring(1):t),e},t.prototype.serializeQueryParams=function(t){var e=[];for(var n in t)if(null!==t[n]){var o=t[n],i=encodeURIComponent(n);if(Array.isArray(o))for(var r=0,s=o;r<s.length;r++){var a=s[r];e.push(i+"="+encodeURIComponent(a))}else o instanceof Date?e.push(i+"="+encodeURIComponent(o.toISOString())):null!==typeof o&&"object"==typeof o?e.push(i+"="+encodeURIComponent(JSON.stringify(o))):e.push(i+"="+encodeURIComponent(o))}return e.join("&")},t}()}));
//# sourceMappingURL=pocketbase.umd.js.map
