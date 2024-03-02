import "./components/styles.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from "./components/Users";
import UserEdit from "./components/UserEdit";
import { PageNotFound } from "./components/PageNotFound";
import Profile from "./components/Profile";
import ProfileEdit from "./components/ProfileEdit";
import { UserProvider } from "./components/userContext";
import Usercreate from "./components/Usercreate";
import Footer from "./components/Footer";
function App() {
  return (
    <UserProvider>
      <Router> 
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div class="container-fluid">
                
                <Switch>
                  <Route path="/" component={Dashboard} exact={true} />
                  <Route
                    path="/Usercreate"
                    component={Usercreate}
                    exact={true}
                  />
                  <Route path="/Users" component={Users} exact={true} />

                  <Route path="/Profile" component={Profile} exact={true} />
                  <Route
                    path="/ProfileEdit/:id"
                    component={ProfileEdit}
                    exact={true}
                  />
                  <Route exact path="/UserEdit/:id" component={UserEdit} />
                  <Route path="/*">
                    <PageNotFound />
                  </Route>
                </Switch>
            
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;