# データベース詳細設計

## Questions

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|

### Association
- has_one :answer

---
<br>
<br>


## Answers

|Column|Type|Options|
|------|----|-------|
|ans_word|string|null: false|
|explanation|text||
|question_id|references|foreign_key: true, index: true|

### Association
- belongs_to :question

---
<br>
<br>