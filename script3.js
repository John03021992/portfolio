// Scroll to top home

$(function () {
  $("a[href*='#top']:not([href='#'])").click(function () {
    if (
      location.hostname == this.hostname &&
      this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
    ) {
      var t = $(this.hash);
      (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length &&
        $("html, body").animate({ scrollTop: t.offset().top }, 1500);
    }
  });
});
