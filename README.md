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
finally loop over all the campgrounds in index.ejs, to display the titles, at the same route.ie. :
http://localhost:3000/campgrounds
===========================================
Building Campground Show :
setting up the "/campgrounds/:id" route(get) in app.js
and making file : views/compgrounds/show.ejs
and check it at a random address(fake id) :
http://localhost:3000/campgrounds/asdfadsf
Setting up the individual hyper-links against the titles on index.ejs, to go to the specific id details of the titles of campground
Finally,alter show.ejs page to get the 'title' and 'location' in heading format.(when accessed via title index)
===========================================
Making Campground New and Creat routes :
Created a route to get form for creating new campground data in app.js at : app.get("/campgrounds/new" .....)
Make : views/compgrounds/new.ejs,having form to add new data.
Then make the basic get route to get data from form and display it raw form when added useing "add button".
{After fixing the spelling of "compground" in new.ejs}
and extenting the app.post, I got the display of the data which I used to enter in the form.
Finally adding appropriate buttons on show.ejs & index.ejs
===========================================
Campground Edit & Update :
We will build two routes one for the form and one for submitting it.
We added : app.get("/campgrounds/:id/edit", .....
Also make update the : edit.ejs
Then install : npm i method-override &
const methodOverride = require("method-override");
app.use(methodOverride("\_method"));
Then add the route : app.put("/campgrounds/:id" ...
along with the necessary changes in show.ejs & edit.ejs
