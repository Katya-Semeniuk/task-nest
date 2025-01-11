# TaskNest
<a name="task-nest"></a>

![Mockup image]()

[View live website](https://tasknest-api-e8c3c073658c.herokuapp.com/)


## Table of Contents
  1. [About](#about)
  2. [Project Goals](#project-goals)
  3. [User Experience](#user-experience)
      1. [Target Audience](#target-audience)
      2. [User Requirements and Expectations](#user-requirements-and-expectations)
      3. [User Stories](#user-stories)
      4. [Site Owner Stories](#site-owner-stories)
  4. [Technical Design](#technical-design)
      1. [Agile Design](#agile-design)
      2. [CRUD Functionality](#crud-functionality)
      3. [Fonts](#fonts)
      4. [Wireframes](#wireframes)
  5. [Technologies Used](#technologies-used)
      1. [Coding Languages](#coding-languages)
      2. [Frameworks Libraries and Tools](#frameworks-and-tools)
  6. [Front-End](#front-end)
      1. [React](#react)
  7. [Back-End API](#back-end-api)
      1. [Django REST Framework](#django-rest-framework)
  8. [Features](#features)
  9. [Future features / improvements](#future-features--improvements)

  10. [Bugs](#bugs)
  11. [Deployment](#deployment)
      1. [Heroku](#heroku)
      2. [Forking GitHub Repo](#forking-the-github-repository)
      3. [Clone a GitHub Repo](#clone-a-github-repository)
  12. [Credits](#credits)
      1. [Tutorial](#tutorials)
      2. [Code](#code)
     



## About

The web application provides the ability to create tasks, assign them different categories, assign other users to be able to manage all tasks online and monitor their implementation 

## Project Goals

The goal of the project is to create a platform with a great user experience that helps others stay organized, by creating tasks with different categories, the ability to assign other users to collaborate, so that the task list is clearly structured, understandable and easy to use.


The key functionality aspects:

- User-Friendly Interface: The site should have a clean and intuitive design with easy navigation across all pages.
- User Authentication and Profiles: Users should be able to create accounts, log in, and maintain personal profiles.
- Task Management: The system should enable users to create, read, update, and delete (CRUD) tasks and comments associated with them.
- Task Collaboration: Users should be able to assign tasks to other users and view tasks assigned to them.
- Task Filtering: The system should provide flexible filtering options, allowing users to easily find tasks by keywords, status.
- Responsive Design: The application should adapt seamlessly to various screen sizes and devices for an optimal user experience.


## User Experience

### Target Audience

- People who are looking for a good tool to organize their tasks
- People who are open to collaborative tasks



### User Requirements and Expectations

- Engaging User Experience: The site should foster high levels of interaction between users.
- Reliable Functionality: All links and features should function as expected.
- Clear Feedback: The site should provide clear and timely notifications to users on the outcome of their actions.
- Concise and User-Friendly Content: Content should be presented in a clear, concise, and easily digestible format.
- Accessibility: The site should be accessible to users with disabilities, adhering to accessibility guidelines
- Responsive Design: The site should be fully responsive, adapting seamlessly to different screen sizes and devices.



### User Stories

1. As a new user, I can create a new account, so that I can access all the features for signed up users..
2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app.
3. As a user I can create a task so that set parameters and assign other users.
4. As a user I can view ll recent tasks so that I can stay up to date on what tasks other users are currently creating.
5. As a user I can enter the task name or author in the search field so tasks that match the search query are available to me.
6. As a user, I can keep scrolling throught loaded automatically content so I don't have to click on "next page".
7. As a user, I can delete my task so that it is no longer saved in the database and does not distract from current tasks. 
8. As a user, I can edit my own tasks so I can make corrections or update it after it was created.
9. As a user, I can see a list of the users so I can know who is new and see general information about them.
10. As a user, I can view my task list to focus only on my content.
11. As a user, I can view a list of assigned tasks so that I can focus on tasks that I am assigned to.



### Site Owner Stories

 


##### Back to [top](#task-nest)


## Technical Design

### Agile Design



The GitHub project can be found [here](https://github.com/Katya-Semeniuk/task-nest)

### CRUD Functionality

TaskNest handles data with full CRUD Functionality:
<br>
- Create -  Users can create, an account, profile, tasks, comments.
- Read - Users can view the tasks, comments, tasks they are assigned to and also the profiles of these users.
- Update - Users can update their profile, posted tasks, and watch status of tasks via the interactive forms and buttons on the site.
- Delete - Users can delete tasks, assigned users, comments via the interactive buttons on the site.



### Fonts

Fonts from the open source Google Fonts resource were connected to the project. "Poppins" was selected as the main one and Roboto as an additional one.

### Wireframes

Balsamiq was used to create wireframes of the sites pages

<details>
<summary>Wireframes</summary>
<img src="">
</details>

##### Back to [top](#task-nest)


## Technologies Used

### Coding Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Frameworks Libraries and Tools

- [React 17](https://17.reactjs.org/) - JavaScript library for building user interfaces. Justification: I used it to build the frontend part of the application.
- [Axios](https://axios-http.com/docs/intro) - Axios is a Promise API. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - Library to decode JSON Web token. Justification: I used JWT to securely transmit data and to have the ability to verify that the content has not been tampered with.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - Javascript framework for routing. Justification: I used this library to enable navigation between views of components and to have the ability to control what is presented to the user based on the URL they have accessed in the browser. 
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - React library. Justification: I used this component to load content (tasks/comments/users) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React-Bootstrap 1.6.3](https://react-bootstrap-v4.netlify.app/) - CSS framework. Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [Logo](https://turbologo.com/app) - Website to create Logo. Justification: I used it to create a custom logo.
- [React Multi Select Component](https://www.npmjs.com/package/react-multi-select-component) - React Library. Justification: I used this component to have the ability to select multiple users to assign to a task.
- [Moment Library](https://www.npmjs.com/package/moment) - A JavaScript date library for parsing, validating, manipulating, and formatting dates. Justification: I used to change the date display format.
- [Font Awesome](https://fontawesome.com/) - Icon library. Justification: I used it as one of the resources for adding icons to the project.
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library. Justification: I used it as another option for adding icons to the project.
- [React Notification](https://www.npmjs.com/package/react-notifications?activeTab=readme) - Icon library. Justification: I used it as another option for adding icons to the project.
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) - Developer tool. Justification: I used this for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) - File storage. Justification: I used this to store static files.
- [Git](https://git-scm.com/) - Version control system. Justification: I used this for version control and to push the code to GitHub.
- [GitHub](https://github.com/) - Cloud based hosting service. Justification: I used this as a remote repository to store project code.
- [Gitpod](https://gitpod.io) - Cloud development environment. Justification: I used this to host a virtual workspace.
- [Google Fonts](https://fonts.google.com/) - Font library. Justification: I used this to add custom fonts.


- Validation:
 



##### Back to [top](#task-nest)


## Front-End

### React

The React.js framework is an open-source JavaScript framework and library developed by Jordan Walke, a software engineer at Meta. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript  

I used React for this application for several reasons:

 - Flexibility – Due to having a modular structure React code is easier to maintain compared to other front-end frameworks.

 - Speed – Creating sites/apps with React significantly increases the page loading speed as the entire page does not require to refresh and reload all components. Components are updated dynamically thus reducing the wait and load times, which affects user experience.

 - React Bootstrap - When used for styling and responsiveness React Bootstrap is a great choice as it comes with ready-to-use React built components thus taking away alot of need to create commonly used code from scratch.

- It is the most widely used library for developing social networking and media content applications - Sites such as Meta (formerly Facebook), Instagram, Netflix, Airbnb are all made with React.

- Reusability of components – Components can be created and re used throughout the app with no need to re write code for the same features.

There were various components created and reused across this application.

- `<Asset />` - multi purpose component, used to display a range of items due to being passed props. Those include a loading gif, image with source and alt attribute or a message consisting of a paragraph.
  - Used in user story: 21, 24 & 25

- `<Avatar />` - resuable component, used to display the relevant user profile picture. This component uses props which can specify the source of the image and also its size, an example of this components re-use ability is the image size on the profile page being bigger than that of the one in the Nav Bar yet it is the same component and source image used.
  - Used in user story: 18

- `<DropDown />` - resuable component, used to display the three dots option button based on the required rights of the user and the item in question for example if a user is on their own profile the drop down to edit the profile will appear, however this will not be the case when viewing other users profile pages. 
  - Used in user story: 7, 8, 11, 12, 17, 28, 29, 30 & 31



- `<NavBar />` - resuable component, used for easy navigation of the site. This component is re usable as it will display different icons based on a users logged in status. If no user is logged in a log in, sign up and contact icon will be available however if a user is currently logged in, the full range of icons will be available apart from log in.
  - Used in user story: 2

- `<PageNotFound />` - specific component, used to display a 404 page made up of an image file and return home button for when the page does not exist.
  - Used in user story: 34



There were various pages created and used in this application

- auth - The auth page group consisted of the following files:
	- LoginForm.jsx - This file handles the Login form
	- SignUpForm.jsx - This file handles the Sign up form



- profiles - The profiles page group consisted of the following files:



- tasks - The tasks page group consisted of the following files:
	- TaskPage.jsx - This file queries tasks and returns details of one task
  - TasksList.jsx - This file returns the list of Tasks
	- TaskForm.jsx - This file handles the Task create form 
	- TaskDetail.jsx - This file returns the task detail
	- TaskEditForm.jsx - This file handles the Task edit form

## Back-End API

### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/Katya-Semeniuk/TaskNest-api).

##### Back to [top](#task-nest)


## Features


### Authentication

Authentication is an important feature. After all, in order to use all the benefits of the application, users will have to authenticate when trying to log in.

<details>
<summary>Authentication image</summary>
<img src="">
</details>



### Log In

Log in is a site feature that allows users to log in to their account and view content that matches their profiles, this feature also controls security and permissions on the site by requiring authentication.

<details>
<summary>Log In image</summary>
<img src="">
</details>



### Log Out

Log out is a site feature that allows users to log out of their profile, providing a certain level of security if users use different devices to log in to the system.

<details>
<summary>Log Out image</summary>
<img src="">
</details>


### Sign Up

Registration is a feature of the site that allows users to create an account and use a more extensive set of application options.

<details>
<summary>Sign Up image</summary>
<img src="">
</details>


### Home page

The Home Page is a site function that provides users with general information about the site, and if they are logged in, they will be shown more extensive information about the site content.

<details>
<summary>Home page image</summary>
<img src="">
</details>



### Nav Bar

The site includes a navigation bar to enable users to seamlessly navigate between different sections of the application.

<details>
<summary>Nav Bar image</summary>
<img src="">
</details>


### Profile Section
  

<details>
<summary>Profile Section image</summary>
<img src="">
</details>




### Edit Profile



<details>
<summary>Edit Profile image</summary>
<img src="">
</details>




### Create task

The site enables users to create tasks, a fundamental feature that empowers them to achieve their goals within the application

<details>
<summary>Create task image</summary>
<img src="docs/features/create-task-1.png">
</details>


### Delete task

The site allows users to delete their own tasks at their discretion.

<details>
<summary>Delete task image</summary>
<img src="">
</details>


### Edit task

The site provides users with the ability to edit their own tasks through an in-app form 

<details>
<summary>Edit task image</summary>
<img src="">
</details>



### Task comment



<details>
<summary>Task comment image</summary>
<img src="">
</details>



### Create task comment



<details>
<summary>Create task comment image</summary>
<img src="">
</details>


### Edit task comment



<details>
<summary>Edit task comment image</summary>
<img src="">
</details>



### Delete task comment



<details>
<summary>Delete task comment image</summary>
<img src="">
</details>


### Owner's Task 



<details>
<summary>Task list image</summary>
<img src="">
</details>


### All Tasks



<details>
<summary>Task list image</summary>
<img src="">
</details>



### Task Search



<details>
<summary>Task Search image</summary>
<img src="">
</details>



### Assigned Tasks



<details>
<summary>Assigned tasks image</summary>
<img src="">

</details>



### Assigned icon



<details>
<summary>Assigned icon</summary>
<img src="">
</details>




### Input Validation

The site incorporates input validation across all forms to ensure data integrity.

<details>
<summary>Input Validation image</summary>
<img src="">
</details>


### Task Count

The site allows users to view their total task count on their profile page. 

<details>
<summary>Task Count image</summary>
<img src="">
</details>



### Search Bar

The site provides the ability to search for tasks based on keywords. 

<details>
<summary>Search Bar image</summary>
<img src="">
</details>




### Error pages

Error pages this is a feature that displays a 404 error page when the user navigates to an unknown path and allows the user to easily return to the main page of the site.

<details>
<summary>Error pages image</summary>
<img src="">
</details>




### Users list

Users list is a feature of the site giving users the ability to view all users signed up to the site.

<details>
<summary>Users list image</summary>
<img src="">
</details>



### Responsiveness

 The site is responsive, ensuring a consistent and enjoyable user experience across different devices and screen sizes

<details>
<summary>Responsiveness image</summary>
<img src="">

</details>





## Future features / improvements

- registration via Google account;
- receiving a notification about a status change of a task you have been signed up for;
- section - teamwork - so that users who have several common tasks can keep these tasks together;
- a toggle option in the password input so that the user can see if they have made a mistake in entering the data.

##### Back to [top](#tick-it)


## Validation 

### HTML Validation



<details><summary>Main page (not logged in)</summary> 
<img src=""> 
</details>

<details><summary>Main page (logged in user)</summary> 
<img src=""> 
</details> 

<details><summary>Signup page</summary> 
<img src=""> 
</details>

<details><summary>Login page</summary> 
<img src=""> 
</details>

<details><summary>Tasks page</summary>
<img src="">
</details>

<details><summary>Task create page</summary>
<img src="">
</details>

<details><summary>Task detail page</summary>
<img src="">
</details>

<details><summary>Task edit page</summary>
<img src="">
</details>

<details><summary>Assigned page</summary>
<img src="">
</details>
>



<details><summary>Users page</summary>
<img src="">
</details>

<details><summary>Profile page</summary>
<img src="">
</details>



<details><summary>404 page</summary>
<img src="">
</details>

 

## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| On the user list rendering page, the backend was getting incorrect data for calculating the number of tasks.|So I took the value of the task array and checked the length and thereby calculated the number |
| In the TaskCreate Form, when I did Not added a user to the list of assigned users (which in itself should not be a problem, because this field is not required), I received an 400 error "Incorrect type. Expected pk value, received str." | 




##### Back to [top](#tick-it)


## Deployment

### Heroku

This project was deployed to [Heroku](https://www.heroku.com) in the project's early stages to allow continual responsive testing. This was achieved via the following steps:

The website was deployed with Heroku by following these steps:

1. Use the "pip freeze -> requiremnts.txt" command in the terminal to save any libraries that need to be installed in the file.
2. The app uses Cloudinary to host the post images therefore a Cloudinary account will be required. 
3. Log in to [Cloudinary](https://cloudinary.com/) or create an account for free.
4. Navigate to the Dashboard on Cloudinary
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/cloudinary-dashboard.png">
</details>

5. Copy and store the value of the 'API Environment Variable" beginning at cloudinary:// until the end, this will be used in the Heroku Config Vars. 
6. The app also uses ElephantSQL to host the database
7. Log in to [ElephantSQL](https://www.elephantsql.com/) or create an account for free.
8. Click on Create a new instance
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-instance.png">
</details>

9. Set up your plan. Give the 'plan' the desired name, select the Tiny Turtle (free) plan and leave tags blank.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-plan.png">
</details>

10. Select the region and choose the nearest data centre to your location.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-region.png">
</details>

11. Click 'review' and if happy with the details presented click on the create instance button.
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-create.png">
</details>

12. From the instances section click on the instance with the name that was just created.
13. Get the ElephantSQL database URL from the instance details page and copy, this will be used in the Heroku Config Vars
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/elephant-sql-url.png">
</details>

14. Navigate to https://www.heroku.com/ and login or create an account. 
15. Click the "new" button in the upper right corner and select "create new app".
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/new-app.png">
</details>

16. Choose an app name and your region and click "Create app".
<details>
<summary>Screenshot</summary>
<img src="docs/deployment/app-name.png">
</details>

17. Reveal Config Vars and store the required config var names and values as below:

- `CLOUDINARY_URL`: *your Cloudinary URL as obtained above*
- `DATABASE_URL`: *your ElephantSQL postgres database URL as obtained above*
- `PORT`: `8000`
- `SECRET_KEY`: *your secret key*

<details>
<summary>Screenshot</summary>
<img src="docs/deployment/config-vars.png">
</details>

18. Go to the "deploy" tab and pick GitHub as a deployment method.
19. Search for a repository to connect to and select the branch you would like to build the app from.
20. If preferred, enable automatic deploys and then deploy branch.
21. Wait for the app to build and then click on the "View" link which will redirect you to the deployed link.

### Forking the GitHub Repository

We can make a copy of the original repository on our GitHub account to view or make changes too without affecting the original repository, this is known as forking. Forking in GitHub can be done via the following steps:

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/ci_pp5_tick_it_react) that you would like to fork.
3. At the top right corner of the page click on the fork icon.
4. There should now be a copy of your original repository in your GitHub account.

Please note if you are not a member of an organisation on GitHub then you will not be able to fork your own repository.
   
### Clone a GitHub Repository

You can make a local clone of a repository via the following steps: 

1. Navigate to www.github.com and log in.
2. Once logged in navigate to the desired [GitHub Repository](https://github.com/jkingportfolio/ci_pp5_tick_it_react) that you would like to clone.
3. Locate the code button at the top, above the repository file structure.
4. Select the preferred clone method from HTTPS. SSH or GitHub CLI then click the copy button to copy the URL to your clipboard.
5. Open Git Bash
6. Update the current working direction to the location in which you would like the clone directory to be created.
7. Type `git clone` and paste the previously copied URL at Step 4.
8. `$ clone https://github.com/jkingportfolio/ci_pp5_tick_it_react`
9. Now press enter and the local clone will be created at the desired local location

##### Back to [top](#task-nest)


## Credits

### Tutorials

- Real Python Django redirects tutorial - [The Ultimate Guide to Django Redirects](https://realpython.com/django-redirects/)
- React-multi-select-component video by [Monsterlessons Academy](https://www.youtube.com/@MonsterlessonsAcademy) - [React Select Example | React Dropdown Menu - Fully Customizable](https://www.youtube.com/watch?v=3u_ulMvTYZI)


### Code

 Code from external sources were used as a basis and built on top of in this project, they are credited below:

 - The basis of this project was inspired by the 'Moments' social media platform walk-through project with Code Institute. Using this a a basis for user log in, profile creation and posting to the API I have built my own app and added extra functionality, such as assigning tasks to users and and filtering tasks by criteria.
 - The content of the Create Task component was inspired by a previous student [jkingportfolio](https://github.com/jkingportfolio/ci_pp5_tick_it_react?tab=readme-ov-file#user-experience). The file for this component can be found [here](https://github.com/jkingportfolio/ci_pp5_tick_it_react?tab=readme-ov-file#features) .



[Back to Top](#task-nest)