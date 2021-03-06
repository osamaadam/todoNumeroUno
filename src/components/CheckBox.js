import React from "react";

function CheckBox(props) {
  const entryStyle = {
    textDecorationLine: props.item.completed ? "line-through" : null,
    color: props.item.completed ? "grey" : null,
  };
  return (
    <div>
      <ul className="list-group">
        <div className="list-group list-group-horizontal">
          <li
            className="list-group-item list-group-item-action chBoxList"
            onClick={() => props.handleChange(props.item._id)}
          >
            <label
              htmlFor={props.item._id}
              style={entryStyle}
              className="chBoxLabel"
            >
              <input
                className="chBox"
                type="checkbox"
                id={props.item._id}
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item._id)}
              />

              {props.item.title}
            </label>
          </li>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.handleRemove(props.item._id)}
          >
            Remove
          </button>
        </div>
      </ul>
    </div>
  );
}

export default CheckBox;
