import Button from "components/Button/Button";
import IconButton from "components/IconButton/IconButton";
import Input from "components/Input/Input";
import Search from "icons/SearchIcon";
import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./components/ThemeToggler";
import React, { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "store";
import {
  logoutUser,
  setUserAuthentication,
  setUserDetails,
} from "store/authSlice";
import { useRouter } from "next/router";
import clsx from "clsx";
import useClickOutside from "hooks/useClickOutside";
import { formatAddress, shortenAddress } from "lib/commonUtils";
import User from "icons/User";
import Avatar from "components/Avatar/Avatar";

type navItems = {
  href: string;
  title: string;
};

type dropdownItems = {
  href?: string;
  title: string;
  fx?: () => void;
};

const navItems: navItems[] = [
  {
    title: "Marketplace",
    href: "/",
  },
  {
    title: "Spotlight",
    href: "/",
  },
  {
    title: "Blog",
    href: "/",
  },
  {
    title: "FAQ",
    href: "/",
  },
];

function Header() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [openProfileMenu, setOpenProfileMenu] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    if (openProfileMenu) {
      setOpenProfileMenu(false);
    }
  });

  const globalObjects = useAppSelector(
    (state: RootState) => state.commonReducer.globalObjects
  );
  const { isLoggedIn, userDetails } = useAppSelector(
    ({ auth }: RootState) => auth
  );
  const { accountId, username, profileImage } = userDetails;
  const ethereum = globalObjects?.ethereumObject;
  const provider = globalObjects?.provider;

  const onChainIdChange = (chainId: String) => {
    window.location.reload();
  };

  const onAccountChange = (accounts: String[]) => {
    console.log("on account Change", accounts);
  };

  useEffect(() => {
    ethereum
      .request({
        method: "eth_accounts",
      })
      .then((address: String[]) => {
        console.log("on load get account", address);
        if (address.length > 0) {
          dispatch(setUserDetails({ accountId: address[0] }));
        }
      });

    ethereum.on("accountsChanged", onAccountChange);

    ethereum.on("chainChanged", onChainIdChange);
    return () => {
      // ethereum.removeListener("accountsChanged", onAccountChange);
      ethereum.removeListener("chainChanged", onChainIdChange);
    };
  }, [ethereum, dispatch]);

  const onConnectToMetamask = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    const signer = provider.getSigner();
    const signInHash = await signer.signMessage(
      "Message For Signning to Artistics"
    );
    dispatch(setUserDetails({ accountId: accounts[0], hash: signInHash }));
    console.log("accounts after clicking", accounts[0], signInHash);
  };

  const toggleMenu = (): void => {
    if (openProfileMenu) {
      setOpenProfileMenu(false);
    } else {
      setOpenProfileMenu(true);
    }
  };

  const handleLogout = (): void => {
    console.log("called");
    dispatch(logoutUser({}));
    setOpenProfileMenu(false);
  };

  const dropdownItems: dropdownItems[] = [
    // {
    //   title: "My Profile",
    //   href: "/user",
    // },
    {
      title: "Edit Profile",
      href: "/user/edit",
    },

    {
      title: "Logout",
      fx: handleLogout,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-darkBg2 shadow">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex flex-1 max-w-320 items-center space-x-4 w-1/3">
            <div className="mx-4 flex cursor-pointer">
              <Link href="/" passHref>
                <Image
                  src="/images/logo.svg"
                  alt="artistic log"
                  height={100}
                  width={100}
                />
              </Link>
            </div>

            <div className="ml-12 relative flex w-full">
              <Input placeholder="Search..." type="text" className="w-full" />

              <button
                className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600"
                type="submit"
              >
                <Search className="text-gray-600" />
              </button>
            </div>
          </div>
          <nav className="flex items-center justify-evenly space-x-8 font-medium w-1/3">
            {navItems.map(({ href, title }) => (
              <Link href={href} key={title} passHref>
                <span className="cursor-pointer text-gray-800 dark:text-gray-500 dark:hover:text-white hover:border-sublime hover:border-b-2">
                  {title}
                </span>
              </Link>
            ))}
          </nav>
          <div className="space-x-4 flex items-center justify-end">
            <ThemeToggler />
            {isLoggedIn ? (
              <div className="relative flex items-center">
                <Avatar src={profileImage} />
                <div className="" ref={dropdownRef}>
                  <div className="flex items-center">
                    <Button
                      onClick={() => {
                        toggleMenu();
                      }}
                      variant="outlined"
                    >
                      <span className="mx-2 text-gray-700 dark:text-gray-200">
                        {username ? username : shortenAddress(accountId)}
                      </span>
                    </Button>{" "}
                  </div>
                  <div
                    className={clsx(
                      "absolute right-0 mt-2 bg-white dark:bg-darkBg2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-20 w-136",
                      { ["hidden"]: !openProfileMenu }
                    )}
                  >
                    {accountId && (
                      <div
                        className={
                          "font-medium flex items-center px-4 py-3 border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 select-none"
                        }
                      >
                        {formatAddress(accountId)}
                      </div>
                    )}
                    {dropdownItems.map(({ href = "#", title, fx }, i) => (
                      <div
                        key={title}
                        className={
                          "flex items-center px-4 py-3 border-gray-300 dark:border-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-600 dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300 select-none"
                        }
                        onClick={() => {
                          fx ? fx() : router.push(href);
                          setOpenProfileMenu(false);
                        }}
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-2">
                <Button variant="outlined" onClick={onConnectToMetamask} className="rounded-full">
                  <div className="px-1 flex items-center justify-between">
                    <Image
                      src="/images/MetamaskLogo.svg"
                      className="mr-1 w-auto h-[26px]"
                      alt="metamask logo"
                      height={26}
                      width={40}
                    />
                    <div className="hidden md:flex">Connect Wallet</div>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-full sublime-gd h-[2px]" /> */}
    </header>
  );
}

export default Header;
