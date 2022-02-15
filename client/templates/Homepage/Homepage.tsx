import React from "react";
import Button from "components/Button";
import Post, { IPost } from "components/Post/Post";
import CreatorCard from "components/CreatorCard";
import Spotlight from "components/Spotlight";
import Image from "next/image";

const randomImages = [
  "https://cdn.pentas.io/next-s3-uploads/fda8ec5c-430d-497d-baff-faf16eccb0c0/54B14593-33D2-44BA-AE31-4440FF40B26B.jpeg",
  "https://cdn.pentas.io/next-s3-uploads/cc93d371-4e4b-47ef-b88f-c8c09fbf205f/Good-Day_2022.jpg",
  "https://cdn.pentas.io/next-s3-uploads/ccd3657c-1d4b-4b5c-865b-64ef7ebbefc7/alice.jpg",
  "https://cdn.pentas.io/next-s3-uploads/064de6f5-9b76-4904-95c8-e3c19ded3dae/IMG_2457.JPG",
  "https://cdn.pentas.io/next-s3-uploads/3071b56b-6d76-44ec-831c-85f2fbe35ad4/5CB5F6F6-A369-4B42-8CA6-769A125848A4.jpeg",
  "https://pentas-bucket.s3.ap-southeast-1.amazonaws.com/next-s3-uploads/a6818252-5342-40a5-aae1-108694f4fcd5/Picsart_22-01-20_18-00-51-510.jpg",
  "https://cdn.pentas.io/next-s3-uploads/fda8ec5c-430d-497d-baff-faf16eccb0c0/54B14593-33D2-44BA-AE31-4440FF40B26B.jpeg",
  "https://cdn.pentas.io/next-s3-uploads/cc93d371-4e4b-47ef-b88f-c8c09fbf205f/Good-Day_2022.jpg",
  "https://cdn.pentas.io/next-s3-uploads/ccd3657c-1d4b-4b5c-865b-64ef7ebbefc7/alice.jpg",
];

const spotlightImage =
  "https://cdn.pentas.io/next-s3-uploads/cdd2e6c6-27fc-47d1-8a5a-75f3ed9985ab/nf-Qqj6u.jpg";

interface ICreator {
  name: string;
  profileImage: string;
  coverImage: string;
}

const creators: ICreator[] = [];
for (let i = 0; i < 10; i++) {
  creators.push({
    name: `Creator ${i}`,
    profileImage: `https://i.pravatar.cc/300?img=${i}`,
    coverImage: `https://i.pravatar.cc/300?img=${i * 2}`,
  });
}

const posts: IPost[] = [];
for (let i = 0; i < 12; i++) {
  posts.push({
    id: i,
    artist: {
      src: `https://i.pravatar.cc/300?img=${i}`,
      name: `Artist ${i}`,
    },
    title: `Post ${i}`,
    likes: i * 10,
    artSrc: randomImages[i % 6],
    owner: {
      src: `https://i.pravatar.cc/300?img=${i * 2}`,
      name: `Owner ${i}`,
    },
    price: i * 100,
  });
}

