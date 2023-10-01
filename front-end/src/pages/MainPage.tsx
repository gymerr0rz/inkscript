import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/mainpage/navbar/Navbar';
import appDemo from '../assets/app-demo.png';
import Background from '../components/mainpage/bg/Background';
import Slider from '../components/mainpage/slider/Slider';

const MainPage = () => {
  const [active, setActive] = useState<boolean | null>(null);
  const [scroll, setScroll] = useState<number>();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / totalHeight) * 5;
      setScroll(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array

  return (
    <>
      <div className="overflow-hidden">
        <svg
          width="1900"
          height="1256"
          viewBox="0 0 1900 1256"
          fill="none"
          className="absolute -z-[98] top-0 left-1/2 -translate-x-1/2"
        >
          <rect
            y="-192"
            width="1920"
            height="1448"
            fill="url(#paint0_linear_419_99)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_419_99"
              x1="960"
              y1="-192"
              x2="960"
              y2="1256"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#070712" />
              <stop offset="0.254767" stop-color="#070712" stop-opacity="0" />
              <stop offset="1" stop-color="#070712" />
            </linearGradient>
          </defs>
        </svg>
        <Background />
      </div>
      <Navbar />
      <section className="max-w-[1620px] mx-auto relative">
        <div className=" bg-gradient-to-r from-transparent via-main to-transparent absolute bottom-0 h-[1px] w-full"></div>
        <div className="flex text-white justify-center items-center flex-col py-10 gap-5 relative">
          <div className="from-[#6364FF] to-[#212295] bg-gradient-to-b  rounded-full p-px">
            <div className=" flex gap-2 bg-[#18183d] p-2 `rounded-[calc(1.5rem-1px)]` rounded-full items-center">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7999 2.5L9.21066 7.34417C9.12933 7.59209 8.99106 7.8174 8.80699 8.00195C8.62292 8.1865 8.3982 8.32512 8.15092 8.40667L3.31934 10L8.15092 11.5933C8.3982 11.6749 8.62292 11.8135 8.80699 11.9981C8.99106 12.1826 9.12933 12.4079 9.21066 12.6558L10.7999 17.5L12.389 12.6558C12.4704 12.4079 12.6086 12.1826 12.7927 11.9981C12.9768 11.8135 13.2015 11.6749 13.4488 11.5933L18.2804 10L13.4488 8.40667C13.2015 8.32512 12.9768 8.1865 12.7927 8.00195C12.6086 7.8174 12.4704 7.59209 12.389 7.34417L10.7999 2.5Z"
                  fill="#B8B8FF"
                />
                <path
                  d="M14.1247 0.833374L13.7716 1.90986C13.7535 1.96495 13.7228 2.01502 13.6819 2.05603C13.641 2.09704 13.591 2.12785 13.5361 2.14597L12.4624 2.50004L13.5361 2.85411C13.591 2.87224 13.641 2.90304 13.6819 2.94405C13.7228 2.98506 13.7535 3.03513 13.7716 3.09023L14.1247 4.16671L14.4779 3.09023C14.496 3.03513 14.5267 2.98506 14.5676 2.94405C14.6085 2.90304 14.6584 2.87224 14.7134 2.85411L15.7871 2.50004L14.7134 2.14597C14.6584 2.12785 14.6085 2.09704 14.5676 2.05603C14.5267 2.01502 14.496 1.96495 14.4779 1.90986L14.1247 0.833374Z"
                  fill="#B8B8FF"
                />
                <path
                  d="M17.4493 3.33337L16.9196 4.9481C16.8925 5.03074 16.8464 5.10584 16.785 5.16736C16.7237 5.22887 16.6488 5.27508 16.5663 5.30226L14.9558 5.83337L16.5663 6.36449C16.6488 6.39167 16.7237 6.43788 16.785 6.49939C16.8464 6.56091 16.8925 6.63601 16.9196 6.71865L17.4493 8.33337L17.979 6.71865C18.0062 6.63601 18.0522 6.56091 18.1136 6.49939C18.175 6.43788 18.2499 6.39167 18.3323 6.36449L19.9428 5.83337L18.3323 5.30226C18.2499 5.27508 18.175 5.22887 18.1136 5.16736C18.0522 5.10584 18.0062 5.03074 17.979 4.9481L17.4493 3.33337Z"
                  fill="#B8B8FF"
                />
              </svg>
              <h1 className="text-[#B8B8FF]">
                Your Ultimate Productivify Companion!
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-6xl font-semibold tracking-[-0.07em]  w-[800px] text-center">
              Unleashing your creativity, one idea at a time.
            </h1>
            <p className="text-sm text-white/50 w-[500px] text-center">
              Support the project by pre-ordering the product. With that you get
              free 4 months after it has launched!
            </p>
          </div>
          <div className="flex ">
            <Link to="/pricing">
              <button className="bg-gradient-to-b from-main to-main/50 py-2 px-5 rounded-sm hover:bg-main/80 transition-colors">
                Support the Project
              </button>
            </Link>
          </div>
        </div>

        <motion.div
          className="relative flex justify-center items-center -z-[99]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            transform: `perspective(1200px) rotateX(${scroll}deg)`,
          }}
        >
          <img src={appDemo} alt="" />
        </motion.div>
      </section>
      <Slider />
      <section className="max-w-[1620px] mx-auto">
        <div
          id="title"
          className="flex justify-center items-center flex-col text-white gap-2"
        >
          <div className="from-[#6364FF] to-[#212295] bg-gradient-to-b  rounded-full p-px">
            <div className=" flex gap-2 bg-[#18183d] p-2 `rounded-[calc(1.5rem-1px)]` rounded-full items-center">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7999 2.5L9.21066 7.34417C9.12933 7.59209 8.99106 7.8174 8.80699 8.00195C8.62292 8.1865 8.3982 8.32512 8.15092 8.40667L3.31934 10L8.15092 11.5933C8.3982 11.6749 8.62292 11.8135 8.80699 11.9981C8.99106 12.1826 9.12933 12.4079 9.21066 12.6558L10.7999 17.5L12.389 12.6558C12.4704 12.4079 12.6086 12.1826 12.7927 11.9981C12.9768 11.8135 13.2015 11.6749 13.4488 11.5933L18.2804 10L13.4488 8.40667C13.2015 8.32512 12.9768 8.1865 12.7927 8.00195C12.6086 7.8174 12.4704 7.59209 12.389 7.34417L10.7999 2.5Z"
                  fill="#B8B8FF"
                />
                <path
                  d="M14.1247 0.833374L13.7716 1.90986C13.7535 1.96495 13.7228 2.01502 13.6819 2.05603C13.641 2.09704 13.591 2.12785 13.5361 2.14597L12.4624 2.50004L13.5361 2.85411C13.591 2.87224 13.641 2.90304 13.6819 2.94405C13.7228 2.98506 13.7535 3.03513 13.7716 3.09023L14.1247 4.16671L14.4779 3.09023C14.496 3.03513 14.5267 2.98506 14.5676 2.94405C14.6085 2.90304 14.6584 2.87224 14.7134 2.85411L15.7871 2.50004L14.7134 2.14597C14.6584 2.12785 14.6085 2.09704 14.5676 2.05603C14.5267 2.01502 14.496 1.96495 14.4779 1.90986L14.1247 0.833374Z"
                  fill="#B8B8FF"
                />
                <path
                  d="M17.4493 3.33337L16.9196 4.9481C16.8925 5.03074 16.8464 5.10584 16.785 5.16736C16.7237 5.22887 16.6488 5.27508 16.5663 5.30226L14.9558 5.83337L16.5663 6.36449C16.6488 6.39167 16.7237 6.43788 16.785 6.49939C16.8464 6.56091 16.8925 6.63601 16.9196 6.71865L17.4493 8.33337L17.979 6.71865C18.0062 6.63601 18.0522 6.56091 18.1136 6.49939C18.175 6.43788 18.2499 6.39167 18.3323 6.36449L19.9428 5.83337L18.3323 5.30226C18.2499 5.27508 18.175 5.22887 18.1136 5.16736C18.0522 5.10584 18.0062 5.03074 17.979 4.9481L17.4493 3.33337Z"
                  fill="#B8B8FF"
                />
              </svg>
              <h1 className="text-[#B8B8FF]">Why You Should Love Inkscript!</h1>
            </div>
          </div>
          <h1 className="from-white to-main bg-gradient-to-b text-6xl font-bold tracking-tighter bg-clip-text text-transparent">
            Productivity like never before.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, voluptas!
          </p>
        </div>
      </section>
    </>
  );
};

export default MainPage;
