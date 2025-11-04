import React from "react";
import * as styles from "../assets/scss/component/Main.scss";
import { SiteLayout } from "../layout";

export default function Main() {
    return (
        <SiteLayout>
            <div className={styles.Main}>
                <h2>Main</h2>
            </div>
        </SiteLayout>
    );
}
