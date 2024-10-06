import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import Guest from "./Pages/Guest.tsx";
import Home from "./Pages/Home.tsx"
import './index.css'

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/guest" component={Guest} />
        </Router>
    ),
    document.getElementById("root")!
);
