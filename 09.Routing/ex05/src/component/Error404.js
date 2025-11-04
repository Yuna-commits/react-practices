import React from "react";
import Header from "../layout/Header";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";
import * as styles from "../assets/scss/component/Error404.scss";

function Error404(props) {
    return (
        <>
            <Header />
            <div className={styles.Error404}>
                <h2>404 Not Found</h2>
            </div>
            <Navigation />
            <Footer />
        </>
    );
}

export default Error404;
