import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { get_articles } from "./redux/Action/articles";
import { get_current, get_users } from "./redux/Action/authaction";
import Navigation from "./Navigation";
import Alerterrors from "./Components/Alerterrors";
import Login from "./Login";
import Register from "./Register";
import PrivetRoutes from "./Components/PrivateRoutes/PrivetRoutes";
import UserProfile from "./Components/User/UserProfile";
import Articles from "./Components/User/Articles";
import UserSettings from "./Components/User/UserSettings";
import Enseignantroute from "./Components/PrivateRoutes/Enseignantroute";
import EnseignantProfile from "./Components/Enseignant/EnseignantProfile";
import Article from "./Components/Enseignant/Article";
import EnseignantSettings from "./Components/Enseignant/EnseignantSettings";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_articles());
    dispatch(get_current());
    dispatch(get_users());
  }, [dispatch]);
  return (
    <div className="App">
      <Navigation></Navigation>
      <Alerterrors />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <PrivetRoutes>
              <UserProfile></UserProfile>
            </PrivetRoutes>
          }
        />
        <Route
          path="/profile/Articles"
          element={
            <PrivetRoutes>
              <Articles />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/profile/updateuser/:id"
          element={
            <PrivetRoutes>
              <UserSettings />
            </PrivetRoutes>
          }
        ></Route>
        <Route
          path="/Enseignant"
          element={
            <Enseignantroute>
              <EnseignantProfile />
            </Enseignantroute>
          }
        ></Route>
        <Route
          path="/Enseignant/Article"
          element={
            <Enseignantroute>
              <Article />
            </Enseignantroute>
          }
        ></Route>
        <Route
          path="/Enseignant/updateuser/:id"
          element={
            <Enseignantroute>
              <EnseignantSettings />
            </Enseignantroute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <Adminrouter>
              <Admin />
            </Adminrouter>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
