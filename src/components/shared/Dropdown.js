import React from 'react';

const Dropdown = (props) => {
  const { id, label, options, changeHandler} = props;

  return (
    options.length > 1 ?
    <li>
      <label htmlFor={id}> {label} </label>
      <select className="form-control" id={id} onChange={changeHandler}>
        {options.map((item, index) => {
          return <option key={index}> {item} </option>
        })}
      </select>
    </li> : null
  )
}

export default Dropdown;
