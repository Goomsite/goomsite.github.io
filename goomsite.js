var 
noIMG = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBEI5l29ECHatiE5MRX27V82sM77GzW2xUEIGHX2p4M5pOLwln48tq8WvEIbQ7ez5YkCWUoZnNiD4N6BWuoYhFtk5kLJ0gIm77CUxUh7IKP1WmH7677P486-afvqPE4s6KwSQTUSlaJ9uiRgmS3aQfyZhNJij6oTsXg9ejcurO0x6mTh9JYzurM2hM1To/s16000/noimage.webp",
imglazy = "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
mNTH = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
wSize ="600",
hSize ="400",
npSize= "80",
moTxt = "Visit",
jrelated="6",
postPerPage = 7,
postnavPrevText = "Previous",
postnavNextText = "Next",
navPrevMsg = "You are seeing the Last Post",
navNextMsg = "You are seeing the Latest Post",
textTbl = "Table of Contents";

cookieOptions = {
    msg: "Our website uses cookies to improve your experience. Learn more about",
    link: "https://www.blogger.com/go/blogspot-cookies",
    close: "Accept"};

// backtop
function scrollToTop() {
    verticalOffset = "undefined" != typeof verticalOffset ? verticalOffset : 0, element = $("body"), offset = element.offset(), offsetTop = offset.top, $("html, body").animate({
        scrollTop: offsetTop
    }, 600, "linear")
}
$(function() {
    $(document).on("scroll", function() {
        100 < $(window).scrollTop() ? $(".backtop").addClass("show") : $(".backtop").removeClass("show")
    }), $(".backtop").on("click", scrollToTop)
});

/*! lazysizes - v5.3.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

// Date
function updateDate() {
  let today = new Date(),
     dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const IDCollection = ["daynum", "month", "year"];
  const val = [dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}
updateDate();

// Menu
"use strict";
$(function() {
    $("#main-menu").each(function() {
        for (var e = $(this).find(".LinkList ul > li").children("a"), a = e.length, n = 0; a > n; n++) {
            var t = e.eq(n),
                s = t.text();
            if ("_" !== s.charAt(0)) {
                var l = e.eq(n + 1),
                    i = l.text();
                if ("_" === i.charAt(0)) {
                    var u = t.parent();
                    u.append('<ul class="sub-menu m-sub"/>')
                }
            }
            "_" === s.charAt(0) && (t.text(s.replace("_", "")), t.parent().appendTo(u.children(".sub-menu")))
        }
        for (n = 0; a > n; n++) t = e.eq(n), s = t.text(), "_" !== s.charAt(0) && (l = e.eq(n + 1), i = l.text(), "_" === i.charAt(0) && (u = t.parent(), u.append('<ul class="sub-menu2 m-sub"/>'))), "_" === s.charAt(0) && (t.text(s.replace("_", "")), t.parent().appendTo(u.children(".sub-menu2")));
        $("#main-menu ul li ul").parent("li").addClass("has-sub"), $("#main-menu .widget").addClass("show-menu")
    }), $("#main-menu-nav").clone().appendTo(".mobile-menu"), $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".mobile-menu ul > li a").each(function() {
        var e = $(this),
            a = e.attr("href").trim(),
            n = a.toLowerCase(),
            t = a.split("/"),
            s = t[0];
        n.match("mega-menu") && e.attr("href", "/search/label/" + s + "?&max-results=" + postPerPage)
    }), $(".slide-menu-toggle").on("click", function() {
        $("body").toggleClass("nav-active")
    }), $(".mobile-menu ul li .submenu-toggle").on("click", function(e) {
        $(this).parent().hasClass("has-sub") && (e.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
    })
});

"use strict";
function toggleMenu() {
    overlay.classList.toggle("active"), menu.classList.toggle("active")
}
var overlay = document.querySelector(".overlay"),
    menu = document.querySelector(".menu");
$(".sidebar-dropdown > a").click(function() {
    $(".sidebar-submenu").slideUp(200), $(this).parent().hasClass("active") ? ($(".sidebar-dropdown").removeClass("active"), $(this).parent().removeClass("active")) : ($(".sidebar-dropdown").removeClass("active"), $(this).next(".sidebar-submenu").slideDown(200), $(this).parent().addClass("active"))
});

// Sticky
"use strict";
$(document).scroll(function() {
    var e = $(document).scrollTop();
    e > 75 ? $(".header-menu").addClass("sticky") : $(".header-menu").removeClass("sticky")
});

$(".ticker .widget-content").each(function () {
	var b = $(this).find("span").attr("num"),
	v = $(this).find("span").attr("label"),
	box = $(this).find("span").attr("type");
	if (box.match('recent')) {
		$.ajax({
			url: "/feeds/posts/default?alt=json-in-script&max-results=" + b,
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<ul class="marquee">';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					if (c.indexOf("//www.youtube.com/embed/") > -1) {
						var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
						var k = q
					} else {
						var k = noIMG
					}
					h += '<li><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"></a></div></div><h2><a href="' + u + '">' + g + '</a></h2></li>'
				}
				h += '</ul>';
				$(".ticker .widget-content").each(function () {
					$(this).html(h);
				})
			}
		})
	} else if (box.match('label')) {
		$.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + b,
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<ul class="marquee">';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					if (c.indexOf("//www.youtube.com/embed/") > -1) {
						var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/mqdefault.jpg');
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src').replace('s72-c', 's1600');
						var k = q
					} else {
						var k = noIMG
					}
					h += '<li><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"></a></div></div><h2><a href="' + u + '">' + g + '</a></h2></li>'
				}
				h += '</ul>';
				$(".ticker .widget-content").each(function () {
					$(this).html(h);
				})
			}
		})
	}
});

//Credit
function newDate() {return (new Date).getFullYear()}
document.onload = document.getElementById("autodate").innerHTML = +newDate();

// Dark Mode Switcher
navigator.cookieEnabled&&$(".dark-mode-switcher").length&&(-1!=document.cookie.search("raveenDarkMode")?$("body").addClass("dark-mode"):$("body").removeClass("dark-mode")),$(".dark-mode-switcher").on("click",function(e){if($("body").hasClass("dark-mode")){if($("body").removeClass("dark-mode"),navigator.cookieEnabled){let o=new Date;o.setTime(o.getTime()+-2592e5),document.cookie="raveenDarkMode=; path=/; expires="+o.toUTCString()+";"}}else if($("body").addClass("dark-mode"),navigator.cookieEnabled){let d=new Date;d.setTime(d.getTime()+2592e6),document.cookie="raveenDarkMode=enabled; path=/; expires="+d.toUTCString()+";"}});

/*]]>*/
<b:if cond='data:view.isHomepage'>
/*<![CDATA[*/
$(".vidraWp .widget-content").each(function () {
	var v = $(this).find("span").attr("label"),
	b = $(this).find("span").attr("num"),
	gm = $(this).parent().attr("id"),
	box = $(this).find("span").attr("type");
	if (box.match('feat')) {
	$.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=5",
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<div class="featrmg">';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var y = e.feed.entry[i].author[0].name.$t;
					var wi = e.feed.entry[i].author[0].gd$image.src;
					var jc = e.feed.entry[i].thr$total.$t;
					var d = e.feed.entry[i].published.$t,
					t = d.substring(0, 4),
					w = d.substring(5, 7),
					f = d.substring(8, 10),
					r = mNTH[parseInt(w, 10)] + ' ' + f + ', ' + t;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					if (c.indexOf("//www.youtube.com/embed/") > -1) {
						var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/maxresdefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = q
					} else {
						var k = noIMG
					}
					if (i == 0) {
				h += '<div class="featWp"><div class="featli"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '?&amp;max-results=8">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + y + '" data-src="' + wi + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + y + '"/></span><div class="f"><span class="min">' + y + '</span><span class="dt"><span class="tg">' + r + '</span><span class="jm">' + jc + '</span></span></div></div></div></div>'
				} else if (i == 1) {
				h += '<div class="featli"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '?&amp;max-results=8">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + y + '" data-src="' + wi + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + y + '"/></span><div class="f"><span class="min">' + y + '</span><span class="dt"><span class="tg">' + r + '</span><span class="jm">' + jc + '</span></span></div></div></div></div></div><div class="featri"><ul>'
				} else {
				  h += '<li class="rbig"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '?&amp;max-results=8">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + y + '" data-src="' + wi + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + y + '"/></span><div class="f"><span class="min">' + y + '</span><span class="dt"><span class="tg">' + r + '</span><span class="jm">' + jc + '</span></span></div></div></div></li>'
				}
			}
				h += '</ul></div>';
				$(".vidraWp .widget-content").each(function () {
					var text = $(this).parent().attr("id");
					if (text == gm) {
						$(this).html(h)
					}
				})
			}
		})
	}
});

$(".rctone .widget-content").each(function () {
	var v = $(this).find("span").attr("label"),
	b = $(this).find("span").attr("num"),
	gm = $(this).parent().attr("id"),
	box = $(this).find("span").attr("type");
	if (box.match('grid1')) {
	$.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=6",
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<div class="mygrid">';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var y = e.feed.entry[i].author[0].name.$t;
					var wi = e.feed.entry[i].author[0].gd$image.src;
					var d = e.feed.entry[i].published.$t,
					t = d.substring(0, 4),
					w = d.substring(5, 7),
					f = d.substring(8, 10),
					r = mNTH[parseInt(w, 10)] + ' ' + f + ', ' + t;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					if (c.indexOf("//www.youtube.com/embed/") > -1) {
						var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = q
					} else {
						var k = noIMG
					}
					if (i == 0) {
				h += '<div class="featWp"><div class="featli"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '?&amp;max-results=8">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="min">' + y + '</span><span class="tg">' + r + '</span></div></div></div>'
				} else if (i == 1) {
				h += '<div class="featli"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '?&amp;max-results=8">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="min">' + y + '</span><span class="tg">' + r + '</span></div></div></div>'
				} else if (i == 2) {
				h += '<div class="featli"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '?&amp;max-results=8">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="min">' + y + '</span><span class="tg">' + r + '</span></div></div></div></div><div class="featri"><ul>'
				} else {
				  h += '<li class="rbig"><div class="tHimage"><div class="tHimg"><a href="' + u + '"><img class="lazyload" data-sizes="auto" data-src="' + k + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" alt="' + g + '" title="' + g + '"/></a></div></div><div class="rcinfo"><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="tg">' + r + '</span></div></div></li>'
				}
			}
				h += '</ul></div>';
				$(".rctone .widget-content").each(function () {
					var text = $(this).parent().attr("id");
					if (text == gm) {
						$(this).html(h);
					}
				})
			}
		})
	}
});

