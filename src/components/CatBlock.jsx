import { IoMenu } from "react-icons/io5";

const CatBlock = () => {
  return (
    
    <div className="flex items-center font-light mx-auto container">
    <button className="flex justify-between items-center mr-[5%] text-white bg-[#279CD5] text-[15px] w-[220px] h-[40px] rounded-t-lg">
    <div className="ml-[12px] text-xl">Categories</div>
    <IoMenu className="mr-[12px] w-[16px] h-[16px]" />
  </button>
  <h1 className="text-3xl">Popular Products</h1>
  </div>
  )
}

export default CatBlock;