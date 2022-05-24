import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "./Auth/UseAxios";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  // const [noteContent, setNoteContent] = useState(initialState);

  const {
    response: noteResponse,
    operation: fetchNote,
    loading: loadingNote,
  } = useAxios();

  const initialState = {
    title: "",
    body: "",
    label: "",
    priority: "",
    isPinned: false,
    color: "#f8f9fa",
    date: "",
  };

  const [noteContent, setNoteContent] = useState(initialState);
  // const [singleNote, setSingleNote] = useState({
  //   title: "",
  //   body: "",
  //   label: "",
  //   priority: "",
  //   isPinned: false,
  //   color: "#f8f9fa",
  //   date: "",
  // });
  // console.log(setSingleNote());
  console.log("hello", setNoteContent);

  useEffect(() => {
    if (noteResponse != undefined) {
      setNotes(noteResponse.notes);
    }
  }, []);

  const addNotes = (note) => {
    fetchNote({
      method: "post",
      url: "/api/notes",
      headers: {
        authorization: localStorage.getItem("token"),
      },
      data: {
        note: note,
      },
    });
  };

  return (
    <NoteContext.Provider
      value={(notes, addNotes, noteContent, setNoteContent)}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
