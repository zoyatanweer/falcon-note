import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Filter } from "./Filter/Filter";
import { Note } from "./Note/Note";
import {
  LogoutIcon,
  NoteIcon,
  AddNewNote,
  ArchiveIcon,
  DeleteIcon,
  FilterIcon,
  ArrowDropDownIcon,
} from "../../Assets/Svg/allsvg";
import "./NotesPage.css";

const NotesPage = () => {
  return (
    <>
      <div className="page-container flex">
        <div className="drawer flex align-center">
          <Link to="/">
            <button className="side-nav-item active-link">
              <NoteIcon className="right-nav-img" />
              <p className="para-small">Notes</p>
            </button>
          </Link>
          <Link to="/">
            <button className="side-nav-item">
              <ArchiveIcon className="right-nav-img" />
              <p className="para-small">Archive</p>
            </button>
          </Link>
          <Link to="/">
            <button className="side-nav-item">
              <DeleteIcon className="right-nav-img" />
              <p className="para-small">Delete</p>
            </button>
          </Link>
        </div>

        {/* ---page content--- */}
        <div className="page-content">
          <Note />
        </div>
        <div className="filter-container">
          <button class="btn box-shadow btn-outline-primary filter-btn flex align-center">
            <div className="filter-title flex align-center">
              <FilterIcon className="right-nav-img" />
              <p className="para-small">Filter</p>
            </div>
          </button>
          <Filter />
        </div>
      </div>
      <button class="btn btn-floating-action note-btn ">
        <AddNewNote className="bottom-note-btn" />
      </button>
    </>
  );
};

export { NotesPage };
