class Api::V1::TopController < ApplicationController
  def index
    render json: { status: 200, message: "Hello World!"}
  end
end
