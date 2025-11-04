import React from "react";
import * as styles from "../assets/scss/component/Guestbook.scss";
import { SiteLayout } from "../layout";

export default function Gallery() {
    return (
        <SiteLayout>
            <div className={styles.Guestbook}>
                <h2>Guestbook</h2>
            </div>
        </SiteLayout>
    );
}
