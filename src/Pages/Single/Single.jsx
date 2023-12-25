import {useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import { useCallback } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { FaStar } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { Authcontext } from "../../AuthProvider/AuthProvider";




const Single = () => {
const [isZoomed, setIsZoomed] = useState(false)
const {id} = useParams()
let [startQuantity, setStart] = useState(0)

const [singledata, setsingledata] = useState(null)
const {addCard, upLoading} = useContext(Authcontext)

useEffect(() => {
  

    fetch('http://localhost:5000/homeid', {

    method : "POST", 
    headers: {"content-type": "application/json"},
    body: JSON.stringify({id})
    })
    .then(res => res.json())
.then(dd => {
    setsingledata(dd)
    
})

}, [id])




const handleZoomChange = useCallback(shouldZoom => {
  setIsZoomed(shouldZoom)
}, [])









const addCart = (data) => {


const allData ={
_id: data._id,
brand: data.brand,
category: data.category,
date: data.date,
description: data.description,
name: data.name,
productId: data.productId,
productImage: data.productImage,
rating: data.rating,
price: data.price,
type: data.type,
quantity: startQuantity == 0 ? startQuantity+1 : startQuantity,
availability: "Available"

}



fetch("http://localhost:5000/addCard", {
method: "POST", 
headers: {"content-type" : "application/json"},
body : JSON.stringify(allData)
})
.then(res => res.json())
.then(data => {

    console.log(data)
    let update = Math.floor(Math.random() * 1054353453453450);
    addCard(update, true)

    console.log("Added Product Successfully")

})









}




const startData = () => {
setStart(startQuantity+1)


}



const endData = () => {




 setStart(() =>  startQuantity > 0 ? startQuantity-1 : 0)
   


 

 

}



    return (<div> 
   
         <div className="bg-[#ddd] h-[60px] flex items-center">

          <div className="xl:mx-[240px] lg:mx-[100px] md:mx-[50px] mx-[10px] flex items-center">
        <div>
        <h2 className="font-semibold"> {singledata?.category} | {singledata?.name} | {singledata?.type}</h2>
        </div>
                </div>
          
      

        </div>
      <div className="xl:mx-[240px] lg:mx-[100px] md:mx-[50px] mx-[10px] my-8">

  <div className="border-b-[1px] my-2 py-2">


<div className="flex justify-between">
  <div> 
<h2 className="text-[20px]">{singledata?.name}</h2>
      <div className="flex items-center gap-2 ">

    
             <h2 className="font-bold">Rating:</h2>
                {
                    singledata?.rating.map((d, index) => {
          
                    return(<div key={index}>


                        <FaStar className="text-orange-500"></FaStar>
                    </div>)

                    })
                }

         

</div>





</div>  



<div className="flex gap-1">

<div className="flex items-center">
<div className="flex gap-1 items-center bg-[#4267B2] px-[3px] py-[3px] h-max w-max rounded-md">
    <h2 className="font-semibold text-[14px] text-white">Facebook</h2>
<FaFacebookF className="text-white text-[14px]"></FaFacebookF>
</div>
</div>



<div className="flex items-center">
<div className="flex gap-1 items-center bg-[#3EB0FF] px-[3px] py-[3px] h-max w-max rounded-md">
    <h2 className="font-semibold text-white text-[14px]">Twitter</h2>
    <FaTwitter className="text-white text-[14px]"></FaTwitter>
</div>
</div>


<div className="flex items-center">
<div className="flex gap-1 items-center bg-[#B10C0C] px-[3px] py-[3px] h-max w-max rounded-md">
    <h2 className="font-semibold text-white text-[14px]">Pinterest</h2>
    <FaPinterestP className="text-white text-[14px]"></FaPinterestP>
</div>
</div>



</div>



</div>




 
  </div>
      
<div className="flex gap-6 justify-center items-center">
   <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4">



  <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>

{

 <img
        alt="That wanaka tree, alone in the water near mountains"
        src={singledata?.productImage}
        width="400"

      />

}
    



    </ControlledZoom>


  {/*  */}
 
 <div>
 <div className="text-[23px] flex items-center"><BsCurrencyDollar></BsCurrencyDollar><h2>{singledata?.price}</h2></div> 
 <div className="bg-[#EBFAE9] p-2 border-[1px] border-[#809946b0] rounded-md">
<div>
    <span className="font-semibold">Availability: </span>
    <span className="text-[#21bd84] font-bold">Available</span>
</div>
 </div>

<div className="my-2">
    <div className="flex gap-1 items-center"><GoDot></GoDot><div><span className="font-bold">Type:</span> <span>{singledata?.type}</span></div></div>


 <div className="flex gap-1 items-center"><GoDot></GoDot><div><span className="font-bold">Date:</span> <span>{singledata?.date}</span></div></div>


<div className="border-t-[1px] my-4">
<h2 className="font-bold my-2">Quantity:</h2>

<div className="flex gap-2 items-center">
<div className="border-2 flex items-center">
<div className="mx-3 font-semibold text-[25px]"> <button onClick={endData}>-</button></div>

<h2>{startQuantity}</h2>
 <div className="mx-3 font-semibold text-[20px]"> <button onClick={() => startData(singledata)}>+</button></div>

</div>

<div>

 {

upLoading ? <span className="loading loading-spinner text-warning"></span> :   <button onClick={() => addCart(singledata)} className="font-semibold px-3 py-2 bg-orange-500 text-white">Add to cart</button>
  

 }

  


</div>

<div>
<button><IoIosHeartEmpty className="text-[25px] hover:text-orange-500"></IoIosHeartEmpty></button>
</div>
   
</div>
</div>

<div className="border-t-[1px] my-6">

<div className="my-2"><span className="font-bold">Brand:</span> <span className="text-[#21bd84]">{singledata?.brand}</span> </div>

<div>
    <span className="font-bold">Categories: </span><span>{singledata?.category}</span>
</div>


</div>




</div>


 
 </div>
   </div>


</div>


<div className="bg-[#F5F5F5] p-4 my-2">
<h2 className="font-bold">DESCRIPTION</h2>

<div className="my-2">
<p>{singledata?.description}</p>
</div>

</div>
      </div>
      </div>


   
    );
};

export default Single;