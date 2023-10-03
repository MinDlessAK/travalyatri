import { $, component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";


export const navbar = component$(() => {
  const isShow = useSignal<boolean>(false);

  const update = $(() => {
    isShow.value = !isShow.value;
  })

  return (
    <>
      <div class="h-14 w-full flex justify-between items-center p-3 gap-3   shadow-6xl  bg-opacity-0  backdrop-blur-xl ">
        <div class="">
          <a href="#" class="text-cyan-300 font-extrabold text-2xl ml-10">TravelYatri</a>
        </div>
        <div class="">
          <ul>
            <li class="lg:space-x-20 space-x-6 text-xl lg:flex hidden">
              <Link href="/" class="text-white hover:underline-offset-4 hover:underline hover:text-cyan-400">Home</Link>
              <Link href="/demo/trips" class="text-white hover:underline hover:underline-offset-4 hover:text-cyan-400">Trips</Link>
              <Link href="/" class="text-white hover:underline hover:underline-offset-4 hover:text-cyan-400">Reviews</Link>
            </li>
          </ul>
        </div>
        <div class="mr-10  flex gap-10 relative">
          <div onClick$={update} class=" bg-slate-900 rounded-full  h-10 w-10  hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer "></div>
          <Link href="/demo/getstarted" class=" font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white hover:scale-110 transition-all duration-300 ease-in-out lg:flex hidden">Basket 🛒</Link>
          {
            isShow.value ?
              <div class="flex flex-col bg-white  absolute top-14 right-0 rounded-xl gap-2 h-60 w-56 p-2 ">

                <div class="flex gap-3  items-center">
                  <div class="rounded-full bg-slate-600 w-12 h-12 flex items-center justify-center">🎃</div>
                  <div class="text-black font-serif text-lg">James Aldrino</div>
                </div>

                <div class="flex flex-col gap-1">

                  <div class="flex gap-3  items-center">
                    <div class="rounded-full bg-slate-600 w-8 h-8"></div>
                    <Link href="demo/editProfile" class="text-black font-normal hover:font-semibold cursor-pointer "> Edit Profile </Link>
                  </div>

                  <div class="flex gap-3  items-center">
                    <div class="rounded-full bg-slate-600 w-8 h-8"></div>
                    <div class="text-black font-normal hover:font-semibold cursor-pointer "> Settings & Privacy </div>
                  </div>

                  <div class="flex gap-3  items-center">
                    <div class="rounded-full bg-slate-600 w-8 h-8"></div>
                    <div class="text-black font-normal hover:font-semibold cursor-pointer "> Help & Support </div>
                  </div>

                  <div class="flex gap-3  items-center">
                    <div class="rounded-full bg-slate-600 w-8 h-8"></div>
                    <div class="text-black font-normal hover:font-semibold cursor-pointer "> Logout </div>
                  </div>

                </div>

              </div>
              : null
          }

        </div>

      </div>

    </>
  )
})
export default navbar
