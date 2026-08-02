
import Image from "next/image";
import React from "react";


const RashedImages = () => {
  return (
    <div className="max-w-7xl  mx-auto  ">

        <div className="flex items-center justify-center py-5 px-5 ">
          <Image
          src="/images/rashedujjamanPic.jpg"
          width={400}
          height={400}
          alt="notFound"
          className=" rounded-md"
        />
        </div>
        

    </div>
  );
};

export default RashedImages;