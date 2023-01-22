import React from "react";
import headerDesktop from "../assets/images/image-header-desktop.jpg";
import headerMobile from "../assets/images/image-header-mobile.jpg";

export default function StatsPreview() {
  return (
    // wrapper
    <div className="box-border">
      {/* card */}
      <div className="w-fit h-fit bg-p-darkDesaturatedBlue rounded-xl flex md:flex-row-reverse overflow-hidden mobile:flex-col">
        {/* group header */}
        <div className="relative">
          <picture>
            <source srcset={headerMobile} media="(min-width: 320px)" />
            <img src={headerDesktop} alt="hero" />
          </picture>
          <div className="absolute top-0 left-0 w-full h-full bg-p-softViolet opacity-80 mix-blend-multiply"></div>
        </div>
        <div>
          {/* item wrapper */}
          <div>
            <div>
              <h1>
                Get <span>insights</span> that help your business grow.
              </h1>
            </div>
            <div>
              <p>
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
            </div>
            <div>
              <div>
                <h3>10k+</h3>
                <p>companies</p>
              </div>
              <div>
                <h3>314</h3>
                <p>templates</p>
              </div>
              <div>
                <h3>12M+</h3>
                <p>queries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
