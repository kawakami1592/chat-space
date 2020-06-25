# アプリケーション情報

# アプリケーション概要
- 簡単なチャットアプリです

# 開発環境
- Ruby/Ruby on Rails
- MySQL
- Github
- AWS
- Visual Studio Code

# 機能
- ユーザー登録
- グループ作成
- テキスト投稿
- 画像投稿
- 自動更新
- インクリメンタルサーチ


# 紹介
![screencapture-chat-space-sample-herokuapp-users-sign-up-2020-06-25-21_30_19](https://user-images.githubusercontent.com/57590363/85720888-cda76d80-b72b-11ea-81f5-a2fb3cedccf4.png)

![screencapture-chat-space-sample-herokuapp-groups-33446-messages-2020-06-25-21_34_24](https://user-images.githubusercontent.com/57590363/85720901-d1d38b00-b72b-11ea-86c0-8c2d032f9e7f.png)

![screencapture-chat-space-sample-herokuapp-groups-new-2020-06-25-21_37_42](https://user-images.githubusercontent.com/57590363/85721234-2414ac00-b72c-11ea-8fa1-6770819c8311.png)


## groups_usersテーブル

|Column  |Type   |Options|
|--------|-------|-------|
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type  |Options|
|------|------|-------|
|name  |string|null: false|

### Association
- has_many :groups_users
- has_many :users,through::groups_users
- has_namy :messages

## usersテーブル

|Column|Type  |Options|
|------|------|-------|
|name  |string|null: false|

### Association
- has_many :groups_users
- has_many :groups,through::groups_users
- has_many :messages

## messagesテーブル

|Column  |Type   |Options|
|--------|-------|-------|
|text    |text   |       |
|image   |text   |       |
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

