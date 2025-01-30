export default function ContactUs() {
  return (
    <div id="ContactUs" className="mb-[300px] mt-[148px]">
      {/* Success Section */}
      <div className="flex px-[72px] gap-[40px]">
        <div className="flex flex-col gap-[55px] items-center w-[60%] text-center pt-[94px]">
          <p className="font-outfit font-bold text-white text-[57px]">
            Contact Us
          </p>
          <p className="font-alata font-normal text-white text-[24px]">
            At Holborn Relocate, we are here to assist you every step of the way
            in your move to Dubai. Whether you need guidance on visas, business
            setup, or relocation services, our expert team is ready to help.
          </p>
          <p className="font-alata font-normal text-white text-[29px]">
            Get in touch with us today to start your seamless transition to
            Dubai!
          </p>
        </div>
        <div className="w-[40%] p-[40px] bg-[#CF142B] rounded-[33px]">
          <div>
            <p className="font-outfit font-semiBold text-white text-[42px]">
              Get in Touch
            </p>
            <p className="font-alata font-normal text-white text-[26px]">
              You can reach us any time
            </p>
          </div>
          <div className="mt-[48px] flex flex-col gap-[32px]">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="w-[49%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[26px] p-[24px_18px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-[49%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[26px] p-[24px_18px]"
              />
            </div>
            <div className="relative">
              <img
                src="/contactUs/Email.svg"
                alt="Email Icon"
                className="absolute left-[18px] top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="w-[100%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[26px] p-[24px_18px] pl-[80px]"
              />
            </div>
            <div className="relative">
              <div className="absolute left-[18px] top-1/2 transform -translate-y-1/2 flex items-center gap-[8px]">
                <img src="/contactUs/Phone.svg" alt="Email Icon" />
                <div className="w-[2px] h-[60px] bg-[#848484] ml-[8px]"></div>
              </div>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-[100%] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[26px] p-[24px_18px] pl-[100px]"
              />
            </div>
            <div>
              <textarea
                className="w-[100%] h-[225px] rounded-[16px] bg-white font-alata font-normal text-[#848484] text-[26px] p-[24px_18px]"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div>
              <button className="w-[100%] rounded-[17px] bg-[#002470] text-white font-outfit font-bolder text-[28px] py-[20px]">
                Submit
              </button>
            </div>
            <div className="text-center">
              <p className="font-outfit font-normal text-white text-[22px]">
                By contacting us, you agree to our <b>Terms of services</b> and{" "}
                <b>Privacy Policy</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
