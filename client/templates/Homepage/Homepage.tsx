import Post from "components/Post/Post";
import React from "react";

function Homepage() {
  return (
    <div id="home">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 py-24">
        <div className="sm:px-16 md:px-20 sm:col-span-1 md:col-span-2 my-auto">
          <h4 className="text-primary dark:text-darkTextPrimary text-2xl md:text-3xl font-bold">
            NFT marketplace empowering digital culture and heritage.
          </h4>
          <p className="py-4 text-secondary dark:text-darkTextSecondary">
            An inclusive NFT marketplace that seeks to empower content creator
            of heritage, cultural and traditional values through digital
            preservation of assets. Our vision is to preserve the valuable
            content through blockchain technology for future generations.
          </p>
        </div>
        <div className="sm:px-16 md:px-20 sm:col-span-1">
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
  );
}

export default Homepage;
