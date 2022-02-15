import Avatar from "components/Avatar/Avatar";
import LikeIcon from "icons/LikeIcon";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type FeaturePost =
  | { isFeature: true; description: string }
  | { isFeature?: false; description?: string };

export type IPost = FeaturePost & {
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
    <div
      className="border-t border-b sm:border border-white dark:border-black relative bg-white dark:bg-black sm:rounded-xl shadow-md overflow-hidden mx-auto sm:max-w-xl"
      key={id}
    >
      <div className="flex w-full">
        <a href="/" className="px-4 py-2 flex-1 group block">
          <div className="flex items-center transition duration-100 ease-in-out transform hover:scale-105">
            <div className="relative flex-shrink-0">
              <Image
                src={artistProfileImage}
                alt=""
                height={40}
                width={40}
                className="inline-block object-cover h-10 w-10 rounded-full bg-gray-100 dark:bg-darkBg3"
              />
            </div>
            <div className="mx-3">
              <p className="text-sm text-primary dark:text-darkTextPrimary line-clamp-1 break-all">
                {artistName}
              </p>
            </div>
          </div>
        </a>
        <div className="pr-4 text-primary dark:text-darkTextPrimary">
          <div className="flex h-full items-center transition duration-100 ease-in-out transform hover:scale-105">
            <LikeIcon className="mr-1 w-5 h-full " />
            <span className="mt-1">{likes}</span>
          </div>{" "}
        </div>
      </div>
      <div className="group block w-full aspect-w-10 aspect-h-10 bg-white dark:bg-darkBg2 focus:outline-none overflow-hidden">
        <Image
          src={artSrc || defaultArt}
          alt="art"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 py-4">
        <p className="block text-lg text-primary dark:text-darkTextPrimary line-clamp-2 pointer-events-none">
          {title}
        </p>
        {isFeature && (
          <p className="mt-1 block text-secondary dark:text-darkTextSecondary text-sm line-clamp-3 pointer-events-none break-words">
            {description}
          </p>
        )}
        <a href="/" className="group block mt-4">
          <div className="flex items-center transition duration-100 ease-in-out transform hover:scale-105">
            <div className="relative flex-shrink-0">
              <Image
                src={ownerProfileImage}
                alt=""
                height={40}
                width={40}
                className="inline-block object-cover h-10 w-10 rounded-full bg-gray-100 dark:bg-darkBg3"
              />
            </div>
            <div className="mx-3">
              <p className="text-sm text-primary dark:text-darkTextPrimary line-clamp-1 break-all">
                {ownerName}
              </p>
              <p className="text-sm text-secondary dark:text-darkTextSecondary ">
                Owner
              </p>
            </div>
          </div>
        </a>
      </div>
      {/* <div className="flex my-4 items-center text-primary dark:text-darkTextPrimary">
        <Avatar src={ownerProfileImage} />
        {ownerName}
      </div> */}
      <button className="transition duration-100 ease-in-out w-full h-12 items-center px-4 py-2 text-base font-bold bg-gray-300 text-gray-800 dark:text-gray-400 dark:bg-darkBg2 transform hover:scale-105 focus:outline-none focus:ring-0```">
        Buy for ${price}
      </button>
    </div>
  );
}

export default Post;
