# Burger

## Description

This repository was created so I could create a burger application that lets users submit a burger name to creare a list of burgers to be devoured, and to create a second list of already devoured burgers when they press the "Devour!" button.

![image](https://i.ibb.co/k997QpK/Burger.png)

You can use the commits to follow my journey.



### How did I do it?

I used JavaScript and the following Node.js packages: installed via npm packages are "mysql", "express", and "express-handlebars" to write my applicatian's code. I used MySQL to write the needed database, as well as the sql files included in this repository.

If you wish to visit this website you can do so via this link: https://fast-fortress-02922.herokuapp.com/ .



### Installation

If you wish to fork this code for your own use, then make sure you have Node.js (https://nodejs.org/en/download/), MySQL Community Server (https://dev.mysql.com/downloads/mysql/), and MySQL Workbench (https://dev.mysql.com/downloads/workbench/) installed. And after you've cloned or downloaded your forked repository use the command "npm install" in the terminal to install the necessary "mysql", "express", and "express-handlebars" packages (make sure your terminal is in the same directory as the package.json file). You'll also need to utilize the sql files to set up the neccesary database and table. Make sure you edit the connection.js to include your MySQL server connection information. After that, if you have everything installed, you simply have to have your terminal in the same direcetory as server.js and use the command "node server.js" to run it. Once it runs you will need to type "localhost:8080" in the address bar of your browser to access the application.




### Usage

To use this burger application click on the link in the "How did I do it?" section of this README.md. Once the website loads use the provided text area to type the name of a burger then click submit. After submitting your burger name, it will be added to the burgers-to-be-devoured list and will have a "Devour!" button for when the time is right to take a bite. After you click the "Devour!" button, the devoured burger will be moved to the burger-graveyard list where it will be greyed out as it is only a ghostly husk of the burger it once was.



### Credits

I used Node.js (https://nodejs.org/en/), MySQL (https://dev.mysql.com/), the "mysql" package (https://www.npmjs.com/package/mysql), the "express" package (https://www.npmjs.com/package/express), and the "express-handlebars" package (https://www.npmjs.com/package/express-handlebars).

For the front-end JavaScript I utilized the jQuery library (https://api.jquery.com/).

The included burger image is a royalty free image (https://www.pikpng.com/pngvi/wxJxbw_transparent-library-hamburger-clipart-layer-free-on-making-a-burger-clip-art/).
