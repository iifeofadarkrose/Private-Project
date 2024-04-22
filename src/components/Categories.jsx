import { IoMenu } from "react-icons/io5";

const Categories = () => {
  return (
    <div className="flex md:mx-[5%] lg:mx-[15%]">
       <div className="flex justify-between items-center mx-8 my-[5px] text-white bg-[#279CD5] text-[15px] w-[220px] rounded-t-lg">
      <button className="ml-[12px]">Categories</button>
      <IoMenu className="mr-[12px] w-[16px] h-[16px]" />
    </div>
    </div>
   
  );
};

export default Categories;
