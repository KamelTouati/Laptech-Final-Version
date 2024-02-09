import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getResetPassword,
  resetPassword,
} from "../../redux/apiCalls/passwordApiCall";
import secureDocument from "/public/assets/secureDocument.png";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.password);

  const [password, setPassword] = useState("");

  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(getResetPassword(userId, token));
  }, [userId, token]);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "") return toast.error("Password is required");

    dispatch(resetPassword(password, { userId, token }));
  };

  return (
    <div className="flex justify-around items-center">
      <div class="rounded-[2.5rem] borderStyle p-1 m-10">
        <div class="rounded-[2.5rem] bg-white">
          {isError ? (
            <h1>Not Found</h1>
          ) : (
            <>
              <div class="rounded-[2.5rem] bg-color1 flex justify-between items-center relative p-10 gap-4">
                <div>
                  <h1 className="text-3xl font-black text-red-500 py-2">
                    Request Password Reset
                  </h1>
                  <form onSubmit={formSubmitHandler}>
                    <div className="mb-6">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="6"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="text-white bg-color3 hover:bg-color5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Reset Password
                    </button>
                  </form>
                </div>
                <div>
                  <img
                    className="w-[300px]"
                    src={secureDocument}
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
