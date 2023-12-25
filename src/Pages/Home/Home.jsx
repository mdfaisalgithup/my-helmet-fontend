import { useState } from "react";
import "./Home.css"
import { useEffect } from "react";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";


const Home = () => {


const [data, setData] = useState([])

const [perPage, setPerPage] = useState(6)
const [currrentPage, setCurrentPage] = useState(0)
const [count, setCount] = useState(0)
useEffect(() => {

fetch(`http://localhost:5000/home?perpage=${perPage}&size=${currrentPage}`)
.then(res => res.json())
.then(d => {

    setData(d)
})



}, [currrentPage, perPage])


useEffect(() => {

fetch("http://localhost:5000/datacount")
.then(res => res.json())
.then(d => {

    setCount(d.result)
})

}, [])


const TotalData = Math.ceil(count / perPage);
const arrayData = [...Array(TotalData).keys()]

const next = () => {

    if(currrentPage < arrayData.length-1){
        let komais = currrentPage  + 1
        setCurrentPage(komais)

    }


}



const prev  = () => {

    if(currrentPage > 0){
        let komai = currrentPage  - 1
        setCurrentPage(komai)

    }

}




    return (
        <div>

           <div className="banner w-full h-[400px]">
                  
      <div className="bg-[#0000009a] h-full">
      <div className="xl:mx-[240px] lg:mx-[100px] md:mx-[50px] mx-[10px] flex justify-center items-center h-full">

<div className="xl:w-1/2 lg:w-1/2 md:w-1/2 w-full text-center">
    <h2 className="font-bold text-[25px] my-2 text-white">Best Online Farmet</h2>
    <p className="text-white">
Fruits are nature's sweet treats, often vibrant in color and bursting with flavors. They come in various shapes, sizes, and textures, offering a delightful range of tastes.</p>

<button className="px-6 py-2 hover:bg-yellow-600 transition-all bg-yellow-500 my-6 font-bold text-black">Shopping Now!</button>
</div>
</div>
      </div>
         

    </div>



<div className="xl:mx-[240px] lg:mx-[100px] mx-[10px] mt-20">
<h2 className="font-bold uppercase my-8">Bakkery</h2>


<div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">


{

    data.length !== 0 && data.map((d, index) => {

return( 

<div key={index} className="border-[1px] rounded-md p-4">

<img className="h-[300px] w-full rounded-md" src={d.productImage} alt="image" />
  
 <div className="my-4">
 <h2>{ d.name}</h2> 
    
    <div className="flex gap-[1px]">    {
        d.rating.map((i, index) => {

            return(<div key={index}>
            <MdStar className="text-orange-500"></MdStar>
            
            </div>)
        })
    }</div>

   <h2>${d?.price} </h2>
 </div>


<Link to={`/single/${d._id}`}>  <button className="px-4 rounded-md py-2 bg-yellow-400 transition-all hover:bg-yellow-500 block w-max mx-auto text-black font-bold">Add To Card</button></Link>
</div>
)
     
    })
}
</div>


<div className="my-4">
  <div className="flex justify-center">


<button onClick={ prev} className="bg-orange-500 font-bold text-white px-3 py-2">Prev</button>


{

arrayData.map((d, index) => {


    return(

<button onClick={() => setCurrentPage(d)} key={index} className={`py-2 px-4  ${currrentPage == d && "bg-[#ddd]"}`}>{d}</button>
    )
})
}



<button onClick={next} className="bg-orange-500 font-bold text-white px-3 py-2">Next</button>

</div>  
</div>


  
</div>










        </div>
    );
};

export default Home;