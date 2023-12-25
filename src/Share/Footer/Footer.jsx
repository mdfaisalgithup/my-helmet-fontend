

const Footer = () => {
    return (
        <div className="h-[400px] border-t-[1px] my-6">
   

    <div className="xl:mx-[240px] mx-[10px] h-full">
       <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-evenly items-center h-full">


<div>
<h2 className="my-4 font-bold">Farmart – Your Online Foods & Grocery</h2>

<h2>Hotline 24/7:</h2>
<h2>(+965) 7492-4277</h2>

<h2>959 Homestead Street Eastlake, NYC</h2>
<h2>support@farmart.com</h2>



</div>


<div>

  <h2 className="font-bold my-4">Farmart Newsletter</h2>
    <p className="my-4">Register now to get updates on promotions and coupns. Don’t worry! We not spam</p>


  <form>
<div className="relative w-full h-full">
    <input className="w-full border-[1px] rounded-md px-3 py-2 outline-none" type="email" name="" id="" />

<button className=" px-4 absolute right-0 top-0 bg-orange-500 font-bold text-white  h-full transition-all hover:bg-orange-600">Subscribe</button>

</div>

  </form>

</div>


   </div> 
   
    </div>
   
         


        </div>
    );
};

export default Footer;