# TicketDiary
A website where users can share films they recently watched and share their thoughts, opinions, and feelings through posts. The website invites people to experience what everyone is watching. It’s a community of film enthusiasts that celebrate film as an artform. 


The second project of the software engineering immersive course at General Assembly. The assignment was to work in a group of two and utilize pair programming to reverse engineer a website of our choosing to create a full-stack MEN (MongoDB, Express.js, Node.js) application in one week.

We decided upon reverse engineering Instagram. We reverse engineered their database models and relationships of Users, Posts, Comments, and Likes/Favorites. Additionally we added some improvements to our application that these websites do not have. For example, on viewing the gallery, if the user hovers over a particular post, some brief information will be given about the post including, number of comments, likes, and the post description. This enables quicker accessibility and consumption of media. Furthermore we changed the "stacked" view that Instagram has to a "gallery" view in order to view more content at once.

<a href='https://theticketdiary.herokuapp.com/'>View Ticket Diary Here</a>


<h2>======Previews======</h2> </br>
Landing Home Page
<img src='https://i.imgur.com/sQm1Gi9.png' width = 500px>
Gallery Page
<img src='https://i.imgur.com/4I6MT47.png' width = 500px>
Show Movie Page
<img src='https://i.imgur.com/OVyHkeY.png' width = 500px>

<h2>======Technologies Used======</h2> </br>
Node.js | Express.js | MongoDB | Mongoose | Sass | HTML5 | CSS3 | Javascript | EJS | Heroku | Flexbox | Grid  | Atlas


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


<h2>======Code Snippets=====</h2>

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
