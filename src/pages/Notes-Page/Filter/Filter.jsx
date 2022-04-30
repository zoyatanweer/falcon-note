import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <ul className="filter-section flex">
      <label className="filter-section-title" for="date">
        BY DATE:
      </label>
      <li className="list-item filter-item">
        <label className="filter-item-title old-date">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Oldest to Newest</p>
        </label>
        <label className="filter-item-title new-date">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Newest to Oldest</p>
        </label>
      </li>

      <div className="filter-divider"></div>

      <label className="filter-section-title" for="tags">
        BY TAGS:
      </label>

      <li className="list-item filter-item">
        <label className="filter-item-title tag-work">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Work</p>
        </label>
        <label className="filter-item-title tag-exercise">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Exercise</p>
        </label>
        <label className="filter-item-title tag-health">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Health</p>
        </label>
        <label className="filter-item-title tag-chores">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Chores</p>
        </label>
      </li>

      <div className="filter-divider"></div>

      <li className="filter-section-title">BY PRIORITIES:</li>
      <li className="list-item filter-item">
        <label className="filter-item-title prio-low">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Low</p>
        </label>
        <label className="filter-item-title prio-medium">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">Medium</p>
        </label>
        <label className="filter-item-title prio-high">
          <input className="filter-radio" type="radio" name="sort" />
          <p className="para-xsmall">High</p>
        </label>
      </li>
    </ul>
  );
};

export { Filter };
