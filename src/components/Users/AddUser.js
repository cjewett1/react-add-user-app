import React, { useState } from "react";
import Card from "../Ul/Card";
// can be imported as styles or classes
import styles from "./AddUser.module.css";
import Button from "../Ul/Button";
import ErrorModal from "../Ul/ErrorModal";

export default function AddUser(props) {
  //use state always returns an array with exactly two elements. The initial state and the state that it will change to. We use array destructuring to get these array elements and put them into variables which will be used with the JSX below.

  //enteredUsername is the current state snapshot, and when the state re-rerenders the enteredUsername holds the latest state snapshot. setEnteredUsername contains a function that can then be used to actually update the state on the page and trigger a re-render.
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty value)",
      });
      return;
    }
    //this age is actually returned as a string, to ensure its a number add a + before the constant.
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (greater than 0)",
      });

      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            type="text"
          />
          <label htmlFor="username">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          {/* "Add User" is passed to the component via props and is then rendered. This means that we can use the <Button></Button> component in multiple spots because the data inbetween the button is a prop and the component renders it as such. */}
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
