import Input from "components/Input/Input";
import AtEmailIcon from "icons/AtEmailIcon";
import PencilIcon from "icons/PencilIcon";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch, useAppSelector } from "store";
import { IUserDetails, setUserDetails } from "store/authSlice";
import { toBlob } from "lib/commonUtils";
import { updateProfile } from "store/profileSlice";
import useUser from "lib/useUser";

interface IEditProfile extends IUserDetails {}

const defaultCover =
  "https://dpz0n88ffnk83.cloudfront.net/cover/default-cover.jpg";
const defaultProfile = "https://www.hyperui.dev/photos/man-4.jpeg";

function EditProfile(
  props: IEditProfile & React.ComponentProps<any>
): JSX.Element {
  const { user } = useUser({ redirectTo: "/" });

  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector(({ auth }) => auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IEditProfile>({ defaultValues: userDetails });

  const profilePicRef = React.useRef<HTMLInputElement>(null);
  const coverRef = React.useRef<HTMLInputElement>(null);
  const globalObjects = useAppSelector(
    (state: RootState) => state.commonReducer.globalObjects
  );

  const [profileImage, setProfileImage] = React.useState<File | string | null>(
    null
  );
  const [coverImage, setCoverImage] = React.useState<File | string | null>(
    null
  );

  React.useEffect(() => {
    if (userDetails.profileImage) {
      setProfileImage(userDetails.profileImage);
    }
    if (userDetails.coverImage) {
      setCoverImage(userDetails.coverImage);
    }
  }, [userDetails]);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const target = ev.target;
    const { name, files } = target;
    const file = files?.[0];
    if (file && name === "cover") {
      setCoverImage(file);
    } else if (file && name === "profile") {
      setProfileImage(file);
    }
  };

  const onSubmit = async (data: IEditProfile) => {
    const formData = new FormData();

    const signer = globalObjects?.provider.getSigner();
    const updateHash = await signer.signMessage(
      "Message For updating user profile"
    );

    const payload: IEditProfile & { hash: string } = {
      ...data,
      profileImage: profileImage,
      coverImage: coverImage,
      hash: updateHash,
    };

    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, value);
    }

    dispatch(updateProfile({ userId: 9, formData }));
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      <div
        className="rounded-lg w-full h-[298px] relative text-center bg-cover bg-no-repeat"
        // style={{
        //   backgroundImage: `url(${
        //     coverImage
        //       ? typeof coverImage === "string"
        //         ? coverImage
        //         : toBlob(coverImage)
        //       : defaultCover
        //   })`,
        // }}
      >
        <Image
          src={
            coverImage
              ? typeof coverImage === "string"
                ? coverImage
                : toBlob(coverImage)
              : defaultCover
          }
          alt="cover image"
          unoptimized={typeof coverImage !== "string"}
          className=" object-cover w-full h-full rounded-lg"
          layout="fill"
        />
        <label htmlFor="cover-picture">
          <input
            accept="image/*"
            id="cover-picture"
            multiple
            type="file"
            hidden
            name="cover"
            onChange={handleChange}
            ref={coverRef}
          />
        </label>
        <button
          className="p-4 rounded-full bg-gray-200 absolute right-12 bottom-12 dark:bg-gray-700 "
          onClick={() => coverRef!.current!.click()}
        >
          <PencilIcon className="text-gray-600 dark:text-white" />
        </button>
        <div className="absolute left-32 -bottom-16 w-96 h-96 bg-white dark:bg-black rounded-full p-1">
          <div className="relative">
            <label htmlFor="profile-picture">
              <input
                accept="image/*"
                id="profile-picture"
                multiple
                type="file"
                hidden
                name="profile"
                onChange={handleChange}
                ref={profilePicRef}
              />
            </label>
            <Image
              src={
                profileImage
                  ? typeof profileImage === "string"
                    ? profileImage
                    : toBlob(profileImage)
                  : defaultProfile
              }
              alt="profile image"
              unoptimized={typeof profileImage !== "string"}
              className=" object-cover w-96 h-96 mx-auto rounded-full"
              height={150}
              width={150}
            />
            <button
              className="p-4 rounded-full bg-gray-200 absolute right-12 bottom-0 dark:bg-gray-700"
              onClick={() => profilePicRef!.current!.click()}
            >
              <PencilIcon className="text-gray-600 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
      <div id="profile-section" className=" mt-12 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" shadow-lg bg-white dark:bg-darkBg2 mx-auto p-16 rounded-lg mt-8 mb-0 space-y-4 "
        >
          <div>
            <label
              htmlFor="username"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Username
            </label>

            <Input
              type="text"
              className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
              placeholder="Enter Username"
              {...register("username", { required: true, maxLength: 20 })}
            />
          </div>
          <div>
            <label
              htmlFor="fullname"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Full Name
            </label>

            <Input
              type="text"
              {...register("fullname", { required: true })}
              className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
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
              <Input
                type="email"
                className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
                placeholder="Enter email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9]+@[a-z0-9]+.[a-z0-9]+$/i,
                })}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <AtEmailIcon className="text-gray-600" />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="bio"
              className="font-medium text-gray-600 inline-block mb-4"
            >
              Bio
            </label>

            <Input
              rows={5}
              {...register("bio")}
              className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
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
