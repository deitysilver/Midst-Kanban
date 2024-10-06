import { createSignal } from "solid-js";
import logo from "../assets/midst-light.png"

function Navbar() {
  const [loggedIn, setLoggedIn] = createSignal(false)

  return (
    <>
      {
        !loggedIn() && 
          <nav class="flex justify-between items-center py-4 px-7 bg-[#1D1D1D] text-white">
            <div class="flex items-center">
              <img src={logo} alt="Logo" class="h-8 mr-3" />
              <span class="text-xl font-bold">Midst Kanban</span>
            </div>

            <div class="space-x-4">
              <button class="text-gray-300 font-semibold hover:text-white">Guest</button>
              <button class="text-gray-300 font-semibold hover:text-white">Login</button>
              <button class="text-gray-300 font-semibold hover:text-white">Sign Up</button>
            </div>
          </nav>
      }

      {
        loggedIn() && 
          <nav class="flex justify-between items-center py-4 px-7 bg-[#1D1D1D] text-white">
            <div class="flex items-center">
              <img src={logo} alt="Logo" class="h-8 mr-3" />
              <span class="text-xl font-bold">Midst Kanban</span>
            </div>

            <div class="space-x-4">
              <button class="text-gray-300 font-semibold hover:text-white">Guest</button>
            </div>
          </nav>
      }
    </>
  );
}

export default Navbar;
