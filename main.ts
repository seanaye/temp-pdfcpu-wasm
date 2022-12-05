import { serve } from "https://deno.land/std/http/server.ts"

const wasmUrl = new URL("main.wasm", import.meta.url).href

serve(async () => {
  console.log({ wasmUrl, url: import.meta.url })
  const resp = await fetch(wasmUrl)
  return new Response(resp.body, {
    headers: {
      "Content-Type": "application/wasm"
    }
  })
})
