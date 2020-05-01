class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.string :ans_word, null: false
      t.text :explanation
      t.integer :question_id, foreign_key: true, index: true
      t.timestamps
    end
  end
end
