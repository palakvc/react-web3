import Input from "components/Input/Input";
import AtEmailIcon from "icons/AtEmailIcon";
import PencilIcon from "icons/PencilIcon";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { RootState, useAppDispatch, useAppSelector } from "store";
import { IUserDetails, setUserDetails } from "store/authSlice";
import { removeEmptyKeys, toBlob } from "lib/commonUtils";
import { updateProfile } from "store/profileSlice";
import useUser from "lib/useUser";
import fetcher from "lib/fetchJson";
import { showMessage } from "store/notifySlice";

interface IEditProfile extends IUserDetails {}

const defaultCover =
  "https://dpz0n88ffnk83.cloudfront.net/cover/default-cover.jpg";
const defaultProfile = "https://www.hyperui.dev/photos/man-4.jpeg";

function EditProfile(
  props: IEditProfile & React.ComponentProps<any>
): JSX.Element {
  const { user, mutateUser } = useUser({ redirectTo: "/" });
  const dispatch = useAppDispatch();
  const { userDetails } = useAppSelector(({ auth }) => auth);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IEditProfile>({ defaultValues: user as IEditProfile });

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
    const fields: (keyof IEditProfile)[] = [
      "username",
      "email",
      "bio",
      "full_name",
    ];
    fields.forEach((v) => {
      setValue(v, user?.[v]);
    });
  }, [user, setValue]);

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

    const pImg =
      typeof profileImage === "string"
        ? profileImage.split("/").pop()
        : profileImage;
    const cImg =
      typeof coverImage === "string" ? coverImage.split("/").pop() : coverImage;

    let payload: IEditProfile & { hash: string } = {
      ...data,
      profileImage: pImg,
      coverImage: cImg,
      hash: updateHash,
    };

    delete payload.accessToken;
    delete payload.isLoggedIn;
    delete payload.id;
    removeEmptyKeys<IEditProfile>(payload);

    for (const [key, value] of Object.entries(payload)) {
      formData.append(key, value);
    }

    const cb = (res: IUserDetails) => {
      mutateUser(fetcher("/api/userDetail", "post", { ...user, ...res }));
      dispatch(
        showMessage({
          message: "Profile updated successfully",
          type: "success",
        })
      );
    };

    if (user?.id) {
      dispatch(
        updateProfile({
          userId: user?.id,
          formData,
          cb,
        })
      );
    }
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
          className="p-2 rounded-full bg-gray-200 absolute right-8 bottom-4 dark:bg-gray-700 "
          onClick={() => coverRef!.current!.click()}
        >
          <PencilIcon className="text-gray-600 dark:text-white" />
        </button>
        <div className="absolute left-16 -bottom-8 w-36 h-36 bg-white dark:bg-black rounded-full p-1">
          <div className="w-full h-full relative">
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
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
            <button
              className="p-2 rounded-full bg-gray-200 absolute right-0 bottom-0 dark:bg-gray-700"
              onClick={() => profilePicRef!.current!.click()}
            >
              <PencilIcon className="text-gray-600 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
      <div id="profile-section" className="mt-4 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" shadow-lg bg-white dark:bg-darkBg2 mx-auto p-8 rounded-lg mt-8 mb-0 space-y-4 "
        >
          <Input
            type="text"
            label="Username"
            className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
            placeholder="Enter Username"
            {...register("username", {
              required: "* This field is required",
              maxLength: 20,
            })}
            error={errors.username?.message}
          />

          <Input
            label="Full Name"
            type="text"
            {...register("full_name", {
              required: "* This field is required",
            })}
            className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
            placeholder="Enter Name"
            error={errors.full_name?.message}
          />

          <Input
            label="Email"
            className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
            placeholder="Enter email"
            {...register("email", {
              required: "* This field is required",
              pattern: {
                value: /^[a-z0-9._]+@[a-z0-9]+.[a-z]+$/i,
                message: "Please enter a valid email",
              },
            })}
            error={errors.email?.message}
          />

          <Input
            rows={5}
            label="Bio"
            {...register("bio")}
            className="w-full pr-12 border-gray-200 rounded-lg shadow-sm dark:bg-darkBg2"
            placeholder="Describe Yourself"
          />

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
