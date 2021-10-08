class SupportsController < ApplicationController
  before_action :set_support, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :only_user_crud, only: [:create, :update, :destroy]

  # GET /supports
  def index
    @supports = Support.all

    render json: @supports
  end

  # GET /supports/1
  def show
    render json: @support
  end

  # POST /supports
  def create
    @support = Support.new(support_params)
    @support.user = @current_user
    if @support.save
      render json: @support, status: :created, location: @support
    else
      render json: @support.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /supports/1
  def update
    if !@correct_user
      render json: "Unauthorized", status: :unauthorized
      return
    end
    if @support.update(support_params)
      render json: @support
    else
      render json: @support.errors, status: :unprocessable_entity
    end
  end

  # DELETE /supports/1
  def destroy
    if !@correct_user
      render json: "Unauthorized", status: :unauthorized
      return
    end
    @support.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_support
      @support = Support.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def support_params
      params.require(:support).permit(:image, :description, :user_id)
    end

    def only_user_crud
      # @correct_user = @current_user.id == support_params[:user_id] 
      @support = Support.find(params[:id])
      @correct_user = @current_user.id == @support[:user_id] 
    end

end


