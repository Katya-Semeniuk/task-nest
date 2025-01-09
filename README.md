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
  10. [Validation](#validation)
      1. [HTML](#html-validation)
      2. [CSS](#css-validation)
      3. [ESLint JavaScript JSX Validation](#eslint-javascript-jsx-validation)
      4. [Chrome Dev Tools Lighthouse](#chrome-dev-tools-lighthouse-validation)
  11. [Testing](#testing)
      1. [Device Testing](#device-testing)
      2. [Browser Compatibility](#browser-compatibility)
      3. [Manual Testing](#manual-testing)
  12. [Bugs](#bugs)
  13. [Deployment](#deployment)
      1. [Heroku](#heroku)
      2. [Forking GitHub Repo](#forking-the-github-repository)
      3. [Clone a GitHub Repo](#clone-a-github-repository)
  14. [Credits](#credits)
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
7. As a user, I can delete my post so that it is no longer saved in the database and does not distract from current tasks. 
8. As a user, I can edit my own tasks so I can make corrections or update it after it was created.
8. As a user, I can view my task list to focus only on my content.
9. As a user, I can view a list of assigned tasks so that I can focus on tasks that I am assigned to.



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

<details><summary>Profile edit page</summary>
<img src="">
</details>


<details><summary>404 page</summary>
<img src="">
</details>


### CSS Validation

The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors.

<details><summary>App.module.css</summary> 
<img src=""> 
</details> 

<details><summary>Button.module.css</summary> 
<img src=""> 
</details>

<details><summary>Avatar.module.css</summary> 
<img src=""> 
</details>

<details><summary>NavBar.module.css</summary> 
<img src=""> 
</details>

<details><summary>NotFound.module.css</summary> 
<img src=""> 
</details>

<details><summary>TaskForm.module.css</summary> 
<img src=""> 
</details>

<details><summary>TaskDetail.module.css</summary> 
<img src=""> 
</details>

<details><summary>SignInUpForm.module.css</summary> 
<img src=""> 
</details>





### ESLint JavaScript JSX Validation 



### Chrome Dev Tools Lighthouse Validation


#### Desktop 
<details><summary>Results</summary>

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

<details><summary>Task edit page</summary>
<img src="">
</details>

<details><summary>Task detail page</summary>
<img src="">
</details>

<details><summary>Assigned page</summary>
<img src="">
</details>



<details><summary>Users page</summary>
<img src="">
</details>

<details><summary>Profile page</summary>
<img src="">
</details>

<details><summary>Profile edit page</summary>
<img src="">
</details>


<details><summary>404 page</summary>
<img src="">
</details>
</details>



#### Mobile 

<details><summary>Results</summary>

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

<details><summary>Task edit page</summary>
<img src="">
</details>

<details><summary>Task detail page</summary>
<img src="">
</details>

<details><summary>Assigned page</summary>
<img src="docs/validation/lighthouse/mobile-lighthouse-validation-watched-page.png">
</details>


<details><summary>Users page</summary>
<img src="">
</details>

<details><summary>Profile page</summary>
<img src="">
</details>

<details><summary>Profile edit page</summary>
<img src="">
</details>

<details><summary>Change password page</summary>
<img src="">
</details>

<details><summary>404 page</summary>
<img src="">
</details>
</details>





##### Back to [top](#tick-it)


## Testing

### Device Testing

This site was tested on the following devices:
- Windows 10 PC with a 24" MSI Curved gaming monitor
- Raspberry Pi 4 with a 24" MSI Curved gaming monitor
- Xiaomi Redmi Note 10 Pro

### Browser compatibility

The website was tested on the following web browsers:
- Google Chrome (Version 112.0.5615.121)
- DuckDuckGo
 
### Manual testing

<summary>See Testing User Stories</summary>

#### Testing User Stories - Users

To avoid unnecessary repetition of images, only the feature being referred to will have screenshots. Information on how to navigate to the feature referred to will be described within its relevant table reference. 

1. As a new user, I can register an account with Tick It so that I can become a member and use the app as intended.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Authentication  | Navigate to the sign up page, fill in the required fields and submit the sign up form  | An account which requires authentication will be created upon a successful account creation  | Works as expected |
|  Sign Up  |  Navigate to the sign up page, fill in the required fields and submit the sign up form |  User to navigate to the sign up page, enter all required fields and upon account creation be redirected to the log in page | Works as expected |
|  Input Validation  | Enter values into the sign up form fields  | Fields requiring input will be validated and make the user aware if any validation errors occur  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/1-testing-user-story-1.png">
<img src="docs/testing-manual/1-testing-user-story-2.png">
<img src="docs/testing-manual/1-testing-user-story-3.png">
</details>

2. As a user, I can use the navigation bar so that I can seamlessly navigate around the app.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Nav Bar  | Locate the nav bar located at the top of each page and select the relevant link, if on smaller devices click on the burger dropdown button to access the same icons / links  | User to be able to find the nav bar located at the top of each page and use to navigate their way through the site  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/2-testing-user-story-1.png">
</details>

3. As a user, I can see visual indicators for example of having watched / unwatched a task so that I can tell what my status of watching is.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watched / Unwatched button  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right corner indicating if the task is watched or not by the current user  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/3-testing-user-story-1.png">
</details>

4. As a user, I can watch and unwatch tasks so that I can keep up to date with that particular task via a filtered list. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watch / Unwatch task  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right corner indicating if the task is watched or not by the current user  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  | Works as expected |
|  Watched / Unwatched button  | Navigate to the task list page or a page detail page, the Watch / Unwatch status button will be located in the bottom right, click on the icon to watch / unwatch a task  | Watch icon to update dependant on the status of if a currently signed in user has a watch relationship with the task object  |Works as expected  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/4-testing-user-story-1.png">
<img src="docs/testing-manual/4-testing-user-story-2.png">
</details>

5. As a user, I can view a list of my watched tasks so that I can focus on content I wish to view. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Watched list  | Navigate to the watched list page via the link in the nav bar. View the list of currently watched tasks.  | User to be presented with the list of all their currently watched task   | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/5-testing-user-story-1.png">
</details>

6. As a user, I can use the search bar on the Task list section so that I can find particular tasks easier. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Search Bar   | Navigate to the task lists page via the icon / link in the nav bar. At the top of the page find the search bar, enter desired characters / keywords and be shown the results.   | Users to be presented with a list of relevant tasks based on their search query and if there is no results a no results found image will display. | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/6-testing-user-story-1.png">
<img src="docs/testing-manual/6-testing-user-story-2.png">
</details>

7. As a user, I can delete my tasks so that I can permanently remove tasks I do not wish to keep. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete Task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the delete button to delete the task  | User to click the delete button and the task to be deleted from the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/7-testing-user-story-1.png">
<img src="docs/testing-manual/7-testing-user-story-2.png">
</details>

8. As a user, I can edit my tasks so that I can correct spelling mistakes I may have entered into the task information fields.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit Task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the task edit form to be displayed in which the user can update the tasks information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/8-testing-user-story-1.png">
<img src="docs/testing-manual/8-testing-user-story-2.png">
<img src="docs/testing-manual/8-testing-user-story-3.png">
<img src="docs/testing-manual/8-testing-user-story-4.png">
</details>

9. As a user, I can view task comments so that I can obtain more information on the task in question. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task Comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed  | User to be able to view their own and other users comments on the currently displayed task.  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/9-testing-user-story-1.png">
</details>

10. As a user, I can comment on other tasks so that I can interact with other users.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create task comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Enter comment into the comment box and click post to add the comment | User to be able to post a comment that will show their name, profile image and how long ago the comment was posted  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/10-testing-user-story-1.png">
<img src="docs/testing-manual/10-testing-user-story-2.png">
</details>

11. As a user, I can edit or delete my comment on a task incase of input error. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit task comment  | Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Find the comment you wish to edit and click on the three dots icon. Enter updated comment and click save  | User to be able to edit and update their owned comments  | Works as expected |
|  Delete task comment  |  Navigate to a task by means of the tasks list or a users profile task list. Click on a task to view the task detail page. Scroll to bottom and the comment section for that particular task will be displayed . Find the comment you wish to delete and click on the three dots icon. Click on the delete button to delete the comment | User to be able to edit and update their owned comments  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/11-testing-user-story-1.png">
<img src="docs/testing-manual/11-testing-user-story-2.png">
<img src="docs/testing-manual/11-testing-user-story-3.png">
<img src="docs/testing-manual/11-testing-user-story-4.png">
<img src="docs/testing-manual/11-testing-user-story-5.png">
<img src="docs/testing-manual/11-testing-user-story-6.png">
<img src="docs/testing-manual/11-testing-user-story-7.png">
</details>

12. As a user, I can manage my tasks so that I can add, edit or delete tasks as needed. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create task  | Click on the Create task button which is located at the top of the task list page or from your own profile. Fill in the form with the relevant information into the form fields and click save.  | User to be able to successfully create a task which will be added to the database and all relevant pages on the site  | Works as expected |
|  Delete task  | Navigate to the task detail page by clicking on the relevant task on the task list, or from a users profile. Click on the 3 dots icon in the top right corner of the task. Click on the delete button  | User to click the delete button and the task to be deleted from the database  | Works as expected |
|  Edit task  | Navigate to the task in questions task detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the task edit form to be displayed in which the user can update the tasks information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/12-testing-user-story-1.png">
<img src="docs/testing-manual/12-testing-user-story-2.png">
<img src="docs/testing-manual/12-testing-user-story-3.png">
<img src="docs/testing-manual/12-testing-user-story-4.png">
<img src="docs/testing-manual/12-testing-user-story-5.png">
<img src="docs/testing-manual/12-testing-user-story-6.png">
<img src="docs/testing-manual/12-testing-user-story-7.png">
<img src="docs/testing-manual/12-testing-user-story-8.png">
<img src="docs/testing-manual/12-testing-user-story-9.png">
<img src="docs/testing-manual/12-testing-user-story-10.png">
</details>

13. As a user, I can request a password so that I can log back into my account if I have forgotten my password. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Change Password  | From any page, click on the Contact icon in the Nav Bar. Fill out the form stating a password has been forgotten and submit the form  | User will be giving a feedback message on successful contact message post and the admin will reset the password from the back end | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/13-testing-user-story-1.png">
<img src="docs/testing-manual/13-testing-user-story-2.png">
</details>

14. As a user, I can log in so that I can access my account, view my profile, tasks and other user's tasks. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Authentication  | Navigate to the log in page, fill in the required fields and submit form to login  | User log in credentials to be authenticated against the database and granted access if valid  | Works as expected |
|  Log in  | Navigate to the log in page, fill in the required fields and submit form to login  | User log in credentials to be authenticated against the database and granted access if valid  | Works as expected  |
|  Input validation  | From the log in page enter information to the username and password fields  |  User to be informed if entered values to not meet validation criteria | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/14-testing-user-story-1.png">
<img src="docs/testing-manual/14-testing-user-story-2.png">
<img src="docs/testing-manual/14-testing-user-story-3.png">
<img src="docs/testing-manual/14-testing-user-story-4.png">
</details>

15. As a user, I can log out so that other users using the same device cannot access my account. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Log out  | From the nav bar click on the log out icon  | User to be successfully logged out and return to the home page  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/15-testing-user-story-1.png">
<img src="docs/testing-manual/15-testing-user-story-2.png">
</details>

16. As a user, I can have a profile page so that I and other users can view my list of tasks, packs and assigned tasks.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Profile section  | Sign up to the site and then navigate to the profile page from the nav bar  | User to be presented with their profile page which displays all relevant information of the user  | Works as expected |
|  Profile tabs  | Navigate to the profile page. Using the tabs click on each one to display the desired information such as tasks, packs and assigned items.  | User to be able to view all information related to their profile and prescence on the site.  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/16-testing-user-story-1.png">
<img src="docs/testing-manual/16-testing-user-story-2.png">
<img src="docs/testing-manual/16-testing-user-story-3.png">
</details>

17. As a user, I can update my profile so that my profile can stay up to date with my latest information. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit Profile  | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. Enter new values for fields and click submit  | Users profile to be updated with values entered to form fields.  | Works as expected |
|  Task count  | Navigate to the users profile by clicking on the profile icon on the nav bar. View the task count located in the middle of the profile information panel  | Users to be provided with the currently viewed profiles task count  | Works as expected |
|  Change Password  | Navigate to the profile page by clicking on the profile button on the nav bar or the icon of posted by avatar on a task. Click the 3 dots icon in the top right corner of the profile. Click on edit profile, from the edit profile form click on the change password button. Enter new password and confirm password then submit.  | User should be able to update their password and be presented with a modal to confirm on successfull update | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/17-testing-user-story-1.png">
<img src="docs/testing-manual/17-testing-user-story-2.png">
<img src="docs/testing-manual/17-testing-user-story-3.png">
<img src="docs/testing-manual/17-testing-user-story-4.png">
<img src="docs/testing-manual/17-testing-user-story-5.png">
<img src="docs/testing-manual/17-testing-user-story-6.png">
<img src="docs/testing-manual/17-testing-user-story-7.png">
</details>

18. As a user, I can add a profile picture so that other members can easily recognize my tasks or comments.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Edit profile   | Navigate to the users profile by clicking on the profile icon on the nav bar. Click on the 3 dots icon in the top right corner. Click on edit profile button. add image by clickon on the chose file button. Once image has been selected click save button  | User to have the ability to update their profile image to whatever they select from their drive  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/18-testing-user-story-1.png">
<img src="docs/testing-manual/18-testing-user-story-2.png">
<img src="docs/testing-manual/18-testing-user-story-3.png">
<img src="docs/testing-manual/18-testing-user-story-4.png">
</details>

19. As a user, I can view the Home Page so that I can understand what the website is about, create an account or log in. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Home page  | Navigate to the Tick It site in your internet browser. View the landing page.  | User to view the landing page and be able to understand what the website is about  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/19-testing-user-story-1.png">
</details>

20. As a user, I can display basic info on my profile page so that other members can learn more about me. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Profile section   | Navigate to the users profile by clicking on the users icon from the nav bar and then searching for the user from the user list clicking on the desired profile to view  | Users profile to be updated with values entered to form fields.  |Works as expected  |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/20-testing-user-story-1.png">
<img src="docs/testing-manual/20-testing-user-story-2.png">
</details>

21. As a user, I can search for tasks via a task list or search bar so that I can find specific tasks.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Task list   | When logged in, navigate to the task lists page from the nav bar. Scroll down the page to view all tasks that are on that database  | User to be presented with list of all tasks  | Works as expected |
| Task search   | When logged in, navigate to the task lists page from the nav bar. Use the search bar at the top of the page to search for tasks based on words, letter or numbers  | User to be able to query the database for specific tasks based on their search criteria  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/21-testing-user-story-1.png">
<img src="docs/testing-manual/21-testing-user-story-2.png">
<img src="docs/testing-manual/21-testing-user-story-3.png">
</details>

22. As a user, I can fill in a contact form so that I can enquire about issues I may have regarding the app. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Contact  | Click on the Contact icon from the nav bar which is available to annonymous and authenticated users. Enter the relevant information to the form fields and click on submit  | Users and visitors to the site to have the ability to post a contact query and be presented with feedback on successful posting of query  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/22-testing-user-story-1.png">
<img src="docs/testing-manual/22-testing-user-story-2.png">
<img src="docs/testing-manual/22-testing-user-story-3.png">
</details>

23. As a user, I can receive feedback so that I can confirm whether the contact form submission was successful or not.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Site feedback  | Perform various tasks for example a form to be sent which would require some form of feedback  | User to be provided feedback regarding the sucess status of the performed task  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/23-testing-user-story-1.png">
</details>

24. As a user, I can scroll through the latest tasks on the app so that I can find new tasks to complete.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task list  | Log in and navigate to the task list page by clicking on the task list icon in the nav bar. Scroll the list of tasks.  | Users to be able to scroll through all tasks that are on the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/24-testing-user-story-1.png">
</details>

25. As a user, I can browse a list of user accounts so that I can view that particular account. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Users list  | Log in and from the nav bar click on the users icon. View the list of all users on the platform  | Users to be able to view a list of all users on the platform and also use the search bar to help aid finding users  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/25-testing-user-story-1.png">
</details>

26. As a user, I can create tasks so that I can partake in the main purpose of the site.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create Task  | From the Nav bar click on the add task button or from the Tasks page, Watched page or profile page click on the create task button  | User to be presented with a form to create a task and upon submission create a task object | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/26-testing-user-story-1.png">
<img src="docs/testing-manual/26-testing-user-story-2.png">
<img src="docs/testing-manual/26-testing-user-story-3.png">
</details>

27. As a user, I can create packs so that I can group tasks together.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Create Pack  | From packs page or profile page click on the create pack button  | User to be presented with a form to create a pack and upon submission create a pack object | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/27-testing-user-story-1.png">
<img src="docs/testing-manual/27-testing-user-story-2.png">
<img src="docs/testing-manual/27-testing-user-story-3.png">
</details>

28. As a user, I can delete my packs so that I can permanently remove packs I do not wish to keep.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete pack  | Navigate to the pack detail page by clicking on the relevant pack on the pack list, or from a users profile. Click on the 3 dots icon in the top right corner of the pack. Click on the delete button  | User to click the delete button and the pack to be deleted from the database  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/28-testing-user-story-1.png">
<img src="docs/testing-manual/28-testing-user-story-2.png">
</details>

29. As a user, I can edit my packs so that I can correct spelling mistakes or I may have entered into the pack information fields.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Edit pack  | Navigate to the pack in questions pack detail page, click on the 3 dots icon located in top right corner and click on the edit button to be taken to the edit task form. Enter relevant values into fields and click on save or cancel to cancel the current edit  | User to click the edit button and the pack edit form to be displayed in which the user can update the packs information  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/29-testing-user-story-1.png">
<img src="docs/testing-manual/29-testing-user-story-2.png">
<img src="docs/testing-manual/29-testing-user-story-3.png">
</details>

#### Testing User Stories - Site Owner

30. As the site owner, I would want to validate users' data entries on sign up so that users can create a log in which meets the requirements.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Input validation   | Navigate to the Tick It site. Click on the log in icon in the nav bar. Enter username and password to the relevant fields.   | User input to be validated again the database and signed in if valid and presented with error messages relevant to the validation failing  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/30-testing-user-story-1.png">
</details>

31. As the site owner, I would want to ensure only logged in users can post from their account and edit their profile so that data privacy is ensured. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
| Authentication   | Create code which authenticates if the current user is the owner of items within the site prior to allowing them to edit or delete such items  | Users can only edit or delete tasks and packs they own or their own profile and not others  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/31-testing-user-story-1.png">
<img src="docs/testing-manual/31-testing-user-story-2.png">
</details>

32. As the site owner, I would want to have the ability to remove tasks and task comments so that I can keep the app clean and friendly. 

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Delete task  | Access the task objects in the back end API with Djangos admin panel and delete the neccessary tasks  | Admin to have the ability to delete any database task  | Works as expected |
|  Delete task comment  |  Access the comment objects in the back end API with Djangos admin panel and delete the neccessary comments | Admin to have the ability to delete any database comment  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/32-testing-user-story-1.png">
<img src="docs/testing-manual/32-testing-user-story-2.png">
<img src="docs/testing-manual/32-testing-user-story-3.png">
<img src="docs/testing-manual/32-testing-user-story-4.png">
<img src="docs/testing-manual/32-testing-user-story-5.png">
<img src="docs/testing-manual/32-testing-user-story-6.png">
</details>

33. As the site owner, I would want the site to be fully responsive so that users can use it across multiple devices and create a good user experience.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Responsiveness  | Use the site on a range of devices and screen sizes  | Users will have a pleasant and enjoyable experience on the website regardless of their screen or device size  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/33-testing-user-story-1.png">
<img src="docs/testing-manual/33-testing-user-story-2.png">
</details>

34. As the site owner, I would want to use the app search function so that I can search for particular tasks by their title.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Task search  |When logged in, navigate to the task lists page from the nav bar. Use the search bar at the top of the page to search for tasks based on words, letter or numbers  | User to be able to query the database for specific tasks based on their search criteria | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/34-testing-user-story-1.png">
<img src="docs/testing-manual/34-testing-user-story-2.png">
</details>

35. As the site owner, I would want a 404 error page so that users do not have to use the back navigation button if an error occurs.

| Feature       | Action        | Expected Result  | Actual Result |
| ------------- | ------------- | -------------    | ------------- |
|  Error pages  | Navigate to any page that does not exist  | User to be presented with 404 error page and a button to return home  | Works as expected |

<details>
<summary>Screenshots</summary>
<img src="docs/testing-manual/35-testing-user-story-1.png">
</details>


##### Back to [top](#tick-it)


## Bugs

| **Bug** | **Fix** |
| ------- | ------- |
| Pack not submitting the tasks array to the database | Although the database has been created in such way to accept a list of tasks, it didn't seem to work when passing a list of task id's in the form. Tests were conducted which proved that a single entry could be entered, i decided to try and create a for loop to pass in each task to the pack one a time and this achieved the desired outcome |
| Task edit form wont submit if due_date is not set a value | Update due_date to be an empty string and a conditional if statement was placed in the form append which checked if due_date was left empty or null and if true it wouldn't append this field. This fixed the issue as the field in the database has blank and null set to True |
| Profile list only displaying the first 10 results in Infinite Scroll | fetchMoreData was properly implemented  |
| assigned to tasks wouldn't display in the assigned to tab | A filter was added that would filter tasks based on if the assigned_to id matched that of the profile owners |
| Tab active colour would revert to the default | Documentation for react bootstrap didn't mention that the CSS has to be over written by using activeClassName property. Once this was used the issue was resolved |
| Searching for tasks if the single letter Y is entered, tasks with a title that only includes a number will be displayed | I could not work out why this was the case therefore this has had to be left in as a known bug |
| When editing a pack, the data is not correctly pulled from the database thus resulting in the user having to remove all tasks and re select them | Due to time constraints i was unable to find a solution to this bug so i had to be left as a know bug. This bug still allows functionality although the user experience is slightly impacted due to this |
| Pack details not displaying list of associated tasks due to 500 error | Due to not having control over the status of elephant SQLs servers I had to leave this as a known bug. I did implement code to retry if a 500 error is returned however sometimes this exceeds the max retry of 3 times. This bug still allows functionality although the user experience is slightly impacted due to having to refresh the page manually in the occasional instances in which this happens |


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