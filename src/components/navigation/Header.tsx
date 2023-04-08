import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed ease-in duration-500 backdrop-blur-md h-20 z-20 w-full py-5 mx-auto">
      <div className="flex justify-around items-center">
        <div>
          <Link href="/">
            <div className="uppercase text-center">
              <h4 className="text-transparent bg-clip-text custom-gradient">
                Mubarra
              </h4>
              <h4>Naz</h4>
            </div>
          </Link>
        </div>
        <button className="pill-btn custom-gradient">
          Let&lsquo;s Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
