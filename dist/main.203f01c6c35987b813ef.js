!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1);var r=s(n(5)),o=s(n(6)),i=s(n(7)),a=s(n(8));function s(e){return e&&e.__esModule?e:{default:e}}var c=document.getElementById("img-logo"),u=document.getElementById("footer-logo");c.src=r.default,u.src=r.default,document.getElementById("img-header").src=o.default,document.getElementById("img-basket").src=i.default,document.getElementById("img-menu").src=a.default;function l(e){var t,n,r,o,i,a,s=0;for(t=document.querySelector(".product-list"),r=!0,a=e;r;){for(r=!1,o=t.getElementsByTagName("li"),n=0;n<o.length-1;n++)if(i=!1,"asc"==a){if(o[n].querySelector(".item-title").innerHTML.toLowerCase()>o[n+1].querySelector(".item-title").innerHTML.toLowerCase()){i=!0;break}}else if("desc"==a&&o[n].querySelector(".item-title").innerHTML.toLowerCase()<o[n+1].querySelector(".item-title").innerHTML.toLowerCase()){i=!0;break}i?(o[n].parentNode.insertBefore(o[n+1],o[n]),r=!0,s++):0==s&&"asc"==a&&(a="desc",r=!0)}}function d(e){var t,n,r,o,i,a,s=0;for(t=document.querySelector(".product-list"),r=!0,a=e;r;){for(r=!1,o=t.getElementsByTagName("li"),n=0;n<o.length-1;n++)if(i=!1,"asc"==a){if(o[n].querySelector(".item-price").innerHTML.toLowerCase()>o[n+1].querySelector(".item-price").innerHTML.toLowerCase()){i=!0;break}}else if("desc"==a&&o[n].querySelector(".item-price").innerHTML.toLowerCase()<o[n+1].querySelector(".item-price").innerHTML.toLowerCase()){i=!0;break}i?(o[n].parentNode.insertBefore(o[n+1],o[n]),r=!0,s++):0==s&&"asc"==a&&(a="desc",r=!0)}}(function(e){return new Promise(function(t,n){var r=new XMLHttpRequest;r.open("get",e,!0),r.responseType="json",r.onload=function(){var e=r.status;200==e?t(r.response):n(e)},r.send()})})("https://j-parre.myshopify.com/products.json").then(function(e){var t=e;document.querySelector("#sort-list").onchange=function(){switch(document.querySelector("#sort-list").value){case"price-low-high":d("asc");break;case"price-high-low":d("desc");break;case"title-a-z":l("asc");break;case"title-z-a":l("desc");break;default:l("asc")}},function(e){document.querySelector(".product-list").innerHTML="";for(var t=1;t<e.products.length;t++){var n=document.createElement("li");n.innerHTML="\n\t\t<img class='item-img' src='"+e.products[t].images[0].src+"' alt='"+e.products[t].title+"'>\n\t\t<div class='item-title'>"+e.products[t].title+"</div>\n\t\t<div class='item-price'>"+e.products[t].variants[0].price+"</div>\n\t\t<button class='btn-addToCart' id='cartItem"+t+"' data-title='"+e.products[t].title+"' data-price='"+e.products[t].variants[0].price+"' data-quantity='0'>Add to cart</button>\n\t\t<button class='quick-view'>Quick View</button>\n\t\t",document.querySelector(".product-list").appendChild(n)}}(t);for(var n=document.querySelectorAll(".btn-addToCart"),r=function(e){n[e].addEventListener("click",function(){var t=this,n=this.getAttribute("data-title"),r=this.getAttribute("data-price"),o=this.getAttribute("data-quantity");if(o++,this.setAttribute("data-quantity",o),document.querySelector(".basket-container").classList.remove("hidden"),1===o){this.setAttribute("data-inBasket","inBasket");var a=document.createElement("tr"),s=r;a.setAttribute("data-inBasket","in-basket"+e),a.innerHTML="\n\t\t\t\t<td>"+n+"</td>\n\t\t\t\t<td><span id='in-basket-"+e+"'>"+o+"</span></td>\n\t\t\t\t<td data-count='true' id='in-basket-price-"+e+"'>"+s+"</td>\n\t\t\t\t<td><button class='remove-item' id='in-basket-remove-"+e+"'>X</button></td>\n\t\t\t\t",document.addEventListener("click",function(n){n.target.matches("#in-basket-remove-"+e)&&(document.querySelector("#in-basket-remove-"+e).parentNode.parentNode.outerHTML="",i(),t.setAttribute("data-quantity","0"))},!1),document.querySelector(".basket tbody").appendChild(a),i()}else{var c=r*o;document.querySelector("#in-basket-"+e).innerHTML=o,document.querySelector("#in-basket-price-"+e).innerHTML=c,i()}})},o=0;o<n.length;o++)r(o);function i(){var e=document.querySelector("#basket-total"),t=document.querySelector("#basket-count"),n=document.querySelector("#mini-basket-total");e.innerHTML="",t.innerHTML="",n.innerHTML="";for(var r=document.querySelector(".basket tbody"),o=0,i=0,a=void 0,s=0;s<r.rows.length;s++){var c=Number(r.rows[s].cells[2].innerHTML),u=Number(r.rows[s].cells[1].childNodes[0].innerHTML);a=(o+=c).toFixed(2),i+=u}e.innerHTML=a,t.innerHTML=i,n.innerHTML=a,null==a&&(e.innerHTML="",n.innerHTML="")}},function(e){console.log("Something went wrong.")})},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,s=0,c=[],u=n(4);function l(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function f(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function p(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function m(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),b(t,e.attrs),f(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var c=s++;n=a||(a=m(t)),r=h.bind(null,n,c,!1),o=h.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return l(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(s=r[a.id]).refs--,o.push(s)}e&&l(d(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function h(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){e.exports=n.p+"98d7c53357ac450bb45cc2215769ba32.png"},function(e,t,n){e.exports=n.p+"70f54bf419ecb0bd533690cd604ef7e3.jpg"},function(e,t,n){e.exports=n.p+"f4c79158949a2dbd09828d314e78d106.png"},function(e,t,n){e.exports=n.p+"62207fe6ae6d1230d9fd9962c8b18921.png"}]);