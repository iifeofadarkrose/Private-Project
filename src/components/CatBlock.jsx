import { IoMenu } from "react-icons/io5";

const CatBlock = () => {
  return (

      <div className="flex items-center font-light mx-8 container">
        <button className="flex justify-between items-center mr-[5%] text-white bg-[#279CD5] md:text-[15px] w-[160px] h-[40px] md:w-[220px] md:h-[40px] rounded-t-lg">
          <div className="ml-[12px] text-[20px] md:text-xl">Categories</div>
          <IoMenu className="mr-[12px] w-[16px] h-[16px]" />
        </button>
        <h1 className="text-2xl md:text-3xl">Popular Products</h1>
      </div>
  );
};

export default CatBlock;
