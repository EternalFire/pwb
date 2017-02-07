;/*!module/util/id.js*/
define("module/util/id",function(n,t,r){"use strict";var e,i,o,u,f,c;e=1,i={},o=function(n){n.forEach(function(n){i[n]=!0})},u=function(){for(var n=e;i[n];)n=c();return i[n]=!0,n},c=function(){return Math.floor(Math.random()*(Number.MAX_VALUE%1e4))},f=function(n){i[n]=!0},e=c(),r.exports={name:"id",init:o,create:u,used:f}});
;/*!module/util/index.js*/
define("module/util/index",function(i,e,t){"use strict";t.exports={name:"util",id:i("module/util/id")}});