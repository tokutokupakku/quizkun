class AnswersController < ApplicationController
  def show
    @question = Question.find(params[:id])
    @answer = @question.answers
    @questions = Question.all
    # respond_to do |format|
    #   format.html { redirect_to :root }
    #   format.json { render json: @answer}
    # end
  end
end
