/* eslint-disable react/prop-types */
const Dashboard = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between py-1.5 px-2 md:px-8 border border-[#E5EAEF] w-full md:w-[95.2%] absolute top-0 left-0 md:left-16">
      <div className="flex gap-2 items-center">
        <button onClick={toggleSidebar} className="md:hidden">
          <img src="./images/light.svg" alt="" />
        </button>
        <h1 className="text-[#26282C] text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center md:gap-10">
        <div className="hidden md:flex relative">
          <input
            className="border border-[#DADDDD] rounded-full py-1.5 px-2 pl-10 placeholder:font-Inter placeholder:font-normal"
            type="text"
            placeholder="Search..."
          />
          <img
            className="absolute top-2.5 left-3"
            src="./images/search.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <img src="./images/calendar.svg" alt="" />
          <p className="hidden md:block text-sm/[1.375rem] font-Inter font-normal">
            November 15, 2023
          </p>
        </div>
        <div className="flex items-center justify-center w-10 h-10 md:border border-[#DADDDD] rounded-full">
          <img src="./images/bell.svg" alt="" />
        </div>
        <div className="flex items-center gap-4 border border-[#DADDDD] rounded-full px-2 py-1 font-Inter font-normal">
          <img src="./images/man.png" alt="" />
          <p className="hidden md:block text-base/normal">
            Justin Bergso<br></br>
            <span className="text-sm/normal text-[#787486]">
              Justin@gmail.com
            </span>
          </p>
          <img src="./images/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
