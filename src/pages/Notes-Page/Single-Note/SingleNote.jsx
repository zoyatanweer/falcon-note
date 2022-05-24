import React from "react";
import {
  ArchiveIcon,
  DeleteIcon,
  EditIcon,
  PinIcon,
} from "../../../Assets/Svg/allsvg";
import "./SingleNote.css";

const SingleNote = () => {
  return (
    <>
      <div className="single-note-saved">
        <div className="mg-xs">
          <button className="note-pinned">
            <PinIcon className="pin-action hover-action-btn" />
          </button>
          <div className="note-title para-small">title</div>
          <div className="note-body">body</div>
          <div className="note-secondary-info">
            <div className="note-date">Created on datetime</div>
            <div className="note-label">label</div>
            <div className="note-priority">priority</div>

            <div className="note-action-btn">
              <button className="edit-btn hover-action-btn">
                <EditIcon className="edit-action" />
              </button>
              <button className="archive-btn hover-action-btn">
                <ArchiveIcon className="archive-action" />
              </button>
              <button className="delete-btn hover-action-btn">
                <DeleteIcon className="delete-action" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleNote };
