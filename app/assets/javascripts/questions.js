$(function() {
  $('.answer_button').click(function(e) {
    e.preventDefault();
    
    $.ajax({
      url: url, //送信先
      type:'POST', //送信方法
      datatype: 'json', //受け取りデータの種類
      data:{
       'id' : $('#id_number').val()
      }
      })
  });
});