import React from 'react'
import { GoHome } from "react-icons/go";
import {
  MdOutlineKeyboardArrowRight,
 
} from "react-icons/md";

function Location() {
  return (
    <div  className="flex items-center gap-1 leading-none">
        <GoHome className="text-[1.5rem]" />
        <MdOutlineKeyboardArrowRight />
        {["Flashcard", "Mathematics", "Relation and Function"].map(
          (item, index, array) => (
            <div key={index} className='flex items-center'>
              <a
                href="#"
                
                className={`text-[18px]  font-semibold ${
                  index === array.length - 1
                    ? "text-[#06286E]"
                    : "text-[#696671]"
                }`}
              >
                {item}
              </a>
              {index !== array.length - 1 && (
                <MdOutlineKeyboardArrowRight className="text-[#06286E] text-xl" />
              )}
            </div>
          )
        )}
      </div>
  )
}

export default Location