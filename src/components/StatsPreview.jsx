import React from "react";
import headerDesktop from "../assets/images/image-header-desktop.jpg";
import headerMobile from "../assets/images/image-header-mobile.jpg";

export default function StatsPreview() {
  return (
    // wrapper
    <div className="box-border flex justify-center items-center h-screen">
      {/* card */}
      <div className="xl:w-fit xl:h-fit bg-p-darkDesaturatedBlue rounded-xl flex xl:flex-row-reverse overflow-hidden flex-col w-[320px]">
        {/* group header */}
        <div className="relative">
          <picture>
            <source srcset={headerMobile} media="(min-width: 320px)" />
            <img src={headerDesktop} alt="hero" />
          </picture>
          <div className="absolute top-0 left-0 w-full h-full bg-[#591285a1]"></div>
        </div>
        <div className="xl:w-[645px]">
          {/* item wrapper */}
          <div className="xl:px-[4.5rem] xl:py-[4.5rem] flex flex-col xl:gap-9 gap-5 px-7 py-7 text-center xl:text-left">
            <div>
              <h1 className="font-bold xl:text-[2.75rem] xl:leading-tight font-lexend-deca text-3xl">
                Get <span className="text-p-softViolet">insights</span> that
                help your business grow.
              </h1>
            </div>
            <div className="xl:pr-24">
              <p className="xl:text-[1.1rem]">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
            </div>
            <div className="flex xl:flex-row flex-col justify-between xl:pr-24 xl:mt-10 mt-3 gap-5">
              <div>
                <h2 className="xl:text-3xl text-2xl font-bold">10k+</h2>
                <p className="uppercase">companies</p>
              </div>
              <div>
                <h2 className="xl:text-3xl text-2xl font-bold">314</h2>
                <p className="uppercase">templates</p>
              </div>
              <div>
                <h2 className="xl:text-3xl text-2xl font-bold">12M+</h2>
                <p className="uppercase">queries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
