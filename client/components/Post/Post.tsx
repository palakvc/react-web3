import Avatar from "components/Avatar/Avatar";
import LikeIcon from "icons/LikeIcon";
import React from "react";
import Image from "next/image";

type FeaturePost =
  | { isFeature: true; description: string }
  | { isFeature?: false; description?: string };

type IPost = FeaturePost & {
  id: number;
  artist: { src: string; name: string };
  title: string;
  likes: number;
  artSrc: string;
  owner: { src: string; name: string };
  price: number;
};

const defaultArt =
  "https://pentas-bucket.s3.ap-southeast-1.amazonaws.com/next-s3-uploads/a6818252-5342-40a5-aae1-108694f4fcd5/Picsart_22-01-20_18-00-51-510.jpg";

function Post(props: IPost): JSX.Element {
  const {
    id,
    artist,
    title,
    description,
    likes,
    artSrc,
    owner,
    price,
    isFeature,
  } = props;
  const { src: ownerProfileImage, name: ownerName } = owner;
  const { src: artistProfileImage, name: artistName } = artist;
  return (
    <div className="sm:block sm:px-6 lg:px-8" key={id}>
      <div className="border-t border-b sm:border border-white dark:border-black relative bg-white dark:bg-black sm:rounded-xl shadow-md overflow-hidden mx-auto sm:max-w-xl">
        <div className="flex py-1 justify-between items-center w-full text-secondary dark:text-darkTextPrimary my-1">
          <div className="flex items-center">
            <Avatar src={artistProfileImage} /> {artistName}
          </div>
          <div className="mx-5 flex items-center">
            <LikeIcon className="mr-1 w-5 h-full" />{" "}
            <span className="mt-[1px]">{likes}</span>
          </div>
        </div>
        <div className="block w-full aspect-h-10 aspect-w-10 bg-white dark:bg-darkBg2 focus:outline-none overflow-hidden">
          <span className="border-0 m-0 p-0 absolute">
            <Image
              src={artSrc || defaultArt}
              className="object-cover absolute min-w-100 min-h-100"
              alt="art"
              layout="fill"
            />
          </span>
        </div>
        <div className="p-3 my-4">
          <p className="block text-lg text-primary dark:text-darkTextPrimary line-clamp-2 pointer-events-none">
            {title}
          </p>
          {isFeature && (
            <p className="max-h-72 text-secondary dark:text-darkTextSecondary mt-1 text-sm line-clamp-3 pointer-events-none break-words">
              {description}
            </p>
          )}
        </div>
        <div className="flex my-4 items-center text-primary dark:text-darkTextPrimary">
          <Avatar src={ownerProfileImage} />
          {ownerName}
        </div>
        <button className="transition duration-100 ease-in-out w-full items-center p-8 text-base font-bold bg-gray-300 text-gray-800 dark:text-gray-400 dark:bg-darkBg2 transform hover:scale-105 focus:outline-none focus:ring-0">
          Buy for ${price}
        </button>
      </div>
    </div>
  );
}

export default Post;
