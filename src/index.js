import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {rendererEntireTree} from "./render";
import state from "./redux/state";

rendererEntireTree(state);

reportWebVitals();
