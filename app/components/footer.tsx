import gsap from "gsap";

const Footer = () => {
  return (
    <div className="h-screen w-full bg-[#d3d3d3]">
      <div className=" text-black h-full flex justify-center items-center ">
        <div className="content-container bg-red-500 w-[calc(100%-2rem)] h-[calc(100%-10rem)] mt-7 lg:w-[calc(100%-20rem)]">
          <div className="inpiration">
            <div className="text-3xl font-league font-bold font-stretch-105% lg:text-5xl">
              READY TO WORK TOGETHER ?
            </div>
            <div></div>
          </div>
          <div className="seperator"></div>
          <div className="sitemap-socials"></div>
          <div className="seprator"></div>
          <div className="copyright"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
