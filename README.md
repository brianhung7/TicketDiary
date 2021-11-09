# TicketDiary
A website where users can share films they recently watched and share their thoughts, opinions, and feelings through posts. The website invites people to experience what everyone is watching. It’s a community of film enthusiasts that celebrate film as an artform. 


The second project of the software engineering program at General Assembly. The assignment was to work in a group of two and utilize pair programming to reverse engineer a website of our choosing to create a full-stack MEN (MongoDB, Express.js, Node.js) application in one week.

We decided upon reverse engineering Instagram. We reverse engineered their database models and relationships of Users, Posts, Comments, and Likes/Favorites. Additionally we added some improvements to our application that these websites do not have. For example, on viewing the gallery, if the user hovers over a particular post, some brief information will be given about the post including, number of comments, likes, and the post description. This enables quicker accessibility and consumption of media. Furthermore we changed the "stacked" view that Instagram has to a "gallery" view in order to view more content at once.

<a href='https://theticketdiary.herokuapp.com/'>View Ticket Diary Here</a>


<h2>======Previews======</h2> </br>
Landing Home Page
<img src='https://i.imgur.com/sQm1Gi9.png' width = 550px>
Gallery Page
<img src='https://i.imgur.com/4I6MT47.png' width = 550px>
Show Movie Page
<img src='https://i.imgur.com/OVyHkeY.png' width = 550px>

<h2>======Technologies Used======</h2> </br>
Node.js | Express.js | MongoDB | Mongoose | Sass | HTML5 | CSS3 | Javascript | EJS | Heroku | Flexbox | Grid  | Atlas

<h2>======User Story======</h2> </br>
User is first presented with a landing/home page where they have the option of going directly to viewing the gallery of posts or registering an account. After registering and logging into an account they are redirected to the gallery page where they are shown all of the movie posters of various films that have been submitted by other users. Hovering over a movie poster will cause a block of info to appear about the movie which include the post description, number of comments on the post, and number of likes on the post. Clicking on the movie title will redirect the user to a "show" page where more information about the film is shown including the "tags" that the original poster assigned to the post. The user will also have the option to "like" the post which will increment the like counter by 1 as well as save the post to the user's profile page under "Favorites". The user can also choose to leave a comment on the post saying whatever they would like. Viewing a user's profile will display posts that that user has submitted, additionally viewing a user's favorites will show what movies that user has "liked". The search bar on the top of the website allows users to search through tags, movie titles, or movie descriptions. 

<h2>======Challenges======</h2> </br>
<ul>
<li>Displaying comment/like counts on the gallery page was an issue due to how we initially setup our models, we took several initial attempts to go around rewriting our models but this proved to be a waste of time and it would have been more efficient if we had just rewrote it from the start of the goal, which is what we ended up doing anyway. Being hard-headed in this instance caused us to waste some time.</li></br>
<li>Heroku deployment had unexpected issues with internal server errors that weren’t very informative until we looked at the heroku logs.</li></br>
<li>We had a disagreement over how tags should work. One person argued to have custom tags in the form of a text-input box where user can type anything they want, while the other partner said it should be a checkbox form in order to break up the monotony of having just all text-inputs for our forms. We compromised and split the difference, so that on making a "New Post", users will see the checkboxes to choose tags, but if they decide to "Edit" it, they will have a full custom text-input form to put anything they want. </li>
</ul>

<h2>======Triumphs====== </h2> </br>
<li>We didn’t have many merge conflicts because we split up our file structure a lot and now understand why it’s so important to split up files efficiently. In combination with lots of communication, the few merge conflicts we did have were expected and quickly remedied. </li></br>
<li>Completed our stretch goals- Likes, Tags, Show Favorites </li></br>
<li>Added some fancy CSS effects including an animated background on the landing page. </li> </br>
<li>While only owners of a specific post may edit/delete their posts, we added an Admin account that has access to all these features in order to “moderate” user posts. </li></br>
<li>Getting likes to work was a lot of fun because we have to limit each user to liking a post only once. Did this by making a separate “Like” model that stores like counts and an array of users that liked a specific post. Initially it sounded so easy to do but that little counter has a bit more going on in the backend then one would think. </li></br>
</ul>


<h2>======Code Snippets======</h2>

```javascript
const foundLikes = await Like.findOne({ post: req.params.id });
let userInArray = false
for (i = 0; i < foundLikes.userArr.length;i++) {
        if (foundLikes.userArr[i] == req.session.currentUser.id) {
                userInArray = true;
        }
}
if (!userInArray) {
        foundLikes.numLikes++;
        foundLikes.userArr.push(req.session.currentUser.id);
        wait Like.findByIdAndUpdate( foundLikes._id,{ numLikes: foundLikes.numLikes,userArr: foundLikes.userArr,},{ new: true },)
}

```
<li> This block of code is used to keep track of "User Likes". First, we find the Like document associated with a Post because Like documents and Post documents are in a one-to-one relationship. Then check to see if the user who “liked” the post has already done so by looking in the array of users with a for loop. If they are not in the array, then update the Like document by increasing the count by one and pushing the user Id into the array. This makes it so each user can only like a post a single time.</li>

<h2>======Entity Relationship Diagram======</h2> </br>
<img src='https://i.imgur.com/jCumEkq.png' height=500px>

<h2>======Wireframes======</h2> </br>
Gallery 
<img src='https://i.imgur.com/ZsUwpDe.png' width=450px>
Show Single Post 
<img src='https://i.imgur.com/xQDlThR.png' width=450px>
User Profile
<img src='https://i.imgur.com/kC1N2Zb.png' width=450px>

<h2>======Future Upgrades======</h2> </br>
<li>Enable users to create their own custom "collections" where they save and sort posts into folders that they name themselves </li>
<li>Make search function also search for usernames</li>

<h2>======Authors======</h2> </br>
<li><a href='https://github.com/pandaOnCode'>Arnav Singh</a></li>
<li><a href='https://github.com/brianhung7'>Brian Pham</a></li>
