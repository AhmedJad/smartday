(self["webpackChunk"] = self["webpackChunk"] || []).push([["public_vendors_scripts_script_min_js"],{

/***/ "./public/vendors/scripts/script.min.js":
/*!**********************************************!*\
  !*** ./public/vendors/scripts/script.min.js ***!
  \**********************************************/
/***/ (() => {

function CopyToClipboard(e, t, o) {
  var n = $("<input>");

  if ("" != e) {
    n = $("<input>");
    $("body").append(n), n.val(e).select(), document.execCommand("copy"), n.remove();
  }

  void 0 === t && (t = !0), void 0 === o && (o = "Copied to clipboard");
  var a = $("div.copy-notification");
  t && 0 == a.length && (a = $("<div/>", {
    "class": "copy-notification",
    text: o
  }), $("body").append(a), a.fadeIn("slow", function () {
    setTimeout(function () {
      a.fadeOut("slow", function () {
        a.remove();
      });
    }, 1e3);
  }));
}

jQuery(window).on("load", function () {
  "use strict";

  $(".textarea_editor").wysihtml5({
    html: !0
  });
}), jQuery(window).on("load resize", function () {
  $(".customscroll").mCustomScrollbar({
    theme: "dark-2",
    scrollInertia: 300,
    autoExpandScrollbar: !0,
    advanced: {
      autoExpandHorizontalScroll: !0
    }
  });
}), jQuery(document).ready(function () {
  "use strict";

  jQuery(".bg_img").each(function (e, t) {
    var o = jQuery(t);
    jQuery(this).hide(), jQuery(this).parent().css({
      background: "url(" + o.attr("src") + ") no-repeat center center"
    });
  }), jQuery("img.svg").each(function () {
    var o = jQuery(this),
        n = o.attr("id"),
        a = o.attr("class"),
        e = o.attr("src");
    jQuery.get(e, function (e) {
      var t = jQuery(e).find("svg");
      void 0 !== n && (t = t.attr("id", n)), void 0 !== a && (t = t.attr("class", a + " replaced-svg")), !(t = t.removeAttr("xmlns:a")).attr("viewBox") && t.attr("height") && t.attr("width") && t.attr("viewBox", "0 0 " + t.attr("height") + " " + t.attr("width")), o.replaceWith(t);
    }, "xml");
  });
  var i = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
  };
  window.onload = function () {
    var e = document.querySelectorAll("pre code");

    if (e.length) {
      for (var t = 0, o = e.length; t < o; t++) {
        var n = e[t],
            a = n.innerHTML;
        a = String(a).replace(/[&<>"'\/]/g, function (e) {
          return i[e];
        }), n.innerHTML = a;
      }

      $("pre code").each(function (e, t) {
        hljs.highlightBlock(t);
      });
    }
  }, $("#filter_input").on("keyup", function () {
    var e = $(this).val().toLowerCase();
    $("#filter_list .fa-hover").filter(function () {
      $(this).toggle(-1 < $(this).text().toLowerCase().indexOf(e));
    });
  }), $(".custom-select2").select2(), $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover(), $(".form-control").on("focus", function () {
    $(this).parent().addClass("focus");
  }), $(".form-control").on("focusout", function () {
    $(this).parent().removeClass("focus");
  }), $('.menu-icon, [data-toggle="left-sidebar-close"]').on("click", function () {
    $(".left-side-bar").toggleClass("open"), $(".mobile-menu-overlay").toggleClass("show");
  }), $('[data-toggle="header_search"]').on("click", function () {
    jQuery(".header-search").slideToggle();
  });
  $(window).width();
  $(document).on("touchstart click", function (e) {
    0 != $(e.target).parents(".left-side-bar").length || $(e.target).is(".menu-icon, .menu-icon img") || ($(".left-side-bar").removeClass("open"), $(".menu-icon").removeClass("open"), $(".mobile-menu-overlay").removeClass("show"));
  }), $(window).on("resize", function () {
    $(window).width();
    1200 < $(window).width() && ($(".left-side-bar").removeClass("open"), $(".menu-icon").removeClass("open"), $(".mobile-menu-overlay").removeClass("show"));
  }), $("#accordion-menu").each(function () {
    var e = window.location.href.split("/").pop();
    $(this).find('a[href="' + e + '"]').addClass("active");
  }), $(".fa-hover").click(function (e) {
    e.preventDefault(), CopyToClipboard($(this).find(".icon-copy").first().prop("outerHTML"), !0, "Copied");
  }), new ClipboardJS(".code-copy").on("success", function (e) {
    CopyToClipboard("", !0, "Copied"), e.clearSelection();
  }), $(".date-picker").datepicker({
    language: "en",
    autoClose: !0,
    dateFormat: "dd MM yyyy"
  }), $(".datetimepicker").datepicker({
    timepicker: !0,
    language: "en",
    autoClose: !0,
    dateFormat: "dd MM yyyy"
  }), $(".datetimepicker-range").datepicker({
    language: "en",
    range: !0,
    multipleDates: !0,
    multipleDatesSeparator: " - "
  }), $(".month-picker").datepicker({
    language: "en",
    minView: "months",
    view: "months",
    autoClose: !0,
    dateFormat: "MM yyyy"
  }), $(".time-picker").timeDropper({
    mousewheel: !0,
    meridians: !0,
    init_animation: "dropdown",
    setCurrentTime: !1
  }), $(".time-picker-default").timeDropper(), $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  }), $("[data-bgcolor]").each(function () {
    $(this).css("background-color", $(this).attr("data-bgcolor"));
  }), $("[data-border]").each(function () {
    $(this).css("border", $(this).attr("data-border"));
  }), $("#accordion-menu").vmenuModule({
    Speed: 400,
    autostart: !1,
    autohide: !0
  });
}), function (a) {
  a.fn.vmenuModule = function (e) {
    var t,
        o,
        n = a.extend({
      Speed: 220,
      autostart: !0,
      autohide: 1
    }, e);
    (o = (t = a(this)).find("ul").parent("li").children("a")).attr("data-option", "off"), o.unbind("click").on("click", function () {
      var e = a(this);
      n.autohide && e.parent().parent().find("a[data-option='on']").parent("li").children("ul").slideUp(n.Speed / 1.2, function () {
        a(this).parent("li").children("a").attr("data-option", "off"), a(this).parent("li").removeClass("show");
      }), "off" == e.attr("data-option") && e.parent("li").children("ul").slideDown(n.Speed, function () {
        e.attr("data-option", "on"), e.parent("li").addClass("show");
      }), "on" == e.attr("data-option") && (e.attr("data-option", "off"), e.parent("li").children("ul").slideUp(n.Speed), e.parent("li").removeClass("show"));
    }), n.autostart ? t.find("a").each(function () {
      a(this).parent("li").parent("ul").slideDown(n.Speed, function () {
        a(this).parent("li").children("a").attr("data-option", "on");
      });
    }) : t.find("a.active").each(function () {
      a(this).parent("li").parent("ul").slideDown(n.Speed, function () {
        a(this).parent("li").children("a").attr("data-option", "on"), a(this).parent("li").addClass("show");
      });
    });
  };
}(window.jQuery || window.Zepto), function () {
  var e = window.navigator.userAgent,
      t = e.indexOf("MSIE ");

  if (0 < t) {
    parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
    document.querySelector("body").className += " IE";
  }

  if (0 < e.indexOf("Trident/")) {
    var o = e.indexOf("rv:");
    parseInt(e.substring(o + 3, e.indexOf(".", o)), 10);
    document.querySelector("body").className += " IE";
  }
}();

/***/ })

}]);