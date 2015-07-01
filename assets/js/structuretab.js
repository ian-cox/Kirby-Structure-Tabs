(function($) {
  $(document).ready(function() {

    if (app && typeof app == 'object') {
      $(app.modal).on('view:load', initModalModules);
    }

    function initModalModules() {
      
    if ($('.modal-content input.structuretab').length)

      if ($(".modal-content").length){
          $('.modal-content').removeClass("modal-content-fixed");
          $(".modal-content .form").prepend($("<ul></ul>").addClass("tabs"));
      }

      else{
        $('.modal-content .input.structuretab').first().closest('.field-grid-item').prepend($("<ul></ul>").addClass("tabs"));
      }

      $('.modal-content label.structuretab').each(function() {
        var title = "<li class='tab' href='" + $(this).attr('name') + "'>" + $(this).closest(".field-grid-item").text().trim() + "</li>";
        $(".tabs").append(title);
      });
      
      $('.modal-content label.structuretab').each(function() {
        $(this).closest(".field-grid-item").addClass("group-title");
      });
      
      $('.modal-content .group-title').each(function() {
        $(this).nextUntil(".modal-content .group-title").andSelf().wrapAll('<div class="group" />');
      });

      $('.modal-content .group').each(function() {
        var id = $(this).find(".group-title label.structuretab").attr('name');
        $(this).attr('id', id);
      });

      if (!$('.modal-content .group.current').length) {
        $('.tabs li').first().addClass('current');
        var first_group = $('.group').first();
        first_group.addClass('current');
        first_group.find('input.structuretab').attr('checked', true);
      }

      $('.modal-content .tabs li').click(function() {
        $(this).addClass("current");
        $(this).siblings().removeClass("current");
        var tab_id = $(this).attr('href');
        $('.group').removeClass('current');
        $("#" + tab_id).addClass('current');
        $("#" + tab_id).find('input.structuretab').prop('checked', true);
        $("#" + tab_id).siblings().find('input.structuretab').prop('checked', false);
      });
    
    }


  });
}(jQuery));