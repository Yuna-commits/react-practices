import React from "react";
import * as styles from "../assets/scss/component/Error404.scss";
import { SiteLayout } from "../layout";

export default function Error404(props) {
    return (
        <SiteLayout>
            <div className={styles.Error404}>
                <h2>404 Not Found</h2>
            </div>
        </SiteLayout>
    );
}
