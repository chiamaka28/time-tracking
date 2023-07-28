import hero from "../images/image-jeremy.png";

const HeaderCard = () => {
  return (
    <div className="my-container my-9 h-[150px] flex flex-col bg-dark-blue rounded-xl">
      <div className="flex bg-desaturated-blue h-[65%] items-center justify-center rounded-lg">
        <div className="border-white border-2 rounded-full">
          <img className="w-[45px]" src={hero} alt="/" />
        </div>
        <div>
          <p>Report for</p>
          <h1 className="text-2xl justify-between">Jeremy Robson</h1>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default HeaderCard;
