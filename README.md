# Welcome to Dividesmart!

[Live!](https://dividesmart.herokuapp.com/#/ "Dividesmart")

Dividesmart is a bill splitting web application inspired by Splitwise. Organize your shared expenses and keep track of IOUs all in one place. Keep track of how much you owe and your overall balance at all times. 

Join us and you'll never have to calculate bills again. 

[Dividesmart Design Documents](https://github.com/AndreC93/dividesmart/wiki "Dividesmart Wiki")

## Key Features

### User Authentication
Users can sign up or log into an existing account.
A user can use the demo login option to experience the app prior to signing up.
Photos
Photos are displayed in a grid on the home page, user profile, and explore page.
While on another user's profile page or the explore page, you can click on one of their photos to display a higher resolution version, as well as like or comment on the photo.
Users can upload photos as new posts (that can be liked and commented on), or as profile pictures.
Photos that users upload will be displayed on their personal profile page and will show up on a follower's home feed.
Photos are uploaded and stored to an AWS S3 bucket
Likes
Users can like and unlike photos on the site.
The like count is displayed below each photo.
Comments
Users can add and remove comments to any photo on the site.
Users can only remove comments that they created.
Comments are displayed below each photo.
Follows
Users can follow and unfollow other users on the site.
Posts from users that you have followed will appear on your home page.
User Profile
A user's profile page displays all of their photos.
Users can edit their profile information from their own user page:
Profile Photo
Bio
User stats are displayed on the profile page:
Photo Count
Followers
Notable Technical Features
User Search
As a user updates the searchbar with their input, AJAX requests are sent to the database to search for users.
This search is debounced.
An AJAX request isn't sent until some time has passed, meaning the user has enough time to finish typing their desired input and then shoot off one single request.
If the user wants to search for "david", debouncing ensures we fire one AJAX request to search for "david" when the user is done typing, as opposed to firing five requests (one on every letter).
Infinite Scroll
Posts on any page (home, user profile, or explore) are not fetched all at once. Rather, additional posts are fetched and displayed when the user scrolls down far enough on the page.
Benefits
This gives us better performance compared to fetching all posts at once.
Posts are easier to scroll through and read when there are less posts on the page.
User is unlikely to want to see all the posts on every page, so adding a few at a time is preferred.
Fetching of additional posts is throttled.
Additional posts can only be fetched once every N milliseconds.
This ensures that only one fetch for additional posts is fired when the user scrolls to the bottom of the page. The page then expands and the user can look through the new posts before reaching the new bottom of the page and sending another AJAX request to fetch more posts.
Technology Stack
Ragtag is a single-page app with one back-end route responsible for rendering HTML. As users interact with the site, AJAX requests are sent to the API routes in the back-end, which are responsible for rendering database information in JSON format.

Front End
React

The response info is taken by the React JS library to update the page.

Aside from utilization of a virtual DOM to make DOM manipulation efficient, React provides many other tools for front-end development.
Redux

Redux is used to manage the front-end state of Ragtag. When database info is retrieved, Redux state is updated first, before the React architecture is re-rendered.

Back End
Ruby on Rails

Ruby on Rails is the back-end framework used to query the database. Rails provides a bunch of tools out of the box to make life easy. Read more

DB
Ragtag uses a PostgreSQL database to store its relational data.