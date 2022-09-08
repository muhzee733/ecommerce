import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

const Navbar = () => {
  const style = "text-[14px], cursor-pointer, ml-[25px]";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] flex justify-between items-center">
        <div className="left flex  flex-1 items-center">
          <div className="cursor-pointer text-[16px]">En</div>
          <div className="SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
            <input
              type="text"
              className="input outline-none"
              placeholder="Search"
            />
            <Search className="text-[#8a4af3] " style={{ fontSize: "18px" }} />
          </div>
        </div>
        <div className="flex-1 center text-center">
          <div className="logo font-bold text-lg">Summer King</div>
        </div>
        <div className="right flex flex-1 items-center justify-end ">
          <div className={style}>Register</div>
          <div className={style}>Signin</div>
          <div className={style}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
