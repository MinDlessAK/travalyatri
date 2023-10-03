// import Mnavbar from "~/components/home/mnavbar"
import Navbar from "~/components/home/navbar";
import Trips from '~/components/home/htrips';
import Service from "~/components/home/Service";
import ImgBeach from "~/components/media/beach.jpg?jsx"
import GetStart from "~/components/home/getStart";

export default function index() {
  return (
    <>
     <div class="flex flex-col min-h-screen w-full bg-gradient-to-r from-slate-900 to-slate-700">
        <Navbar></Navbar>
     <div class="flex grow justify-center items-center flex-col gap-10 ">
     <div class="">
        <ul class="">
          <li class=" space-y-6 text-xl flex   absolute right-32 top-14 flex-col items-center  lg:hidden ">
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Home</a>
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Trips</a>
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Services</a>
            <a href="#" class="text-white hover:underline hover:text-cyan-400">Contact</a>
            <a  href="/demo/getstarted" class=" font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out ">Get Started</a>
          </li>
        </ul>
    
        </div>
          <GetStart></GetStart>
     </div>
</div>
<div  class=" min-h-screen w-full  bg-slate-950 ">
        <Trips></Trips>
        <Service></Service>
</div>

<div class=" relative min-h-screen flex flex-col">

  <div class="flex h-screen w-full absolute  ">
     <ImgBeach class="h-full w-full "/>
  </div>

       <div class="h-screen w-full grid relative place-items-center">
          <div class="bg-white p-4 rounded-md shadow-6xl w-80  bg-opacity-0  backdrop-blur-xl">
            <p class="text-black text-xl font-exo2 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              nemo?
            </p>
            <div class="w-full grid place-content-center my-6">
              <button class="text-white font-semibold bg-cyan-500 rounded-md px-4 py-1  hover:scale-110 transition-all duration-300 ease-in-out ">
                Click Here
              </button>
            </div>
          </div>
        </div>

  <div class="bg-slate-700 flex justify-center gap-8 p-5 absolute bottom-0 left-0 w-full" >
    <div>
       <p class="text-white">
           travelyatri@gmail.com
       </p>
    </div>
    <div class=" ">
    <p class="text-white ">+91 9832838742</p>
    </div>
  </div>

</div>
    </>
  )
}
