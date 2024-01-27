const Platform = () => {
  return (
    <div className="col-start-1 col-span-6 md:col-start-5 md:col-span-2 p-5 bg-white border border-[#EDF2F7] rounded-[0.875rem] md:w-[25rem] h-[23.375rem] flex flex-col gap-4 overflow-auto scrollbar-hide">
      <div className="flex justify-between">
        <h1 className="text-[#26282C] font-semibold text-lg/[1.625rem]">
          Top Platform
        </h1>
        <h2 className="text-[#34CAA5] font-medium text-lg/[1.625rem]">
          See All
        </h2>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            Book Bazaar
          </h2>
          <div className="h-3 w-full bg-[#6160DC] rounded-full"></div>
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$2,500,000</p>
            <p>+15%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            Artisan Aisle
          </h2>
          <div className="h-3 w-full bg-[#54C5EB] rounded-full"></div>
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            Toy Troop
          </h2>
          <div className="h-3 w-full bg-[#FFB74A] rounded-full"></div>
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$1,200,000</p>
            <p>+8%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            XStore
          </h2>
          <div className="h-3 w-full bg-[#FF4A55] rounded-full"></div>
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$700,000</p>
            <p>+6%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
