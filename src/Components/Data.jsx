const Data = () => {
  return (
    <div className="col-start-1 col-span-6 md:col-start-5 md:col-span-3 flex overflow-auto scrollbar-hide whitespace-nowrap md:flex-wrap gap-5 md:mt-20">
      <div className="bg-white border border-[#EDF2F7] rounded-[0.875rem] py-2 px-2 w-[14.8rem] md:h-[10rem] md:w-48 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="rounded-full w-9 h-9 border flex items-center justify-center">
            <img src="./images/bulk.png" />
          </div>
          <img src="./images/group1.svg" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg/[1.625rem] font-medium text-[#898989]">
            Total Order
          </h1>
          <p className="text-2xl font-semibold text-[#3A3F51]">350</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 rounded-full bg-[#34CAA5] bg-opacity-10 items-center justify-center px-2">
            <img src="./images/group1up.svg" />
            <p className="text-xs font-medium text-[#34CAA5]">23,5%</p>
          </div>
          <p className="text-[0.79rem]/normal font-normal text-[#606060] font-Inter">
            vs. previous month
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#EDF2F7] rounded-[0.875rem] py-2 px-2 w-[14.8rem] md:h-[10rem] md:w-48 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="rounded-full w-9 h-9 border flex items-center justify-center">
            <img src="./images/bulk2.png" />
          </div>
          <img src="./images/tch.svg" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg/[1.625rem] font-medium text-[#898989]">
            Total Refund
          </h1>
          <p className="text-2xl font-semibold text-[#3A3F51]">270</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 rounded-full bg-[#ED544E] bg-opacity-10 items-center justify-center px-2">
            <img src="./images/groupdown.svg" />
            <p className="text-xs font-medium text-[#ED544E]">23,5%</p>
          </div>
          <p className="text-[0.79rem]/normal font-normal text-[#606060] font-Inter">
            vs. previous month
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#EDF2F7] rounded-[0.875rem] py-2 px-2 w-[14.8rem] md:h-[10rem] md:w-48 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="rounded-full w-9 h-9 border flex items-center justify-center">
            <img src="./images/cart.png" />
          </div>
          <img src="./images/tch.svg" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg/[1.625rem] font-medium text-[#898989]">
            Average Sales
          </h1>
          <p className="text-2xl font-semibold text-[#3A3F51]">1567</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 rounded-full bg-[#ED544E] bg-opacity-10 items-center justify-center px-2">
            <img src="./images/groupdown.svg" />
            <p className="text-xs font-medium text-[#ED544E]">23,5%</p>
          </div>
          <p className="text-[0.79rem]/normal font-normal text-[#606060] font-Inter">
            vs. previous month
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#EDF2F7] rounded-[0.875rem] py-2 px-2 w-[14.8rem] md:h-[10rem] md:w-48 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="rounded-full w-9 h-9 border flex items-center justify-center">
            <img src="./images/coin.png" />
          </div>
          <img src="./images/group1.svg" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg/[1.625rem] font-medium text-[#898989]">
            Total Income
          </h1>
          <p className="text-2xl font-semibold text-[#3A3F51]">$350.000</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 rounded-full bg-[#34CAA5] bg-opacity-10 items-center justify-center px-2">
            <img src="./images/group1up.svg" />
            <p className="text-xs font-medium text-[#34CAA5]">23,5%</p>
          </div>
          <p className="text-[0.79rem]/normal font-normal text-[#606060] font-Inter">
            vs. previous month
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
