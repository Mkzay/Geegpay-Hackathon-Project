import Data from "../Components/Data";
import Orders from "../Components/Orders";
import Platform from "../Components/Platform";
import Sales from "../Components/Sales";

const Home = () => {
  return (
    <div className="grid grid-cols-6 gap-4 py-2 pb-10 px-2 md:pl-24 bg-[#FAFAFA] w-full">
      <Sales />
      <Data />
      <Orders />
      <Platform />
    </div>
  );
};

export default Home;
