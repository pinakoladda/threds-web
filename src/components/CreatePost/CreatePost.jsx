import { Form } from "../Form";
import { Button } from "../Button";
import { IconAttach } from "../Icons/IconAttach";
import "./index.css";

export const CreatePost = () => {
  return (
    <Form className="create-post__form">
      <div className="create-post__container">
        <Button className="create-post__close-button">Cancel</Button>
        <p className="create-post__header">New post</p>
      </div>
      <input
        role="textbox"
        className="create-post__input"
        placeholder="new thread here..."
      />
      <Button className="button create-post__attach-button">
        <IconAttach className="attach-button__icon" />
      </Button>
      <div className="button__container">
        <p className="create-post__text">Everyone can reply</p>
        <Button className="button create-post__done-button" type="submit">
          Post
        </Button>
      </div>
    </Form>
  );
};