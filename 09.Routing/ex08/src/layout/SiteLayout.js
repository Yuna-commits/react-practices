import React from "react";
import { Outlet } from "react-router";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from "../assets/scss/layout/SiteLayout.scss";

function SiteLayout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.Content}>
                <Outlet />
            </div>
            <Navigation />
            <Footer />
        </>
    );
}

export default SiteLayout;
