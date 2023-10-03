import { createContextId } from "@builder.io/qwik";

interface Counter {
  count: number;
}

export const CTX = createContextId<Counter>("counter");
