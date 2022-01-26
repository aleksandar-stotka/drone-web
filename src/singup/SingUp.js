import styles from "./SingUp.module.css";
import { useState } from "react";
import { useSingUp } from "../hooks/useSingUp";
import React from "react";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { singup, isPending, error } = useSingUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    singup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["singup-form"]}>
      <h2>Singup</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className="btn">Singup</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
