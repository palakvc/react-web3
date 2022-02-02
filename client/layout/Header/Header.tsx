import Button from "components/Button";
import IconButton from "components/IconButton";
import Input from "components/Input";
import Search from "icons/SearchIcon";
import Link from "next/link";
import React from "react";

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

  return (
    <header className="w-full shadow-md z-[100] bg-secondary fixed top-0">
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
              <Input placeholder="Search..." type="text" />

              <button
                className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
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
            <Button>Connect with Metamask</Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
