"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";
const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };
  console.log(clicked);

  return (
    <button
      onClick={clickHandler}
      className='flex gap-1 items-center text-sm text-slate-500 border px-2 py-1 hover:bg-orange-100 hover:text-slate-700'>
      <LinkIcon className='w-4 h-4'></LinkIcon>
      {clicked ? "Link Copied" : "Share link"}
    </button>
  );
};

export default ShareLinkButton;
