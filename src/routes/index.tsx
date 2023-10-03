// Uncomment with level 1 to get output
import  Navbar  from '~/components/home/navbar';
import Htrips from '~/components/home/htrips';
import Service from "~/components/home/Service";
// import { Link } from "@builder.io/qwik-city";
// import ImgTravel1 from '~/components/media/travel1.jpg?jsx';
import ImgBeach from '~/components/media/beach.jpg?jsx';
// import ImgMountain from '~//components/media/mountain.jpg?jsx';
import GetStart from "~/components/home/getStart";



// import { Link } from "@builder.io/qwik-city";

// import ImgBg from '~/media/bg.jpg?jsx';
export default () => {
  return (
    <>
      {/* level 1 */}
       <div class="flex flex-col min-h-screen w-full bg-gradient-to-r from-slate-900 to-slate-700">
        <Navbar></Navbar>
     <div class="flex grow justify-center items-center flex-col gap-10 ">
        <GetStart></GetStart>
     </div>
</div>

<div  class=" min-h-screen w-full  bg-slate-950 ">
        <Htrips></Htrips>
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





{/* prodouct */}
{/* 
<div class="flex flex-col  min-h-screen w-full bg-slate-900">
 <Navbar></Navbar>  

  <div class="flex flex-col px-14 mt-14 ">
    <div class="flex justify-between ">
      <div>
      <h1 class="text-white font-bold text-2xl">Shimla manali Manikaran kasol 8 Days private Tour From Chandigarh</h1>
      </div>
      <div class="flex gap-2 items-center">
        <div class="h-10 w-10 bg-cyan-400"></div>
        <div class="h-10 w-10 bg-cyan-400"></div>
      </div>
    </div>
   </div>
     
    <div class="flex flex-col px-14 gap-1">
       <div>
        <p class="text-white font-serif">BY Akash Mishra</p>
       </div>

       <div class="flex gap-1 items-center">
        <div class="h-3 w-3 bg-cyan-400 rounded-full"></div>
        <div class="h-3 w-3 bg-cyan-400 rounded-full"></div>
        <div class="h-3 w-3 bg-cyan-400 rounded-full"></div>
        <div class="h-3 w-3 bg-cyan-400 rounded-full"></div>
        <div class="h-3 w-3 bg-cyan-400 rounded-full"></div>
        <div class="text-white font-serif">Reviews</div>
      </div>
    </div>

    <div class="flex px-14 gap-1  w-full mt-2">

      <div class="w-3/6">
        <div class=" bg-cyan-400  h-96 w-full"></div>
      </div>

      <div class="flex flex-col gap-2 h-96 w-2/6">
        <div class=" bg-cyan-400 h-1/2 w-full "></div>
        <div class=" bg-cyan-400 h-1/2 w-full "></div>
      </div>

    </div> */}



 {/* </div> */}


   

    
    </>
  );
};
