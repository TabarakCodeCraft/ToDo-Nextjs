"use client";
import container from "./commponents/container/container";
import Header from "./commponents/header/header";
import Todo from "./commponents/todo/todo";
import styles from "./page.module.css";


export default function Home() {
let id="home";
return(
  <main className={styles.main}>
    <Header id={id}/>
    <container>
      <div className={styles.title}>
        <h1>Simple ToDo App</h1>
        <p>This is ToDo App for test design.</p>

      </div>
      <Todo/>
    </container>
  </main>
)
}
