class QuestionsController < ApplicationController
 def index
  @questions = Question.includes(:answer)
 end
end