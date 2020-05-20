class AnswersController < ApplicationController
  def show
    answer = Question.find(params[:question_id]).answer
    @ans_word = answer.ans_word
    @explanation = answer.explanation
  end
end
