import React from "react";
import styles from "./container.module.css";
function container({ childern }) {
    return (
        <div className={styles.container}>{childern}</div>
    )
}

export default container;