import { component$, useContext, useContextProvider, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";
import { CTX } from "~/state/counter";

export default component$(() => {


  const userData = useContext(CTX);
  return (
    <>
      <div class="bg-rose-500 w-full py-2 text-center flex gap-6 justify-center">
        <p class="text-white text-xl">{userData.count}</p>
        <button class="bg-cyan-500 rounded-lg px-4 text-white" onClick$={() => userData.count++}>update value</button>
      </div>
      <div class="h-20"></div>
      <MyCounter />
      <Link href="/about" >go to about page</Link>
    </>
  );
});



const MyCounter = component$(() => {

  // Provide the store to the context under the context ID
  const userData = useContext(CTX);

  return (
    <>
      <div class="bg-rose-500 w-full py-2 text-center flex gap-6 justify-center">
        <p class="text-white text-xl">{userData.count}</p>
        <button class="bg-cyan-500 rounded-lg px-4 text-white" onClick$={() => userData.count++}>update value</button>
      </div>
    </>
  );
});




export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
