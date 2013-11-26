var Site = {
  init : function() {
    this.nav();
    this.sortItems();
    this.scroll();
  },
  nav : function() {

      name = window.location.pathname;
      if (name.indexOf('/projects/') != -1) {
        name = '/projects'
      }

      liOn = $('nav li[name="'+ name +'"]');
      liOn.addClass('selected');

      li = $('nav li');

      li.hover(function() {
      	liOn.removeClass('selected');
      }, function() {
      	liOn.addClass('selected');
      });
  },
  sortItems : function() {
    $('p.meta a').click(function(event) {
      var $this = $(this);
      var tags = $("a[title*='" + $this.text() + "']");
      var lis = tags.closest('li'); 
      
      lis.animate({
        opacity: 0
      }, 
        100, function() { 
          lis.parent().prepend(lis); 
          $("a").removeClass('on');
          tags.addClass('on')
          lis.animate({ 
            opacity: 1 
          },
            700);
      });
      $("html, body").animate({ scrollTop: 0 }, 200);
      return false;
    });
  },
  scroll : function() {
    $("html, body").animate({ scrollTop: 0 }, 200);
  }
}
