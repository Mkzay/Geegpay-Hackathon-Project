const Orders = () => {
  return (
    <div className="md:col-start-1 col-span-6 md:col-span-4 p-7 bg-white border border-[#EDF2F7] rounded-[0.875rem] h-[23.375rem] flex flex-col gap-5 overflow-auto scrollbar-hide">
      <div className="flex justify-between">
        <h1 className="text-[#26282C] font-semibold text-lg/[1.625rem]">
          Last Orders
        </h1>
        <h2 className="text-[#34CAA5] font-medium text-lg/[1.625rem]">
          See All
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex items-start flex-col gap-6">
          <h3 className="text-base font-medium text-[#9CA4AB]">Name</h3>
          <ul className="flex flex-col gap-7 text-base font-medium text-[#3A3F51]">
            <li>Marcus Bergson</li>
            <li>Jaydon Vaccaro</li>
            <li>Corey Schleifer</li>
            <li>Copper Press</li>
            <li>Philip Lubin</li>
          </ul>
        </div>

        <div className="flex items-start flex-col gap-6">
          <h3 className="text-base font-medium text-[#9CA4AB]">Date</h3>
          <ul className="flex flex-col gap-7 text-base font-normal text-[#737373]">
            <li>Nov 15, 2023</li>
            <li>Nov 15, 2023</li>
            <li>Nov 14, 2023</li>
            <li>Nov 14, 2023</li>
            <li>Nov 13, 2023</li>
          </ul>
        </div>

        <div className="flex items-start flex-col gap-6">
          <h3 className="text-base font-medium text-[#9CA4AB]">Amount</h3>
          <ul className="flex flex-col gap-7 text-base font-medium text-[#0D062D]">
            <li>$80,000</li>
            <li>$150,000</li>
            <li>$87,000</li>
            <li>$100,000</li>
            <li>$78,000</li>
          </ul>
        </div>

        <div className="flex items-start flex-col gap-6">
          <h3 className="text-base font-medium text-[#9CA4AB]">Status</h3>
          <ul className="flex flex-col gap-7 text-base font-normal">
            <li className="text-[#34CAA5]">Paid</li>
            <li className="text-[#ED544E]">Refund</li>
            <li className="text-[#34CAA5]">Paid</li>
            <li className="text-[#ED544E]">Refund</li>
            <li className="text-[#34CAA5]">Paid</li>
          </ul>
        </div>

        <div className="flex items-start flex-col gap-6">
          <h3 className="text-base font-medium text-[#9CA4AB]">Invoice</h3>
          <ul className="flex flex-col gap-7 text-sm/[1.375rem] font-normal">
            <li className="flex items-center gap-1">
              <img src="./images/view.svg" />
              View
            </li>
            <li className="flex items-center gap-1">
              <img src="./images/view.svg" />
              View
            </li>
            <li className="flex items-center gap-1">
              <img src="./images/view.svg" />
              View
            </li>
            <li className="flex items-center gap-1">
              <img src="./images/view.svg" />
              View
            </li>
            <li className="flex items-center gap-1">
              <img src="./images/view.svg" />
              View
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;

/*        <ul className="flex items-start  gap-3 w-full">
          <li>Name</li>
          <li>Date</li>
          <li>Amount</li>
          <li>Status</li>
          <li>Invoice</li>
        </ul>

        <ul className="flex items-start  gap-3 w-full">
          <li>Marcus Bergson</li>
          <li>Nov 15, 2023</li>
          <li>$80,000</li>
          <li>Paid</li>
          <li>View</li>
        </ul> */