function Homepage() {
  return (
    <>
      <div id="home" className="relative overflow-hidden">
        <div
          id="collage-grid"
          className="absolute bottom-0 w-full h-full blur-sm"
        >
          <ul
            role={"list"}
            className="grid grid-rows-6 2xl:grid-rows-3 grid-flow-col opacity-10"
          >
            {randomImages.map((img, index) => (
              <li key={index}>
                <div className="aspect-w-8 aspect-h-9 overflow-hidden">
                  <Image src={img} alt="art" layout="fill" objectFit="cover" />
                </div>
              </li>
            ))}
            {randomImages.map((img, index) => (
              <li key={index}>
                <div className="aspect-w-8 aspect-h-9 overflow-hidden">
                  <Image src={img} alt="art" layout="fill" objectFit="cover" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative max-w-screen-2xl py-12 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="px-4 sm:px-6 lg:px-8 sm:col-span-1 lg:col-span-2 my-auto">
            <h3 className="text-primary dark:text-darkTextPrimary text-4xl lg:text-5xl font-bold">
              NFT marketplace empowering digital culture and heritage.
            </h3>
            <p className="py-4 text-secondary dark:text-darkTextSecondary">
              An inclusive NFT marketplace that seeks to empower content creator
              of heritage, cultural and traditional values through digital
              preservation of assets. Our vision is to preserve the valuable
              content through blockchain technology for future generations.
            </p>
            <Button className="bg-white dark:bg-darkBg1 text-textPrimary dark:text-dmTextPrimary transition duration-100 ease-in-out h-12 mb-4 px-4 py-2 border border-gray-300 dark:border-darkBg3 shadow-sm text-sm font-bold rounded-full transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary">
              Explore marketplace
            </Button>
          </div>

          <div className="sm:px-6 lg:px-8 sm:block sm:col-span-1">
            <Post
              isFeature
              id={1}
              likes={3}
              title={"Art by Fathullah Luqman 217"}
              description={`An act of desperation in time of needs Do desperate times call for
              desperate measures?Yes... The need to continue creating creatively
              and to survive have forced me to find alternative ways to create art
              that people want... All this while I have been entertaining my own
              satisfaction in creation of works. There are mainly self
              satisfactory escapism medium for me to runaway from stress and
              problem... The transition,The Change...it doesn't come easy... Now I
              know how hard it is to produce "aesthetically pleasing" works.This
              is my efforts to keep on going...Thanks for funding my artventures.
              Thanks for investing in Me Your new found friend`}
              owner={{ name: "John Doe", src: "https://i.pravatar.cc/300" }}
              artist={{ name: "John Doe", src: "https://i.pravatar.cc/300" }}
              artSrc=""
              price={260}
            />
          </div>
        </div>
      </div>

      <Spotlight
        id={"spotlight"}
        title={"Spotlight"}
        src={spotlightImage}
        artist={{
          name: "Arif Rafhan",
          description: `Arif Rafhan Othman is a visual artist in both traditional and digital
          art. His works include comics, sculptures, murals, and animation. He
          started his illustration journey with publishers such as MPH, FIXI,
          and Maple Comics and expanded to Singapore with Epigram, Marshall
          Cavendish, and Difference Engines. Recently he contributed his
          illustration service to American horror magazine, Fangoria. Arif also
          contributed to Gila-Gila and now working closely with Lat on his
          latest graphic novel. Arif also spends a lot of his time as a
          pre-production artist for films, commercials, and animation. This
          includes concept art, character design, and storyboard.

          You can also see Arif's art at public places such as Little India,
          TTDI's Children Library, and that giant bottle whale, hammerhead
          shark, and turtle at Eco Ardence, Setia Alam.
          Arif believes that artists are responsible for exporting their
          culture in their art. We have such a rich culture and it's a waste
          if we don't use that as our secret ingredient in creating art. This
          'cultural export' value is a plus point for an artist to go
          international. Hence, you can see a very Malaysiana influence in his
          artwork; even for his clients overseas.

          Currently, Arif is juggling his time with NFT, commission work,
          publication, and being a father to 3 children. The kids themselves
          (goes by the name, Young Arif) have projects of their own that
          involve music, stop-motion, and visual effects. They've represented
          their schools and state in multiple multimedia competitions, also
          multiple TV spots, and interviews. Maybe one day they will embark on
          NFT with family projects for the community.`,
        }}
      />

      <div className="container max-w-screen-2xl py-12 mx-auto sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-textPrimary dark:text-darkTextPrimary text-left text-4xl lg:text-5xl font-bold">
            Featured Creators
          </h1>
        </div>
        <div className="px-4 sm:px-0">
          <ul
            role={"list"}
            className="grid grid-cols-2 lg:grid-cols-5 mt-8 gap-x-4 lg:gap-x-6 gap-y-6 "
          >
            {creators.map(({ name, profileImage, coverImage }) => (
              <li>
                <CreatorCard
                  name={name}
                  profileImage={profileImage}
                  coverImage={coverImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container max-w-screen-2xl py-12 mx-auto sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-textPrimary dark:text-darkTextPrimary text-left text-4xl lg:text-5xl font-bold">
            Featured Artworks
          </h1>
        </div>
        <div className="px-4 sm:px-0">
          <ul
            role={"list"}
            className="grid grid-cols-1 mt-8 gap-x-4 gap-y-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-6"
          >
            {posts.map((post) => (
              <li>
                <Post
                  artSrc={post.artSrc}
                  title={post.title}
                  owner={{ name: post.owner.name, src: post.owner.src }}
                  artist={{ name: post.artist.name, src: post.artist.src }}
                  likes={post.likes}
                  id={post.id}
                  price={post.price}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Homepage;
