function e(e,o,n,t){Object.defineProperty(e,o,{get:n,set:t,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},s=o.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,o.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=s),s.register("iewbl",(function(o,n){function t(){let e={zoom:3,minZoom:1,center:new google.maps.LatLng(50.7244893,3.2668189),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),e)}function s(e){new function(e){let o="",n="",t="",s="",r="",a="",l=3;$.ajax({async:!1,dataType:"json",url:"https://maps.google.com/maps/api/geocode/json?key=AIzaSyDjRKNZsq0ey2ADwabVY2KNl7n50KAGMZA&address="+e,success:function(e){console.log(e);for(let u in e.results){o=e.results[u].geometry.location.lat,n=e.results[u].geometry.location.lng,r=e.results[u].geometry.bounds.northeast.lat,t=e.results[u].geometry.bounds.northeast.lng,a=e.results[u].geometry.bounds.southwest.lat,s=e.results[u].geometry.bounds.southwest.lng;let g=t-s,i=r-a,d=Math.sqrt(g*g+i*i);l=1.4*Math.round(Math.log(360/d)/Math.log(2)),l<3&&(l=3),l>15&&(l=15)}}});let u={zoom:l,minZoom:1,center:new google.maps.LatLng(o,n),mapTypeId:google.maps.MapTypeId.ROADMAP,backgroundColor:"none"};new google.maps.Map(document.getElementById("map-canvas"),u)}(e.name.common)}e(o.exports,"start",(function(){return t})),e(o.exports,"showCountriesCoose",(function(){return s}))}));
//# sourceMappingURL=index.f7d7093d.js.map
