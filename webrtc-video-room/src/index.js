import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/HomePage";
import Room from "./container/RoomPage";
import NotFound from "./container/NotFound";
import styles from "./app.css";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/r/:room" component={Room} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
