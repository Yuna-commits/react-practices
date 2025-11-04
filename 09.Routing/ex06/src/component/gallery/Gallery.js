import React from "react";
import { SiteLayout } from "../layout";
import * as styles from "../../assets/scss/component/Gallery.scss";
import Header from "./Header";

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Gallery}>
                <Header />
            </div>
        </SiteLayout>
    );
}