$(".rctone .widget-content").each(function() {
    var t = $(this).find("span").attr("label"),
        e = ($(this).find("span").attr("num"), $(this).prev("h3").text(), $(this).parent().attr("id"));
    $(this).find("span").attr("type").match("goomsite") && $.ajax({
        url: "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", s = "<div class='rcgoom'>", i = 0; i < t.feed.entry.length; i++) {
                for (var n = 0; n < t.feed.entry[i].link.length; n++)
                    if ("alternate" == t.feed.entry[i].link[n].rel) {
                        a = t.feed.entry[i].link[n].href;
                        break
                    }
                var rb = t.feed.entry[i].author[0].name.$t,
					im = t.feed.entry[i].author[0].gd$image.src,
                    l = t.feed.entry[i].title.$t,
                    c = t.feed.entry[i].category[0].term,
                    d = t.feed.entry[i].published.$t,
                    f = d.substring(0, 4),
                    o = d.substring(5, 7),
                    v = d.substring(8, 10),
                    h = mNTH[parseInt(o, 10)] + " " + v + " " + f,
                    m = t.feed.entry[i].content.$t,
                    u = $("<div>").html(m);
                if ("content" in t.feed.entry[i]) var p = t.feed.entry[i].content.$t;
                else p = "summary" in b_rc ? t.feed.entry[i].summary.$t : "";
                if ((p = p.replace(/<\S[^>]*>/g, "")).length > 110 && (p = p.substring(0, 110) + "..."), m.indexOf("//www.youtube.com/embed/") > -1) var r = t.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    g = r;
                else if (m.indexOf("<img") > -1) {
                    var y = u.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + "");
                    g = y
                } else g = noIMG;
                s += 0 == i ? '<div class="recleft"><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/></a></div></div><div class="f"><span class="rl"><a href="/search/label/' + c + '">' + c + '</a></span><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><p class="pStNpet">' + p + '</p><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + rb + '" src="' + im + '" width="' + npSize + '" height="' + npSize + '" title="' + rb + '"/></span><span class="min">' + rb + '</span><span class="tg">' + h + '</span></div></div></div><ul>' : '<li><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><div class="rect-meta"><span class="tg">' + h + '</span></div></div></li>'
            }
            s += "</ul></div></div>", 
				$(".rctone .widget-content").each(function() {
                $(this).parent().attr("id") == e && ($(this).html(s))
            })
        }
    })
});

$(".rctone .widget-content").each(function() {
    var t = $(this).find("span").attr("label"),
        e = ($(this).find("span").attr("num"), $(this).prev("h3").text(), $(this).parent().attr("id"));
    $(this).find("span").attr("type").match("myvideo") && $.ajax({
        url: "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=3",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", s = "<div class='rcvideo'>", i = 0; i < t.feed.entry.length; i++) {
                for (var n = 0; n < t.feed.entry[i].link.length; n++)
                    if ("alternate" == t.feed.entry[i].link[n].rel) {
                        a = t.feed.entry[i].link[n].href;
                        break
                    }
                var rb = t.feed.entry[i].author[0].name.$t,
					im = t.feed.entry[i].author[0].gd$image.src,
                    l = t.feed.entry[i].title.$t,
                    c = t.feed.entry[i].category[0].term,
					jc = t.feed.entry[i].thr$total.$t,
                    d = t.feed.entry[i].published.$t,
                    f = d.substring(0, 4),
                    o = d.substring(5, 7),
                    v = d.substring(8, 10),
                    h = mNTH[parseInt(o, 10)] + " " + v + " " + f,
                    m = t.feed.entry[i].content.$t,
                    u = $("<div>").html(m);
                if ("content" in t.feed.entry[i]) var p = t.feed.entry[i].content.$t;
                else p = "summary" in b_rc ? t.feed.entry[i].summary.$t : "";
                if ((p = p.replace(/<\S[^>]*>/g, "")).length > 110 && (p = p.substring(0, 110) + "..."), m.indexOf("//www.youtube.com/embed/") > -1) var r = t.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    g = r;
                else if (m.indexOf("<img") > -1) {
                    var y = u.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + "");
                    g = y
                } else g = noIMG;
                s += 0 == i ? '<div class="recleft"><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/><span class="play-icon"></span><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + c + '">' + c + '</a></span><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + rb + '" src="' + im + '" width="' + npSize + '" height="' + npSize + '" title="' + rb + '"/></span><div class="f"><span class="min">' + rb + '</span><span class="dt"><span class="tg">' + h + '</span><span class="jm">' + jc + '</span></span></div></div></div></div><ul>' : '<li><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/><span class="play-icon"></span><div class="ly"></div></a></div></div><div class="f"><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><div class="rect-meta"><span class="dt"><span class="tg">' + h + '</span><span class="jm">' + jc + '</span></span></div></div></li>'
            }
            s += "</ul></div></div>",
				$(".rctone .widget-content").each(function(){
                $(this).parent().attr("id") == e && ($(this).html(s),
				$(this).parent().addClass('videowrap'));
            })
        }
    })
});

$(".recentid .widget-content").each(function() {
    var e = $(this).find("span").attr("label"),
        t = $(this).find("span").attr("num"),
		s = $(this).find("span").attr("type"),
        a = $(this).parent().attr("id");
     	s.match("slide") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", s = '<div class="owl-carousel">', i = 0; i < e.feed.entry.length; i++) {
                for (var r = 0; r < e.feed.entry[i].link.length; r++)
                    if ("alternate" == e.feed.entry[i].link[r].rel) {
                        t = e.feed.entry[i].link[r].href;
                        break
                    }
                var n = e.feed.entry[i].title.$t,
                    l = e.feed.entry[i].category[0].term,
                    d = e.feed.entry[i].author[0].name.$t,
					w = e.feed.entry[i].author[0].gd$image.src,
					jc = e.feed.entry[i].thr$total.$t,
                    c = e.feed.entry[i].published.$t,
                    o = c.substring(0, 4),
                    h = c.substring(5, 7),
                    f = c.substring(8, 10),
                    p = mNTH[parseInt(h, 10)] + " " + f + ", " + o,
                    u = e.feed.entry[i].content.$t,
                    m = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var v = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    g = v;
                else if (u.indexOf("<img") > -1) var y = m.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + ""),
                    g = y;
                else var g = noIMG;
                s += '<div class="carousel-item"><h2 class="rect-title"><a href="' + t + '" title="' + n + '">' + n + '</a></h2><div class="tHimage"><div class="tHimg"><a href="' + t + '"><img class="lazyload" data-sizes="auto" alt="' + n + '" data-src="' + g + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + n + '"/></a></div></div><div class="rect-meta"><div class="f"><span class="min">' + d + '</span><span class="dt"><span class="tg">' + p + '</span><span class="jm">' + jc + '</span></span></div></div></div>'
            }
            s += "</div><span class='sliderlabel'><a href='/search/label/" + l + "?&amp;max-results=8'>Readmore</a></span>", $(".recentid .widget-content").each(function() {
                var e = $(this).parent().attr("id");
                e == a && ($(this).html(s),$(this).parent().addClass("myslide"), $(".owl-carousel").owlCarousel({
                    items: 10,
                    smartSpeed: 550,
                    nav: !0,
					navText: ["<i class='fa-regular fa-arrow-left-long fa-fw'></i>","<i class='fa-regular fa-arrow-right-long fa-fw'></i>"],
                    loop: !0,
                    autoplay: !0,
                    autoplaySpeed: 800,
                    dots: !1,
                    margin:30,
                    responsive: {
                        0: {
                            items: 1,
                            nav: !0
                        },
                        601: {
                            items: 2,
                            nav: !0
                        },
                        880: {
                            items: 4,
                            nav: !0
                        }
                    }
                }))
            })
        }
    })
});

$(".rc .widget-content").each(function() {
    var e = $(this).find("span").attr("label"),
        t = ($(this).find("span").attr("num"), $(this).prev("h3").text(), $(this).parent().attr("id")),
        a = $(this).find("span").attr("type");
    	a.match("recgrid") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var a = "", r = "<div class='rcgrid'>", n = 0; n < e.feed.entry.length; n++) {
                for (var s = 0; s < e.feed.entry[n].link.length; s++)
                    if ("alternate" == e.feed.entry[n].link[s].rel) {
                        a = e.feed.entry[n].link[s].href;
                        break
                    }
                var i = e.feed.entry[n].title.$t,
                    l = e.feed.entry[n].category[0].term,
					w = e.feed.entry[n].author[0].gd$image.src,
                    c = e.feed.entry[n].published.$t,
					jc = e.feed.entry[n].thr$total.$t,
					pr = e.feed.entry[n].author[0].name.$t,
                    d = c.substring(0, 4),
                    f = c.substring(5, 7),
                    o = c.substring(8, 10),
                    u = mNTH[parseInt(f, 10)] + " " + o + ", " + d,
                    h = e.feed.entry[n].content.$t,
                    p = $("<div>").html(h);
                if ("content" in e.feed.entry[n]) var m = e.feed.entry[n].content.$t;
                else if ("summary" in b_rc) var m = e.feed.entry[n].summary.$t;
                else var m = "";
                var y = /<\S[^>]*>/g;
                if (m = m.replace(y, ""), m.length > 190 && (m = "" + m.substring(0, 190) + "..."), h.indexOf("//www.youtube.com/embed/") > -1) var g = e.feed.entry[n].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    v = g;
                else if (h.indexOf("<img") > -1) var b = p.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + ""),
                    v = b;
                else var v = noIMG;
				r += 0 == n ? '<div class="lt"><div class="tHimage"><div class="tHimg"><a href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + i + '" data-src="' + v + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + i + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + l + '">' + l + '</a></span><h2 class="rect-title"><a href="' + a + '">' + i + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + a + '" data-src="' + w + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + pr + '"/></span><div class="f"><span class="min">' + pr + '</span><span class="dt"><span class="tg">' + u + '</span><span class="jm">' + jc + '</span></span></div></div></div></div><ul>' : '<li><div class="tHimage"><div class="tHimg"><a href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + a + '" data-src="' + v + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + i + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + a + '" title="' + i + '">' + i + '</a></h2><div class="meta"><div class="rect-meta"><span class="tg">' + u + '</span></div></div></div></li>'
            }
            r += "</ul></div>", $(".rc .widget-content").each(function() {
                var e = $(this).parent().attr("id");
                e == t && ($(this).html(r))
            })
        }
    })
});

