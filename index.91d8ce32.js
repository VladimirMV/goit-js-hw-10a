!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t.register("fCtQo",(function(e,o){var n,t,r,s;function a(e){let o=new function(e){let o="",n="",t="",r="",s="",a="",l=3;$.ajax({async:!1,dataType:"json",url:"https://maps.google.com/maps/api/geocode/json?key=AIzaSyDjRKNZsq0ey2ADwabVY2KNl7n50KAGMZA&address="+e,success:function(e){console.log(e);for(let u in e.results){o=e.results[u].geometry.location.lat,n=e.results[u].geometry.location.lng,s=e.results[u].geometry.bounds.northeast.lat,t=e.results[u].geometry.bounds.northeast.lng,a=e.results[u].geometry.bounds.southwest.lat,r=e.results[u].geometry.bounds.southwest.lng;let g=t-r,d=s-a,c=Math.sqrt(g*g+d*d);l=1.4*Math.round(Math.log(360/c)/Math.log(2)),l<3&&(l=3),l>15&&(l=15)}}});let u={zoom:l,minZoom:1,center:new google.maps.LatLng(o,n),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),u);return{lat:o,lng:n}}(e.name.common);console.log(o)}n=e.exports,t="showCountriesCoose",r=function(){return a},Object.defineProperty(n,t,{get:r,set:s,enumerable:!0,configurable:!0}),$(document).ready((function(){let e={zoom:3,minZoom:1,center:new google.maps.LatLng(50.7244893,3.2668189),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),e)}))}))}();
//# sourceMappingURL=index.91d8ce32.js.map
