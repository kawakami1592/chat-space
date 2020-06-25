json.array! @messages do |message|
  json.content    message.content
  json.image      message.image.url
  json.created_at l(message.created_at,format: :long)
  json.user_name  message.user.name
  json.id         message.id
end