class UsersController < ApplicationController
  
  def edit
    # ユーザー登録情報の変更画面へ
  end

  def update
    # ユーザー登録情報の変更を保存する
    if current_user.update(user_params)
      # ログインしているユーザーが入力した値を保存する
      redirect_to root_path
      # 成功したら、ルートにリダイレクトする
    else
      render :edit
      # 失敗したら、変更画面を呼び出す
    end
  end

  def index
    return nil if params[:keyword] == ""
    @users = User.where(['name LIKE ?', "%#{params[:keyword]}%"] ).where.not(id: current_user.id).limit(10)
    respond_to do |format|
      format.html
      format.json
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
    # 入力された値　キー:userを持っている　許可する:name,:emailカラム
  end

end
