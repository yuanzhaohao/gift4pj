(function(t,n,e){t(function(){var r=n.requestAnimationFrame||n.webkitRequestAnimationFrame||function(t){n.setTimeout(t,16)};var i=function(){var t={};var n=e.createElement("div"),i=["webkit","moz","MS","o",""];var o=function(t){return t.charAt(0).toUpperCase()+t.substr(1)};var a=function(t,n){for(var e=0,r=t.length;e<r;e++){if(n(t[e],e)){return true}}return false};var s=function(t){if(n.style[t]!==undefined){return t}else{var e;a(i,function(r){var i=o(r)+o(t);if(n.style[i]!==undefined){e="-"+r+"-"+t;return true}});return e}};var h=function(t){return a(t,function(t){return n.style[t]!==undefined})};var c=function(t,e){return a(e,function(e){n.style[t]=e;var r=n.style[t];return r===e})};t.some=a;t.getCSSVal=s;t.hasProp=h;t.supportProp=c;var u=function(t){var n=[31,28,31,30,31,30,31,31,30,31,30,31];return n[t]};t.count=function(t,n,e){var i=n-t,o=parseInt(i/60,10),a=parseInt(i/(60*60),10),s=parseInt(i/(60*60*24),10),h=parseInt(i/(60*60*24*30),10),c=timer=null,h;if(i<0){e&&e();return}i=i-o*60;o=o-a*60;a=a-s*24;s=s-h*30;c=function(){n=parseInt(+new Date/1e3,10);i=n-t;o=parseInt(i/60,10);a=parseInt(i/(60*60),10);i=i-o*60;o=o-a*60};timer=setInterval(function(){r(function(){i++;if(i>=60){i-=60;o+=1}if(o>=60){o-=60;a+=1}if(a>=24){a-=24;s+=1}if(s>=30){s-=30;h+=1}e&&e.call(null,{hours:a,minutes:o,seconds:i,days:s,months:h})})},980);return c};t.buffer=function(t,n,e){var r=this;n=n||150;if(n===-1){return function(){t.apply(e||null,arguments)}}var i=null;function o(){o.stop();i=r.later(t,n,0,e||null,arguments)}o.stop=function(){if(i){i.cancel();i=0}};return o};t.later=function(t,n,e,r,i){if(!t){return}var o=Array.prototype.slice.call(i);n=n||0;if(typeof t==="string"){t=r[t]}var a=function(){t.apply(r,o)},s=e?setInterval(a,n):setTimeout(a,n);return{id:s,interval:e,cancel:function(){if(this.interval){clearInterval(s)}else{clearTimeout(s)}}}};return t}(undefined);function o(){return this instanceof o?this.init.call(this,arguments):new o(arguments)}o.prototype={contructor:o,init:function(){var t=this;t.EVENT=i.hasProp(["animation"])?"animationend":"webkitAnimationEnd";t.heart();t.count()},heart:function(){var n=this,e=t("#J_heart"),r=t("#J_canvas"),i=r[0],o,a,s,h,c,u;resize=function(){c=e.width()/2;u=e.height()/2-25;i.width=e.width();i.height=e.height();s=i.getContext("2d");s.globalCompositeOperation="lighter";h=new Garden(s,i)};o=function(t){var n=t/Math.PI,e=window.innerWidth/375,r=e*10.6*(16*Math.pow(Math.sin(n),3)),i=-e*10*(13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n));return[c+r,u+i]};a=function(){var t=50,e=10,r=[];var i=setInterval(function(){var t=o(e),a=true;for(var s=0;s<r.length;s++){var c=r[s];var u=Math.sqrt(Math.pow(c[0]-t[0],2)+Math.pow(c[1]-t[1],2));if(u<Garden.options.bloomRadius.max*1.3){a=false;break}}if(a){r.push(t);h.createRandomBloom(t[0],t[1])}if(e>=30){clearInterval(i);n.time()}else{e+=.2}},t)};resize();a();setInterval(function(){h.render()},Garden.options.growSpeed)},count:function(){var n=this,e=t("#J_time"),r=t(".j_count",e),o;o=i.count(1432659600,parseInt(+new Date/1e3,10),function(t){var n="";if(t.months<10){t.months="0"+t.months}if(t.days<10){t.days="0"+t.days}if(t.hours<10){t.hours="0"+t.hours}if(t.minutes<10){t.minutes="0"+t.minutes}if(t.seconds<10){t.seconds="0"+t.seconds}n+="<i>"+t.months+"</i>mon <i>"+t.days+"</i>day <i>"+t.hours+"</i>hr <i>"+t.minutes+"</i>min <i>"+t.seconds+"</i>sec";r.html(n)})},time:function(){var n=this,e=t("#J_time"),r=t(".j_info",e),i=t(".j_count",e),o=t(".j_text",e),a="fadeIn anim1500ms",s="fadeIn anim1000ms",h=n.EVENT;r.addClass(a);i.addClass(a);i[0].addEventListener(h,function(t){t.currentTarget.removeEventListener(h,arguments.callee);o.addClass(s);n.cake()},false)},cake:function(){var n=this,e=t("#J_cake"),r=t("#J_title"),i=t("#J_textarea"),o="fadeIn anim1500ms",a=n.EVENT,s;e.html(i.text());s=t(".j_velas",e);setTimeout(function(){e.css("opacity",1)},500);setTimeout(function(){r.addClass(o)},3500)}};new o})})(Zepto,window,document,undefined);