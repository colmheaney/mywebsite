var Site = {
  init : function() {
    this.nav();
  },
  nav : function() {
      $('.selected').removeClass('selected');
      li = $('nav li[name="'+ window.location.pathname +'"]');
      li.addClass('selected');
  }
}