$('.listn .widget-content').each(function () {
	var v = $(this).find("span").attr("label"),
	a = $(this).find("span").attr("type");
	a.match("listnum") && $.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=4",
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<ol class="listnum">';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var y = e.feed.entry[i].author[0].name.$t;
					var d = e.feed.entry[i].published.$t,
					t = d.substring(0, 4),
					w = d.substring(5, 7),
					f = d.substring(8, 10),
					r = mNTH[parseInt(w, 10)] + ' ' + f + ', ' + t;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					snippets = c.replace(/<\S[^>]*>/g, "");
					if (50 < snippets.length && (snippets = snippets.substring(0, 150) + "..."),(c.indexOf("//www.youtube.com/embed/")) > -1) {
						var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = q
					} else {
						var k = noIMG
					}
					h += '<li><div class="tHimage"><div class="tHimg"><a href="' + u + '" title="' + g + '"><img class="lazyload" data-sizes="auto" alt="' + g + '" data-src="' + k + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + g + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><div class="tg">' + r + '</div></div></div></li>'
				}
				h += '</ol>';
				$(".listn .widget-content").each(function () {
					$(this).html(h)
				})
			}
		})
});

$(".s .widget-content").each(function() {
    var e = $(this).find("span").attr("label"),
        t = $(this).find("span").attr("num"),
        a = ($(this).prev("h3").text(), $(this).parent().attr("id")),
        s = $(this).find("span").attr("type");
     	s.match("carousel") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + t,
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var t = "", s = '<div class="owl-carousel">', i = 0; i < e.feed.entry.length; i++) {
                for (var r = 0; r < e.feed.entry[i].link.length; r++)
                    if ("alternate" == e.feed.entry[i].link[r].rel) {
                        t = e.feed.entry[i].link[r].href;
                        break
                    }
                var n = e.feed.entry[i].title.$t,
                    l = e.feed.entry[i].category[0].term,
                    d = e.feed.entry[i].author[0].name.$t,
                    c = e.feed.entry[i].published.$t,
                    o = c.substring(0, 4),
                    h = c.substring(5, 7),
                    f = c.substring(8, 10),
                    p = mNTH[parseInt(h, 10)] + " " + f + ", " + o,
                    u = e.feed.entry[i].content.$t,
                    m = $("<div>").html(u);
                if (u.indexOf("//www.youtube.com/embed/") > -1) var v = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    g = v;
                else if (u.indexOf("<img") > -1) var y = m.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + ""),
                    g = y;
                else var g = noIMG;
                s += '<div class="carousel-item"><div class="tHimage"><div class="tHimg"><a href="' + t + '"><img class="lazyload" data-sizes="auto" alt="' + n + '" data-src="' + g + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + n + '"/></a></div></div><h2 class="rect-title"><a href="' + t + '" title="' + n + '">' + n + '</a></h2></div>'
            }
            s += "</div>", 
				$(".s .widget-content").each(function() {
                var e = $(this).parent().attr("id");
                e == a && ($(this).html(s), 
				$(this).parent().addClass('slidewidget'),
				$(this).prev("h3").wrap('<div class="widget-title"></div>'), 
				$(this).prev(".widget-title").append('<a class="molink" href="/search/label/' + e + '?&max-results=6" title=' + e + ">" + moTxt + "</a>"),
				$(".owl-carousel").owlCarousel({
                    items: 2,
                    smartSpeed: 550,
                    nav: !0,
                    navText: ["<i class='fa-solid fa-angle-left'></i>","<i class='fa-solid fa-angle-right'></i>"],
                    loop: !0,
                    autoplay: !0,
                    autoplaySpeed: 800,
                    dots: !0,
                    margin: 20,
                    responsive: {
                        0: {
                            items: 1,
                            nav: !0
                        },
                        601: {
                            items: 2,
                            nav: !0
                        },
                        880: {
                            items:2,
                            nav: !0
                        }
                    }
                }))
            })
        }
    })
});

$(".s .widget-content").each(function() {
    var e = $(this).find("span").attr("label"),
        t = ($(this).find("span").attr("num"), $(this).prev("h3").text(), $(this).parent().attr("id")),
        a = $(this).find("span").attr("type");
    	a.match("sdbr") && $.ajax({
        url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(e) {
            for (var a = "", r = "<div class='rcgrid'>", n = 0; n < e.feed.entry.length; n++) {
                for (var s = 0; s < e.feed.entry[n].link.length; s++)
                    if ("alternate" == e.feed.entry[n].link[s].rel) {
                        a = e.feed.entry[n].link[s].href;
                        break
                    }
                var i = e.feed.entry[n].title.$t,
                    l = e.feed.entry[n].category[0].term,
					w = e.feed.entry[n].author[0].gd$image.src,
                    c = e.feed.entry[n].published.$t,
					jc = e.feed.entry[n].thr$total.$t,
					pr = e.feed.entry[n].author[0].name.$t,
                    d = c.substring(0, 4),
                    f = c.substring(5, 7),
                    o = c.substring(8, 10),
                    u = mNTH[parseInt(f, 10)] + " " + o + ", " + d,
                    h = e.feed.entry[n].content.$t,
                    p = $("<div>").html(h);
                if ("content" in e.feed.entry[n]) var m = e.feed.entry[n].content.$t;
                else if ("summary" in b_rc) var m = e.feed.entry[n].summary.$t;
                else var m = "";
                var y = /<\S[^>]*>/g;
                if (m = m.replace(y, ""), m.length > 190 && (m = "" + m.substring(0, 190) + "..."), h.indexOf("//www.youtube.com/embed/") > -1) var g = e.feed.entry[n].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    v = g;
                else if (h.indexOf("<img") > -1) var b = p.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + ""),
                    v = b;
                else var v = noIMG;
				r += 0 == n ? '<div class="lt"><div class="tHimage"><div class="tHimg"><a href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + i + '" data-src="' + v + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + i + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + l + '">' + l + '</a></span><h2 class="rect-title"><a href="' + a + '">' + i + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + a + '" data-src="' + w + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + pr + '"/></span><div class="f"><span class="min">' + pr + '</span><span class="dt"><span class="tg">' + u + '</span><span class="jm">' + jc + '</span></span></div></div></div></div><ol>' : '<li><div class="f"><h2 class="rect-title"><a href="' + a + '" title="' + i + '">' + i + '</a></h2><div class="meta"><div class="rect-meta"><span class="tg">' + u + '</span><span class="jm">' + jc + '</span></div></div></div></li>'
            }
            r += "</ol></div>", $(".s .widget-content").each(function() {
                var e = $(this).parent().attr("id");
                e == t && ($(this).html(r),$(this).parent().addClass('sdbr'))
            })
        }
    })
});

$('.mygallery .widget-content').each(function () {
	var v = $(this).find("span").attr("label"),
	t = $(this).find("span").attr("num"),
	a = $(this).find("span").attr("type");
	a.match("rcgallery") && $.ajax({
			url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + t,
			type: 'get',
			dataType: "jsonp",
			success: function (e) {
				var u = "";
				var h = '<ul>';
				for (var i = 0; i < e.feed.entry.length; i++) {
					for (var j = 0; j < e.feed.entry[i].link.length; j++) {
						if (e.feed.entry[i].link[j].rel == "alternate") {
							u = e.feed.entry[i].link[j].href;
							break
						}
					}
					var g = e.feed.entry[i].title.$t;
					var s = e.feed.entry[i].category[0].term;
					var y = e.feed.entry[i].author[0].name.$t;
					var wi = e.feed.entry[i].author[0].gd$image.src;
					var jc = e.feed.entry[i].thr$total.$t;
					var d = e.feed.entry[i].published.$t,
					t = d.substring(0, 4),
					w = d.substring(5, 7),
					f = d.substring(8, 10),
					r = mNTH[parseInt(w, 10)] + ' ' + f + ', ' + t;
					var c = e.feed.entry[i].content.$t;
					var $c = $('<div>').html(c);
					snippets = c.replace(/<\S[^>]*>/g, "");
					if (50 < snippets.length && (snippets = snippets.substring(0, 150) + "..."),(c.indexOf("//www.youtube.com/embed/")) > -1) {
						var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = p
					} else if (c.indexOf("<img") > -1) {
						var q = $c.find('img:first').attr('src').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + '');
						var k = q
					} else {
						var k = noIMG
					}
					h += '<li><div class="tHimage"><div class="tHimg"><a href="' + u + '" title="' + g + '"><img class="lazyload" data-sizes="auto" alt="' + g + '" data-src="' + k + '" src="' + imglazy + '" width="' + wSize + '" height="' + hSize + '" title="' + g + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><span class="rl"><a href="/search/label/' + s + '">' + s + '</a></span><h2 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + y + '" data-src="' + wi + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + y + '"/></span><div class="f"><span class="min">' + y + '</span><span class="dt"><span class="tg">' + r + '</span><span class="jm">' + jc + '</span></span></div></div></div></li>'
				}
				h += '</ul>';
				$(".mygallery .widget-content").each(function () {
					$(this).html(h)
				})
			}
		})
});

