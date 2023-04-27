import { useDispatch} from "react-redux";
import { TeaxtCard } from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import { NOTE_API } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";
import s from "./style.module.css";

export function NoteList({noteList}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deletingNote(note) {
    if (window.confirm("Are you sure you want to delete this note?")) {
      await NOTE_API.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }

  return (
    <>
      <div className={`row justify-content-center`}>
        {noteList.map((note, idx) => {
          return (
            <div className={s.card_container} key={idx}>
              <TeaxtCard
                note={note}
                title={note.title}
                content={note.content}
                subtitle={note.created_at}
                onClick={() => navigate("note/" + note.id)}
                onCLickTrash={deletingNote}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
