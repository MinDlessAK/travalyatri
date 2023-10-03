import { Link } from "@builder.io/qwik-city";
import ImgBeach from '~/components/media/beach.jpg?jsx';

export default function  editProfile() {
  return (
    <>
     <div class=" relative min-h-screen bg-slate-900 w-full ">

    <div class="flex h-1/3 w-full absolute  ">
       <ImgBeach class="h-full w-full "/>
    </div>
  
  <div class=" relative top-52 ">

     <div class="flex justify-center">
        <div class="rounded-full w-32 h-32 bg-slate-600"></div>
     </div>

      <div class="text-white font-serif text-xl flex flex-col items-center">
        <h1>Akash Mishra</h1>
        <h2 >Punjab</h2>
      </div>


      <div class="flex bg-slate-900  p-10">

         <div class="flex flex-col w-72  pt-9 pl-12 gap-5 ">
           <Link  href="#" class="text-white text-lg  hover:text-slate-400">Trips</Link>
           <Link href="#" class="text-white text-lg hover:text-slate-400">Groups</Link>
           <Link href="#" class="text-white text-lg hover:text-slate-400">Photos</Link>
           <Link href="#" class="text-white text-lg hover:text-slate-400">Reviews</Link>
         </div>

         <div class="flex flex-col gap-1 ">

          <div class="text-white text-lg">Photos</div>

          <div class="flex flex-col gap-4">

            <div class="flex gap-4">
              <div class=" w-56 h-40 bg-red-500  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
            </div>
            <div class="flex gap-4">
              <div class=" w-56 h-40 bg-red-500  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
            </div>
            <div class="flex gap-4">
              <div class=" w-56 h-40 bg-red-500  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
              <div class=" w-56 h-40 bg-red-500 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 "></div>
            </div>

          </div>
         </div>

      </div>

    
  </div>
</div>  
      
    </>
  )
}


