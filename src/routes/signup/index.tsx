
import Navbar from "~/components/home/navbar";
import Signup from "~/components/home/signup";

export default function index() {
  return (
    <div>
      <div class="flex flex-col min-h-screen bg-gradient-to-r from-slate-900 to-slate-700">
      <Navbar></Navbar>
   
    <div class="flex grow justify-center items-center flex-col gap-3">
      <Signup></Signup> 
    </div>
  </div>
    </div>
  )
}
