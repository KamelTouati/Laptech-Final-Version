import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import girl2 from "/public/assets/girl2.png";
import robot from "/public/assets/robot.png";
import robot1 from "/public/assets/robot1.png";

const Landing = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex flex-col lg:px-20">
        <div className="my-10 lg:mx-20">
          <div class="w-full rounded-[2.5rem] borderStyle p-1">
            <div class=" w-full rounded-[2.5rem] bg-white">
              <div class=" w-full rounded-[2.5rem] bg-color1 flex justify-center items-center relative">
                <img
                  className="absolute -bottom-[100px] -left-[100px] w-[200px]"
                  src={girl2}
                  alt=""
                />
                <div className="mx-8 flex flex-col items-center py-10">
                  {/* <h1>{user?.username}</h1> */}
                  {console.log("user.isAdmin: ", user?.isAdmin)}
                  <h1 className="text-4xl font-black my-3 mx-20">
                    Experience the Future of Laptop Shopping at LapTech !
                  </h1>
                  <h3 className="text-lg leading-10 my-3 mx-10">
                    Immerse yourself in the world of AI-driven technology as we
                    redefine the way you shop for laptops . Whether you're a
                    professional in need of high-performance devices or a casual
                    user seeking the perfect fit, we've got you covered. Explore
                    our AI-driven platform, and experience the future of tech
                    shopping .
                  </h3>
                  <Link
                    to="/products/predict-product-price"
                    className="buttonStyle px-5 py-2"
                  >
                    Ai Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <h1 className="text-4xl font-black my-3 mx-20 text-color3">
            How it works :
          </h1>
          <div className="flex items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-black my-3 mx-20 relative">
                <span className="text-color3 -left-[40px] -top-[20px] absolute">
                  1-{" "}
                </span>{" "}
                Discover Your Laptop:
              </h1>
              <h3 className="text-lg leading-10 my-3 mx-20">
                Explore our advanced tech to find your perfect laptop. To sell
                yours, share laptop details and fill out a quick form
              </h3>
            </div>
            <img src="/assets/robot.png" alt="" className="w-[200px]" />
          </div>
          <div className="flex justify-center items-center my-5">
            <div className="flex flex-col">
              <h1 className="text-4xl font-black my-3 mx-20 relative">
                <span className="text-color3 -left-[40px] -top-[20px] absolute">
                  2-{" "}
                </span>{" "}
                Secure Payment :
              </h1>
              <h3 className="text-lg leading-10 my-3 mx-20">
                Make a secure payment with your golden card to acquire your
                chosen laptop.
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between my-5">
            <div className="flex flex-col">
              <h1 className="text-4xl font-black my-3 mx-20 relative">
                <span className="text-color3 -left-[40px] -top-[20px] absolute">
                  3-{" "}
                </span>{" "}
                Receive and Enjoy:
              </h1>
              <h3 className="text-lg leading-10 my-3 mx-20">
                Your laptop will be on its way, and you'll soon be enjoying its
                benefits.
              </h3>
            </div>
            <img src="/assets/robot1.png" alt="" className="w-[300px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
