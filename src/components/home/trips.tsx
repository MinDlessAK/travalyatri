import Navbar from "./navbar"
import ImgTravel1 from '~/components/media/travel1.jpg?jsx';
import ImgBeach from '~/components/media/beach.jpg?jsx';
import ImgMountain from '~//components/media/mountain.jpg?jsx';
import { Link } from "@builder.io/qwik-city";

function trips() {
  return (
    <>
      <div class="flex flex-col  min-h-screen w-full bg-slate-900 gap-2">
     <Navbar></Navbar>  


 <div class="flex flex-col min-h-screen w-full  gap-5">
      <div class="flex justify-center">
        <h1 class="text-cyan-500 text-4xl font-extrabold mt-10 ">Trips</h1>
      </div>

    <div class="flex justify-center">
      <p class="text-white font-serif   ">We have a few specail premotion for our faithfull trip</p>
    </div>

    <div class=" flex gap-4 pl-36 mt-6">
         <button class="border-solid border-2 text-white  p-2 px-5 rounded-md  hover:bg-cyan-400 hover:text-black ">All Trips</button>
         <button class="border-solid border-2 text-white p-2 px-5 rounded-md  hover:bg-cyan-400 hover:text-black">My saves</button>
    </div>

    <div class="flex  gap-20  flex-col lg:flex-row justify-center ">

       <Link href="openTripProductPage" class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow">
            <ImgTravel1 class="w-full h-full rounded-lg  " />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </Link>

       <Link href="demo/openTripProductPage" class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow ">
           <ImgBeach class="h-full w-full  rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Beach</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </Link>

       <Link href="demo/openTripProductPage" class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow ">
          <ImgMountain  class="h-full  w-full rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Mountain</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </Link>
    </div>
   </div>
  
</div> 
      
    </>
  )
}

export default trips
