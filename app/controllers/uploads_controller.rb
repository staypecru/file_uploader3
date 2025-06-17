# app/controllers/uploads_controller.rb
class UploadsController < ApplicationController
  def index
    @uploads = Upload.all
    @upload = Upload.new
  end

  def create
    @upload = Upload.new(upload_params)
    @upload.save
    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to uploads_path, notice: "Файл загружен" }
    end
  end

  private

  def upload_params
    params.require(:upload).permit(:title, :file)
  end
end
