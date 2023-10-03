import ImgTravel1 from '~/components/media/travel1.jpg?jsx';
import ImgBeach from '~/components/media/beach.jpg?jsx';
import ImgMountain from '~//components/media/mountain.jpg?jsx';
import { Link } from '@builder.io/qwik-city';

export default function trips() {
  return (
    <>
       <div class="flex flex-col min-h-screen w-full justify-center items-center gap-10">
    <div>
      <h1 class="text-cyan-500 text-4xl font-extrabold mt-10 ">Our Top Trips</h1>
    </div>

    <div>
      <p class="text-white font-serif   ">We have a few specail premotion for our faithfull trip</p>
    </div>

    <div class="flex  gap-20  flex-col lg:flex-row ">

       <div class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow">
            <ImgTravel1 class="w-full h-full rounded-lg  " />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Travel</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>

       <div class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow ">
           <ImgBeach class="h-full w-full  rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Beach</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>

       <div class=" w-80 flex flex-col gap-3 p-1 cursor-pointer rounded-lg hover:scale-110 transition-all duration-300 ease-in-out">
          <div class="grow ">
          <ImgMountain  class="h-full  w-full rounded-lg" alt="" />
          </div>
          <div>
            <h1 class="text-cyan-400 font-serif text-2xl">Mountain</h1>
          </div>
          <div>
            <p class="text-white font-serif ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi velit iusto quam possimus dolores amet.</p>
          </div>
       </div>
    </div>

    <div >
        <Link href="demo/trips"  class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold">See All</Link>
    </div>
   </div>
    </>
  )
}

