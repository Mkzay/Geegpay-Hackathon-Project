const Sales = () => {
  return (
    <div className="col-start-1 col-span-6 lg:col-span-4  max-[1300px]:col-span-6 p-5 bg-white border border-[#EDF2F7] rounded-[0.875rem] h-[23.375rem] mt-14 md:mt-20 flex flex-col gap-5 overflow-auto scrollbar-hide md:overscroll-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-lg/[1.625] font-semibold">Sales Trends</h1>
        <h2 className="text-sm/[1.375rem] font-medium text-[#3A3F51]">
          Sort by:{" "}
          <select className="text-xs font-normal rounded-full border border-[#E1DFDF] p-1">
            <option value="volvo">Weekly</option>
            <option value="saab">Monthly</option>
            <option value="saab">Yearly</option>
          </select>
        </h2>
      </div>
      <div className="flex">
        <ul className="flex flex-col gap-5 text-xs font-semibold text-[#525252]">
          <li>50,000</li>
          <li>40,000</li>
          <li>30,000</li>
          <li>20,000</li>
          <li>10,000</li>
          <li>5,000</li>
          <li>0</li>
        </ul>
        <img src="./images/bar.png" />
      </div>
      <ul className="md:text-sm/[1.375] text-xs gap-1.5 font-semibold text-[#525252] flex md:gap-9 relative -right-12">
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
        <li>Jun</li>
        <li>Jul</li>
        <li>Aug</li>
        <li>Sep</li>
        <li>Oct</li>
        <li>Nov</li>
        <li>Dec</li>
      </ul>
    </div>
  );
};

export default Sales;
