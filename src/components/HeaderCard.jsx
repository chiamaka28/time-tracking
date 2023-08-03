import hero from "../images/image-jeremy.png";

const HeaderCard = () => {
  return (
    <div className=" my-9 md:my-0  md:h-[97%] flex flex-col bg-dark-blue rounded-xl  md:row-span-3 lg:row-span-2 place-items-center">
      <div className="flex bg-desaturated-blue h-[75%] w-full items-center justify-center  text-white rounded-lg md:flex-col md:items-start md:px-3 md:gap-y-5 ">
        <div className="border-white border-2 rounded-full">
          <img className="w-[45px]" src={hero} alt="/" />
        </div>
        <div>
          <p>Report for</p>
          <h1 className="text-2xl md:text-4xl justify-between">Jeremy Robson</h1>
        </div>
      </div>
      <div className="flex items-center justify-around md:flex-col md:items-start w-full text-white md:px-3 md:gap-y-3 md:py-3">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default HeaderCard;
