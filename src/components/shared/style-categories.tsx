import Link from "next/link";

export default function StyleCategories() {
  return (
    <div className="bg-[#F0F0F0] pt-18 pb-10 mx-5 px-5 rounded-[20px] mt-15 xl:mx-20 xl:px-15  ">
      <h2 className="font-integral text-[32px] text-center sm:mb-8 lg:text-[38px]">
        BROWSE BY dress STYLE
      </h2>
      <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 ">
        <Link href={"/"} className=" xl:col-span-1">
          <div className=" bg-[url(@/public/casual.png)] min-h-47.5  bg-cover p-4 rounded-[20px] mt-5 lg:h-72.25">
            <p className="font-satoshi font-bold text-[24px]">Casual</p>
          </div>
        </Link>
        <Link href={"/"} className="xl:col-span-2">
          <div className=" bg-[url(@/public/formal.png)] min-h-47.5  bg-cover p-4 rounded-[20px] mt-5 lg:h-72.25">
            <p className="font-satoshi font-bold text-[24px]">Formal</p>
          </div>
        </Link>
        <Link href={"/"} className="xl:col-span-2">
          <div className=" bg-[url(@/public/party.png)] min-h-47.5  bg-cover p-4 rounded-[20px] mt-5 lg:h-72.25">
            <p className="font-satoshi font-bold text-[24px]">Party</p>
          </div>
        </Link>
        <Link href={"/"} className="xl:col-span-1">
          <div className=" bg-[url(@/public/gym.png)] min-h-47.5  bg-cover p-4 rounded-[20px] mt-5 lg:h-72.25">
            <p className="font-satoshi font-bold text-[24px]">Gym</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
