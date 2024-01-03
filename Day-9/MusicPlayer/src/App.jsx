import { Slider } from "@material-tailwind/react";

function App() {
  return (
    <>
      <div class="flex justify-start justify-items-center gap-10 p-20">
        <div class="box-content h-81 w-3/4 p-1 border-4 border-solid border-cyan-600 bg-black">
          <div class="relative z-10 rounded-xl shadow-xl">
            <div class="bg-black border-slate-100 transition-all duration-500 dark:bg-black dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-20 h-82">
              <div class="flex items-center space-x-4">
                <img src="https://images.genius.com/328358281fdf3f5e30b18b0f43c9bff8.774x774x1.png" alt="facethesun-shadow" class="flex-none rounded-lg bg-slate-100 h-32" />
                <div class="min-w-0 flex-auto space-y-1 font-semibold">
                  <p class="text-cyan-500 transition-all duration-500 dark:text-cyan-400 text-sm leading-6">
                    <h1 title="Episode" class="text-4xl">Shadow</h1>
                  </p>
                  <h2 class="text-slate-500 transition-all duration-500 dark:text-slate-400 text-2xl leading-6 truncate">
                    Seventeen
                  </h2>
                  <p class="text-slate-400 transition-all duration-500 dark:text-slate-50 text-lg">
                    Face The Sun (2022)
                  </p>
                </div>
              </div>
              <div class="space-y-2">
                <div class="relative">
                  <div className="w-5/ bg-black">
                    <Slider defaultValue={50} />
                  </div>
                  {/* <div class="bg-slate-100 transition-all duration-500 dark:bg-slate-700 h-15 rounded-full overflow-hidden">
                    <div class="bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar"
                      aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
                  </div> */}
                  {/* <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"/> */}
                  {/* <div
                    class="ring-cyan-500 transition-all duration-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                    <div
                      class="w-1.5 h-1.5 bg-cyan-500 transition-all duration-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5">
                    </div>
                  </div> */}
                </div>
                <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                  <div class="text-cyan-500 transition-all duration-500 dark:text-slate-100">2:15</div>
                  <div class="text-slate-500 transition-all duration-500 dark:text-slate-400">3.33</div>
                </div>
              </div>
            </div>
            <div class="bg-slate-500 text-cyan-500 transition-all duration-500 dark:bg-slate-600 h-20 dark:text-slate-200 rounded-b-xl flex items-center">
              <div class="flex-auto flex items-center justify-evenly">
                <button type="button" aria-label="Add to favorites">
                  <svg width="24" height="24">
                    <path d="https://images.genius.com/328358281fdf3f5e30b18b0f43c9bff8.774x774x1.png" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
                <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                  <svg width="24" height="24" fill="none">
                    <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
                <button type="button" aria-label="Rewind 10 seconds">
                  <svg width="24" height="24" fill="none">
                    <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
              <button type="button" class="bg-cyan-500 text-slate-500 transition-all duration-500 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause" >
                <svg width="30" height="32" fill="currentColor">
                  <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                  <rect x="20" y="4" width="4" height="24" rx="2"></rect>
                </svg>
              </button>
              <div class="flex-auto flex items-center justify-evenly">
                <button type="button" aria-label="Skip 10 seconds" class="">
                  <svg width="24" height="24" fill="none">
                    <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
                <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
                  <svg width="24" height="24" fill="none">
                    <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
                <button type="button" class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 transition-all duration-500 dark:text-slate-100 dark:ring-0  dark:bg-slate-500">
                  1x
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="box-content h-96 w-4/5 p-4 border-4 border-cyan-600 bg-black gap-44">
          <div className="w-5/ h-96 overflow-y-auto border border-black gap-4 bg-black scrollbar-hide">
            <div class="flex gap-3 flex-col px-5 py-3">
              <div class=" box-content w-5/ h-12 border-2 border-solid border-gray-200 ">
                <div class="flex ">
                  <img src="https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png" class="h-12 w-12 rounded-md" />
                  <div class="text-white flex flex-col px-2 py-2 text-2xl font-mono">Lover</div>
                  <div class="text-white flex flex-col px-1 py-3 font-mono">Taylor Swift</div>
                  <div class="text-white flex justify-end font-mono py-3">3:41</div>
                  <div>
                    <button type="button" class="bg-white text-slate-900 transition-all duration-500 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-10 h-10 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center mt-2" aria-label="Pause">
                      <svg width="30" height="32" fill="currentColor">
                        <rect x="6" y="4" width="4" height="22" rx="3"></rect>
                        <rect x="20" y="4" width="4" height="22" rx="2"></rect>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
              <div class=" box-content w-5/ h-6 border-2 border-solid border-gray-200 p-3">
                <p>Blood</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
