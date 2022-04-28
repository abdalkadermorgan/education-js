import { configureStore } from "@reduxjs/toolkit";
import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/MainHeader/Header";
import DashboardApp from "./dashboard/DashboardApp";
import Courses from "./pages/Courses";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import SingleCourse from "./pages/SingleCourse";
import AuthContext from "./store/auth-context";
import CartProvider from "./store/CartProvider";
import CheckRouteContext from "./store/check-route-context";
import { reducer } from "./store/store";

const store = configureStore({
  reducer: reducer,
});

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
    <Provider store={store}>
      <CartProvider>
        <BrowserRouter>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {checkRoute.routePath !== "/Dashboard" ? (
            <Header onShowCart={showCartHandler} />
          ) : null}
          <Routes>
            {
              <Route
                path="Login"
                element={!ctx.isLoggedIn && <Login />}
              ></Route>
            }
            <Route path="/" element={ctx.isLoggedIn && <HomePage />}></Route>
            <Route
              path="Courses"
              element={ctx.isLoggedIn && <Courses />}
            ></Route>
            <Route
              path="Courses/SingleCourse"
              element={ctx.isLoggedIn && <SingleCourse />}
            ></Route>
            {
              <Route
                path="Dashboard"
                element={ctx.isLoggedIn && <DashboardApp />}
              ></Route>
            }
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
