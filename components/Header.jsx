import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`w-full h-[90px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 `}
    >
      <Wrapper className={`h-[90px] flex  items-center border-b-2 border-gray-800`}>
        <Link href="/">
          <img src="https://mejidigital.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.5af1e57f.png&w=750&q=75" className="w-[40px] md:w-[90px] mr-5"></img>
        </Link>
         <p className="font-bold text-2xl mr-1">codingskills </p>
         <p className="font-bold text-3xl text-blue-700"> PLAY</p>
      </Wrapper>
    </header>
  );
};

export default Header;
