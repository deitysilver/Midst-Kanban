import { createSignal } from "solid-js";

function Navbar() {
  return (
    <nav class="flex justify-between items-center p-4 bg-[#1D1D1D] text-white">
      <div class="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
        <span class="text-xl font-bold">App Name</span>
      </div>

      <div class="space-x-4">
        <button class="text-gray-300 hover:text-white">Guest</button>
        <button class="text-gray-300 hover:text-white">Login</button>
        <button class="text-gray-300 hover:text-white">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
