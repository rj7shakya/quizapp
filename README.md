<h1>Quiz app made on React,Node and SQL</h1>
<p>This is a quiz app with customization option to add questions and choices according to need and then saved on sql database.</p>
<br>
<h2>Steps for using this app</h2>
<ol>
  <li>Clone or download the zip file </li>
  <li>open the terminal in project directory and then run : <bold>npm install</bold></li>
  <li>Then,move to frontend folder directory( cd frontend/ ) and then run : <bold>npm install</bold></li>
  <li>Then,move to back to project directory( cd .. ) and then run : <bold>npm run dev</bold></li>
  <li>Then,open connection.js file and then run : replace <br>
  const sequelize = new Seqeulize("quiz", "root", "inspiron", {
  dialect: "mysql",
  host: "localhost",
});
  <br>
    with
    <br>
  <div>const sequelize = new Seqeulize("quiz", {your_mysql_username}, {your_mysql_password}, {
  dialect: "mysql",
  host: "localhost",
});
</div>
</li>
  
</ol>
