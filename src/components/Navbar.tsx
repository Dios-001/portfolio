const Navbar = ({
  handleClick,
  nav,
}: {
  handleClick: () => void;
  nav: boolean;
}) => {
  return (
    <div className={` w-full fixed top-0 py-5 z-30`}>
      <div className="flex justify-between mx-10 md:mx-40">
        <div
          className={`text-3xl font-bold font-condensed scale-y-200 ${
            nav ? "text-black" : "text-white"
          }`}
        >
          IHBA
        </div>
        <div
          onClick={handleClick}
          className="min-h-full w-10 flex flex-col items-center justify-center"
        >
          <div
            className={`${
              nav ? "bg-black" : "bg-white"
            } h-0.5 w-full mb-1 rounded-2xl rotar`}
          ></div>
          <div
            className={`${
              nav ? "bg-black" : "bg-white"
            } h-0.5 w-full mt-1 rounded-2xl rotar-1`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
