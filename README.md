# Bally Blogs
## Blogging Engine
### author: Dylan Kearney
There are too many blogging engines in the world today, so I will build one more. The outcome of this body of work will be a basic blogging engine that encompasses some of the key elements one would encounter in software development. It also serves to provide a practical platform to learn and ask questions about what it means to develop software at WP Engine. 

###### *The name of the project comes from the name of where I grew up; Ballydesmond*

v1.4 : Added delete post functionality. A user can now delete their blog article. After clicking delete, a user is asked if they are sure they wish to delete the post or not. If they wish to keep the post they can click undo. Otherwise, when they leave the page or click 'yes' then the post will remain deleted.

v1.3 : Added edit functionality. A user can edit their blog article once logged in.

v1.2: Added view for list of posts. List of posts displays author, title (links to the post itself) , truncated context, date of creation. Also added a user reference to the posts table. A user can have many posts but a post may only have one user/author. (08/09/2020)

v1.1: Added static home page. Created post model with user ID, title, context and date & time when created. Set up authentication using Devise. Set up view to input the post details. User must be authenticated to create a post. Success message displayed on post creation. (01/09/2020)

v1.0: Devise gem added to project for later use. Global navbar added for easy routing on the website for dev use. (26/08/2020)
