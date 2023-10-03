import { Link } from "@builder.io/qwik-city";

export default function login() {
  return (
    <>
         <div id="login-section" class=" bg-white flex rounded-xl w-80 flex-col gap-6 p-4">
        <div class="font-bold text-2xl flex justify-center">
          <h2>Login</h2>
        </div>
        <div>
          <input type="email" placeholder="Enter your email" required class="border-b focus:outline-none focus:border-black w-full" />
        </div>
        <div>
          <input type="password" placeholder="Enter your password" required class="border-b focus:outline-none focus:border-black w-full" />
        </div>
        <div class="flex justify-between">
          <span class="checkbox">
            <input type="checkbox" id="check" class="mr-1" />
            <label for="check">Remember me</label>
          </span>
          <a href="#" class="text-cyan-400 hover:underline">Forgot password?</a>
        </div>
        <div class="flex">
          <button class="rounded-full bg-cyan-500 text-white w-full h-10 hover:scale-110 transition-all duration-300 ease-in-out  font-semibold">Login Now</button>
        </div>
        <div class="flex justify-center">
          Don't have an account?
          <Link href="/demo/signup" id="signup" class="text-cyan-400 hover:underline ml-1">Signup</Link>
        </div>
      </div>

      
    </>
  )
}
