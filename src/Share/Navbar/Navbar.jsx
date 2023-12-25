import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="bg-[#116709] p-4 text-white">

    <div className="xl:mx-[240px] lg:mx-[100px]  md:mx-50px]">
    <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-start lg:items-start md:items-start items-center justify-center gap-10">
           <NavLink to="/">Home</NavLink>
           <NavLink to="/shop">Shop</NavLink>
           <NavLink to="/blog">Blog</NavLink>
           <NavLink to="/about">About</NavLink>
            
        </div>

       </div>
        </div>
      
    );
};

export default Navbar;