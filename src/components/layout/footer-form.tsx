import { TfiEmail } from "react-icons/tfi";

export default function FooterForm() {
  return (
    <>
      <div
        className=" p-8 mx-4 rounded-[20px] bg-black text-white md:flex md:items-center md:mx-8
        -mb-40 relative z-10 lg:mx-25"
      >
        <div className="flex-1 md:ml-5">
          <h2 className="font-integral text-[32px] text-3xl xl:w-125">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>
        <div className=" mt-6 flex-1 ">
          <form>
            <div className="relative text-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="bg-white placeholder-[#00000066] w-full xl:w-2/3 font-satoshi pl-10 py-3  rounded-[62px] outline-none text-black"
              />
              <TfiEmail
                className=" absolute top-4.25 left-4.25 xl:left-[19%]"
                color="#00000066"
              />
              <button className="text-center w-full xl:w-2/3 text-black bg-white font-satoshi p-3 rounded-[62px] mt-4">
                Subscribe to Newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
