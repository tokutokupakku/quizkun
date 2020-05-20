$(function() {
  function buildHTML(data){
    let html = `<div class="ans_word">
                  ${ data.ans_word }
                </div>
                <div class="explanation">
                  ${ data.explanation }
                </div>`
    return html;
  }
  $('.answer_button').click(function(e) {
    e.preventDefault();
    let id = $(this).attr("id")
    $.ajax({
      url: `/questions/${id}/answer`, //送信先
      type:'GET', //送信方法
      datatype: 'json', //受け取りデータの種類
      })
      
      .done(function(data) {
        let html = buildHTML(data)
        let ans_element = $(`#ans_${id}`)
        console.log($(`#ans_${id} .ans_word`).size())
        if($(`#ans_${id} .ans_word`).size( ) === 0){
          ans_element.append(html);
        } else {
          ans_element.empty();
        }
      })
      .fail(function(){
        alert('error');
      })
  });
});