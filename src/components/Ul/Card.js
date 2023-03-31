import React from "react";

import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${styles.card} ${props.className} `}>
      {/* props.children will return the data in between the card component */}
      {props.children}
    </div>
  );
}
