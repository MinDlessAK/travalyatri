import Navbar from "~/components/home/navbar"
import GetStart from "~/components/home/getStart"

export default function index() {
  return (
    <>
      <div class="flex flex-col min-h-screen w-full bg-gradient-to-r from-slate-900 to-slate-700">
     <Navbar></Navbar>
   
     <div class="flex grow justify-center items-center flex-col gap-10 ">
          <GetStart></GetStart>
     </div>
</div>
    </>
  )
}
