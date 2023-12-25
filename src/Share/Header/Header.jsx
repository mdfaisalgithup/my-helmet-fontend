import Navbar from "../Navbar/Navbar";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoBag } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuHeart } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import { IoMdArrowDropup } from "react-icons/io";

import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [allData, setAllData] = useState([])
  const {update, addCard} = useContext(Authcontext)

useEffect(() => {

fetch("http://localhost:5000/addCard")
.then(res => res.json())
.then(d => {

  setAllData(d)
  addCard(null, false)

})

}, [update])


const deleteProduct = (id) => {

  fetch("http://localhost:5000/deleteproduct", {

method: "DELETE",
headers: {"content-type" : "application/json"},
body: JSON.stringify({id})
  }).then(res => res.json())
.then(d => {

  addCard(d?.reloader, false)
console.log(d)


})


}




    return (
        <div>

     <div className="bg-[#26901B] py-4 border-b-[1px] text-white">
     <div className="xl:mx-[240px] lg:mx-[100px] md:lg:mx-[50px] mx-[10px]">

     <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-between items-center">
     <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-2">
     <div className="flex gap-2 items-center">
        <IoLocationSharp></IoLocationSharp>
      <h2>8049 High Ridge St. Saint Joseph</h2>
      </div>
<div className="flex gap-2 items-center">
<IoCall></IoCall>
<h2>Hotline: 970 978-6290</h2>
</div>
</div>

       <div className="flex gap-2">
       <div className="flex gap-2 items-center">
        <IoIosPhonePortrait></IoIosPhonePortrait>
        <h2>Save more on app</h2></div>
        <div className="flex gap-2 items-center">
        <IoBag></IoBag>
        <h2>Checkout</h2>
        
        </div>
       </div>
     </div>

        </div>
     </div>


     <div className="bg-[#26901B]">
        <div className="xl:mx-[240px] lg:mx-[100px] md:mx-[50px]">
      <div className="flex xl:justify-start lg:justify-start md:justify-start justify-center items-center gap-2 py-8">
        
        <div className="xl:block lg:block md:block hidden">
      <div className="flex items-center gap-2">
        <img className="w-[100px] h-max" src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2022/12/logo-light-yellow.png" alt="logo" />
            <div className="border-2 border-white">
          <h2 className="text-center p-2 text-white font-semibold">  Need help?</h2>
            </div>
        </div></div>



        <div className="flex-1 xl:block lg:block md:block hidden">
            <form>
                <div className="w-full h-full relative">
                     <input className="rounded-md outline-none p-3 w-full" type="search" name="search" placeholder="I am searching for..." />
                    <div className="absolute cursor-pointer top-0 right-0 b] h-full">
                      <div className="flex gap-4 items-center h-full">
                      <div className="border-l-[1px] border-[#ddd]">

                            <select className="outline-none" name=""> 

                             <option value="volvo">All Categories</option>
                          <optgroup label="Baby & Child">
                             <option value="bouncers">Bouncers</option>
                                 <option value="pushchairs">Pushchairs</option>
                                <option value="nursery">Nursery</option>
                                <option value="toys">Toys</option>
                                </optgroup>
                                <optgroup label="Bakery">
                        <option value="chocolate">Chocolate</option>  
                           <option value="cupcakes">Cupcakes</option>
                           <option value="fruit-filling">Fruit-filling</option>
                                <option value="stouffer">Stouffer</option>
                                </optgroup>
                             <optgroup label="Beer, Wine">
                              <option value="bottle">Bottle</option>  
                           <option value="carlsberg">Carlsberg</option>
                           <option value="fruit-purees">Fruit Purees</option>
                                <option value="heineken">Heineken</option>
                                </optgroup>


                            </select>
                        </div>


                         <div className="flex hover:bg-yellow-500 bg-yellow-400 p-4 items-center h-full">
                         <CiSearch className="text-[25px] text-black"></CiSearch>
                         </div>

                      </div>

                    </div>
                    
                </div>
               
            </form>
        </div>


<div className="w-[20%]">

<div className="flex gap-8 relative  justify-center items-center">

<div className="relative">
    <LuHeart className="text-[30px] text-white"></LuHeart>
    <div className="absolute bg-orange-500  rounded-md left-[19px] top-[-15px]">
 <h2 className="text-center  text-[14px] px-[4px] font-semibold">10</h2>
    </div>
</div>



<div className="relative cursor-pointer show">
<FaCartPlus className="text-[30px]  text-white my-4"></FaCartPlus>
<div className="absolute bg-orange-500  rounded-md left-[25px] top-[-0px]">
<h2 className="text-center  text-[14px] px-[4px] font-semibold">
  {

allData.length
}
</h2>
</div>


<div className="absolute w-[400px] shadow-lg bg-[#f1f1f1] rounded-md  dorlam p-4 right-[-150px] top-[100%] z-40">

<IoMdArrowDropup className="top-[-30px] text-[#f1f1f1] right-[135px] absolute text-[50px] z-50 "></IoMdArrowDropup>


{
  allData.length == 0 ? <h2 className="text-center font-medium">Not Product</h2> : <> <div className="overflow-y-auto cursor-default h-[200px] p-4">


{

allData.map((d, index) => {

  return(<div key={index}>
    <div className="flex justify-between">
    
  <div className="flex items-center gap-2 my-4">
 <Link to={`single/${d?._id}`}> 
    <img className="h-[80px] cursor-pointer w-[80px] object-cover" src={d?.productImage} alt="image" /></Link>
    <div>
      <Link to={`single/${d?._id}`}>  <h2 className="font-bold cursor-pointer hover:text-orange-500">{d?.name}</h2></Link>


  <div className="text-[#666666]"><span className="font-bold">${d?.price}</span>(X{d?.quantity} )</div> 
   </div>  

  </div>

 <button onClick={() => deleteProduct(d._id)}>  <RiDeleteBinLine className="text-[20px] cursor-pointer hover:text-orange-600"></RiDeleteBinLine></button>
   </div>
   <div className="border-t-[1px] border-t-slate-300 my-2"></div>
    </div>)
})
}
 </div>


 
<div>

  <div className="flex justify-between my-4">
    <h2 className="uppercase font-semibold">Total:</h2>
    <h2 className="font-bold text-orange-500">${allData.reduce((total, item)  => total + item.price * item.quantity, 0).toFixed(3)}</h2>
  </div>
<div className="flex justify-between">
<div>  <button className="font-bold text-black rounded-md bg-[#ddd] hover:bg-[#d7d6d6] px-4 py-2">View Cart</button></div>

  <div> <button className="font-bold text-white rounded-md hover:bg-orange-600 bg-orange-500 px-4 py-2">Checkout</button></div>
</div>

</div>
</>
}


</div> 

</div>


<div>
    <RxAvatar className="text-[30px] text-white"></RxAvatar>
</div>



</div>

{



}





</div>





      </div>
       
        </div>


     </div>

       <Navbar></Navbar>


        </div>
    );
};

export default Header;