import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#070320] font-poppins">
      <Head>
        <title>Game Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-[1360px] mx-auto">
        <Navbar />

        {/* HeroSection */}
        <div className="max-w-[1146px] mx-auto px-10 mt-20">
          <div className="text-white flex items-center justify-around content-center flex-wrap lg:flex-nowrap gap-y-10">
            {/* left */}
            <div className="space-y-5">
              <p className="text-[#E87D0E]">Proved By prodesigner</p>
              <h1 className="text-5xl lg:text-[50px] leading-normal font-semibold">
                Work that we <br /> produce for our <br /> clients
              </h1>
              <p className="text-sm lg:text-[16px] leading-loose">
                Lorem Ipsum is simply dummy text of the printing and <br />{" "}
                typesetting industry. Lorem Ipsum has been the industry's
                standard.
              </p>
              <button className="text-sm bg-gradient-to-r from-[#D80027] to-[#FB9E3C] p-3 rounded-full px-4">
                Get more details
              </button>
            </div>
            {/* right */}
            <div className="relative">
              <img src="/gameicon.png" alt="" />
              <img className="absolute top-10" src="/unreal.svg" alt="" />
              <img
                className="absolute top-5 right-0"
                src="/cryengine.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Trending games */}
        <div className="max-w-[1146px] mx-auto px-10 mt-20 text-white">
          <div className="flex justify-between">
            <h1 className="text-xl lg:text-3xl">Currently Trending Games</h1>
            <button className="bg-[#221F39] p-2 px-3 rounded-md">
              SEE ALL
            </button>
          </div>
          <div className="flex justify-around mt-10 flex-wrap content-center items-center gap-y-5">
            <div>
              <img src="/soldier.png" alt="" />
              <p className="flex items-center justify-center p-3">
                <span>
                  {" "}
                  <img
                    src="/fire.png"
                    className="mr-1 inline-block h-6"
                    alt=""
                  />{" "}
                </span>
                40 Followers{" "}
              </p>
            </div>
            <div>
              <img src="/ronin.png" alt="" />
              <p className="flex items-center justify-center p-3">
                <span>
                  {" "}
                  <img
                    src="/fire.png"
                    className="mr-1 inline-block h-6"
                    alt=""
                  />{" "}
                </span>
                40 Followers{" "}
              </p>
            </div>
            <div>
              <img src="/boxface.png" alt="" />
              <p className="flex items-center justify-center p-3">
                <span>
                  {" "}
                  <img
                    src="/fire.png"
                    className="mr-1 inline-block h-6"
                    alt=""
                  />{" "}
                </span>
                40 Followers{" "}
              </p>
            </div>
            <div>
              <img src="/sniper.png" alt="" />
              <p className="flex items-center justify-center p-3">
                <span>
                  {" "}
                  <img
                    src="/fire.png"
                    className="mr-1 inline-block h-6"
                    alt=""
                  />{" "}
                </span>
                40 Followers{" "}
              </p>
            </div>
          </div>
          <h1 className="text-center text-3xl lg:text-[35px] mt-16 lg:mt-32 leading-relaxed">
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.
          </h1>
        </div>

        {/* call of duty  */}
        <div className="max-w-[1146px] mx-auto px-10 mt-20 text-white space-y-5 pb-24">
          <h1 className="text-3xl">Lorem Ipsum</h1>
          <p className="text-sm lg:text-[16px] leading-loose">
            Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text{" "}
            <br />
            ever since the 1500s,
          </p>
          <div className="relative">
            <img src="/callofduty.png" alt="" />
            <img
              src="/reddots.png"
              alt=""
              className="hidden lg:inline-block lg:absolute -top-16 right-24 object-cover"
            />
          </div>
        </div>

        {/* Features */}

        <div className=" bg-[url('/soldierbackground.png')] bg-no-repeat bg-cover h-[995px] px-10 lg:h-[881px]  text-white">
          <h1 className="text-center text-3xl lg:text-[35px] mt-16 lg:mt-10 leading-relaxed pt-20">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry.
          </h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the <br /> industry's standard dummy
            text ever since the 1500s,
          </p>
          <div className="flex justify-around flex-wrap content-center items-center mt-20 lg:mt-40 gap-y-10">
            <div className="flex flex-col items-center min-w-[200px] lg:min-w-[300px]">
              <img
                src="/smartphone.svg"
                alt=""
                className="bg-white p-5 rounded-full"
              />
              <p className="text-sm mt-5">Mobile Game Development</p>
            </div>
            <div className="flex flex-col items-center min-w-[200px] lg:min-w-[300px]">
              <img src="/pc.svg" alt="" className="bg-white p-5 rounded-full" />
              <p className="text-sm mt-5">PC Game Development</p>
            </div>
            <div className="flex flex-col items-center min-w-[200px] lg:min-w-[300px]">
              <img
                src="/ps4.png"
                alt=""
                className="bg-white p-4 rounded-full"
              />
              <p className="text-sm mt-5">PS4 Game Development</p>
            </div>
            <div className="flex flex-col items-center min-w-[200px] lg:min-w-[300px]">
              <img src="/vr.svg" alt="" className="bg-white p-5 rounded-full" />
              <p className="text-sm mt-5">AR/VR Game Solutions</p>
            </div>
            <div className="flex flex-col items-center min-w-[200px] lg:min-w-[300px]">
              <img
                src="/cube.svg"
                alt=""
                className="bg-white p-5 rounded-full"
              />
              <p className="text-sm mt-5">AR/VR Design</p>
            </div>
            <div className="flex flex-col items-center min-w-[200px] lg:min-w-[300px]">
              <img
                src="/3d-cube.png"
                alt=""
                className="bg-white p-5 rounded-full"
              />
              <p className="text-sm mt-5">3D Modelings</p>
            </div>
          </div>
        </div>

        {/* projects */}
        <div className="max-w-[1146px] mx-auto text-white pb-20">
          <h1 className="text-center text-3xl lg:text-[35px] mt-10 lg:mt-10 leading-relaxed pt-20 ">
            Our Recent Projects
          </h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry.{" "}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-16">
            <img src="/image1.png" alt="" />
            <img src="/image2.png" alt="" />
            <img src="/image3.png" alt="" />

            <img src="/image4.png" alt="" className="self-center" />
            <img src="/image5.png" alt="" />
            <img src="/image6.png" alt="" />
          </div>
          <div className="flex justify-center pt-20">
            <button className="bg-[#221F39] p-2 px-4 rounded-md ">
              SEE ALL
            </button>
          </div>

          <h1 className="mt-20 text-3xl lg:text-[35px] px-10 mb-5">
            Lorem Ipsum
          </h1>
          <p className="px-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>

          <div className="bg-white flex justify-around h-[189px] items-center rounded-lg mt-20 flex-wrap mx-5 lg:mx-0">
            <div className="text-black space-y-2 text-center lg:text-start">
              <h1 className="text-xl font-bold ">Stay in the loop</h1>
              <p>
                Subscribe to receive the latest news and updates about TDA.{" "}
                <br /> We promise not to spam you!{" "}
              </p>
            </div>
            <div className="p-1 bg-black w-fit rounded-md">
              <input
                className="px-3 py-2 bg-black text-white"
                type="text"
                placeholder="Enter email address"
              />
              <button className="bg-[#D80027] px-3 py-2 rounded-md">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className=" bg-white h-[189px] px-10 text-black flex items-center text-sm">
          <div className="flex-[30%] space-y-4">
            <h1 className="text-2xl font-bold">LOGO</h1>
            <p>
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry.
            </p>
            <p>@Lorem</p>
          </div>
          <div className="flex-[15%]">
            <h1 className="text-base font-bold pb-3">About Us</h1>
            <p>Zeux</p>
            <p>Portfolio</p>
            <p>Careers</p>
            <p>Contact us</p>
          </div>
          <div className="flex-[20%]">
            <h1 className="text-base font-bold pb-3">Contact Us</h1>
            <p>
              Lorem Ipsum is simply dummy text <br /> of the printing and
              typesetting <br /> industry.{" "}
            </p>
            <p>+908 89097 890</p>
          </div>

          <div className="hidden lg:flex flex-[35%] mt-20 justify-center">
            <img src="/facebook.svg" alt="" />
            <img src="/instagram.svg" alt="" />
            <img src="/twitter.svg" alt="" />
            <img src="/linkedin.svg" alt="" />
          </div>
        </footer>
        <div className="flex lg:hidden justify-center bg-white">
          <img src="/facebook.svg" alt="" />
          <img src="/instagram.svg" alt="" />
          <img src="/twitter.svg" alt="" />
          <img src="/linkedin.svg" alt="" />
        </div>
        <hr className="h-[2 px]" />
        <div className="bg-white text-center p-5">
          <p>Copyright ® 2022 prodesigner All rights Rcerved</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
