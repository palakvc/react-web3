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
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
