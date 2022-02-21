import Avatar from "components/Avatar";
import Image from "next/image";
import React from "react";

interface ICreatorCardProps {
  coverImage?: string;
  name?: string;
  profileImage?: string;
  username?: string;
}

const defaultCover =
  "https://cdn.pentas.io/next-s3-uploads/9e9e4b9f-03ad-46a8-bf00-4ef761c8343e/39801057-black-background-wallpapers.png";

function CreatorCard(props: ICreatorCardProps) {
  const {
    coverImage = defaultCover,
    name = "birulangitsemalam",
    profileImage = "https://i.pravatar.cc/300",
    username = "@birulangitsemalam",
  } = props;

  return (
    <div className="bg-white dark:bg-darkBg2 border border-white dark:border-black rounded-xl shadow overflow-hidden mx-auto max-w-xl">
      <div className="aspect-h-[6] aspect-w-[16]">
        <Image
          className="h-16 w-full object-cover"
          src={coverImage}
          alt="Cover"
          layout="fill"
        />
      </div>
      <a
        className="-mt-12 mb-4 text-center flex flex-col"
        href="/user/0xcadc6b56a0bf144b972a0505a33c3a5bd9102129"
      >
        <Avatar src={profileImage} size="medium" className="mx-auto " />
        {/* <Image className="w-24 h-24 mx-auto object-cover border-white dark:border-darkBg2 border-8 rounded-full overflow-hidden bg-gray-100 dark:bg-darkBg3" src="https://i.pravatar.cc/300" alt="" width={96} height={96} /> */}
        <div className="text-primary dark:text-darkTextPrimary mt-2 font-bold mx-2">
          {name}
        </div>
        <div className="text-sm my-1 text-secondary dark:text-darkTextSecondary">
          {username}
        </div>
      </a>
    </div>
  );
}

export default CreatorCard;
