import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-cover border-2 rounded border-solid  border-indigo-500/75  flex flex-col items-center justify-center p-3 m-5">
      <Link to="/" className="text-black font-bold text-2xl sm:text-5xl font-['Georgia'] ">
        IQ-Mind Quiz Master
      </Link>
      {/* <hr className=" m-3"/> */}
    </div>
  );
}

export default Header;
