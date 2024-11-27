import { createContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TasksList from './components/TasksList';
import NotFound from './pages/NotFound';
import "./api/axiosDefault";
import axios from "axios";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
       <SetCurrentUserContext.Provider value={setCurrentUser}>
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
    </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
