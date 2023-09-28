import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/mainpage/navbar/Navbar';
import appDemo from '../assets/app-demo.png';

const MainPage = () => {
  const [active, setActive] = useState<boolean | null>(null);
  const [scroll, setScroll] = useState<number>();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / totalHeight) * 10;
      setScroll(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array

  return (
    <>
      <Navbar />
      <section className="max-w-[1620px] mx-auto">
        <div className="flex text-white justify-center items-center flex-col py-20 gap-5">
          <h1 className="text-6xl font-bold">
            Unleashing your creativity, one idea at a time.
          </h1>
          <p className="text-sm text-white/50 w-[700px] text-center">
            Social productivity that puts you back in control. Connect, create,
            and collaborate with like-minded individuals in a safe and private
            environment. Join us and experience a new kind of social media.
          </p>
          <div className="flex ">
            <Link to="/pricing">
              <button className="py-2 px-5 bg-main hover:bg-main/80 rounded-xl">
                Support the Project
              </button>
            </Link>
          </div>
        </div>
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            transform: `perspective(1200px) rotateX(${scroll}deg)`,
          }}
        >
          <div className="absolute -z-[99] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[70vw] h-[70vh] bg-main blur-3xl opacity-20"></div>

          <img src={appDemo} alt="" />
        </motion.div>
      </section>
      <section></section>
    </>
  );
};

export default MainPage;
