import React from 'react';
import { IoClose } from "react-icons/io5";

const Demo = () => {
  return (
    <>
        <div class="rounded-md border-l-4 border-[var(--font-color)] bg-gray-100 p-4 w-[60%] h-[70vh] mx-auto">
  <div class="flex items-center justify-between space-x-4">
    <div>
    
    </div>
    <div>
      <p class="text-sm font-medium text-green-600">
        This is some informational text that you can use to show some success
        content
      </p>
    </div>
    <div>
      <IoClose
        
        class="h-6 w-6 cursor-pointer text-black"
      />
        
    </div>
  </div>
</div>


    
    </>
  )
}

export default Demo