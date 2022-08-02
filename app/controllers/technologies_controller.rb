class TechnologiesController < ApplicationController

  def index
    technologies = Technology.all
    render json: technologies
  end

end
