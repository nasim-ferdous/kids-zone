import { banglaFont } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 space-y-4">
        <h1 className={`${banglaFont.className} text-7xl font-bold leading-20`}>
          আপনার শিশুকে দিন একটি{" "}
          <span className="text-primary"> উজ্জ্বল ভবিষ্যৎ</span>
        </h1>
        <p className="text-xl font-medium">Buy every product for 15% cell</p>
        <button className="btn btn-primary btn-outline">
          Explore Products
        </button>
      </div>
      <div className="flex-1">
        <Image
          alt="Buy every product for 15% cell"
          src={"/assets/hero.png"}
          width={500}
          height={400}
        ></Image>
      </div>
    </div>
  );
};

export default Banner;
