!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof module&&"object"==typeof module.exports?require("jquery"):jQuery)}(function(t){function e(){var e=o.settings;if(e.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var r=i(this);return isNaN(r.datetime)||(0===e.cutoff||Math.abs(n(r.datetime))<e.cutoff?t(this).text(a(r.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function i(e){if(e=t(e),!e.data("timeago")){e.data("timeago",{datetime:o.datetime(e)});var i=t.trim(e.text());o.settings.localeTitle?e.attr("title",e.data("timeago").datetime.toLocaleString()):!(i.length>0)||o.isTime(e)&&e.attr("title")||e.attr("title",i)}return e.data("timeago")}function a(t){return o.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.timeago=function(e){return a(e instanceof Date?e:"string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var o=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(e){function i(i,n){var o=t.isFunction(i)?i(n,e):i,r=a.numbers&&a.numbers[n]||n;return o.replace(/%d/i,r)}if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var a=this.settings.strings,n=a.prefixAgo,o=a.suffixAgo;if(this.settings.allowFuture&&e<0&&(n=a.prefixFromNow,o=a.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var r=Math.abs(e)/1e3,s=r/60,u=s/60,l=u/24,m=l/365,d=r<45&&i(a.seconds,Math.round(r))||r<90&&i(a.minute,1)||s<45&&i(a.minutes,Math.round(s))||s<90&&i(a.hour,1)||u<24&&i(a.hours,Math.round(u))||u<42&&i(a.day,1)||l<30&&i(a.days,Math.round(l))||l<45&&i(a.month,1)||l<365&&i(a.months,Math.round(l/30))||m<1.5&&i(a.year,1)||i(a.years,Math.round(m)),c=a.wordSeparator||"";return void 0===a.wordSeparator&&(c=" "),t.trim([n,d,o].join(c))},parse:function(e){var i=t.trim(e);return i=i.replace(/\.\d+/,""),i=i.replace(/-/,"/").replace(/-/,"/"),i=i.replace(/T/," ").replace(/Z/," UTC"),i=i.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),i=i.replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(e){var i=o.isTime(e)?t(e).attr("datetime"):t(e).attr("title");return o.parse(i)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var r={init:function(){r.dispose.call(this);var i=t.proxy(e,this);i();var a=o.settings;a.refreshMillis>0&&(this._timeagoInterval=setInterval(i,a.refreshMillis))},update:function(i){var a=i instanceof Date?i:o.parse(i);t(this).data("timeago",{datetime:a}),o.settings.localeTitle&&t(this).attr("title",a.toLocaleString()),e.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:o.parse(o.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),e.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};t.fn.timeago=function(t,e){var i=t?r[t]:r.init;if(!i)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){i.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),function(){var t=document.getElementById("site-navigation"),e=document.getElementById("responsive-menu"),i=document.getElementById("responsive-menu-toggle");if(t&&"undefined"!=typeof i)return"undefined"==typeof e?void(i.style.display="none"):void(i.onclick=function(){i.className.indexOf("active")!==-1?(t.style.display="none",i.className=i.className.replace(" active","")):(t.style.display="block",i.className+=" active")})}(),function(t){t(function(){t.timeago&&t("time").timeago()})}(jQuery);
//# sourceMappingURL=x-footer.js.map
