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
