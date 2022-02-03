import Button from "components/Button";
import IconButton from "components/IconButton";
import Input from "components/Input";
import Search from "icons/SearchIcon";
import Link from "next/link";
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
  const isLoggedIn = false;

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
    <header className="shadow-sm">
      <div className="flex items-center justify-between h-32 max-w-screen-xl px-4 mx-auto">
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
              <div id="inputHolder" className="sublime-gd p-[1px] rounded-lg">
                <input
                  className="h-10 pr-10 placeholder-gray-300 rounded-lg text-gray-700 focus:z-10 p-2 outline-none focus:ring"
                  placeholder="Search..."
                  type="text"
                />
              </div>

              <button
                className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                type="submit"
              >
                <Search />
              </button>
            </div>
          </form>
        </div>

        <nav className="items-center justify-center space-x-8 font-medium lg:flex lg:flex-1 lg:w-0">
          {navItems.map(({ href, title }) => (
            <Link href={href} key={title}>
              <span className="cursor-pointer text-gray-800 hover:border-sublime hover:border-b-2">
                {title}
              </span>
            </Link>
          ))}
        </nav>

        <div className="items-center space-x-4 lg:flex">
          {isLoggedIn ? (
            <IconButton>Profile</IconButton>
          ) : (
            <Button onClick={onConnectToMetamask}>Connect with Metamask</Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
