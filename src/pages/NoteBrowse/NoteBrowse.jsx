import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "container/NoteList/noteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export function NoteBrowse() {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredNoteList = noteList.filter((note) => {
    const containsTitle = note.title
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    const containsContent = note.content
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    const containsDate = note.created_at
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    return containsTitle || containsContent || containsDate;
  });

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-8">
          <SearchBar
            onTextChange={setSearchTerm}
            placeholder="Search your notes..."
          />
        </div>
        <div className="col-sm-12 col-md-2 mt-1">
          <ButtonPrimary onClick={() => navigate("/note/new")}>
            Add Note +{" "}
          </ButtonPrimary>
        </div>
      </div>
      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          You don't have any note, do you want to{" "}
          <Link to="/note/new">Create One</Link>
        </div>
      )}
      <NoteList noteList={filteredNoteList} />
    </>
  );
}