$(".rcenter .widget-content").each(function() {
        var a = $(this).find("span").attr("label"),
            s = "label",
            i = $(this).find("span").attr("id");
			i.match(s) && $.ajax({
            url: "/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=9",
            type: "get",
            dataType: "jsonp",
            success: function(a) {
                for (var e = "", t = '<div class="centerbox">', s = 0; s < a.feed.entry.length; s++) {
                    for (var i = 0; i < a.feed.entry[s].link.length; i++)
                        if ("alternate" == a.feed.entry[s].link[i].rel) {
                            e = a.feed.entry[s].link[i].href;
                            break
                        }
                    var r = a.feed.entry[s].title.$t,
                        n = a.feed.entry[s].category[0].term,
                        l = a.feed.entry[s].published.$t,
						q = a.feed.entry[s].author[0].name.$t,
						w = a.feed.entry[s].author[0].gd$image.src,
                        c = l.substring(0, 4),
                        d = l.substring(5, 7),
                        f = l.substring(8, 10),
                        o = mNTH[parseInt(d, 10)] + " " + f + ", " + c,
                        h = a.feed.entry[s].content.$t,
                        u = $("<div>").html(h),
                    m = h.replace(/<\S[^>]*>/g, "");
                if (50 < m.length && (m = m.substring(0, 110) + "..."), -1 < d.indexOf("//www.youtube.com/embed/") > -1) var v = a.feed.entry[s].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                        p = v;
                    else if (h.indexOf("<img") > -1) var g = u.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                        p = g;
                    else var p = noIMG;
                     t += 0 == s ? '<ol class="item1"><li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li>" : 1 == s ? '<li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li>" : 2 == s ? '<li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li>" : 3 == s ? '<li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li></ol>" : 4 == s ? '<div class="item2"><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/><div class="ly"></div></a><span class="rl"><a href="/search/label/' + n + '?&max-results=9">' + n + '</a></span></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><p class="pStNpet">' + m + '</p><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + q + '" data-src="' + w + '" src="' + imglazy + '" width="' + npSize + '" height="' + npSize + '" title="' + q + '"/></span><div class="f"><span class="min">' + q + '</span><span class="tg">' + o + "</span></div></div></div></div>" : 5 == s ? '<ol class="item1"><li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li>" : 6 == s ? '<li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2 class="rect-title"><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li>" : 7 == s ? '<li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '" title="' + r + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2 class="rect-title"><div class="rect-meta"><span class="tg">' + o + "</span></div></div></li>" : '<li><div class="tHimage"><div class="tHimg"><a href="' + e + '" title="' + r + '"><img class="lazyload" alt="' + r + '" data-src="' + p + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + e + '" title="' + r + '">' + r + '</a></h2><div class="rect-meta"><span class="tg">' + o + '</span></div></div></li></ol>'
                }
                t += '</div>', $(".rcenter .widget-content").each(function() {
                    $(this).find("span").attr("id").match("label") && ($(this).html(t), 
					$(this).parent().addClass('rcbottom'))
                })
            }
        })
});

$(".rctone .widget-content").each(function() {
    var t = $(this).find("span").attr("label"),
        e = ($(this).find("span").attr("num"), $(this).prev("h3").text(), $(this).parent().attr("id"));
    $(this).find("span").attr("type").match("goomsite") && $.ajax({
        url: "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", s = "<div class='rcgoom'>", i = 0; i < t.feed.entry.length; i++) {
                for (var n = 0; n < t.feed.entry[i].link.length; n++)
                    if ("alternate" == t.feed.entry[i].link[n].rel) {
                        a = t.feed.entry[i].link[n].href;
                        break
                    }
                var rb = t.feed.entry[i].author[0].name.$t,
					im = t.feed.entry[i].author[0].gd$image.src,
                    l = t.feed.entry[i].title.$t,
                    c = t.feed.entry[i].category[0].term,
                    d = t.feed.entry[i].published.$t,
                    f = d.substring(0, 4),
                    o = d.substring(5, 7),
                    v = d.substring(8, 10),
                    h = mNTH[parseInt(o, 10)] + " " + v + " " + f,
                    m = t.feed.entry[i].content.$t,
                    u = $("<div>").html(m);
                if ("content" in t.feed.entry[i]) var p = t.feed.entry[i].content.$t;
                else p = "summary" in b_rc ? t.feed.entry[i].summary.$t : "";
                if ((p = p.replace(/<\S[^>]*>/g, "")).length > 110 && (p = p.substring(0, 110) + "..."), m.indexOf("//www.youtube.com/embed/") > -1) var r = t.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    g = r;
                else if (m.indexOf("<img") > -1) {
                    var y = u.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + "");
                    g = y
                } else g = noIMG;
                s += 0 == i ? '<div class="recleft"><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/></a></div></div><div class="f"><span class="rl"><a href="/search/label/' + c + '">' + c + '</a></span><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><p class="pStNpet">' + p + '</p><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + rb + '" src="' + im + '" width="' + npSize + '" height="' + npSize + '" title="' + rb + '"/></span><div class="f"><span class="min">' + rb + '</span><span class="tg">' + h + '</span></div></div></div></div><ul>' : '<li><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><div class="rect-meta"><span class="tg">' + h + '</span></div></div></li>'
            }
            s += "</ul></div></div>", 
				$(".rctone .widget-content").each(function() {
                $(this).parent().attr("id") == e && ($(this).html(s))
            })
        }
    })
});


$(".rctwo .widget-content").each(function() {
    var t = $(this).find("span").attr("label"),
        e = ($(this).find("span").attr("num"), $(this).prev("h3").text(), $(this).parent().attr("id"));
    $(this).find("span").attr("type").match("recentbtm") && $.ajax({
        url: "/feeds/posts/default/-/" + t + "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function(t) {
            for (var a = "", s = "<div class='rcgoom'>", i = 0; i < t.feed.entry.length; i++) {
                for (var n = 0; n < t.feed.entry[i].link.length; n++)
                    if ("alternate" == t.feed.entry[i].link[n].rel) {
                        a = t.feed.entry[i].link[n].href;
                        break
                    }
                var rb = t.feed.entry[i].author[0].name.$t,
					im = t.feed.entry[i].author[0].gd$image.src,
                    l = t.feed.entry[i].title.$t,
 					jc = t.feed.entry[i].thr$total.$t,
                    c = t.feed.entry[i].category[0].term,
                    d = t.feed.entry[i].published.$t,
                    f = d.substring(0, 4),
                    o = d.substring(5, 7),
                    v = d.substring(8, 10),
                    h = mNTH[parseInt(o, 10)] + " " + v + " " + f,
                    m = t.feed.entry[i].content.$t,
                    u = $("<div>").html(m);
                if ("content" in t.feed.entry[i]) var p = t.feed.entry[i].content.$t;
                else p = "summary" in b_rc ? t.feed.entry[i].summary.$t : "";
                if ((p = p.replace(/<\S[^>]*>/g, "")).length > 110 && (p = p.substring(0, 110) + "..."), m.indexOf("//www.youtube.com/embed/") > -1) var r = t.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/sddefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + wSize + ''),
                    g = r;
                else if (m.indexOf("<img") > -1) {
                    var y = u.find("img:first").attr("src").replace(/s72-(c|.*?-c)/, "w" + wSize + "-h" + wSize + "");
                    g = y
                } else g = noIMG;
                s += 0 == i ? '<div class="recleft"><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/><div class="ly"></div></a></div></div><div class="rcinfo"><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><div class="rect-meta"><span class="profil-meta"><img class="lazyload" data-sizes="auto" alt="' + rb + '" src="' + im + '" width="' + npSize + '" height="' + npSize + '" title="' + rb + '"/></span><div class="f"><span class="min">' + rb + '</span><span class="dt"><span class="tg">' + h + '</span><span class="jm">' + jc + '</span></span></div></div></div></div><ul>' : '<li><div class="tHimage"><div class="tHimg"><a title="' + l + '" href="' + a + '"><img class="lazyload" data-sizes="auto" alt="' + l + '" data-src="' + g + '" src="' + imglazy + '" data-sizes="auto" width="' + wSize + '" height="' + hSize + '"/></a></div></div><div class="f"><h2 class="rect-title"><a href="' + a + '" title="' + l + '">' + l + '</a></h2><div class="rect-meta"><span class="tg">' + h + '</span></div></div></li>'
            }
            s += "</ul></div></div>", 
				$(".rctwo .widget-content").each(function() {
                $(this).parent().attr("id") == e && ($(this).html(s))
            })
        }
    })
});

