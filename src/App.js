import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import DashboardPage from "./pages/dashboard/DashboardPage";
import TaskCreatePage from "./pages/tasks/TaskCreatePage";
import TaskEditPage from "./pages/tasks/TaskEditPage";
import NotFound from "./pages/NotFound";
import TaskPage from "./pages/tasks/TaskPage";
import TasksPage from "./pages/tasks/TasksPage";
import AssignedPage from "./pages/tasks/AssignedPage";
import ProfilesPage from "./pages/profile/ProfilesPage";
import ProfilePage from "./pages/profile/ProfilePage";
import ProfileEditPage from "./pages/profile/ProfileEditPage";
import StausFilterPage from "./pages/tasks/StausFilterPage";

import "./api/axiosDefault";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <DashboardPage />} />
          <Route exact path="/signin" render={() => <SignIn />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route exact path="/profiles" render={() => <ProfilesPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditPage />} />
          <Route exact path="/tasks" render={() => <TasksPage />} />
          <Route exact path="/assigned" render={() => <AssignedPage />} />
          <Route exact path="/tasks/create" render={() => <TaskCreatePage />} />

          <Route
            exact
            path="/tasks/complete"
            render={() => <StausFilterPage filter={`?status=complete`} message="It seems there are no tasks."/>}
          />
          <Route
            exact
            path="/tasks/progress"
            render={() => <StausFilterPage filter={`?status=in-progress`} message="It seems there are no tasks."/>}
          />
          <Route
            exact
            path="/tasks/notstarted"
            render={() => <StausFilterPage filter={`?status=not-started`} message="It seems there are no tasks."/>}
          />
          <Route exact path="/tasks/:id" render={() => <TaskPage />} />
          <Route exact path="/tasks/:id/edit" render={() => <TaskEditPage/>} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
