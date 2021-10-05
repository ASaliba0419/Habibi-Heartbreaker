class SupportsController < ApplicationController
  before_action :set_support, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :show, :destroy]

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

    if @support.save
      render json: @support, status: :created, location: @support
    else
      render json: @support.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /supports/1
  def update
    if @support.update(support_params)
      render json: @support
    else
      render json: @support.errors, status: :unprocessable_entity
    end
  end

  # DELETE /supports/1
  def destroy
    @support.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_support
      @support = Support.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def support_params
      params.require(:support).permit(:image, :description, :user_id, :product_id)
    end
end
