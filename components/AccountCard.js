import React from "react";
import { useDispatch } from "react-redux";
import { setIsEdit } from "../store/actions/account";
import Image from "next/image";

export default function AccountCard({ account }) {
  const dispatch = useDispatch();

  const handleEditBtn = () => {
    dispatch(setIsEdit(account.id));
  };

  return (
    <div className="bg-slate-800 hover:bg-slate-700 p-8 h-56 rounded-md">
      <div className="flex flex-col gap-2 w-full h-full items-center justify-evenly">
        <div className="self-center w-1/3 h-20 object-cover relative">
          <Image
            src={account.img_url}
            alt={account.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="item-center font-mono font-bold text-lg cursor-default">
          {account.title}
        </div>
        <div className="flex gap-4 bottom-0 mt-auto justify-evenly w-full">
          <div>
            <svg
              onClick={() => navigator.clipboard.writeText(account.username)}
              className="w-6 h-6 cursor-grab active:cursor-grabbing"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <div>
            <svg
              onClick={() => navigator.clipboard.writeText(account.password)}
              className="w-6 h-6 cursor-grab active:cursor-grabbing"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <svg
              onClick={handleEditBtn}
              className="w-6 h-6 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
