
import ellipsis from "../images/icon-ellipsis.svg";

const Card = ({ data }) => {
  const { img: bgImg, color: bgColor, title, timeframes } = data;
  return (
  
      <div
        className={`
                  // relative
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
        <div className="relative bg-dark-blue rounded-t-lg mt-10 p-6 text-white ">
          <div className="flex justify-between items-center ">
            <h2 className="font-[400] text-lg">{title}</h2>
            <div className="cursor-pointer">
              <img src={ellipsis} alt="/" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-3 md:flex-col md:items-start">
            <p className="text-4xl font-[500]">{timeframes.daily.current}hrs</p>
            <p className="text-pale-blue">
              Last Week - {timeframes.daily.previous}hrs
            </p>
            {console.log(timeframes)}
          </div>
        </div>
      </div>
  );
};

export default Card;
