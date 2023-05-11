import { NoteForm } from "components/NoteForm/NoteForm";
import { NOTE_API } from "../../api/note-api";
import { useDispatch } from "react-redux";
import { addNote } from "store/notes/notes-slice";
import { useNavigate } from "react-router-dom";

export function NoteCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = async (formValues) => {
    const createNote = await NOTE_API.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });

    console.log(createNote);

    dispatch(addNote(createNote));
    alert("New note added successfully");
    navigate("/");
  };
  return (
    <>
      <NoteForm title="New note" onSubmit={submit} />
    </>
  );
}
