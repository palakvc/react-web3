import Avatar from "components/Avatar/Avatar";
import LikeIcon from "icons/LikeIcon";
import React from "react";

interface IPost {}

function Post(props: IPost): JSX.Element {
  return (
    <div className="sm:block sm:px-6 lg:px-8">
      <div className="border-t border-b sm:border border-white dark:border-black relative bg-white dark:bg-black sm:rounded-xl shadow-md overflow-hidden mx-auto sm:max-w-xl">
        <div className="flex py-1 justify-between items-center inline-flex w-full text-secondary dark:text-darkTextPrimary my-1">
          <div className="flex items-center">
            <Avatar /> John Doe
          </div>
          <LikeIcon className="mx-5 w-5 h-full" />
        </div>
        <div className="block w-full aspect-h-10 aspect-w-10 bg-white dark:bg-darkBg2 focus:outline-none overflow-hidden">
          <span className="border-0 m-0 p-0 absolute">
            <img
              src="https://pentas-bucket.s3.ap-southeast-1.amazonaws.com/next-s3-uploads/a6818252-5342-40a5-aae1-108694f4fcd5/Picsart_22-01-20_18-00-51-510.jpg"
              className="object-cover absolute min-w-100 min-h-100"
              alt="art"
            />
          </span>
        </div>
        <div className="p-3 my-4">
          <p className="block text-lg text-primary dark:text-darkTextPrimary line-clamp-2 pointer-events-none">
            Art by Fathullah Luqman 217
          </p>
          <p className="max-h-72 text-secondary dark:text-darkTextSecondary mt-1 text-sm line-clamp-3 pointer-events-none break-words">
            An act of desperation in time of needs Do desperate times call for
            desperate measures?Yes... The need to continue creating creatively
            and to survive have forced me to find alternative ways to create art
            that people want... All this while I have been entertaining my own
            satisfaction in creation of works. There are mainly self
            satisfactory escapism medium for me to runaway from stress and
            problem... The transition,The Change...it doesn't come easy... Now I
            know how hard it is to produce "aesthetically pleasing" works.This
            is my efforts to keep on going...Thanks for funding my artventures.
            Thanks for investing in Me Your new found friend
          </p>
        </div>
        <div className="flex my-4 items-center text-primary dark:text-darkTextPrimary">
          <Avatar noBorder className="-mx-1" />
          John Doe
        </div>
        <button className="transition duration-100 ease-in-out w-full items-center p-8 text-base font-bold bg-gray-300 text-gray-800 dark:text-gray-400 dark:bg-darkBg2 transform hover:scale-105 focus:outline-none focus:ring-0">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Post;
