ReadMe File : It illustrates all the main steps of the app while completing project, for self reference / learning.
npm init -y
npm i express mongoose ejs
Check : nodemon --version
Get the boiler plate of express.js : https://expressjs.com/en/starter/hello-world/
Run: nodemon app.js (To check the boiler plate)
===========================================
Making views/home.ejs
and : res.render("home.ejs")
[varify at http://localhost:3000/]
===========================================
Now, creating the very basic Schema of "Campground Model", in: models/campground.js
Then writing & checking code of our db conncetion in app.js.
===========================================
Let's hard code a route to enter first data in the db.
and check it at : http://localhost:3000/makecampground
also, check the update in db .i.e. using commands :
i)use mountain-camp
ii)db.campgrounds.find()
===========================================
Now, Let's test by feeding one entry using index.js and
making new route "campgrounds" and making changes in route "makecampground" i.e.
i. node seeds/index.js
ii. nodemon app.js
Then varify using :
http://localhost:3000/campgrounds and
db.campgrounds.find()
===========================================
Now, using loop fill the DB with all the 50 entries i.e. :
i. node seeds/index.js
ii. nodemon app.js
Then varify using :
http://localhost:3000/campgrounds and
db.campgrounds.find()
===========================================
Building Campground Index :
Deleting the "makecampground" route and setting up the get "campgrounds" route.
Also all the index file in views i.e.
views/campgrounds/index.ejs
then check the working of index.ejs
