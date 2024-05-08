import React from 'react'

function Create() {
  return (
    <div className="mt-[80px] flex items-center justify-between">
        <img src="/images/powered.png" alt="" className="" />
        <div className="flex items-center gap-[13px]">
          <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0001 4.99981C16.2001 4.99981 5.00009 16.1998 5.00009 29.9998C5.00009 43.7998 16.2001 54.9998 30.0001 54.9998C43.8001 54.9998 55.0001 43.7998 55.0001 29.9998C55.0001 16.1998 43.8001 4.99981 30.0001 4.99981ZM42.5001 32.4998H32.5001V42.4998H27.5001V32.4998H17.5001V27.4998H27.5001V17.4998H32.5001V27.4998H42.5001V32.4998Z"
              fill="url(#paint0_linear_0_203)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_203"
                x1="30.0001"
                y1="4.99981"
                x2="30.0001"
                y2="54.9998"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#06286E" />
                <stop offset={1} stopColor="#164EC0" />
              </linearGradient>
            </defs>
          </svg>

          <p className="font-semibold text-[28px] text-gradient">
            Create Flashcard
          </p>
        </div>
      </div>
  )
}

export default Create