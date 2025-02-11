export default function BusinessSetup() {
  return (
    <div id="businessSetup" className="mb-[80px] sm:mb-[330px]">
      {/* Hero Section */}
      <div className="block sm:hidden mt-[24px]">
        <img src="/businessSetup/heroMobile.png" alt="" />
      </div>
      <div className="px-[40px] hidden sm:block">
        <div className="relative h-[1247px]">
          <img src="/businessSetup/heroImage.png" alt="heroImage" />
          <div className="text-[#FFFFFF] absolute right-[56px] bottom-[100px] rounded-[50px] px-[16px] py-[56px] flex flex-col gap-[28px] bg-[#CF142B] text-center w-[816px] items-center">
            <p className="font-outfit font-bold text-[38px]">
              Seamless Opportunities for UK Companies to Thrive in Dubai
            </p>
            <div className="w-[70%] h-[1px] bg-[#FFFFFF]"></div>
            <p className="font-outfit font-medium text-[34px] ">
              Kickstart your journey with Holborn Relocate and launch your
              business today!
            </p>
          </div>
        </div>
      </div>
      {/* Why Dubai Section */}
      <div className="flex flex-col gap-[24px] sm:gap-[56px] items-center px-[16px] sm:px-[100px] mt-[50px] sm:mt-[150px]">
        <div className="sm:text-[45px] text-[14px] font-outfit font-medium text-white">
          Why Dubai is the Ideal Destination for Your Business?
        </div>
        <div className="sm:text-[34px] text-[12px] font-alata font-normal text-white">
          Dubai offers unmatched advantages for entrepreneurs and businesses
          seeking global growth. Its strategic location, tax-free benefits, and
          robust infrastructure create the perfect environment for success.
        </div>
        <div className="flex gap-[12px] sm:gap-[24px] flex-wrap sm:flex-nowrap justify-center">
          <div className="sm:p-[35px] w-[40%] sm:w-auto p-[16px_4px] bg-[#CF142B] rounded-[6px] sm:rounded-[20px] flex flex-col gap-[2px] sm:gap-[38px] items-center">
            <img
              src="/businessSetup/Bill.svg"
              alt="bill"
              className="w-[28px] sm:w-auto"
            />
            <p className="font-outfit text-[8px] sm:text-[40px] font-bold text-white text-center">
              Tax-Free Business Environment
            </p>
            <p className="font-alata font-normal text-[7px] sm:text-[28px] text-white text-center">
              Operating in Dubai means enjoying a tax-free status, allowing you
              to reinvest profits directly into your business. This financial
              edge makes Dubai an attractive hub for maximizing growth
              opportunities.
            </p>
          </div>
          <div className="sm:p-[35px] w-[40%] sm:w-auto p-[16px_4px] bg-[#CF142B] rounded-[6px] sm:rounded-[20px] flex flex-col gap-[2px] sm:gap-[38px] items-center">
            <img
              src="/businessSetup/Bill.svg"
              alt="bill"
              className="w-[28px] sm:w-auto"
            />
            <p className="font-outfit text-[8px] sm:text-[40px] font-bold text-white text-center">
              Tax-Free Business Environment
            </p>
            <p className="font-alata font-normal text-[7px] sm:text-[28px] text-white text-center">
              Operating in Dubai means enjoying a tax-free status, allowing you
              to reinvest profits directly into your business. This financial
              edge makes Dubai an attractive hub for maximizing growth
              opportunities.
            </p>
          </div>
          <div className="sm:p-[35px] w-[40%] sm:w-auto p-[16px_4px] bg-[#CF142B] rounded-[6px] sm:rounded-[20px] flex flex-col gap-[2px] sm:gap-[38px] items-center">
            <img
              src="/businessSetup/Bill.svg"
              alt="bill"
              className="w-[28px] sm:w-auto"
            />
            <p className="font-outfit text-[8px] sm:text-[40px] font-bold text-white text-center">
              Tax-Free Business Environment
            </p>
            <p className="font-alata font-normal text-[7px] sm:text-[28px] text-white text-center">
              Operating in Dubai means enjoying a tax-free status, allowing you
              to reinvest profits directly into your business. This financial
              edge makes Dubai an attractive hub for maximizing growth
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Is Dubai Safe Section */}
      <div className="mt-[52px] sm:mt-[305px] sm:px-[70px]">
        <img
          src="/businessSetup/safeBusiness.svg"
          alt="safe dubai"
          className="sm:hidden"
        />
        <div className="relative hidden sm:flex">
          <div className="z-[2]">
            <img src="/businessSetup/secure.png" alt="secure" />
          </div>
          <div className="p-[60px_80px] pt-[121px] bg-white/50 rounded-[100px] absolute right-[0px] bottom-[-45px] w-[48%]">
            <img
              src="/businessSetup/airplane.png"
              alt="plane"
              className="absolute top-[-200px] right-[-80px]"
            />
            <div className="flex flex-col gap-[24px] items-center text-center">
              <p className="font-outfit font-bold text-[50px] text-white">
                Is Dubai Safe for Your Business?
              </p>
              <p className="font-alata font-normal text-[32px] text-white">
                Dubai stands out as one of the safest cities in the world, with
                a low crime rate and strong law enforcement. The city’s security
                measures create a stable environment, allowing businesses to
                thrive without concern. This safety, combined with a growing
                economy and business-friendly policies, makes Dubai an ideal
                place to start and expand your business.
              </p>
              <p className="bg-[#CF142B] p-[24px_44px] font-alata font-normal text-[30px] text-white rounded-[300px]">
                Secure Your Business Future in <br />
                Dubai Today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
