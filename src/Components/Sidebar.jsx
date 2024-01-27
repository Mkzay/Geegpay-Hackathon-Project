/* eslint-disable react/prop-types */
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${
        isOpen
          ? "translate-x-0  duration-300 ease-in"
          : "-translate-x-[100%] duration-500 ease-out md:translate-x-0"
      } w-16 h-full flex flex-col items-center gap-24 bg-[#F7F8FA] border border-[#E5EAEF] py-5 px-0 fixed md:absolute top-0 md:w-[4.5rem] md:h-fit md:p-5`}
    >
      <ul className="flex flex-col items-center justify-center gap-9">
        <li>
          <img onClick={onClose} src="./images/light.svg" alt="" />
        </li>
        <li className="flex items-center">
          <img src="./images/bulk.svg" alt="" />
          <div className="w-[0.1875rem] h-[1.3125rem] bg-[#0D062D] relative -right-4 md:-right-5"></div>
        </li>
        <li>
          <img src="./images/broken.svg" alt="" />
        </li>
        <li>
          <img src="./images/profile.svg" alt="" />
        </li>
        <li>
          <img src="./images/box.svg" alt="" />
        </li>
        <li>
          <img src="./images/discount.svg" alt="" />
        </li>
        <li>
          <img src="./images/info.svg" alt="" />
        </li>
      </ul>
      <ul className="bg-white rounded-3xl flex flex-col items-center gap-6 p-2 w-10">
        <li className="bg-[#34CAA5] flex items-center justify-center rounded-full h-7 w-7">
          <img src="./images/sun.svg" alt="" />
        </li>
        <li>
          <img src="./images/moon.svg" alt="" />
        </li>
      </ul>
      <ul className="flex flex-col items-center justify-center gap-9">
        <li>
          <img src="./images/right.svg" alt="" />
        </li>
        <li>
          <img src="./images/gear.svg" alt="" />
        </li>
        <li>
          <img src="./images/left.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
