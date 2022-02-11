class Api::V1::TasksController < ApplicationController
  def index
  end
  
  def create
  end

  def update
  end

  def destroy
  end

  def task_params
    params.require(:task).permit(:title, :content)
  end
end
