import * as React from "react";
import { Note } from "../../models/note.model";
import Notes from "../Notes";

interface INotesListProps {
  notes: Note[];
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes }) => {
    const handleDelete = (id: string) => {
        console.log('this is the id to delete', id);
        
    }
  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => <Notes key={note.id} note={note} handleDelete={handleDelete}/>);
  };
  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