// Owl carousel @version 2.3.4
!function(t,e,i,s){function n(e,i){this.settings=null,this.options=t.extend({},n.Defaults,i),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy((function(e,i){this._handlers[i]=t.proxy(this[i],this)}),this)),t.each(n.Plugins,t.proxy((function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)}),this)),t.each(n.Workers,t.proxy((function(e,i){this._pipe.push({filter:i.filter,run:t.proxy(i.run,this)})}),this)),this.setup(),this.initialize()}n.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},n.Width={Default:"default",Inner:"inner",Outer:"outer"},n.Type={Event:"event",State:"state"},n.Plugins={},n.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,s=this.settings.rtl,n={width:"auto","margin-left":s?e:"","margin-right":s?"":e};!i&&this.$stage.children().css(n),t.css=n}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,s=this._items.length,n=!this.settings.autoWidth,o=[];for(t.items={merge:!1,width:e};s--;)i=this._mergers[s],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=i>1||t.items.merge,o[s]=n?e*i:this._items[s].width();this._widths=o}},{filter:["items","settings"],run:function(){var e=[],i=this._items,s=this.settings,n=Math.max(2*s.items,4),o=2*Math.ceil(i.length/2),r=s.loop&&i.length?s.rewind?n:Math.max(n,o):0,a="",h="";for(r/=2;r>0;)e.push(this.normalize(e.length/2,!0)),a+=i[e[e.length-1]][0].outerHTML,e.push(this.normalize(i.length-1-(e.length-1)/2,!0)),h=i[e[e.length-1]][0].outerHTML+h,r-=1;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(h).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,i=-1,s=0,n=0,o=[];++i<e;)s=o[i-1]||0,n=this._widths[this.relative(i)]+this.settings.margin,o.push(s+n*t);this._coordinates=o}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,i={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(i)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,s=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],s.eq(e).css(t.css);else i&&(t.css.width=t.items.width,s.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,i,s,n=this.settings.rtl?1:-1,o=2*this.settings.stagePadding,r=this.coordinates(this.current())+o,a=r+this.width()*n,h=[];for(i=0,s=this._coordinates.length;i<s;i++)t=this._coordinates[i-1]||0,e=Math.abs(this._coordinates[i])+o*n,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&h.push(i);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+h.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],n.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(t("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},n.prototype.initializeItems=function(){var e=this.$element.find(".owl-item");if(e.length)return this._items=e.get().map((function(e){return t(e)})),this._mergers=this._items.map((function(){return 1})),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},n.prototype.initialize=function(){var t,e,i;(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading"))&&(t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:s,i=this.$element.children(e).width(),t.length&&i<=0&&this.preloadAutoWidthImages(t));this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},n.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},n.prototype.setup=function(){var e=this.viewport(),i=this.options.responsive,s=-1,n=null;i?(t.each(i,(function(t){t<=e&&t>s&&(s=Number(t))})),"function"==typeof(n=t.extend({},this.options,i[s])).stagePadding&&(n.stagePadding=n.stagePadding()),delete n.responsive,n.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+s))):n=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:n}}),this._breakpoint=s,this.settings=n,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},n.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},n.prototype.prepare=function(e){var i=this.trigger("prepare",{content:e});return i.data||(i.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:i.data}),i.data},n.prototype.update=function(){for(var e=0,i=this._pipe.length,s=t.proxy((function(t){return this[t]}),this._invalidated),n={};e<i;)(this._invalidated.all||t.grep(this._pipe[e].filter,s).length>0)&&this._pipe[e].run(n),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},n.prototype.width=function(t){switch(t=t||n.Width.Default){case n.Width.Inner:case n.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},n.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},n.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},n.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},n.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",(function(){return!1}))),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},n.prototype.onDragStart=function(e){var s=null;3!==e.which&&(t.support.transform?s={x:(s=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===s.length?12:4],y:s[16===s.length?13:5]}:(s=this.$stage.position(),s={x:this.settings.rtl?s.left+this.$stage.width()-this.width()+this.settings.margin:s.left,y:s.top}),this.is("animating")&&(t.support.transform?this.animate(s.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=s,this._drag.stage.current=s,this._drag.pointer=this.pointer(e),t(i).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(i).one("mousemove.owl.core touchmove.owl.core",t.proxy((function(e){var s=this.difference(this._drag.pointer,this.pointer(e));t(i).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(s.x)<Math.abs(s.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))}),this)))},n.prototype.onDragMove=function(t){var e=null,i=null,s=null,n=this.difference(this._drag.pointer,this.pointer(t)),o=this.difference(this._drag.stage.start,n);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),i=this.coordinates(this.maximum()+1)-e,o.x=((o.x-e)%i+i)%i+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),i=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),s=this.settings.pullDrag?-1*n.x/5:0,o.x=Math.max(Math.min(o.x,e+s),i+s)),this._drag.stage.current=o,this.animate(o.x))},n.prototype.onDragEnd=function(e){var s=this.difference(this._drag.pointer,this.pointer(e)),n=this._drag.stage.current,o=s.x>0^this.settings.rtl?"left":"right";t(i).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==s.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(n.x,0!==s.x?o:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=o,(Math.abs(s.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",(function(){return!1}))),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},n.prototype.closest=function(e,i){var n=-1,o=this.width(),r=this.coordinates();return this.settings.freeDrag||t.each(r,t.proxy((function(t,a){return"left"===i&&e>a-30&&e<a+30?n=t:"right"===i&&e>a-o-30&&e<a-o+30?n=t+1:this.op(e,"<",a)&&this.op(e,">",r[t+1]!==s?r[t+1]:a-o)&&(n="left"===i?t+1:t),-1===n}),this)),this.settings.loop||(this.op(e,">",r[this.minimum()])?n=e=this.minimum():this.op(e,"<",r[this.maximum()])&&(n=e=this.maximum())),n},n.prototype.animate=function(e){var i=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),i&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):i?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},n.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},n.prototype.current=function(t){if(t===s)return this._current;if(0===this._items.length)return s;if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});e.data!==s&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},n.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,(function(t,e){return e}))},n.prototype.reset=function(t){(t=this.normalize(t))!==s&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},n.prototype.normalize=function(t,e){var i=this._items.length,n=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=s:(t<0||t>=i+n)&&(t=((t-n/2)%i+i)%i+n/2),t},n.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},n.prototype.maximum=function(t){var e,i,s,n=this.settings,o=this._coordinates.length;if(n.loop)o=this._clones.length/2+this._items.length-1;else if(n.autoWidth||n.merge){if(e=this._items.length)for(i=this._items[--e].width(),s=this.$element.width();e--&&!((i+=this._items[e].width()+this.settings.margin)>s););o=e+1}else o=n.center?this._items.length-1:this._items.length-n.items;return t&&(o-=this._clones.length/2),Math.max(o,0)},n.prototype.minimum=function(t){return t?0:this._clones.length/2},n.prototype.items=function(t){return t===s?this._items.slice():(t=this.normalize(t,!0),this._items[t])},n.prototype.mergers=function(t){return t===s?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},n.prototype.clones=function(e){var i=this._clones.length/2,n=i+this._items.length,o=function(t){return t%2==0?n+t/2:i-(t+1)/2};return e===s?t.map(this._clones,(function(t,e){return o(e)})):t.map(this._clones,(function(t,i){return t===e?o(i):null}))},n.prototype.speed=function(t){return t!==s&&(this._speed=t),this._speed},n.prototype.coordinates=function(e){var i,n=1,o=e-1;return e===s?t.map(this._coordinates,t.proxy((function(t,e){return this.coordinates(e)}),this)):(this.settings.center?(this.settings.rtl&&(n=-1,o=e+1),i=this._coordinates[e],i+=(this.width()-i+(this._coordinates[o]||0))/2*n):i=this._coordinates[o]||0,i=Math.ceil(i))},n.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},n.prototype.to=function(t,e){var i=this.current(),s=null,n=t-this.relative(i),o=(n>0)-(n<0),r=this._items.length,a=this.minimum(),h=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(n)>r/2&&(n+=-1*o*r),(s=(((t=i+n)-a)%r+r)%r+a)!==t&&s-n<=h&&s-n>0&&(i=s-n,t=s,this.reset(i))):t=this.settings.rewind?(t%(h+=1)+h)%h:Math.max(a,Math.min(h,t)),this.speed(this.duration(i,t,e)),this.current(t),this.isVisible()&&this.update()},n.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},n.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},n.prototype.onTransitionEnd=function(t){if(t!==s&&(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},n.prototype.viewport=function(){var s;return this.options.responsiveBaseElement!==e?s=t(this.options.responsiveBaseElement).width():e.innerWidth?s=e.innerWidth:i.documentElement&&i.documentElement.clientWidth?s=i.documentElement.clientWidth:console.warn("Can not detect viewport width."),s},n.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter((function(){return 1===this.nodeType})).each(t.proxy((function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)}),this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},n.prototype.add=function(e,i){var n=this.relative(this._current);i=i===s?this._items.length:this.normalize(i,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:i}),e=this.prepare(e),0===this._items.length||i===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[i-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[i].before(e),this._items.splice(i,0,e),this._mergers.splice(i,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[n]&&this.reset(this._items[n].index()),this.invalidate("items"),this.trigger("added",{content:e,position:i})},n.prototype.remove=function(t){(t=this.normalize(t,!0))!==s&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},n.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy((function(e,i){this.enter("pre-loading"),i=t(i),t(new Image).one("load",t.proxy((function(t){i.attr("src",t.target.src),i.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()}),this)).attr("src",i.attr("src")||i.attr("data-src")||i.attr("data-src-retina"))}),this))},n.prototype.destroy=function(){for(var s in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(i).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[s].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},n.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?t>i:t<i;case">":return s?t<i:t>i;case">=":return s?t<=i:t>=i;case"<=":return s?t>=i:t<=i}},n.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},n.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},n.prototype.trigger=function(e,i,s,o,r){var a={item:{count:this._items.length,index:this.current()}},h=t.camelCase(t.grep(["on",e,s],(function(t){return t})).join("-").toLowerCase()),l=t.Event([e,"owl",s||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,i));return this._supress[e]||(t.each(this._plugins,(function(t,e){e.onTrigger&&e.onTrigger(l)})),this.register({type:n.Type.Event,name:e}),this.$element.trigger(l),this.settings&&"function"==typeof this.settings[h]&&this.settings[h].call(this,l)),l},n.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy((function(t,e){this._states.current[e]===s&&(this._states.current[e]=0),this._states.current[e]++}),this))},n.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy((function(t,e){this._states.current[e]--}),this))},n.prototype.register=function(e){if(e.type===n.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var i=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!i||!i.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:i.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===n.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy((function(i,s){return t.inArray(i,this._states.tags[e.name])===s}),this)))},n.prototype.suppress=function(e){t.each(e,t.proxy((function(t,e){this._supress[e]=!0}),this))},n.prototype.release=function(e){t.each(e,t.proxy((function(t,e){delete this._supress[e]}),this))},n.prototype.pointer=function(t){var i={x:null,y:null};return(t=(t=t.originalEvent||t||e.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(i.x=t.pageX,i.y=t.pageY):(i.x=t.clientX,i.y=t.clientY),i},n.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},n.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each((function(){var s=t(this),o=s.data("owl.carousel");o||(o=new n(this,"object"==typeof e&&e),s.data("owl.carousel",o),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],(function(e,i){o.register({type:n.Type.Event,name:i}),o.$element.on(i+".owl.carousel.core",t.proxy((function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([i]),o[i].apply(this,[].slice.call(arguments,1)),this.release([i]))}),o))}))),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)}))},t.fn.owlCarousel.Constructor=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()}),this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={autoRefresh:!0,autoRefreshInterval:500},n.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},n.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},n.prototype.destroy=function(){var t,i;for(t in e.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy((function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type)){var i=this._core.settings,s=i.center&&Math.ceil(i.items/2)||i.items,n=i.center&&-1*s||0,o=(e.property&&undefined!==e.property.value?e.property.value:this._core.current())+n,r=this._core.clones().length,a=t.proxy((function(t,e){this.load(e)}),this);for(i.lazyLoadEager>0&&(s+=i.lazyLoadEager,i.loop&&(o-=i.lazyLoadEager,s++));n++<s;)this.load(r/2+this._core.relative(o)),r&&t.each(this._core.clones(this._core.relative(o)),a),o++}}),this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers)};n.Defaults={lazyLoad:!1,lazyLoadEager:0},n.prototype.load=function(i){var s=this._core.$stage.children().eq(i),n=s&&s.find(".owl-lazy");!n||t.inArray(s.get(0),this._loaded)>-1||(n.each(t.proxy((function(i,s){var n,o=t(s),r=e.devicePixelRatio>1&&o.attr("data-src-retina")||o.attr("data-src")||o.attr("data-srcset");this._core.trigger("load",{element:o,url:r},"lazy"),o.is("img")?o.one("load.owl.lazy",t.proxy((function(){o.css("opacity",1),this._core.trigger("loaded",{element:o,url:r},"lazy")}),this)).attr("src",r):o.is("source")?o.one("load.owl.lazy",t.proxy((function(){this._core.trigger("loaded",{element:o,url:r},"lazy")}),this)).attr("srcset",r):((n=new Image).onload=t.proxy((function(){o.css({"background-image":'url("'+r+'")',opacity:"1"}),this._core.trigger("loaded",{element:o,url:r},"lazy")}),this),n.src=r)}),this)),this._loaded.push(s.get(0)))},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(i){this._core=i,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.autoHeight&&this.update()}),this),"changed.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.autoHeight&&"position"===t.property.name&&this.update()}),this),"loaded.owl.lazy":t.proxy((function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()}),this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var s=this;t(e).on("load",(function(){s._core.settings.autoHeight&&s.update()})),t(e).resize((function(){s._core.settings.autoHeight&&(null!=s._intervalId&&clearTimeout(s._intervalId),s._intervalId=setTimeout((function(){s.update()}),250))}))};n.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},n.prototype.update=function(){var e=this._core._current,i=e+this._core.settings.items,s=this._core.settings.lazyLoad,n=this._core.$stage.children().toArray().slice(e,i),o=[],r=0;t.each(n,(function(e,i){o.push(t(i).height())})),(r=Math.max.apply(null,o))<=1&&s&&this._previousHeight&&(r=this._previousHeight),this._previousHeight=r,this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)},n.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy((function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})}),this),"resize.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()}),this),"refreshed.owl.carousel":t.proxy((function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()}),this),"changed.owl.carousel":t.proxy((function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()}),this),"prepared.owl.carousel":t.proxy((function(e){if(e.namespace){var i=t(e.content).find(".owl-video");i.length&&(i.css("display","none"),this.fetch(i,t(e.content)))}}),this)},this._core.options=t.extend({},n.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy((function(t){this.play(t)}),this))};n.Defaults={video:!1,videoHeight:!1,videoWidth:!1},n.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),n=t.attr("data-width")||this._core.settings.videoWidth,o=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if((s=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")>-1)i="youtube";else if(s[3].indexOf("vimeo")>-1)i="vimeo";else{if(!(s[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[r]={type:i,id:s,width:n,height:o},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},n.prototype.thumbnail=function(e,i){var s,n,o=i.width&&i.height?"width:"+i.width+"px;height:"+i.height+"px;":"",r=e.find("img"),a="src",h="",l=this._core.settings,c=function(i){'<div class="owl-video-play-icon"></div>',s=l.lazyLoad?t("<div/>",{class:"owl-video-tn "+h,srcType:i}):t("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+i+")"}),e.after(s),e.after('<div class="owl-video-play-icon"></div>')};if(e.wrap(t("<div/>",{class:"owl-video-wrapper",style:o})),this._core.settings.lazyLoad&&(a="data-src",h="owl-lazy"),r.length)return c(r.attr(a)),r.remove(),!1;"youtube"===i.type?(n="//img.youtube.com/vi/"+i.id+"/hqdefault.jpg",c(n)):"vimeo"===i.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t[0].thumbnail_large,c(n)}}):"vzaar"===i.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+i.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){n=t.framegrab_url,c(n)}})},n.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},n.prototype.play=function(e){var i,s=t(e.target).closest("."+this._core.settings.itemClass),n=this._videos[s.attr("data-video")],o=n.width||"100%",r=n.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),s=this._core.items(this._core.relative(s.index())),this._core.reset(s.index()),(i=t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height",r),i.attr("width",o),"youtube"===n.type?i.attr("src","//www.youtube.com/embed/"+n.id+"?autoplay=1&rel=0&v="+n.id):"vimeo"===n.type?i.attr("src","//player.vimeo.com/video/"+n.id+"?autoplay=1"):"vzaar"===n.type&&i.attr("src","//view.vzaar.com/"+n.id+"/player?autoplay=true"),t(i).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")),this._playing=s.addClass("owl-video-playing"))},n.prototype.isInFullScreen=function(){var e=i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},n.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this.core=e,this.core.options=t.extend({},n.Defaults,this.core.options),this.swapping=!0,this.previous=s,this.next=s,this.handlers={"change.owl.carousel":t.proxy((function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)}),this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy((function(t){t.namespace&&(this.swapping="translated"==t.type)}),this),"translate.owl.carousel":t.proxy((function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()}),this)},this.core.$element.on(this.handlers)};n.Defaults={animateOut:!1,animateIn:!1},n.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,i=t.proxy(this.clear,this),s=this.core.$stage.children().eq(this.previous),n=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),s.one(t.support.animation.end,i).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),o&&n.one(t.support.animation.end,i).addClass("animated owl-animated-in").addClass(o))}},n.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},n.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=function(e){this._core=e,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":t.proxy((function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._paused&&(this._time=0)}),this),"initialized.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.autoplay&&this.play()}),this),"play.owl.autoplay":t.proxy((function(t,e,i){t.namespace&&this.play(e,i)}),this),"stop.owl.autoplay":t.proxy((function(t){t.namespace&&this.stop()}),this),"mouseover.owl.autoplay":t.proxy((function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()}),this),"mouseleave.owl.autoplay":t.proxy((function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()}),this),"touchstart.owl.core":t.proxy((function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()}),this),"touchend.owl.core":t.proxy((function(){this._core.settings.autoplayHoverPause&&this.play()}),this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},n.Defaults,this._core.options)};n.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},n.prototype._next=function(s){this._call=e.setTimeout(t.proxy(this._next,this,s),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||i.hidden||this._core.next(s||this._core.settings.autoplaySpeed)},n.prototype.read=function(){return(new Date).getTime()-this._time},n.prototype.play=function(i,s){var n;this._core.is("rotating")||this._core.enter("rotating"),i=i||this._core.settings.autoplayTimeout,n=Math.min(this._time%(this._timeout||i),i),this._paused?(this._time=this.read(),this._paused=!1):e.clearTimeout(this._call),this._time+=this.read()%i-n,this._timeout=i,this._call=e.setTimeout(t.proxy(this._next,this,s),i-n)},n.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,e.clearTimeout(this._call),this._core.leave("rotating"))},n.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,e.clearTimeout(this._call))},n.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy((function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")}),this),"added.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())}),this),"remove.owl.carousel":t.proxy((function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)}),this),"changed.owl.carousel":t.proxy((function(t){t.namespace&&"position"==t.property.name&&this.draw()}),this),"initialized.owl.carousel":t.proxy((function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))}),this),"refreshed.owl.carousel":t.proxy((function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))}),this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers)};n.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},n.prototype.initialize=function(){var e,i=this._core.settings;for(e in this._controls.$relative=(i.navContainer?t(i.navContainer):t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy((function(t){this.prev(i.navSpeed)}),this)),this._controls.$next=t("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy((function(t){this.next(i.navSpeed)}),this)),i.dotsData||(this._templates=[t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?t(i.dotsContainer):t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",t.proxy((function(e){var s=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(s,i.dotsSpeed)}),this)),this._overrides)this._core[e]=t.proxy(this[e],this)},n.prototype.destroy=function(){var t,e,i,s,n;for(t in n=this._core.settings,this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)"$relative"===e&&n.navContainer?this._controls[e].html(""):this._controls[e].remove();for(s in this.overides)this._core[s]=this._overrides[s];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},n.prototype.update=function(){var t,e,i=this._core.clones().length/2,s=i+this._core.items().length,n=this._core.maximum(!0),o=this._core.settings,r=o.center||o.autoWidth||o.dotsData?1:o.dotsEach||o.items;if("page"!==o.slideBy&&(o.slideBy=Math.min(o.slideBy,o.items)),o.dots||"page"==o.slideBy)for(this._pages=[],t=i,e=0,0;t<s;t++){if(e>=r||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+r-1}),Math.min(n,t-i)===n)break;e=0}e+=this._core.mergers(this._core.relative(t))}},n.prototype.draw=function(){var e,i=this._core.settings,s=this._core.items().length<=i.items,n=this._core.relative(this._core.current()),o=i.loop||i.rewind;this._controls.$relative.toggleClass("disabled",!i.nav||s),i.nav&&(this._controls.$previous.toggleClass("disabled",!o&&n<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&n>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!i.dots||s),i.dots&&(e=this._pages.length-this._controls.$absolute.children().length,i.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},n.prototype.onTrigger=function(e){var i=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:i&&(i.center||i.autoWidth||i.dotsData?1:i.dotsEach||i.items)}},n.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy((function(t,i){return t.start<=e&&t.end>=e}),this)).pop()},n.prototype.getPosition=function(e){var i,s,n=this._core.settings;return"page"==n.slideBy?(i=t.inArray(this.current(),this._pages),s=this._pages.length,e?++i:--i,i=this._pages[(i%s+s)%s].start):(i=this._core.relative(this._core.current()),s=this._core.items().length,e?i+=n.slideBy:i-=n.slideBy),i},n.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},n.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},n.prototype.to=function(e,i,s){var n;!s&&this._pages.length?(n=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%n+n)%n].start,i)):t.proxy(this._overrides.to,this._core)(e,i)},t.fn.owlCarousel.Constructor.Plugins.Navigation=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){"use strict";var n=function(i){this._core=i,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy((function(i){i.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")}),this),"prepared.owl.carousel":t.proxy((function(e){if(e.namespace){var i=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!i)return;this._hashes[i]=e.content}}),this),"changed.owl.carousel":t.proxy((function(i){if(i.namespace&&"position"===i.property.name){var s=this._core.items(this._core.relative(this._core.current())),n=t.map(this._hashes,(function(t,e){return t===s?e:null})).join();if(!n||e.location.hash.slice(1)===n)return;e.location.hash=n}}),this)},this._core.options=t.extend({},n.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy((function(t){var i=e.location.hash.substring(1),s=this._core.$stage.children(),n=this._hashes[i]&&s.index(this._hashes[i]);undefined!==n&&n!==this._core.current()&&this._core.to(this._core.relative(n),!1,!0)}),this))};n.Defaults={URLhashListener:!1},n.prototype.destroy=function(){var i,s;for(i in t(e).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(i,this._handlers[i]);for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=n}(window.Zepto||window.jQuery,window,document),function(t,e,i,s){var n=t("<support>").get(0).style,o="Webkit Moz O ms".split(" "),r={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},a=function(){return!!c("transform")},h=function(){return!!c("perspective")},l=function(){return!!c("animation")};function c(e,i){var r=!1,a=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+o.join(a+" ")+a).split(" "),(function(t,e){if(n[e]!==s)return r=!i||e,!1})),r}function p(t){return c(t,!0)}(function(){return!!c("transition")})()&&(t.support.transition=new String(p("transition")),t.support.transition.end=r.transition.end[t.support.transition]),l()&&(t.support.animation=new String(p("animation")),t.support.animation.end=r.animation.end[t.support.animation]),a()&&(t.support.transform=new String(p("transform")),t.support.transform3d=h())}(window.Zepto||window.jQuery,window,document);
/*]]>*/
</b:if>  
<b:if cond='data:view.isPost'>
/*<![CDATA[*/
$(document).ready(function ($) {
$('.navpost').each(function () {
		$(".prev .nav-inner span").text(postnavPrevText);
		$(".prev .nav-inner p").text(navPrevMsg);
		$(".next .nav-inner span").text(postnavNextText);
		$(".next .nav-inner p").text(navNextMsg);
		var getURL_prev = $("a.prev-post").attr("href"),
		getURL_next = $("a.next-post").attr("href");
		$.ajax({
			url: getURL_prev,
			type: "get",
			success: function (prev) {
				var title = $(prev).find(".bPst h1.post-title").text();
				var txt = postnavPrevText;
				var code = "";
				var thumb = $(prev).find(".post-body img:first").attr("src");
				if (thumb === undefined) {
					var thumb = noIMG
				}
				code += "<div class='tHimage'><div class='tHimg'><img class='lazyload' alt='" + title + "' title='" + title + "' src='" + thumb + "' width='" + wSize + "' height='" + hSize + "'/></div></div><div class='pgcontent'><span>" + txt + "</span><strong>" + title + "</strong></div>";
				$("a.prev-post").html(code)
			}
		});
		$.ajax({
			url: getURL_next,
			type: "get",
			success: function (next) {
				var title = $(next).find(".bPst h1.post-title").text();
				var txt = postnavNextText;
				var code = "";
				var thumb = $(next).find(".post-body img:first").attr("src");
				if (thumb === undefined) {
					var thumb = noIMG
				}
				code += "<div class='tHimage'><div class='tHimg'><img class='lazyload' alt='" + title + "' title='" + title + "' src='" + thumb + "' width='" + wSize + "' height='" + hSize + "'/></div></div><div class='pgcontent'><span>" + txt + "</span><strong>" + title + "</strong></div>";
				$("a.next-post").html(code)
			}
		})
	})
});

 //related post
    $("#relPSt").each(function() {
        var v = $(this).text();
        $.ajax({
            url: "/feeds/posts/default/-/" + v + "?alt=json-in-script&max-results=" + jrelated,
            type: 'get',
            dataType: "jsonp",
            success: function(e) {
                var u = "";
                var h = '<ol class="relWr">';
                for (var i = 0; i < e.feed.entry.length; i++) {
                    for (var j = 0; j < e.feed.entry[i].link.length; j++) {
                        if (e.feed.entry[i].link[j].rel == "alternate") {
                            u = e.feed.entry[i].link[j].href;
                            break
                        }
                    }
                    var g = e.feed.entry[i].title.$t;
                    var s = e.feed.entry[i].category[0].term;
                    var y = e.feed.entry[i].author[0].name.$t;
					var wi = e.feed.entry[i].author[0].gd$image.src;
                    var c = e.feed.entry[i].content.$t;
                    var $c = $('<div>').html(c);
                    var d = e.feed.entry[i].published.$t, 
						t = d.substring(0, 4), 
						w = d.substring(5, 7),
 						f = d.substring(8, 10),
 						r = mNTH[parseInt(w, 10)] + ' ' + f + ', ' + t;
                    if (c.indexOf("//www.youtube.com/embed/") > -1) {
                        var p = e.feed.entry[i].media$thumbnail.url.replace('/default.jpg', '/maxresdefault.jpg').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + hSize + '');
                        var k = p
                    } else if (c.indexOf("<img") > -1) {
                        var q = $c.find('img:first').attr('src').replace(/s72-(c|.*?-c)/, 'w' + wSize + '-h' + hSize + '');
                        var k = q
                    } else {
                        var k = noIMG
                    }
                    h += '<li><div class="tHimage"><div class="tHimg"><a href="' + u + '" title="' + g + '"><img class="lazyload" data-sizes="auto" alt="' + g + '" data-src="' + k + '" src="' + imglazy + '" title="' + g + '" width="' + wSize + '" height="' + hSize + '" title="' + g + '"/></a></div></div><div class="psTinF f"><h4 class="rect-title"><a href="' + u + '" title="' + g + '">' + g + '</a></h4><div class="rect-meta"><div class="f"><span class="min">' + y + '</span><span class="tg">' + r + '</span></div></div></div>'
                }
                h += '</ol>';
                $("#relPSt").html(h)
            }
        })
    });
  //option ads
