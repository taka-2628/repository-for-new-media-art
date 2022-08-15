class ProjectsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def index
    projects = Project.all
    render json: projects, include: ['user', 'comments', 'comments.user', 'genres', 'technologies']
  end

  def show
    project = find_project
    render json: project, include: ['user', 'comments', 'comments.user', 'genres', 'technologies']
  end

  def create
    project = Project.create!(project_params)
    genres = params[:genres]
    technologies = params[:technologies]
    genres.each do |genre|
      project.project_genres.create(genre_id: genre[:id])
    end
    technologies.each do |tech|
      project.project_technologies.create(technology_id: tech[:id])
    end
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
    head :no_content, status: :deleted
  end

  private 

  def find_project
    Project.find(params[:id])
  end

  def project_params
    params.permit(:user_id, :title, :subtitle, :description, :image, :url, :github_url)
  end

  def render_not_found_response
    render json: { error: "Project not found" }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
