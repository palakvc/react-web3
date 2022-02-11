import React from "react";
import Button from "components/Button";
import Post from "components/Post/Post";
import Image from "next/image";
import Avatar from "components/Avatar";
const image = "https://pentas-bucket.s3.ap-southeast-1.amazonaws.com/next-s3-uploads/a6818252-5342-40a5-aae1-108694f4fcd5/Picsart_22-01-20_18-00-51-510.jpg"
function Homepage() {
  return (
    <>
      <div id="home" className="relative overflow-hidden">
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
            <Button className="bg-white dark:bg-darkBg1 text-textPrimary dark:text-dmTextPrimary transition duration-100 ease-in-out h-12 mb-4 px-4 py-2 border border-gray-300 dark:border-darkBg3 shadow-sm text-sm font-bold rounded-full transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-textPrimary dark:focus:ring-dmTextPrimary">Explore marketplace</Button>
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
      <section id="arif-rafhan" className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-bluePrimary dark:text-darkBluePrimary font-bold">Spotlight</p>
        <p className="font-bold text-textPrimary dark:text-darkTextPrimary text-4xl lg:text-5xl">Arif Rafhan</p>
        <p className="font-bold text-secondary dark:text-darkTextSecondary">Artist</p>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="lg:col-span-1">
            <p className="text-secondary dark:text-darkTextSecondary">Arif Rafhan Othman is a visual artist in both traditional and
              digital art. His works include comics, sculptures, murals, and
              animation. He started his illustration journey with publishers
              such as MPH, FIXI, and Maple Comics and expanded to Singapore with
              Epigram, Marshall Cavendish, and Difference Engines. Recently he
              contributed his illustration service to American horror magazine,
              Fangoria. Arif also contributed to Gila-Gila and now working
              closely with Lat on his latest graphic novel. Arif also spends a
              lot of his time as a pre-production artist for films, commercials,
              and animation. This includes concept art, character design, and
              storyboard.</p>
            <p className="mt-6 text-secondary dark:text-darkTextSecondary">You can also see Arif's art at public places such as Little India,
              TTDI's Children Library, and that giant bottle whale, hammerhead
              shark, and turtle at Eco Ardence, Setia Alam.</p>
            <p className="mt-6 text-secondary dark:text-darkTextSecondary">Arif believes that artists are responsible for exporting their
              culture in their art. We have such a rich culture and it's a waste
              if we don't use that as our secret ingredient in creating art.
              This 'cultural export' value is a plus point for an artist to go
              international. Hence, you can see a very Malaysiana influence in
              his artwork; even for his clients overseas.</p>
            <p className="mt-6 text-secondary dark:text-darkTextSecondary">Currently, Arif is juggling his time with NFT, commission work,
              publication, and being a father to 3 children. The kids themselves
              (goes by the name, Young Arif) have projects of their own that
              involve music, stop-motion, and visual effects. They've
              represented their schools and state in multiple multimedia
              competitions, also multiple TV spots, and interviews. Maybe one
              day they will embark on NFT with family projects for the
              community.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 text-center lg:col-span-1">
            <a href="" className="aspect-square">
              {/* <Image src={image} className="object-cover pointer-events-none rounded-2xl border-4 border-white shadow" alt="Arif Rafhan" layout="fill" /> */}
            </a>
          </div>
        </div>
      </section>
      <div className="container max-w-screen-2xl py-12 mx-auto sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-textPrimary dark:text-darkTextPrimary text-left text-4xl lg:text-5xl font-bold">Featured creators</h1>
        </div>
        <div className="px-4 sm:px-0">
          <ul role={"list"} className="grid grid-cols-2 lg:grid-cols-5 mt-8 gap-x-4 lg:gap-x-6 gap-y-6 ">
            <li>
              <div className="bg-white dark:bg-darkBg2 border border-white dark:border-black rounded-xl shadow overflow-hidden mx-auto max-w-xl">
                <div className="aspect-h-[6] aspect-w-[16]">
                  <Image className="h-16 w-full object-cover" src="https://cdn.pentas.io/next-s3-uploads/9e9e4b9f-03ad-46a8-bf00-4ef761c8343e/39801057-black-background-wallpapers.png" alt="" layout="fill" />
                </div>
                <a className="-mt-12 mb-4 text-center flex flex-col" href="/user/0xcadc6b56a0bf144b972a0505a33c3a5bd9102129">
                  <Avatar src={"https://i.pravatar.cc/300"} size="medium" className="mx-auto " />
                  {/* <Image className="w-24 h-24 mx-auto object-cover border-white dark:border-darkBg2 border-8 rounded-full overflow-hidden bg-gray-100 dark:bg-darkBg3" src="https://i.pravatar.cc/300" alt="" width={96} height={96} /> */}
                  <div className="text-textPrimary dark:text-darkTextPrimary mt-2 font-bold mx-2">birulangitsemalam</div>
                  <div className="text-sm my-1 text-secondary dark:text-darkTextSecondary">@birulangitsemalam </div>
                </a>
              </div>
            </li>
            <li>
              <div className="bg-white dark:bg-darkBg2 border border-white dark:border-black rounded-xl shadow overflow-hidden mx-auto max-w-xl">
                <div className="aspect-h-[6] aspect-w-[16]">
                  <Image className="h-16 w-full object-cover" src="https://cdn.pentas.io/next-s3-uploads/9e9e4b9f-03ad-46a8-bf00-4ef761c8343e/39801057-black-background-wallpapers.png" alt="" layout="fill" />
                </div>
                <a className="-mt-12 mb-4 text-center flex flex-col" href="/user/0xcadc6b56a0bf144b972a0505a33c3a5bd9102129">
                  <Avatar src={"https://i.pravatar.cc/300"} size="medium" className="mx-auto " />
                  {/* <Image className="w-24 h-24 mx-auto object-cover border-white dark:border-darkBg2 border-8 rounded-full overflow-hidden bg-gray-100 dark:bg-darkBg3" src="https://i.pravatar.cc/300" alt="" width={96} height={96} /> */}
                  <div className="text-textPrimary dark:text-darkTextPrimary mt-2 font-bold mx-2">birulangitsemalam</div>
                  <div className="text-sm my-1 text-secondary dark:text-darkTextSecondary">@birulangitsemalam </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>

  );
}

export default Homepage;
