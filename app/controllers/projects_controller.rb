class ProjectsController < ApplicationController

  def index
    projects = Project.all
    render json: projects
  end

  def show
    project = find_project
    render json: project
  end

  def create
    project = Project.create(project_params)
    render json: project, status: :created
  end

  def update
    project = find_project
    project.update(project_params)
    render json: project, status: :accepted
  end

  def delete
    project = find_project
    project.destroy
    head :no_content
  end

  private 

  def find_project
    Project.find(params[:id])
  end

  def project_params
    params.permit(:user_id, :title, :subtitle, :description, :image, :url, :github_url)
  end

end
