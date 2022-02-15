import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ISpotlightProps {
  id: number | string;
  artist: {
    name: string;
    description: string;
  };
  title: string;
  src: string;
}

function Spotlight(props: ISpotlightProps) {
  const { id, artist, title, src } = props;
  const { name: artistName, description } = artist;

  //split the description by paragraphs
  const descriptionArray = description.split(/(?:\n){2,}/);
  console.log("descriptionArray", descriptionArray);
  return (
    <section
      id="spotlight"
      className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-16"
    >
      <p className="text-bluePrimary dark:text-darkBluePrimary font-bold">
        Spotlight
      </p>
      <p className="font-bold text-textPrimary dark:text-darkTextPrimary text-4xl lg:text-5xl">
        {artistName}
      </p>
      <p className="font-bold text-secondary dark:text-darkTextSecondary">
        Artist
      </p>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
        <div className="lg:col-span-1">
          {descriptionArray.map((line, index) => {
            return (
              <p
                className={clsx("text-secondary dark:text-darkTextSecondary", {
                  "mt-6": index,
                })}
              >
                {line}
              </p>
            );
          })}
        </div>
        <div className="relative mt-8 lg:mt-0 text-center lg:col-span-1">
          <Link href="">
            <Image
              src={src}
              className="bg-white pointer-events-none rounded-2xl border-4 border-white shadow"
              alt="Spotlight Art"
              layout="fill"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Spotlight;
