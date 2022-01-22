import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAccounts,
  deleteAccount,
  editAccounts,
  setIsAdd,
} from "../store/actions/account";

export default function Form({ account }) {
  const { isAdd } = useSelector((state) => state.account);
  const [input, setInput] = useState(
    account || {
      img_url: "",
      title: "",
      username: "",
      password: "",
    }
  );
  const dispatch = useDispatch();

  const handleCancelBtn = () => {
    dispatch(setIsAdd(false));
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccounts(input));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editAccounts(account.id, input));
  };

  const handleDeleteBtn = (e) => {
    e.preventDefault();
    dispatch(deleteAccount(account.id));
  };

  return (
    <form
      onSubmit={isAdd ? (e) => handleSubmit(e) : (e) => handleEdit(e)}
      className="relative bg-slate-800 hover:bg-slate-700 px-4 py-2 h-56 rounded-md"
    >
      <button
        type="submit"
        className="absolute -bottom-10 bg-sky-500 hover:bg-sky-200 p-1 px-2 rounded"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>
      <div
        onClick={handleCancelBtn}
        className="absolute -bottom-10 left-16 bg-rose-700 hover:bg-rose-200 p-1 px-2 rounded cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      {!isAdd ? (
        <div
          onClick={(e) => handleDeleteBtn(e)}
          className="absolute -bottom-10 right-4 bg-slate-700 hover:bg-rose-700 p-1 px-2 rounded cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-2 w-full h-full items-center justify-evenly">
        <textarea
          className="w-full h-10 bg-gray-500 px-2 py-1 rounded text-sm"
          name="img_url"
          placeholder="Image Url"
          value={input?.img_url}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          name="title"
          className="w-full h-8 bg-gray-500 px-2 rounded text-sm"
          placeholder="Title"
          value={input?.title}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          name="username"
          className="w-full h-8 bg-gray-500 px-2 rounded text-sm"
          placeholder="Username"
          value={input?.username}
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="password"
          name="password"
          className="w-full h-8 bg-gray-500 px-2 rounded text-sm"
          placeholder="Password"
          value={input?.password}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </form>
  );
}
