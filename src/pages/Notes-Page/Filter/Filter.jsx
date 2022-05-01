import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <ul className="filter-section flex">
      <label className="filter-section-title" for="date">
        BY DATE:
      </label>
      <li className="list-item filter-item">
        <label className="filter-item-title">
          <input className="filter-radio" type="radio" name="date" />
          <p className="para-xsmall">Oldest to Newest</p>
        </label>
        <label className="filter-item-title">
          <input className="filter-radio" type="radio" name="date" />
          <p className="para-xsmall">Newest to Oldest</p>
        </label>
      </li>

      <div className="filter-divider"></div>

      <label className="filter-section-title" for="tags">
        BY TAGS:
      </label>

      <li className="list-item filter-item">
        <div className="two-items">
          <label className="filter-item-title">
            <input className="filter-radio" type="radio" name="tag" />
            <p className="para-xsmall">Work</p>
          </label>
          <label className="filter-item-title">
            <input className="filter-radio" type="radio" name="tag" />
            <p className="para-xsmall">Exercise</p>
          </label>
        </div>
        <div className="two-items">
          <label className="filter-item-title">
            <input className="filter-radio" type="radio" name="tag" />
            <p className="para-xsmall">Health</p>
          </label>
          <label className="filter-item-title">
            <input className="filter-radio" type="radio" name="tag" />
            <p className="para-xsmall">Chores</p>
          </label>
        </div>
      </li>

      <div className="filter-divider"></div>

      <li className="filter-section-title">BY PRIORITIES:</li>
      <li className="list-item filter-item">
        <label className="filter-item-title">
          <input className="filter-radio" type="radio" name="priority" />
          <p className="para-xsmall">Low</p>
        </label>
        <label className="filter-item-title">
          <input className="filter-radio" type="radio" name="priority" />
          <p className="para-xsmall">Medium</p>
        </label>
        <label className="filter-item-title">
          <input className="filter-radio" type="radio" name="priority" />
          <p className="para-xsmall">High</p>
        </label>
      </li>
    </ul>
  );
};

export { Filter };
