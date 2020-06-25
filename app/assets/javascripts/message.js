$(function(){
  function buildHTML(message){
    var message_image = message.image == null ? '' : `src="${message.image}"`
    var html=`<div class="message" data-message-id="${message.id}">
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
                <img class="lower-message__image" ${message_image} >
                </div>`
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
      $(".new_message")[0].reset();
      $(".submit-btn").prop('disabled',false);
      $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight});
    })
    .fail(function(){
      alert('error');
    })
  });
      // 〜〜〜〜自動更新〜〜〜〜
  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $(".messages").animate({ scrollTop: $(".messages")[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 7000);
  };
});