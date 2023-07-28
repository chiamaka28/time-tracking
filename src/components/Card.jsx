import ellipsis from "../images/icon-ellipsis.svg";

const Card = ({ data }) => {
  const { img: bgImg, color: bgColor, title, timeframes } = data;
  return (
    <div
      className={`my-container
                relative
                ${bgImg}
                flex
                flex-col
                mb-4
                rounded-lg
                ${bgColor}
                bg-no-repeat
                bg-[top_-0.5rem_right_1rem]
                overflow-hidden
                `}
    >
      <div className="relative bg-dark-blue rounded-t-lg mt-10 p-6 text-white">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">{title}</h2>
          <div className="cursor-pointer">
            <img src={ellipsis} alt="/" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="text-4xl">{timeframes.weekly.current}hrs</p>
          <p className="text-pale-blue">
            Last Week - {timeframes.weekly.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
