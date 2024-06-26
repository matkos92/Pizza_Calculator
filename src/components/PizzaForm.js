import React from "react";
import { useDispatch } from "react-redux";

export default function PizzaForm() {
  const dispatch = useDispatch();

  const onPeopleChange = e => {
    dispatch({type: "CHANGE_NUMBER_OF_PEOPLE", payload: e.target.value });
  };

  return (
    <div>
      <label>Enter number of people: </label>
      <input
        type="number"
        onChange={onPeopleChange}
        
      />
    </div>
  );
}
