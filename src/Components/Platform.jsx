import { Progress } from "@material-tailwind/react";

const Platform = () => {
  return (
    <div className="col-start-1 col-span-6 md:col-start-1 md:col-span-6 lg:col-start-5 lg:col-span-2 p-5 bg-white border border-[#EDF2F7] rounded-[0.875rem] lg:w-[25rem] h-[23.375rem] flex flex-col gap-4 overflow-auto scrollbar-hide">
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
          <Progress value={50} color="indigo" />
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$2,500,000</p>
            <p>+15%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            Artisan Aisle
          </h2>
          <Progress value={40} color="blue" />
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$1,800,000</p>
            <p>+10%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            Toy Troop
          </h2>
          <Progress value={30} color="orange" />
          <div className="flex justify-between text-[#525252] font-normal text-lg/[1.625rem]">
            <p>$1,200,000</p>
            <p>+8%</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[#22242C] font-semibold text-lg/[1.625rem]">
            XStore
          </h2>
          <Progress value={20} color="pink" />
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
