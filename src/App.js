import { configureStore } from "@reduxjs/toolkit";
import React, { useContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Header from "./components/MainHeader/Header";
import DashboardApp from "./dashboard/DashboardApp";
import Courses from "./pages/Courses";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import SingleCourse from "./pages/SingleCourse";
import CartPage from "./pages/CartPage";
import AuthContext from "./store/auth-context";
// import CartProvider from "./store/CartProvider";
import CheckRouteContext from "./store/check-route-context";
import { reducer } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});
const persistor = persistStore(store);
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

  let { id } = useParams();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<div></div>}>
        {/* <CartProvider> */}
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
                path="course/:id"
                element={ctx.isLoggedIn && <SingleCourse /> }
              >

          
              </Route>
              {
                <Route
                  path="Dashboard"
                  element={ctx.isLoggedIn && <DashboardApp />}
                ></Route>
              }
              {
                <Route
                  path="CartPage"
                  element={ctx.isLoggedIn && <CartPage />}
                ></Route>
              }
            </Routes>
          </BrowserRouter>
        {/* </CartProvider> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
