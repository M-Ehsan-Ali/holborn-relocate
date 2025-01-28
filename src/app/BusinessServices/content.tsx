export default function BusinessServices() {
  return (
    <div id="businessServices" className="mb-[330px]">
      {/* Hero Section */}
      <div className="px-[40px]">
        <div className="relative h-[1247px]">
          <img src="/businessServices/heroImage.png" alt="heroImage" />
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
      <div className="flex flex-col gap-[56px] items-center px-[100px] mt-[150px]">
        <div className="text-[45px] font-outfit font-medium text-white">
          Why Dubai is the Ideal Destination for Your Business?
        </div>
        <div className="text-[34px] font-alata font-normal text-white">
          Dubai offers unmatched advantages for entrepreneurs and businesses
          seeking global growth. Its strategic location, tax-free benefits, and
          robust infrastructure create the perfect environment for success.
        </div>
        <div className="flex gap-[24px]">
          <div className="p-[35px] bg-[#CF142B] rounded-[20px] flex flex-col gap-[38px] items-center">
            <img src="/businessServices/Bill.svg" alt="bill" />
            <p className="font-outfit text-[40px] font-bold text-white text-center">
              Tax-Free Business Environment
            </p>
            <p className="font-alata font-normal text-[28px] text-white text-center">
              Operating in Dubai means enjoying a tax-free status, allowing you
              to reinvest profits directly into your business. This financial
              edge makes Dubai an attractive hub for maximizing growth
              opportunities.
            </p>
          </div>
          <div className="p-[35px] bg-[#CF142B] rounded-[20px] flex flex-col gap-[38px] items-center">
            <img src="/businessServices/Bill.svg" alt="bill" />
            <p className="font-outfit text-[40px] font-bold text-white text-center">
              Tax-Free Business Environment
            </p>
            <p className="font-alata font-normal text-[28px] text-white text-center">
              Operating in Dubai means enjoying a tax-free status, allowing you
              to reinvest profits directly into your business. This financial
              edge makes Dubai an attractive hub for maximizing growth
              opportunities.
            </p>
          </div>
          <div className="p-[35px] bg-[#CF142B] rounded-[20px] flex flex-col gap-[38px] items-center">
            <img src="/businessServices/Bill.svg" alt="bill" />
            <p className="font-outfit text-[40px] font-bold text-white text-center">
              Tax-Free Business Environment
            </p>
            <p className="font-alata font-normal text-[28px] text-white text-center">
              Operating in Dubai means enjoying a tax-free status, allowing you
              to reinvest profits directly into your business. This financial
              edge makes Dubai an attractive hub for maximizing growth
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Is Dubai Safe Section */}
      <div className="mt-[305px] px-[70px]">
        <div className="relative flex">
          <div className="z-[2]">
            <img src="/businessServices/secure.png" alt="secure" />
          </div>
          <div className="p-[60px_80px] pt-[121px] bg-white/50 rounded-[100px] absolute right-[0px] bottom-[-45px] w-[48%]">
            <img
              src="/businessServices/airplane.png"
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
