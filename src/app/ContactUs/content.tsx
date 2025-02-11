export default function ContactUs() {
  return (
    <div id="ContactUs" className="mt-[62px] sm:mt-[148px]">
      {/* Success Section */}
      <div className="flex sm:flex-row flex-col px-[16px] sm:px-[72px] gap-[40px]">
        <div className="flex flex-col gap-[24px] sm:gap-[55px] items-center sm:w-[60%] text-center sm:pt-[94px]">
          <p className="font-outfit font-bold text-white text-[14px] sm:text-[57px]">
            Contact Us
          </p>
          <p className="font-alata font-normal text-white text-[12px] sm:text-[24px]">
            At Holborn Relocate, we are here to assist you every step of the way
            in your move to Dubai. Whether you need guidance on visas, business
            setup, or relocation services, our expert team is ready to help.
          </p>
          <p className="font-alata font-normal text-white text-[12px] sm:text-[29px]">
            Get in touch with us today to start your seamless transition to
            Dubai!
          </p>
        </div>
        <div className="sm:w-[40%] sm:p-[40px] px-[22px] pb-[22px] sm:pb-[40px] sm:px-[40px] bg-[#CF142B] rounded-[33px]">
          <div>
            <p className="font-outfit font-semiBold text-white text-[42px] hidden sm:block">
              Get in Touch
            </p>
            <p className="font-alata font-normal text-white text-[13px] sm:text-[26px] mt-[42px] sm:mt-[0px]">
              You can reach us any time
            </p>
          </div>
          <div className="mt-[22px] sm:mt-[48px] flex flex-col gap-[22px] sm:gap-[32px]">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="w-[49%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[11px] sm:text-[26px] p-[16px_10px] sm:p-[24px_18px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-[49%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[11px] sm:text-[26px] p-[16px_10px] sm:p-[24px_18px]"
              />
            </div>
            <div className="relative">
              <img
                src="/contactUs/Email.svg"
                alt="Email Icon"
                className="absolute left-[18px] top-1/2 transform -translate-y-1/2 w-[22px] sm:w-auto"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-[100%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[11px] sm:text-[26px] p-[16px_10px] sm:p-[24px_18px] pl-[50px] sm:pl-[80px]"
              />
            </div>
            <div className="relative">
              <div className="absolute left-[18px] top-1/2 transform -translate-y-1/2 flex items-center gap-[8px]">
                <img
                  src="/contactUs/Phone.svg"
                  alt="phone Icon"
                  className="w-[22px] sm:w-auto"
                />
                <div className="w-[2px] h-[44px] sm:h-[60px] bg-[#848484] ml-[8px]"></div>
              </div>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-[100%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[11px] sm:text-[26px] p-[16px_10px] sm:p-[24px_18px] pl-[70px] sm:pl-[100px]"
              />
            </div>
            <div>
              <textarea
                className="w-[100%] h-[132px] sm:h-[225px] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[11px] sm:text-[26px] p-[16px_10px] sm:p-[24px_18px]"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div>
              <button className="w-[100%] rounded-[17px] bg-[#002470] text-white font-outfit font-bolder text-[14px] sm:text-[28px] py-[20px]">
                Submit
              </button>
            </div>
            <div className="text-center">
              <p className="font-outfit font-normal text-white sm:text-[22px] text-[12px]">
                By contacting us, you agree to our <b>Terms of services</b> and{" "}
                <b>Privacy Policy</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gateway Section */}
      <div className="bg-white p-[22px_16px] sm:p-[50px_40px] flex sm:flex-row flex-col gap-[22px] sm:gap-[60px] mt-[72px] sm:mt-[174px]">
        <div className="sm:w-[50%]">
          <p className="font-outfit font-semibold text-center text-[12px] mb-[22px] sm:hidden">
            Dubai, UAE – A gateway to global business opportunities.
          </p>
          <img src="/contactUs/map.png" alt="map" className="w-full h-[100%]" />
        </div>
        <div className="sm:w-[50%] flex flex-col items-center sm:items-start  gap-[12px]">
          <p className="font-outfit font-bold text-[39px] mt-[77px] hidden sm:block">
            Dubai, UAE – A gateway to global business opportunities.
          </p>
          <p className="font-alata font-normal text-[12px] sm:text-[24px]">
            Dubai offers a prime location for businesses and professionals,
            strategically positioned between Europe, Asia, and Africa. With its
            world-class infrastructure, business-friendly policies, and vibrant
            lifestyle, Dubai is the perfect destination for UK companies and
            nationals looking to expand their horizons.
          </p>
          <p className="font-outfit font-bold  text-[12px] sm:text-[27px]">
            Headquarter: Dubai, Asia | 123 Tech Boulocard Suite 456
          </p>
          <p className="font-alata font-normal  text-[12px] sm:text-[26px]">
            Visit our office to locate your business in Dubai now!
          </p>
          <button className="font-outfit text-[12px] sm:text-[32px] font-bold text-white p-[12px_16px] sm:p-[22px_30px] bg-[#002470] rounded-[19px] w-fit">
            Connecting Near & Far
          </button>
        </div>
      </div>
    </div>
  );
}
