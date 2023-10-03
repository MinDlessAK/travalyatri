import Navbar from "./navbar"
function openTripProductPage() {
  return (
    <>
      
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

    </div> 


</div>

    </>
  )
}

export default openTripProductPage
