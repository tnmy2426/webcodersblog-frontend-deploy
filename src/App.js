import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./styles/App.scss";

//Pages
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
// import Blogs from "./pages/BlogPage/Blogs";
import Contact from "./pages/ContactPage/Contact";
import NotFoundPage from "./pages/ErrorPage/NotFoundPage";
import Portfolios from "./pages/PortfoliosPage/Portfolios";

//components
import Navbar from "./components/Navbar/Navbar.jsx";
// import BlogDetail from "./components/Blog/BlogDetail";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className='App'>
      <aside className={`sidebar ${navToggle ? "navToggle" : ""}`}>
        <Navbar navClose={navClick} />
      </aside>
      <div className='nav_btn' onClick={navClick}>
        <div className='lines_1'></div>
        <div className='lines_2'></div>
        <div className='lines_3'></div>
        <div className='lines_4'></div>
      </div>
      <main className='main_content'>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/portfolios' component={Portfolios} />
            {/* <Route exact path='/blogs' component={Blogs} /> */}
            {/* <Route exact path='/blogs/:id' component={BlogDetail} /> */}
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFoundPage} />
            <Redirect to='/' />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
