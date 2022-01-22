import { useDispatch, useSelector } from "react-redux";
import { setIsAdd } from "../store/actions/account";

export default function AddCard() {
  const { isAdd } = useSelector((state) => state.account);
  const dispatch = useDispatch()

  const handleAddBtn = () => {
    dispatch(setIsAdd(!isAdd))
  }
  return (
    <button onClick={handleAddBtn} className="flex justify-center items-center bg-slate-800 hover:bg-slate-700 rounded-md h-56">
      <svg
        className="w-20 h-20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  );
};