! function() {
    var e = document.querySelector(".post-body"),
        n = e.querySelectorAll("div > br, span > br, div > p, span > p"),
        t = Math.ceil(.2 * n.length),
        l = Math.ceil(.5 * n.length),
        o = document.querySelector("#Middle-Ad-Slot1 .widget-content"),
        d = document.querySelector("#relhead"),
        r = document.querySelector("#top-Ad-Slots .widget-content"),
        i = document.querySelector("#Ad-Slots-below .widget-content"),
        c = document.getElementById("adsone"),
        u = document.getElementById("adstwo");

    function a(e, n) {
        n.parentNode.insertBefore(e, n.nextSibling)
    }
    null != r && "\n" != r.innerHTML && e.insertBefore(r, e.childNodes[0]), null != i && "\n" != i.innerHTML && e.appendChild(i), 0 < n.length ? (null != o && "\n" != o.innerHTML && a(o, null !== c ? c : n[t]), null != d && "\n" != d.innerHTML && a(d, null !== u ? u : n[l])) : (o.parentNode.removeChild(o), d.parentNode.removeChild(d))
}();

// var contentContainer = document.querySelectorAll(".post-body")[0].id = "toc-container";
var contentContainer = document.querySelectorAll(".post-body")[0];
const dataTracking = contentContainer.setAttribute("data-tracking-container", "true");
var headings = contentContainer.querySelectorAll("h1,h2,h3,h4,h5,h6");
var showtoc = contentContainer.querySelectorAll(".post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6");
if (headings.length > 3) {
for (i = 0; i <= showtoc.length - 1; i++) {
var tocauto = showtoc[i];  
tocauto.insertAdjacentHTML('beforebegin','<div class="toc-auto"><input id="toc-sh" type="checkbox"><label class="toc-title" for="toc-sh">'+textTbl+'</label><div class="toc" id="toc"></div></div>');
tocatr = document.querySelectorAll(".toc-auto")[0];
tocatr.setAttribute('data-tracking-container', 'true');
var toptoc = document.querySelectorAll(".toc-auto");
[].filter.call(toptoc, function(tocselection) {
    return ![].some.call(tocselection.attributes, function(attr) {
        return /^data-tracking-container/i.test(attr.name);
    });
}).forEach(function(tocselection) {
    tocselection.parentNode.removeChild(tocselection);
});};}
class TableOfContents {
    constructor({ from, to }) {
        this.fromElement = from;
        this.toElement = to;
        // Get all the ordered headings.
        this.headingElements = this.fromElement.querySelectorAll("h1, h2, h3, h4, h5, h6");
        this.tocElement = document.createElement("div");
    }
    getMostImportantHeadingLevel() {
        let mostImportantHeadingLevel = 6;
        for (let i = 0; i < this.headingElements.length; i++) {
            let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]);
            mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ?
                headingLevel : mostImportantHeadingLevel;
        }
        return mostImportantHeadingLevel;
    }
    static generateId(headingElement) {
        return headingElement.textContent.toLowerCase().replace(/ /g,"_").replace(/\//g,"_").replace(/&lt;/g,"").replace(/&gt;/g,"").replace(/&amp;/g,"").replace(/&amp;nbsp;/g,"").replace(/&nbsp;/g,"").replace(/\xA0/g,"").replace(/[\n\r\f]+/g, "").replace(/[.,\#!$%\^&\*;:{}=\-@`~()<>?"'“+”]/g,"");
    }
    static getHeadingLevel(headingElement) {
        switch (headingElement.tagName.toLowerCase()) {
            case "h1": return 1;
            case "h2": return 2;
            case "h3": return 3;
            case "h4": return 4;
            case "h5": return 5;
            case "h6": return 6;
            default: return 1;
        }
    }

    generateToc() {
        let currentLevel = this.getMostImportantHeadingLevel() - 1,
            currentElement = this.tocElement;

        for (let i = 0; i < this.headingElements.length; i++) {
            let headingElement = this.headingElements[i],
                headingLevel = TableOfContents.getHeadingLevel(headingElement),
                headingLevelDifference = headingLevel - currentLevel,
                linkElement = document.createElement("a");

            if (!headingElement.id) {
                headingElement.id = TableOfContents.generateId(headingElement);
            }
            linkElement.href = `#${headingElement.id}`;
            linkElement.textContent = headingElement.textContent;

            if (headingLevelDifference > 0) {
                for (let j = 0; j < headingLevelDifference; j++) {
                    let listElement = document.createElement("ul"),
                        listItemElement = document.createElement("li");
                    listElement.appendChild(listItemElement);
                    currentElement.appendChild(listElement);
                    currentElement = listItemElement;
                }
                currentElement.appendChild(linkElement);
            } else {
                for (let j = 0; j < -headingLevelDifference; j++) {
                    currentElement = currentElement.parentNode.parentNode;
                }
                let listItemElement = document.createElement("li");
                listItemElement.appendChild(linkElement);
                currentElement.parentNode.appendChild(listItemElement);
                currentElement = listItemElement;
            }

            currentLevel = headingLevel;
        }

        this.toElement.appendChild(this.tocElement.firstChild);
    }
}
document.addEventListener("DOMContentLoaded", () =>
    new TableOfContents({
        from: document.querySelector(".post-body"),
        to: document.querySelector(".toc")
    }).generateToc()
);


