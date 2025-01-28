import Image from "next/image";

export default function WhyUs() {
  return (
    <div id="WhyUs">
      {/* Hero Section */}
      <div
        className="w-[100%] h-[1200px] relative -top-[150px] bg-cover bg-center bg-no-repeat flex justify-center items-end px-[64px]"
        style={{
          backgroundImage: "url('/whyUs/heroImage.png')",
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
      {/* Personalised Guidance for Your Residency Visa section starts here */}
      <div
        className="w-[100%] flex justify-between items-start px-[64px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/residencyVisa/Ellipse.png')`,
        }}
      >
        <div className="text-white flex items-center flex-col justify-center">
          <div className="flex flex-col items-center gap-[20px] w-[740px] z-[9]">
            <p className="text-white text-center font-inter font-bold text-[45px]">
              Personalised Guidance for Your Residency Visa
            </p>
            <p className="font-outfit font-medium text-[28px] max-w-[575px] text-center">
              {/* <Image
                height={686}
                width={727}
                alt="Ellipse"
                src="/Ellipse.png"
                className="absolute -left-[50px]"
              /> */}
              Navigate the complexities of Dubai's residency requirements with
              confidence. Our experts provide tailored advice, ensuring your
              visa application aligns with your unique needs and circumstances.
            </p>
            <div className="flex justify-center gap-[35px]">
              <button className="rounded-red-btn">
                Book a consultation
                <span className="text-[22px] text-white">&#8594;</span>
              </button>
            </div>
          </div>
          <div className="w-[100%] mt-[180px]">
            <div className="flex justify-center">
              <Image
                height={460}
                width={500}
                alt="Visa"
                src="/residencyVisa/personaliseVisaGirl.png"
              />
            </div>
            <div className="flex mt-[70px]">
              <div>
                <div className="flex items-center">
                  <div>
                    <Image
                      height={90}
                      width={90}
                      alt="Visa"
                      src="/residencyVisa/devSkill.png"
                    />
                  </div>
                  <div className="w-[240px]">
                    <p className="font-outfit font-medium text-[35px] text-center">
                      Expert Assistance
                    </p>
                  </div>
                </div>
                <div className="w-[400px]">
                  <p className="font-outfit font-medium text-[26px] text-center">
                    Streamlined guidance to simplify your visa process
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div>
                    <Image
                      height={90}
                      width={90}
                      alt="Visa"
                      src="/residencyVisa/brightMind.png"
                    />
                  </div>
                  <div className="w-[240px]">
                    <p className="font-outfit font-medium text-[35px] text-center">
                      Tailored Solutions
                    </p>
                  </div>
                </div>
                <div className="w-[400px]">
                  <p className="font-outfit font-bolder text-[26px] text-center">
                    Residency plans designed to suit your unique needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center  ">
            <div className="relative">
              <Image
                src="/residencyVisa/guidMainImage.png"
                width={975}
                loading="lazy"
                height={1036}
                alt="main image midd"
              />
              <div className="absolute bottom-[-5%] left-[-5%]">
                <Image
                  src="/residencyVisa/Group.png"
                  width="326"
                  loading="lazy"
                  height={228}
                  alt="bottom left image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Requirements for a Dubai Residency Visa section starts here */}

      <div
        className="bg-no-repeat bg-right py-[220px] px-[25px] flex"
        style={{
          backgroundImage: `url('/residencyVisa/globe.png')`,
        }}
      >
        <div className="relative">
          <div className="bg-[#CF142B] w-[150px] h-[150px] rounded-[50%] flex items-center justify-center absolute right-[-5%] top-[-5%]">
            <Image
              src="/residencyVisa/checkMark.png"
              width={70}
              loading="lazy"
              height={70}
              alt="top right Check Mark"
            />
          </div>
          <Image
            src="/residencyVisa/visaPlane.png"
            width={952}
            loading="lazy"
            height={924}
            alt="bottom left image"
          />
          <div className="absolute bottom-[0%] left-[0%]">
            <Image
              src="/residencyVisa/Group.png"
              width={300}
              loading="lazy"
              height={247}
              alt="bottom left image"
            />
          </div>
        </div>
        <div className="text-center relative">
          <p className="text-white font-outfit font-bold text-[50px] mt-[125px] mb-[64px]">
            Key Requirements for a Dubai Residency Visa
          </p>
          <div className="bg-[#CF142B] rounded-[30px]  px-[20px] px-[20px] py-[70px] flex flex-col gap-[60px] absolute bottom-[-30%] left-[-120px]">
            <div>
              <div className="flex gap-[20px] items-center bg-[#FFFFFF] py-[30px] px-[12px] rounded-[30px] w-[95%]">
                <Image
                  src="/residencyVisa/checkMark.png"
                  width={70}
                  loading="lazy"
                  height={70}
                  alt="top right Check Mark"
                />
                <p className="font-outfit font-normal text-[30px] text-[#000000]">
                  Valid Passport: Must be valid for at least six months.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex gap-[20px] items-center bg-[#FFFFFF] py-[30px] px-[12px] rounded-[30px] w-[95%]">
                <div>
                  <Image
                    src="/residencyVisa/checkMark.png"
                    width={70}
                    loading="lazy"
                    height={70}
                    alt="top right Check Mark"
                  />
                </div>
                <p className="font-outfit font-normal text-[30px] text-[#000000]">
                  Proof of Income/Employment: Employment contract or proof of
                  business ownership.
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-[20px] items-center bg-[#FFFFFF] py-[30px] px-[12px] rounded-[30px] w-[95%]">
                <Image
                  src="/residencyVisa/checkMark.png"
                  width={70}
                  loading="lazy"
                  height={70}
                  alt="top right Check Mark"
                />
                <p className="font-outfit font-normal text-[30px] text-[#000000]">
                  Health Insurance: Valid health insurance coverage for all
                  applicants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
