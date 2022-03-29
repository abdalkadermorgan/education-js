import React, { useContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Courses from './pages/Courses';
import SingleCourse from "./pages/SingleCourse";
import DashboardApp from './dashboard/DashboardApp';
import Header from './components/MainHeader/Header';
import AuthContext from './store/auth-context';
import CheckRouteContext from './store/check-route-context';
import CartProvider from './store/CartProvider';
import Cart from './components/cart/Cart';

function App() {
  const ctx = useContext(AuthContext);
  const checkRoute = useContext(CheckRouteContext);

  // console.log(checkRoute);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      <BrowserRouter>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        {checkRoute.routePath !== "/Dashboard" ? <Header onShowCart={showCartHandler} /> : null}
        <Routes>
          {<Route path="Login" element={!ctx.isLoggedIn && <Login />}></Route>}
          <Route path="/" element={ctx.isLoggedIn && <HomePage />}></Route>
          <Route path="Courses" element={ctx.isLoggedIn && <Courses />}></Route>
          <Route path="Courses/SingleCourse" element={ctx.isLoggedIn && <SingleCourse />}></Route>
          {<Route path="Dashboard" element={ctx.isLoggedIn && <DashboardApp />}></Route>}
        </Routes>
      </BrowserRouter>

    </CartProvider>
  );
}

export default App;