(function() {
  $('.toggle-wrap').on('click', function() {
    $(this).toggleClass('active');
    $('.aside').animate({width: 'toggle'}, 200);
  });
})();

$(function(){ // document ready
   if ($('.postFlex .post-share').length) {
      var el = $('.postFlex .post-share');
      var stickyTop = $('.postFlex .post-share').offset().top;
      var stickyHeight = $('.postFlex .post-share').height();

      $(window).scroll(function(){
          var limit = $('.navpost').offset().top - stickyHeight - 10;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: 90});
          }
          else {
             el.css('position','static');
          }

          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          }
        });
   }
});


 $(".fontSize input").on("input", function () {
        $('.post-content').css("font-size", $(this).val() + "px");
    });

    const
        range = document.getElementById('range'),
        setValue = ()=>{
            const
                newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
                newPosition = 16 - (newValue * 0.32);
        };
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);
/*]]>*/
</b:if>
<b:if cond='data:view.isMultipleItems'>
/*<![CDATA[*/
var postResults=postPerPage;
var numOfPages=2;
var pageOf=["Page", "of"];
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 K;5 m;5 l;5 w;5 s=1p.9;5 y="/";1d();G 1b(a){5 b=\'\';J=M(W/2);4(J==W-J){W=J*2+1}D=l-J;4(D<1)D=1;j=M(a/n)+1;4(j-1==a/n)j=j-1;E=D+W-1;4(E>j)E=j;b+=\'<C 6="3-1u">\'+17[0]+\' \'+l+\' \'+17[1]+\' \'+j+\'</C>\';5 c=M(l)-1;4(l>1){4(l==2){4(m==\'3\'){b+=\'<a 6="3-7 3-U" 9="\'+y+\'"></a>\'}h{b+=\'<a 6="3-7 3-U" 9="/v/u/\'+w+\'?&i-o=\'+n+\'"></a>\'}}h{4(m==\'3\'){b+=\'<a 6="3-7 3-U" 9="#" z="L(\'+c+\');B x"></a>\'}h{b+=\'<a 6="3-7 3-U" 9="#" z="I(\'+c+\');B x"></a>\'}}}4(D>1){4(m=="3"){b+=\'<a 6="3-7" 9="\'+y+\'">1</a>\'}h{b+=\'<a 6="3-7" 9="/v/u/\'+w+\'?&i-o=\'+n+\'">1</a>\'}}4(D>2){b+=\'<C 6="3-7 3-16">...</C>\'}1a(5 d=D;d<=E;d++){4(l==d){b+=\'<C 6="3-7 3-1v">\'+d+\'</C>\'}h 4(d==1){4(m==\'3\'){b+=\'<a 6="3-7" 9="\'+y+\'">1</a>\'}h{b+=\'<a 6="3-7" 9="/v/u/\'+w+\'?&i-o=\'+n+\'">1</a>\'}}h{4(m==\'3\'){b+=\'<a 6="3-7" 9="#" z="L(\'+d+\');B x">\'+d+\'</a>\'}h{b+=\'<a 6="3-7" 9="#" z="I(\'+d+\');B x">\'+d+\'</a>\'}}}4(E<j-1){b+=\'<C 6="3-7 3-16">...</C>\'}4(E<j){4(m=="3"){b+=\'<a 6="3-7" 9="#" z="L(\'+j+\');B x">\'+j+\'</a>\'}h{b+=\'<a 6="3-7" 9="#" z="I(\'+j+\');B x">\'+j+\'</a>\'}}5 e=M(l)+1;4(l<j){4(m==\'3\'){b+=\'<a 6="3-7 3-15" 9="#" z="L(\'+e+\');B x"></a>\'}h{b+=\'<a 6="3-7 3-15" 9="#" z="I(\'+e+\');B x"></a>\'}}b+=\'\';5 f=A.1s(\'1t\');5 g=A.1r(\'1A-1D\');1a(5 p=0;p<f.O;p++){f[p].1c=b}4(f&&f.O>0){b=\'\'}4(g){g.1c=b}}G 12(a){5 b=a.1f;5 c=M(b.1E$1B.$t,10);1b(c)}G 1d(){5 a=s;4(a.k(\'/v/u/\')!=-1){4(a.k(\'?T-i\')!=-1){w=a.H(a.k(\'/v/u/\')+14,a.k(\'?T-i\'))}h{w=a.H(a.k(\'/v/u/\')+14,a.k(\'?&i\'))}}4(a.k(\'?q=\')==-1&&a.k(\'.1C\')==-1){4(a.k(\'/v/u/\')==-1){m=\'3\';4(s.k(\'#F=\')!=-1){l=s.H(s.k(\'#F=\')+8,s.O)}h{l=1}A.18(\'<r Q=\\\'\'+y+\'P/R/N?i-o=1&X=Y-S-r&V=12\\\'><\\/r>\')}h{m=\'u\';4(a.k(\'&i-o=\')==-1){n=1F}4(s.k(\'#F=\')!=-1){l=s.H(s.k(\'#F=\')+8,s.O)}h{l=1}A.18(\'<r Q="\'+y+\'P/R/N/-/\'+w+\'?X=Y-S-r&V=12&i-o=1" ><\\/r>\')}}}G L(a){Z=(a-1)*n;K=a;5 b=A.1h(\'1q\')[0];5 c=A.1o(\'r\');c.1e=\'1m/1n\';c.1i(\'Q\',y+\'P/R/N?1j-1k=\'+Z+\'&i-o=1&X=Y-S-r&V=13\');b.1l(c)}G I(a){Z=(a-1)*n;K=a;5 b=A.1h(\'1q\')[0];5 c=A.1o(\'r\');c.1e=\'1m/1n\';c.1i(\'Q\',y+\'P/R/N/-/\'+w+\'?1j-1k=\'+Z+\'&i-o=1&X=Y-S-r&V=13\');b.1l(c)}G 13(a){11=a.1f.1x[0];5 b=11.1g.$t.H(0,19)+11.1g.$t.H(1z,1w);5 c=1y(b);4(m==\'3\'){5 d=\'/v?T-i=\'+c+\'&i-o=\'+n+\'#F=\'+K}h{5 d=\'/v/u/\'+w+\'?T-i=\'+c+\'&i-o=\'+n+\'#F=\'+K}1p.9=d}',62,104,'|||page|if|var|class|num||href||||||||else|max|lastPageNo|indexOf|currentPageNo|currentPage|postResults|results|||script|locationUrl||label|search|postLabel|false|home_page|onclick|document|return|span|pageStart|pageEnd|PageNo|function|substring|getLabelPage|pageNumber|noPage|getPage|parseInt|summary|length|feeds|src|posts|in|updated|prev|callback|numOfPages|alt|json|jsonstart||post|dataFeed|findPostDate||next|dots|pageOf|write||for|startPagination|innerHTML|pageCurrentBlogger|type|feed|published|getElementsByTagName|setAttribute|start|index|appendChild|text|javascript|createElement|location|head|getElementById|getElementsByName|pageArea|of|active|29|entry|encodeURIComponent|23|blog|totalResults|html|pager|openSearch|20'.split('|'),0,{}))
/*]]>*/
</b:if>
