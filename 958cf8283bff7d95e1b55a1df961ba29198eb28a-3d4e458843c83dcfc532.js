(self.webpackChunkshawtown_neighborhood_association=self.webpackChunkshawtown_neighborhood_association||[]).push([[421],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},6351:function(e,t,n){"use strict";n.d(t,{T:function(){return a},J:function(){return i}});var r=n(7294),o=n(5444),a={home:function(){return"/"},about:function(){return"/about/"},people:function(){return"/people/"},documents:function(){return"/documents/"},events:function(){return"/events/"},meetings:function(){return"/meetings/"},projects:function(){return"/projects/"},contact:function(){return"/contact/"},privacy:function(){return"/privacy-policy/"},socialMedia:{facebook:function(){return"https://www.facebook.com"},twitter:function(){return"https:/www.twitter.com"},instagram:function(){return"https://www.instagram.com"},nextdoor:function(){return"https://www.nextdoor.com"}}},i={Home:function(){return r.createElement(o.Link,{to:a.home()},"Home")},About:function(){return r.createElement(o.Link,{to:a.about()},"About")},People:function(){return r.createElement(o.Link,{to:a.people()},"People")},Documents:function(){return r.createElement(o.Link,{to:a.documents()},"Documents")},Events:function(){return r.createElement(o.Link,{to:a.events()},"Events")},Meetings:function(){return r.createElement(o.Link,{to:a.meetings()},"Meetings")},Projects:function(){return r.createElement(o.Link,{to:a.projects()},"Projects")},Contact:function(){return r.createElement(o.Link,{to:a.contact()},"Contact")},Privacy:function(){return r.createElement(o.Link,{to:a.privacy()},"Privacy Policy")}}},983:function(e,t,n){"use strict";n.d(t,{A:function(){return ge},Z:function(){return Te}});var r,o,a,i,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),f=n.n(s),m=n(2993),p=n.n(m),d=n(6494),h=n.n(d),y="bodyAttributes",E="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),g="cssText",T="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",k="property",P="rel",j="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",x="defer",I="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",F=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Q(e,v.TITLE),n=Q(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,M);return t||r||void 0},V=function(e){return Q(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||n===P&&"canonical"===e[n].toLowerCase()||l===P&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==g&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,m=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(f,m);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,a),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case E:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===g){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===g)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,m=e.titleAttributes;return{base:me(v.BASE,t,r),bodyAttributes:me(y,n,r),htmlAttributes:me(E,o,r),link:me(v.LINK,a,r),meta:me(v.META,i,r),noscript:me(v.NOSCRIPT,c,r),script:me(v.SCRIPT,l,r),style:me(v.STYLE,u,r),title:me(v.TITLE,{title:f,titleAttributes:m},r)}},de=f()((function(e){return{baseTag:$([T,N],e),bodyAttributes:G(y,e),defer:Q(e,x),encode:Q(e,I),htmlAttributes:G(E,e),linkTags:Z(v.LINK,[P,T],e),metaTags:Z(v.META,[S,w,A,k,O],e),noscriptTags:Z(v.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:Z(v.SCRIPT,[j,C],e),styleTags:Z(v.STYLE,[g],e),title:W(e),titleAttributes:G(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=de,i=a=function(e){function t(){return q(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case v.TITLE:return J({},o,((t={})[r.type]=i,t.titleAttributes=J({},a),t));case v.BODY:return J({},o,{bodyAttributes:J({},a)});case v.HTML:return J({},o,{htmlAttributes:J({},a)})}return J({},o,((n={})[r.type]=J({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=n(5444),Ee=n(6351);const be="Footer-module--socialAnchor--1A_PT";var ve=function(){return c.createElement(c.Fragment,null,c.createElement("footer",{className:"Footer-module--footer--7zmJ8"},c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"About Shawtown"),c.createElement("p",null,"Shawtown is a historic neighborhood located in the southwest corner of Eau Claire, WI and is rooted in lumber, traditions and a close-knit community. The Shawtown Neighborhood Association was formed in 2019."),c.createElement("p",{className:"Footer-module--social--3ct7K"},c.createElement("a",{href:Ee.T.socialMedia.facebook(),target:"_blank",rel:"noreferrer",className:be},c.createElement("i",{className:"fab fa-facebook-f"})),c.createElement("a",{href:Ee.T.socialMedia.twitter(),target:"_blank",rel:"noreferrer",className:be},c.createElement("i",{className:"fab fa-twitter"})),c.createElement("a",{href:Ee.T.socialMedia.instagram(),target:"_blank",rel:"noreferrer",className:be},c.createElement("i",{className:"fab fa-instagram"})))),c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"Upcoming Events"),c.createElement("ul",null,c.createElement("li",null,c.createElement("a",{href:"#top"},"Steering Committee Meeting")),c.createElement("li",null,c.createElement("a",{href:"#top"},"Park Clean-Up")),c.createElement("li",null,c.createElement("a",{href:"#top"},"Tree Planting")))),c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"Our People"),c.createElement("ul",null,c.createElement("li",null,c.createElement(ye.Link,{to:Ee.T.people()+"#officers"},"Officers")),c.createElement("li",null,c.createElement(ye.Link,{to:Ee.T.people()+"#atLarge"},"At-Large Members")),c.createElement("li",null,c.createElement("a",{href:"#top"},"Sub-Committees")))),c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"Documents"),c.createElement("ul",null,c.createElement("li",null,c.createElement("a",{href:"#top"},"Bylaws")),c.createElement("li",null,c.createElement("a",{href:"#top"},"Boundaries")),c.createElement("li",null,c.createElement("a",{href:"#top"},"Who Do I Call?"))))),c.createElement("div",{className:"row"},c.createElement("div",{className:"col-sm"},c.createElement("div",{className:"Footer-module--copyright--3qYFc"},"Copyright © ",(new Date).getFullYear()," -"," ",c.createElement(ye.Link,{to:Ee.T.privacy(),className:"Footer-module--privacyAnchor--pVwCp"},"All Rights Reserved")))))),c.createElement("footer",{className:"Footer-module--printedFooter--e4DuG"},c.createElement("div",{className:"container"},c.createElement("div",{className:"row"},c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"Stay Connected"),c.createElement("div",{className:"Footer-module--stayConnected--2Jj9k"},c.createElement("a",{href:"https://www.shawtown.org"},"www.shawtown.org"),c.createElement("a",{href:"mailto:shawtown.eauclaire@gmail.com"},"shawtown.eauclaire@gmail.com"))),c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"Officers"),c.createElement("ul",null,c.createElement("li",null,"President - Brad Candell"),c.createElement("li",null,"Vice President - Aram Mann-Whitcombe"),c.createElement("li",null,"Secretary - Tim Solfest"),c.createElement("li",null,"Treasurer - Cindy Schlosser"),c.createElement("li",null,"Information - Drew Kaiser"))),c.createElement("div",{className:"col-sm"},c.createElement("h1",null,"Members-at-Large"),c.createElement("ul",null,c.createElement("li",null,"James Candell"),c.createElement("li",null,"Charlie Kennedy"),c.createElement("li",null,"Susie Risler"),c.createElement("li",null,"Erin Shadbolt")))))))};var we=function(){return c.createElement(c.Fragment,null,c.createElement("header",{className:"Header-module--header--2-kiM"},c.createElement("div",{className:"container"},c.createElement("div",{className:"Header-module--navigation--H80Oj"},c.createElement(ye.Link,{to:"/",className:"Header-module--brand--1BoGe"},"shawtown.org"),c.createElement(Ee.J.About,null),c.createElement(Ee.J.People,null),c.createElement(Ee.J.Documents,null),c.createElement(Ee.J.Meetings,null),c.createElement(Ee.J.Events,null),c.createElement(Ee.J.Projects,null),c.createElement(Ee.J.Contact,null)))))},ge=function(e){return c.createElement("div",null,c.createElement(he,{title:e.title+" - Shawtown Neighborhood Association"}),c.createElement("meta",{name:"description",content:e.description}),c.createElement("meta",{name:"robots",content:"index, follow"}),c.createElement(we,null),c.createElement("div",{className:"contents"},e.children),c.createElement(ve,null))},Te=ge}}]);
//# sourceMappingURL=958cf8283bff7d95e1b55a1df961ba29198eb28a-3d4e458843c83dcfc532.js.map