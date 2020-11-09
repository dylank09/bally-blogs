# Bally Blogs
## Blogging Engine
### author: Dylan Kearney
There are too many blogging engines in the world today, so I will build one more. The outcome of this body of work will be a basic blogging engine that encompasses some of the key elements one would encounter in software development. It also serves to provide a practical platform to learn and ask questions about what it means to develop software at WP Engine. 

###### *The name of the project comes from the name of where I grew up; Ballydesmond*

v2.5 : (to be done) add edit and undo-delete feature to blogs

v2.4 : Installing cypress and building end to end tests on the blogging engine. 

v2.3 : Adding react-testing-library for unit testing the components

v2.2 : Adding React components for a list of blogs, single blog, creating a blog. Added delete blog feature that soft deletes the post. This cannot be undone.

v2.1 : Implementing a user authentication structure over API. Uesr can sign up and log in and after such actions they can create a post and delete it.

v2.0 : Changing project structure from a soley Ruby on Rails web application to an API based web app. I am using a ReactJS frontend to talk to the Ruby on Rails backend.

v1.4 : Added delete post functionality. A user can now delete their blog article. After clicking delete, a user is asked if they are sure they wish to delete the post or not. If they wish to keep the post they can click undo. Otherwise, when they leave the page or click 'yes' then the post will remain deleted.

v1.3 : Added edit functionality. A user can edit their blog article once logged in.

v1.2: Added view for list of posts. List of posts displays author, title (links to the post itself) , truncated context, date of creation. Also added a user reference to the posts table. A user can have many posts but a post may only have one user/author. (08/09/2020)

v1.1: Added static home page. Created post model with user ID, title, context and date & time when created. Set up authentication using Devise. Set up view to input the post details. User must be authenticated to create a post. Success message displayed on post creation. (01/09/2020)

v1.0: Devise gem added to project for later use. Global navbar added for easy routing on the website for dev use. (26/08/2020)
