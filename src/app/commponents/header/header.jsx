import React from "react";
import styles from "./header.module.css";
import container from "../container/container";
import Link from "next/link";

function Header({ id }) {
    let color1 = "black";
    let color2 = "black";
    if (id === "home") { color1 = "blue" }
    if (id === "about") { color2 = "blue" }

    return (
        <div className={styles.header}>
            <container>
                <div className={styles.nav}>
                    <div className={styles.logo}>
                        <h1>ToDo</h1>
                </div>
                <div>
                    <ul className={styles.content}>
                        <li>
                            <Link href="/">
                                <span style={{ color: color1 }}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span style={{ color: color2 }}>About</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </container>
        </div>
    );
}
export default Header;