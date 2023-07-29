import HeaderCard from "./components/HeaderCard"
import Card from "./components/Card"

const data = [
  {
    title: "Work",
    color: "bg-light-red",
    img: "bg-work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    color: "bg-soft-blue",
    img: "bg-play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    color: "bg-study-red",
    img: "bg-study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    color: "bg-lime-green",
    img: "bg-exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    color: "bg-violet",
    img: "bg-social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    color: "bg-soft-orange",
    img: "bg-self-care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
function App() {
  
  return (
    <div className=" w-full min-h-screen flex flex-col md:justify-center md:items-center bg-very-dark-blue ">
      <div className="my-container  md:grid md:grid-cols-3 lg:grid-cols-4 gap-x-4">
        <HeaderCard />
        {data.map((d, idx) => (
            <Card data={d} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default App
