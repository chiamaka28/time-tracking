import HeaderCard from "./components/HeaderCard"
import Card from "./components/Card"
import data from "../data.json"


function App() {
  
  
  return (
    <div className=" w-full min-h-screen flex flex-col md:justify-center md:items-center bg-very-dark-blue  py-6">
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
