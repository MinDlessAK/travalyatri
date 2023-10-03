import ImgTravel1 from '~/components/media/travel1.jpg?jsx';
import ImgBeach from '~/components/media/beach.jpg?jsx';
import ImgMountain from '~//components/media/mountain.jpg?jsx';


export default function Service() {
  return (
    <>
      <div class="flex flex-col min-h-screen w-full   justify-center items-center p-10 gap-10 ">
          <div>
            <h1 class="font-extrabold text-cyan-400 text-4xl ">Our Services</h1>
          </div>

        <div class="flex lg:gap-80 grow items-center justify-center flex-col-reverse lg:flex-row gap-10">
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service1</h2>
              </div>
              <div class=" space-x-3">
                <h3 class="text-white font-serif text-6xl inline-block">Free </h3>
                <h4 class="text-cyan-400 font-serif text-6xl inline-block"> Travel</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
             </div>
          </div>

          <div class="h-72 lg:w-72 w-full ">
          <ImgTravel1 alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </div>

        </div>
    </div>


    <div class="flex flex-col min-h-screen w-full   justify-center items-center p-10 ">
         

        <div class="flex lg:gap-80 grow items-center justify-center flex-col lg:flex-row gap-10">


          <div class="h-72 lg:w-72 w-full ">
              <ImgBeach alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </div>
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service2</h2>
              </div>
              <div class="space-x-3">
                <h3 class="text-white font-serif text-4xl lg:text-6xl inline-block">Resturent</h3>
                <h4 class="text-cyan-400 font-serif text-4xl lg:text-6xl inline-block">Service</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit   </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
             </div>
          </div>

          

        </div>
    </div>

    <div class="flex flex-col min-h-screen w-full   justify-center items-center p-10">

        <div class="flex lg:gap-80 grow items-center justify-center flex-col-reverse lg:flex-row gap-10">
           
           <div class="">
              <div>
                <h2 class=" font-serif text-white text-lg">Service3</h2>
              </div>
              <div class="space-x-3">
                <h3 class="text-white font-serif text-6xl inline-block">Ocean </h3>
                <h4 class="text-cyan-400 font-serif text-6xl inline-block">Side</h4>
             </div>
             <div class="pt-6">
               <span class="text-white font-serif text-4xl  block">Lorem ipsum, dolor sit amet  </span>
               <span class="text-white font-serif text-4xl  block">consectetur adipisicing elit.</span>
               <span class="text-white font-serif text-4xl  block">Amet, cum!</span>
             </div>
             <div class="pt-4">
               <button class="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out font-semibold" >Read More</button>
             </div>
          </div>

          <div class="h-72 lg:w-72 w-full ">
          <ImgMountain alt="" class="h-full w-full rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" />
          </div>

        </div>
    </div>
    </>
  )
}
