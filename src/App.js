import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TasksList from './components/TasksList';
import NotFound from './pages/NotFound';
import "./api/axiosDefault";



function App() {

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      <Switch>
          <Route
            exact
            path="/"
            render={() => ( <h1>Home page</h1>)}
          />
           <Route
            exact
            path="/signin"
            render={() => <SignIn />}
          />
          <Route
            exact
            path="/signup"
            render={() => <SignUp />}
          />
          <Route
            exact
            path="/tasks"
            render={() => <TasksList />}
          />
          <Route
            render={() => <NotFound />}
          />
          </Switch>
       
      </Container>

    </div>
  );
}

export default App;
