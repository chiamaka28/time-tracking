import hero from "../images/image-jeremy.png";

const HeaderCard = () => {
  return (
    <div className=" my-9 md:my-0   flex flex-col bg-dark-blue rounded-xl  md:row-span-3 lg:row-span-2">
      <div className="flex bg-desaturated-blue h-[65%]  items-center justify-center rounded-lg">
        <div className="border-white border-2 rounded-full">
          <img className="w-[45px]" src={hero} alt="/" />
        </div>
        <div>
          <p>Report for</p>
          <h1 className="text-2xl justify-between">Jeremy Robson</h1>
        </div>
      </div>
      <div className="flex items-center justify-around md:flex-col md:items-start">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default HeaderCard;
