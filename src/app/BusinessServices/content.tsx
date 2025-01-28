export default function BusinessServices() {
  return (
    <div id="BusinessServices">
      {/* Hero Section */}
      <div
        className="w-[100%] h-[1200px] relative -top-[150px] bg-cover bg-center bg-no-repeat flex justify-center items-end px-[64px]"
        style={{
          backgroundImage: "url('/businessServices/heroImage.png')",
        }}
      >
        <div className="p-[34px_55px] bg-[#CF142B] rounded-[50px] text-center mb-[-100px]">
          <p className="font-outfit font-bold text-[44px] text-white">
            Why Choose Holborn Relocate for Your Move to Dubai?
          </p>
          <p className="font-alata font-normal text-[36px] text-white mt-[10px]">
            Experience a seamless transition to Dubai with expert guidance
            tailored to your needs.
          </p>
        </div>
      </div>
      {/* Holborn relocate Service Section */}
      <div className="flex flex-col gap-[24px] mt-[250px] items-center">
        <p className="font-outfit font-semiBold text-[54px] text-white">
          Holborn Relocate Services
        </p>
        <div className="w-[310px] h-[2px] bg-white"></div>
      </div>
      <img
        src="/businessServices/service.png"
        alt="service"
        className="mt-[170px]"
      />
      {/* review section starts here */}
      <div>
        <div className="flex gap-[30px] mt-[300px] mb-[170px] px-[60px]">
          <div className="flex flex-col gap-[24px] items-center text-center rounded-[20px] bg-[#CF142B] relative px-[16px] pb-[24px]">
            <img
              src="/businessServices/profileOne.png"
              alt="first"
              className="w-[224p] h-[258px] rounded-[50%] absolute top-[-112px]"
            />
            <p className="mt-[152px] text-white font-outfit font-bold text-[35px]">
              Sarah Johnson – Entrepreneur
            </p>
            <p className="font-alata font-normal text-white text-[29px]">
              Holborn Relocate made our move to Dubai incredibly smooth and
              stress-free. From visa processing to finding the perfect school
              for my kids, they took care of every detail. I highly recommend
              their services to anyone planning to relocate!
            </p>
          </div>
          <div className="flex flex-col gap-[24px] items-center text-center rounded-[20px] bg-[#CF142B] relative px-[16px] pb-[24px]">
            <img
              src="/businessServices/profileTwo.png"
              alt="second"
              className="w-[224p] h-[258px] rounded-[50%] absolute top-[-112px]"
            />
            <p className="mt-[152px] text-white font-outfit font-bold text-[35px]">
              David Wilson – Business Owner
            </p>
            <p className="font-alata font-normal text-white text-[29px]">
              Relocating my business to Dubai seemed daunting at first, but
              Holborn Relocate’s team provided expert guidance every step of the
              way. Their local network and practical advice were invaluable in
              helping us settle and grow in this dynamic city.
            </p>
          </div>
          <div className="flex flex-col gap-[24px] items-center text-center rounded-[20px] bg-[#CF142B] relative px-[16px] pb-[24px]">
            <img
              src="/businessServices/profileThree.png"
              alt="third"
              className="w-[224p] h-[258px] rounded-[50%] absolute top-[-112px]"
            />
            <p className="mt-[152px] text-white font-outfit font-bold text-[35px]">
              Emily Carter – Marketing Professional
            </p>
            <p className="font-alata font-normal text-white text-[29px]">
              The personalized service and attention to detail from Holborn
              Relocate exceeded all my expectations. They helped me find the
              perfect apartment and connected me with a great community in
              Dubai. It truly felt like having a trusted friend by my side
              during the entire process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
