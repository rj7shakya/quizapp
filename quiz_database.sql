use quiz;

-- create table question(
-- 	question_id int auto_increment primary key,
--     question varchar(255)
-- );
-- 
-- create table choice(
-- 	choice_id int auto_increment primary key,
--     choice varchar(255),
--     is_correct boolean default false,
--     question_id int,
--     foreign key fk_question_choice (question_id)
--     references question(question_id)
-- );
-- 
insert into choice(choice, question_id)
value ('b ',3);

select * from choice;

