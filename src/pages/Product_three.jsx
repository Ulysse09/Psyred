import React from 'react'
import gmc1 from "../assets/psyred_assets/GMC1.png";
import f_153 from "../assets/psyred_assets/F153.png";
import brp3 from "../assets/psyred_assets/BRP3.png";
import gmc2 from "../assets/psyred_assets/GMC2.png";


import trucks from "../assets/psyred_assets/shot4.png";
import ram_1500 from "../assets/psyred_assets/RAM1500.png";
import ram12 from "../assets/psyred_assets/RAM12.png";


const Product_three = () => {
  return (
    <div className="relative">
      <div className="lg:h-[100vh] h-[50vh]  flex justify-center     ">
        <div className="object-cover brightness-125    w-full lg:h-[100vh] h-[70vh]">
          <img
            src={gmc1}
            className="lg:h-[100vh] h-[50vh] md:w-full lg:w-full lg:object-cover lg:object-right-bottom object-cover object-center  "
            alt=""
            srcset=""
            onLoad={() => setIsLoading(true)}
          />
        </div>

        <div className="md:flex justify-center   font-nunito    top-[18rem] items-center    fadeInDown text-white absolute lg:px-[5rem] px-[1rem] space-y-10 lg:space-y-0  lg:mb-[7rem]       ">
          <div className=" flex-col items-center flex  space-y-[3rem]  lg:space-y-[2rem]   ">
            <h1 className="font-bold  lg:text-5xl     text-2xl ">
              Meet the BRP Three
            </h1>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={f_153} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Web Development
          </h2>
          <p className="font-nunito lg:text-lg ">
            At Karibu Tech, we specialize in creating innovative, user-centric
            web solutions that help businesses thrive in the digital world. Our
            comprehensive web development services are designed to meet the
            unique needs of each client, ensuring a seamless and impactful
            online presence
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col space-y-4 lg:space-y-0 mt-0 py-0">
        <div className="lg:w-1/2 w">
          <img src={brp3} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Mobile-App development
          </h2>
          <p className="font-nunito lg:text-lg ">
            We also create powerful, user-friendly mobile applications that
            transform how businesses interact with their customers. Our mobile
            app development services are designed to meet the unique needs of
            your business, ensuring a seamless and engaging user experience.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={gmc2} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Digital Marketing
          </h2>
          <p className="font-nunito lg:text-lg ">
            At Karibu Tech we understand that a successful digital strategy goes
            beyond just having a great website or mobile app. Our comprehensive
            digital marketing services are designed to help you connect with
            your target audience, drive engagement, and achieve your business
            goals
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product_three