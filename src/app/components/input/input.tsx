"use client";

import React, { useRef, useState, KeyboardEvent } from "react";
import page from "../../page.module.scss";
import styles from "./input.module.scss";

export default function TextInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputRef.current !== null) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setIsConfirmed(true);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.group}>
        <input
          type="text"
          className={styles.input}
          required={true}
          ref={inputRef}
          onKeyPress={handleKeyPress}
        />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
        <label className={styles.label}>
          {isConfirmed ? "Subscription confirmed!" : "Join the beta"}
        </label>
      </div>
    </div>
  );
}
