
export default function signup() {
  return (
    <>

      <div class="bg-white flex rounded-xl  flex-col gap-6 p-4">

        <div class="font-bold text-2xl flex justify-center">
          <h2>Registration</h2>
        </div>

        <div class="flex gap-10 ">
          <div class="space-y-2 w-full">
          <label> Full Name</label>
          <input type="text" placeholder="Enter your  Name" required class="border-b focus:outline-none focus:border-black w-full" />
          </div>
          <div class="space-y-2 w-full">
          <label> Username</label>
          <input type="text" placeholder="Enter your Username" required class="border-b focus:outline-none focus:border-black w-full" />
          </div>
        </div>

        <div class="flex gap-10 justify-around">
          <div class="space-y-2 w-full"> 
          <label>Email</label>
             <input type="email" placeholder="Enter your email" required class="border-b  focus:outline-none focus:border-black w-full" />
          </div>
          <div class="space-y-2 w-full"> 
          <label >Number</label>
             <input type="number" placeholder="Enter your number " required class="border-b focus:outline-none focus:border-black w-full" />
          </div>
        </div>

       <div class="flex gap-10 justify-around">
        <div class="space-y-2 w-full">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required class="border-b focus:outline-none focus:border-black w-full" />
        </div>
        <div class="space-y-2 w-full">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" required class="border-b focus:outline-none focus:border-black w-full" />
        </div>
      </div>
        <div class="flex">
          <button class="rounded-full bg-cyan-500 text-white w-full h-10 hover:scale-105 transition-all duration-500 ease-in-out  font-semibold">Register Now</button>
        </div>
        <div class="flex justify-center">
          Already have an account?
          <a href="/demo/login" id="login" class="text-cyan-400 hover:underline ml-1">Login</a>
        </div>
      </div>
      
    </>
  )
}
