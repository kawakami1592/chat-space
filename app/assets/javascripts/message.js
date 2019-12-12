$(function(){
  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image != null) {
      var html=`<div class="message">
                  <div class="message-info">
                    <div class="message-info__talker">
                    ${message.user_name}
                    </div>
                    <div class="message-info__date">
                    ${message.created_at}
                    </div>
                  </div>
                  <p class="message-text">
                  ${message.content}
                  </p>
                  <img class="lower-message__image" src="${message.image}" >
                </div>`
    } else {
      var html=`<div class="message">
                  <div class="message-info">
                    <div class="message-info__talker">
                    ${message.user_name}
                    </div>
                    <div class="message-info__date">
                    ${message.created_at}
                    </div>
                  </div>
                  <p class="message-text">
                  ${message.content}
                  </p>
                </div>`
    }
    return html
  }

  $(".new_message").on("submit", function(e){
    e.preventDefault()
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $(".messages").append(html);
      $("#new-message")[0].reset();
      $(".submit-btn").prop('disabled',false);
      $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  })
});
