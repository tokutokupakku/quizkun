$(function() {
  $('.answer_button').click(function() {
    // console.log(this.id)
    // var id = $("this").attr("answer-id");
    // var btn = (`content_answer_${id}`);
    var c = $(`#ans_${this.id}`);
    c.toggleClass('js-open');
    // if(c.hasClass('close')){
    //   c.removeClass('close')
    //   c.addClass('open')
    // } else{
    //   c.removeClass('open')
    //   c.addClass('close')
    // }
  });
});