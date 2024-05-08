import React from "react";

function FAQ() {
  return (
    <div className="px-[104px] mt-[154px] w-full pb-[307px]">
      <h2 className="font-bold uppercase text-[3rem] text-gradient mb-48">
        FAQ
      </h2>
      <div className="flex flex-col gap-[2rem] w-[848px]">
        <details className="group px-[24px] py-[23px] gradient-border">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-base"> What is a SAAS platform?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600  mt-3 group-open:animate-fadeIn">
            SAAS platform is a cloud-based software service that allows users to
            access and use a variety of tools and functionality.
          </p>
        </details>
        <details className="group px-[24px] py-[23px] gradient-border">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-base"> What is a SAAS platform?</span>
            <span className="transition group-open:rotate-180">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600  mt-3 group-open:animate-fadeIn">
            SAAS platform is a cloud-based software service that allows users to
            access and use a variety of tools and functionality.
          </p>
        </details>
        <details className="group px-[24px] py-[23px] gradient-border">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
            <span className="text-base"> What is a SAAS platform?</span>
            <span className="transition group-open:rotate-180 z-10">
              <svg
                fill="none"
                height={24}
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600  mt-3 group-open:animate-fadeIn">
            SAAS platform is a cloud-based software service that allows users to
            access and use a variety of tools and functionality.
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
