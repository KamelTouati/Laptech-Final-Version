import { useState } from "react";
import { createComment } from "../../redux/apiCalls/commentApiCall";
import { useDispatch } from "react-redux";

const AddComment = ({ productId }) => {
  const dispatch = useDispatch();
  // add comment
  const [text, setText] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write something");

    dispatch(createComment({ text, productId }));
    setText("");
  };
  return (
    <div className="w-1/2">
      <h1 className="text-xl font-bold text-color3 py-2">Add a review</h1>
      <form onSubmit={formSubmitHandler}>
        <div className="mb-6">
          {/* <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Write a comment
          </label> */}
          <textarea
            name="description"
            id="description"
            cols="30"
            className="inputStyle h-[100px] resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;
