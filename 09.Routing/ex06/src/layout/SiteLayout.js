import React from "react";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from "../assets/scss/layout/SiteLayout.scss";

function SiteLayout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.Content}>{children}</div>
            <Navigation />
            <Footer />
        </>
    );
}

export default SiteLayout;
