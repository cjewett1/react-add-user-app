import React from "react";

import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {/* The text inbetween the button is passed to the props.children and then rendered on the page. For example "Add User". This keeps the component dynamic and reusable throughout the app. */}
      {props.children}
    </button>
  );
}
