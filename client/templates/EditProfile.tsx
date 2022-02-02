import IconButton from "components/IconButton";
import AtEmailIcon from "icons/AtEmailIcon";
import EyeIcon from "icons/EyeIcon";
import PencilIcon from "icons/PencilIcon";
import React from "react";

interface IEditProfile {}

function EditProfile(props: IEditProfile): JSX.Element {
  const profilePicRef = React.useRef<HTMLInputElement>(null);
  const coverRef = React.useRef<HTMLInputElement>(null);

  const handleChange = () => {};

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div
        className="sublime-gd rounded-lg p-16 w-full h-[298px] relative text-center"
        style={{
          backgroundImage:
            "url(https://dpz0n88ffnk83.cloudfront.net/cover/default-cover.jpg)",
        }}
      >
        <div className="absolute left-32 -bottom-16">
          <div className="relative">
            <label htmlFor="profile-picture">
              <input
                accept="image/*"
                id="profile-picture"
                multiple
                type="file"
                hidden
                name="src"
                onChange={handleChange}
                ref={profilePicRef}
              />
            </label>
            <img
              src="https://www.hyperui.dev/photos/man-4.jpeg"
              alt=""
              className=" object-cover w-96 h-96 mx-auto rounded-full shadow-xl"
            />
            <button
              className="p-4 rounded-full bg-white absolute right-12 bottom-0"
              onClick={() => profilePicRef!.current!.click()}
            >
              <PencilIcon className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      <div id="profile-section" className=" mt-12 w-full">
        <form
          action=""
          className=" shadow-2xl bg-white mx-auto p-16 rounded-lg mt-8 mb-0 space-y-4 "
        >
          <div>
            <label
              htmlFor="email"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Username
            </label>

            <input
              type="text"
              className="w-full p-8 pr-12 border-gray-200 rounded-lg shadow-sm outline-none focus:ring border-1"
              placeholder="Enter Username"
              name="username"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Full Name
            </label>

            <input
              type="text"
              name="fullname"
              className="w-full p-8 pr-12 border-gray-200 rounded-lg shadow-sm outline-none focus:ring border-1"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-8 pr-12 border-gray-200 rounded-lg shadow-sm outline-none focus:ring border-1"
                placeholder="Enter email"
                name="email"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <AtEmailIcon className="text-gray-600" />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-8 pr-12 border-gray-200 rounded-lg shadow-sm outline-none focus:ring border-1"
                placeholder="Enter password"
                name="password"
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <EyeIcon className="text-gray-600" />
              </span>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Bio
            </label>

            <textarea
              name="bio"
              className="w-full p-8 pr-12 border-gray-200 rounded-lg shadow-sm outline-none focus:ring border-1"
              placeholder="Describe Yourself"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-5 py-3 font-medium text-white bg-blue-500 rounded-lg"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
