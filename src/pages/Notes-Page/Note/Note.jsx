import React from "react";
import {
  ColorPickerIcon,
  LabelIcon,
  PinIcon,
  PriorityIcon,
} from "../../../Assets/Svg/allsvg";

import "./Note.css";

const Note = () => {
  return (
    <div className="notes-container flex">
      <div className="default-text">
        <p className="typography-gray para-center">
          Notes added will appear here.{" "}
        </p>
      </div>
      <div className="add-new-note flex">
        <div className="input-fields-div flex">
          <div className="input-box mg-xs">
            <label for="username" className="input-label">
              Title:
            </label>
            <input
              id="title"
              type="text"
              className="input"
              placeholder="Title"
            />
          </div>
          <div className="right-div mg-xs flex">
            {/* ---------future use-------- */}
            {/* <div className="tag-choices">
              <div className="tag-options tag-work">Work</div>
              <div className="tag-options tag-exercise">Exercise</div>
              <div className="tag-options tag-health">Health</div>
              <div className="tag-options tag-chores">Chores</div>
            </div> */}
            <LabelIcon className="right-side-icons flex" />
            {/* <div className="priority-choices">
              <div className="priority-options prio-low">Low</div>
              <div className="priority-options prio-medium">Medium</div>
              <div className="priority-options prio-high">High</div>
            </div> */}
            <PriorityIcon className="right-side-icons" />
            <PinIcon className="right-side-icons" />
          </div>
        </div>
        <div className="note-field mg-xs flex">
          <label for="username" className="input-label label-note-field">
            Note:
          </label>
          <textarea
            className="textarea mg-xs"
            placeholder="Empty your mind here.."
          ></textarea>
        </div>
        <div className="note-footer flex align-center">
          <div className="color-picker-btn flex align-center">
            <ColorPickerIcon className="right-nav-img color-icon" />
            <div className="color-choices mg-xs flex align-center">
              <div className="colored-note color-green"></div>
              <div className="colored-note color-orange"></div>
              <div className="colored-note color-blue"></div>
              <div className="colored-note color-red"></div>
              <div className="colored-note color-violet"></div>
            </div>
          </div>
          <div className="add-note-btn flex">
            <button className="btn box-shadow btn-primary">Add note</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Note };
