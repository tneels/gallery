'use strict';

// SLICK SLIDER
// $('.slick-slider').slick({
// 	dots: true,
// 	infinite: true,
// 	speed: 300
// 	// prevArrow: '<span class="icon-arrow-left"></span>',
// 	// nextArrow: '<span class="icon-arrow-right"></span>'
// });


$('.Gallery-slickFor').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.Gallery-slickNav',
	responsive: [{
		breakpoint: 640,
		settings: {
			arrows: false,
			dots: true
		}
	}]
});

$('.Gallery-slickNav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.Gallery-slickFor',
	dots: true,
	centerMode: true,
	focusOnSelect: true,
	arrows: true,
	fade: true,
	adaptiveHeight: true,
	appendArrows: $('.Gallery'),
	prevArrow: '<div class="glyph fs1 Gallery-arrow Gallery-prevArrow"><div class="clearfix pbs"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></div></div>',
	nextArrow: '<div class="glyph fs1 Gallery-arrow Gallery-nextArrow"><div class="clearfix pbs"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></div></div>',
	responsive: [{
		breakpoint: 640,
		settings: {
			arrows: false,
			dots: false
		}
	}]
});
/* https://www.filamentgroup.com/lab/font-events.html */
// (function(){
//     // if the class is already set, we're good.
//     if( document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
//         return;
//     }
//     let fontA = new FontFaceObserver( "Lato", {
//         weight: 300
//     });
//     let fontB = new FontFaceObserver( "Lato", {
//         weight: 400
//     });
//     let fontC = new FontFaceObserver( "Lato", {
//         weight: 700
//     });
//     Promise
//         .all([fontA.load(), fontB.load(), fontC.load()])
//         .then(function(){
//             document.documentElement.className += " fonts-loaded";
//         });
// }( this ));
"use strict";
"use strict";

// Want to know if we click in or out of the menu
function hasParent(e, id) {
    if (!e) return false;
    var el = e.target || e.srcElement || e || false;
    while (el && el.id != id) {
        el = el.parentNode || false;
    }
    return el !== false;
}

function mobilecheck() {
    var check = false;
    (function (a) {
        if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);window.addEventListener("orientationchange", d, !1);if (window.MutationObserver) {
        var k = new MutationObserver(d);k.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 });m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);window.removeEventListener("resize", d, !1);window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var b = a;else b = document.createElement("a"), b.href = a;return b.protocol.replace(/:/g, "") + b.host;
      }if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();var m = e(location);k = e(k);d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }return d;
    };var n = function n() {
      function d() {
        --q;0 === q && (m(), t());
      }function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");a.onload = null;b.innerHTML = a.responseText;if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);d();
        };
      }function n(a) {
        return function () {
          a.onerror = null;a.ontimeout = null;d();
        };
      }var a,
          b,
          q = 0;m();var f = document.getElementsByTagName("use");for (b = 0; b < f.length; b += 1) {
        try {
          var h = f[b].getBoundingClientRect();
        } catch (w) {
          h = !1;
        }var g = (a = f[b].getAttribute("href") || f[b].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[b].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];var c = g[0];g = g[1];var r = h && 0 === h.left && 0 === h.right && 0 === h.top && 0 === h.bottom;h && 0 === h.width && 0 === h.height && !r ? (c.length || !g || document.getElementById(g) || (c = ""), f[b].hasAttribute("href") && f[b].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), c.length && (a = e[c], !0 !== a && setTimeout(l({ useEl: f[b], base: c, hash: g }), 0), void 0 === a && (g = u(c), void 0 !== g && (a = new g(), e[c] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", c), a.send(), q += 1)))) : r ? c.length && e[c] && setTimeout(l({ useEl: f[b], base: c,
          hash: g }), 0) : void 0 === e[c] ? e[c] = !0 : e[c].onload && (e[c].abort(), delete e[c].onload, e[c] = !0);
      }f = "";q += 1;d();
    };var p = function p() {
      window.removeEventListener("load", p, !1);l = setTimeout(n, 0);
    };"complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();
//# sourceMappingURL=scripts.js.map
