json.content    @message.content
json.image      @message.image.url
json.created_at l(@message.created_at,format: :long)
json.id         @message.id
json.user_name  @message.user.name
