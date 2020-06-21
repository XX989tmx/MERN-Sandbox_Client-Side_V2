import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });


  const {id, onInput} = props;
  const {value, isValid} = inputState;
  useEffect(() => {
      onInput(id, value, isValid)
      
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
      {/* <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Password"
        ></input>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
        ></input>
        <input
          type="range"
          class="form-control-range"
          id="formControlRange"
        ></input>
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        ></input>
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        ></input>
        <label for="inputEmail4">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Email"
        ></input>
        <label for="inputPassword4">Password</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword4"
          placeholder="Password"
        ></input>
        <label for="inputAddress">Address</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        ></input>
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity"></input>
        <select id="inputState" class="form-control">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
        <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"></input> */}
    </div>
  );
};

export default Input;
