import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/apiCalls/commentApiCall";
import "./UpdateCommentModal.css";
import { MdModeEdit } from "react-icons/md";

const UpdateCommentModal = ({ setUpdateComment, commentForUpdate }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState(commentForUpdate?.text);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write something");

    dispatch(updateComment(commentForUpdate?._id, { text }));
    setUpdateComment(false);
  };

  return (
    <div className="update-comment">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <MdModeEdit
            onClick={() => setUpdateComment(false)}
            className="update-comment-form-close"
          />
        </abbr>
        <h1 className="update-comment-title">Edit Comment</h1>
        <input
          type="text"
          className="update-comment-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="update-comment-btn">
          Edit Comment
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentModal;
