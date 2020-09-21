$('.faq__accordion-title').click(function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().find('.faq__accordion-text').slideUp('fast');
      $(this).parent().removeClass('open');
    } else {
      $('.faq__accordion').find('.open').each(function (index, el) {
        $(el).removeClass('open');
        $(el).find('.faq__accordion-text').slideUp('fast');
      })
      $(this).parent().find('.faq__accordion-text').slideDown('fast');
      $(this).parent().addClass('open');
    }
  });

  $('.conditions__accordion').click(function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().find('.conditions__accordion-block').slideUp('fast');
      $(this).parent().removeClass('open');
    } else {
      $('.conditions__items').find('.open').each(function (index, el) {
        $(el).removeClass('open');
        $(el).find('.conditions__accordion-block').slideUp('fast');
      })
      $(this).parent().find('.conditions__accordion-block').slideDown('fast');
      $(this).parent().addClass('open');
    }
  });  

function openCompany(evt, companyName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("contacts__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("contacts__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(companyName).style.display = "block";
    evt.currentTarget.className += " active";
};
if (window.matchMedia("(max-width: 768px)").matches) {
    $('.contacts__tablinks:eq(2)').addClass(' active');
  } else if (window.matchMedia("(max-width: 564px)").matches) {
    $('.contacts__tablinks:eq(2)').addClass(' active');
  }
