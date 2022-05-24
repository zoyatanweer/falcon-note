import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./NotesPage.css";
import { Filter } from "./Filter/Filter";
import { Note } from "./Note/Note";
import { SingleNote } from "./Single-Note/SingleNote";
import { useNote } from "../../context/NoteContext";
import {
  LogoutIcon,
  SearchIcon,
  NoteIcon,
  AddNewNote,
  ArchiveIcon,
  DeleteIcon,
  FilterIcon,
  ArrowDropDownIcon,
} from "../../Assets/Svg/allsvg";

// import { Editor } from "@tinymce/tinymce-react";

const NotesPage = () => {
  const isNoteOpened = false;
  const { notes, initialState, addNotes, noteContent, setNoteContent } =
    useNote();

  return (
    <>
      <div className="page-container flex">
        {/* -----side navigation------ */}
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
          <div className="desktop-query">
            <SearchIcon className="right-nav-img img-search"></SearchIcon>
            <input
              className="desktop-searchbar"
              type="text"
              placeholder="Search"
            />
            {/* <FilterIcon className="right-nav-img no-mg" /> */}
            <button className="filter-btn flex align-center">
              <FilterIcon className="right-nav-img no-mg" />
              Filter
            </button>
          </div>
          <Note />
          <SingleNote />
        </div>
        {/* <div className="filter-container"> */}
        {/* <button class="btn box-shadow btn-outline-primary filter-btn flex align-center">
            <div className="filter-title flex align-center">
              <FilterIcon className="right-nav-img" />
              <p className="para-small">Filter</p>
            </div>
          </button> */}
        {/* <button className="filter-btn flex align-center">
            <FilterIcon className="right-nav-img no-mg" />
            Filter
          </button>
          <Filter /> */}
        {/* </div> */}
      </div>
      <button className="btn btn-floating-action note-btn ">
        <AddNewNote className="bottom-note-btn" />
      </button>

      {/* <button
        className="btn btn-floating-action note-btn"
        onClick={() => (isNoteOpened ? "false" : "true")}
      >
        <AddNewNote className="bottom-note-btn" />
      </button> */}
    </>
  );
};

export { NotesPage };
