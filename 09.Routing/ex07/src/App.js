import React from "react";
import { useRoutes } from "react-router";
import Main from "./component/Main";
import { Gallery } from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import Error404 from "./component/Error404";
import "./assets/scss/App.scss";

export default function App() {
    return useRoutes([
        { path: "/", element: <Main /> },
        { path: "/gallery", element: <Gallery /> },
        { path: "/guestbook", element: <Guestbook /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <Error404 /> },
    ]);

    /*
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<Main />}/>
                <Route path={'/gallery'} element={<Gallery />}/>
                <Route path={'/guestbook'} element={<Guestbook />}/>
                <Route path={'/about'} element={<About />}/>
                <Route path={'*'} element={<Error404 />}/>
            </Routes>
        </Router>
    );
    */
}
