class UsersController < ApplicationController
	def show
    	@user = User.find(params[:id])
  	end

	def new
	end

	 def create
	 	@user = User.new(params[:user].permit(:email, :password))
 		@user.save
  		redirect_to @user
  	end
  	private
  		def user_params
    	params.require(:user).permit(:email, :password)
  end


end
