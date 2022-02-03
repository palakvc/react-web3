import Button from "components/Button";
import IconButton from "components/IconButton";
import Input from "components/Input";
import Search from "icons/SearchIcon";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import React, { useEffect } from "react";
import { RootState, useAppSelector } from "store";

type navItems = {
  href: string;
  title: string;
};

const navItems: navItems[] = [
  {
    title: "Marketplace",
    href: "",
  },
  {
    title: "Spotlight",
    href: "",
  },
  {
    title: "Blog",
    href: "",
  },
  {
    title: "FAQ",
    href: "",
  },
];

function Header() {
  const isLoggedIn: boolean = false;

  const globalObjects = useAppSelector(
    (state: RootState) => state.commonReducer.globalObjects
  );
  const ethereum = globalObjects?.ethereumObject;
  const provider = globalObjects?.provider;

  const onChainIdChange = (chainId: String) => {
    window.location.reload();
  };

  // const onAccountChange = (accounts: String[]) => {
  //   console.log("on account Change", accounts);
  // };

  useEffect(() => {
    ethereum
      .request({
        method: "eth_accounts",
      })
      .then((address: String[]) => {
        console.log("on load get account", address);
      });

    ethereum.on("chainChanged", onChainIdChange);
    // ethereum.on("accountsChanged", onAccountChange);
    return () => {
      // ethereum.removeListener("accountsChanged", onAccountChange);
      ethereum.removeListener("chainChanged", onChainIdChange);
    };
  }, [ethereum]);

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
    console.log("accounts after clicking", accounts[0], signInHash);
  };

  return (
    <header className="w-full bg-white dark:bg-black shadow-md z-[100] bg-secondary fixed top-0">
      <div className="flex items-center justify-between h-36 max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center space-x-4">
          <div className="text-center mx-8">
            <span className="text-24 sublime-gd bg-clip-text text-transparent">
              A
            </span>
            <span className="sublime-gd bg-clip-text text-transparent">
              RTISTIC
            </span>
          </div>

          <form className="mb-0 lg:flex">
            <div className="relative">
              <Input placeholder="Search..." type="text" />

              <button
                className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600"
                type="submit"
              >
                <Search className="text-gray-600" />
              </button>
            </div>
          </form>
        </div>

        <nav className="items-center justify-center space-x-8 font-medium lg:flex lg:flex-1 lg:w-0">
          {navItems.map(({ href, title }) => (
            <Link href={href}>
              <span className="cursor-pointer text-gray-800 dark:text-gray-500 dark:hover:text-white hover:border-sublime hover:border-b-2">
                {title}
              </span>
            </Link>
          ))}
        </nav>

        <div className="space-x-4 flex items-center">
          <ThemeToggler />
          {isLoggedIn ? (
            <IconButton>Profile</IconButton>
          ) : (
            <Button variant="outlined" onClick={onConnectToMetamask}>
              <div className="flex items-center">
                <img
                  src="/images/MetamaskLogo.svg"
                  className="mx-1 w-auto h-[26px]"
                />
                Connect with Metamask
              </div>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
