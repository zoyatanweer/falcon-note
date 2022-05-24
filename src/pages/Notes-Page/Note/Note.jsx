import React from "react";
import {
  ColorPickerIcon,
  LabelIcon,
  PinIcon,
  PriorityIcon,
} from "../../../Assets/Svg/allsvg";

// import { Editor } from "@tinymce/tinymce-react";

import "./Note.css";
import { useNote } from "../../../context/NoteContext";

// tinymce.init({
//   selector: "textarea", // change this value according to your HTML
//   menubar: false,
// });
const Note = () => {
  const {
    notes,
    setNotes,
    setNoteContent,
    noteContent,
    initialState,
    addNotes,
    singleNote,
    setSingleNote,
  } = useNote();

  // console.log(useNote());

  console.log("hi", setNoteContent);
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
            <label htmlFor="title" className="input-label">
              Title:
            </label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              className="input"
              // value={noteContent.title}
              onChange={(e) =>
                setNoteContent((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="right-div mg-xs flex">
            {/* ---------future use-------- */}
            <div className="icon-dropdown">
              <LabelIcon className="right-side-icons flex pos-relative" />
              <div className="tag-choices">
                <div className="two-elements-note">
                  <div className="tag-options tag-work">Work</div>
                  <div className="tag-options tag-exercise">Exercise</div>
                </div>
                <div className="two-elements-note">
                  <div className="tag-options tag-health">Health</div>
                  <div className="tag-options tag-chores">Chores</div>
                </div>
              </div>
            </div>
            <div className="icon-dropdown">
              <PriorityIcon className="right-side-icons" />

              <div className="priority-choices">
                <div className="two-elements-note">
                  <div className="priority-options prio-low">Low</div>
                  <div className="priority-options prio-medium">Medium</div>
                </div>
                <div className="priority-options prio-high">High</div>
              </div>
            </div>
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
          {/* <Editor
            apiKey="4dmm3xu40at1e9gl89degd7yj4wr9ikpwsnini9r1rc616pn"
            plugins="wordcount"
          /> */}
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
