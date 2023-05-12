import { NoteForm } from "components/NoteForm/NoteForm";
import { NOTE_API } from "../../api/note-api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote, deleteNote } from "store/notes/notes-slice";

export function Note() {
  const { noteId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((store) =>
    store.noteSlice.noteList.find((s) => s.id === noteId)
  );

  const [isEditable, setIsEditable] = useState(false);

  const submit = async (formValues) => {
    const update = await NOTE_API.updateById({
      id: note.id,
      created_at: note.created_at,
      ...formValues,
    });
    dispatch(updateNote(update));
    setIsEditable(false);
  };

  async function deletingNote() {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await NOTE_API.deleteById(note.id);
      dispatch(deleteNote(note));
      navigate("/");
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          editMode={isEditable}
          title={!isEditable ? note.title : "Edit Mode"}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickDelete={deletingNote}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
