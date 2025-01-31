import "./NotesListView.css";
import { NoteView } from "../NoteView";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "../../api/posts";
import { Loader } from "../Loader";

export const NotesListView = () => {

  const postNotesQuery = useQuery({
    queryFn: () => getNotes(),
    queryKey: ["notes"],
  });

  switch (postNotesQuery.status) {
    case "pending":
      return <Loader/>;
    case "error":
      return (
        <span>Произошла ошибка</span>
      )
    case "success":
      return <ul className="note-list-view">
        {postNotesQuery.data.list.map((item) => (
          <li key={item.id}>
             <NoteView title={item.title} text={item.text} />
          </li>
        ))}
      </ul>
  }
};
