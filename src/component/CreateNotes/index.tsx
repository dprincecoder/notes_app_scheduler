import * as React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note, uniqueId } from "../../models/note.model";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [erorr, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All Fields are Required");
    }
    setError("");
    setNotes([
      ...notes,
      {
        id: uniqueId(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      },
    ]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  };

  return (
    <React.Fragment>
      <h2>New Meeting</h2>
      {erorr && <Alert variant="danger">{erorr}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title for This Meeting"
            ref={titleRef}
          />{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Text</Form.Label>
          <Form.Control
            placeholder="Enter Meeting details"
            as="textarea"
            rows={3}
            ref={textRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label HtmlFor="colorInput">Meeting Background Color</Form.Label>
          <Form.Control
            type="color"
            defaultValue="#dfdfdf"
            title="Choose Color"
            ref={colorRef}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Schedule
        </Button>
      </Form>
    </React.Fragment>
  );
};

export default CreateNotes;
