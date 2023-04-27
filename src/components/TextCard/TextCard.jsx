import { useState } from "react";
import { Trash } from "react-bootstrap-icons";
import s from "./style.module.css";

export function TeaxtCard({ title, note, content, subtitle, onClick, onCLickTrash }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  function onClickTrash_(e) {
    onCLickTrash(note);
    e.stopPropagation();
  }
  return (
    <>
      <div
        className={`card ${s.container}`}
        style={{ borderColor: isCardHovered ? "#8d6efd" : "transparent" }}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        onClick={onClick}
      >
        <div className="card-body">
          <div className={s.title_row}>
            <h5 className="card-title">{title}</h5>
            <Trash
              size={20}
              style={{ color: isTrashHovered ? "#ff7373" : "#b8b8b8" }}
              onMouseEnter={() => setIsTrashHovered(true)}
              onMouseLeave={() => setIsTrashHovered(false)}
              onClick={onClickTrash_}
            />
          </div>
          <h6 className={`card-subtitle mb-2 text-muted`}>{subtitle}</h6>
          <p className={`card-text ${s.text_content}`}>{content}</p>
        </div>
      </div>
    </>
  );
}
