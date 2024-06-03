
const BestSeller = () => {
    return (
      <div className="p-4 border rounded-lg shadow-sm bg-white mx-auto my-8 conrainer max-w-[550px] lg:max-w-[960px] md:max-w-[768px] hover:border-[1px] hover:border-[#409EFF] cursor-pointer">
        <div className="flex items-center ">
          <div className="w-2/3 md:w-1/3">
            <img 
              src="../../src/assets/img/IndustrialHeatingElements/Flat/flat.png" 
              alt="Product" 
              className="w-full h-auto rounded border-1 bg-[#279CD533]"
            />
          </div>
          <div className="w-2/3 pl-4">
            <p className="text-[#279CD5] text-xl md:text-2xl font-semibold mb-1">Best seller!</p>
            <h2 className="text-xl md:text-4xl text-[#486284] font-bold mb-2">Lorem Ipsum</h2>
            <p className="text-gray-700 mb-4 text-[12px] md:text-[24px] max-w-[550px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since...
            </p>
            <button className="px-2 py-1 md:px-4 md:py-2  text-[16px] bg-white border-2 text-[#279CD5] border-[#279CD5] rounded-full hover:bg-slate-200">
              More info
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BestSeller;