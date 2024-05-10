# stuman

download and install xampp
download and install nodejs
download and install npm
move STUMAN folder in xampp > htdocs
start apache and mysql from xampp control panel
in a browser type "http://localhost/phpmyadmin/"
create 2 new databases named "student_management" and "stumanlog"
click on the created "student_management" database ,click on import tab, choose the file "personal_details.sql" file from "databases" folder of STUMAN and click "go" then import "subject_marks.sql" file from the same
click on "stumanlog" database that you have created and import "stumanlog.sql" file from the "databases folder"
open the STUMAN folder in VS code 
open terminal in VS code 
type cd front
type "npm i --force" to download all dependencies
To run the project: type "npm run start" and click on the link