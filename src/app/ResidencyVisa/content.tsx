import Image from "next/image";

export default function ResidencyVisa() {
  return (
    <div id="ResidencyVisa">
      {/* Hero Section */}
      <div
        className="w-[100%] h-[630px] sm:h-[1480px] relative -top-[150px] bg-cover bg-center bg-no-repeat flex sm:flex-row flex-col-reverse justify-start sm:justify-between items-center sm:px-[64px]"
        style={{
          backgroundImage: "url('/residencyVisa/residenceHeroBg.png')",
        }}
      >
        <div className="text-white flex items-center flex-col justify-center mb-[30px] sm-mb-[0px]">
          <div className="relative -left-[112px] hidden sm:block">
            <img src="/residencyVisa/vectorplane.png" alt="plane" />
          </div>
          <div className="flex flex-col items-center gap-[20px] w-auto sm:w-[740px] px-[20px] sm:px-[0px]">
            <p className="text-white text-center font-inter font-bold text-[14px] sm:text-[45px]">
              Your Gateway to a New Life:{" "}
              <span className="text-[#CF142B]">Dubai Residency Visa</span>
            </p>
            <p className="font-outfit font-medium text-[12px] sm:text-[28px] max-w-[575px] text-center">
              Seamlessly transition to Dubai with expert visa assistance. Enjoy
              a tax-free lifestyle, world-class amenities, and unmatched
              opportunities in a global hub
            </p>
            <div className="flex justify-center gap-[35px]">
              <button className="rounded-red-btn">
                Apply Now
                <span className="text-[22px] text-white">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="block sm:hidden pr-[20px]">
              <Image
                src="/residencyVisa/heroImage.png"
                width="964"
                loading="lazy"
                height={1036}
                alt="main image midd"
              />
            </div>
            <div className="hidden sm:block">
              <Image
                src="/residencyVisa/residenceHeroImage.png"
                width="964"
                loading="lazy"
                height={1036}
                alt="main image midd"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Personalised Guidance for Your Residency Visa section starts here */}
      <div
        className="w-[100%] flex justify-between items-start px-[20px] sm:px-[64px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/residencyVisa/Ellipse.png')`,
        }}
      >
        <div className="text-white flex items-left sm:items-center flex-col justify-center w-[80%] sm:w-auto">
          <div className="flex flex-col items-center gap-[20px] w-auto sm:w-[740px] z-[9]">
            <p className="text-white text-center font-inter font-bold text-[12px] sm:text-[45px]">
              Personalised Guidance for Your Residency Visa
            </p>
            <p className="font-outfit font-medium text-[12px] sm:text-[28px] max-w-auto sm:max-w-[575px] text-center">
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
            <div className="flex justify-center gap-[0px] sm:gap-[35px]">
              <button className="rounded-red-btn text-[12px] sm:flex">
                Book a consultation
                <span className="text-[22px] text-white hidden sm:block">
                  &#8594;
                </span>
              </button>
            </div>
          </div>
          <div className="w-[100%] mt-[180px] hidden sm:block">
            <div className="flex justify-center">
              <img
                className="w-auto sm:w-[500px] h-auto sm:h-[460px]"
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
          <img
            src="/residencyVisa/twoarbioneenglish.png"
            alt="visa"
            className="sm:hidden"
          />
          <div className="sm:flex items-center justify-center hidden">
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
      <div className="sm:hidden mt-[48px] px-[30px]">
        <img src="/residencyVisa/options.png" alt="options" />
      </div>
      {/* Key Requirements for a Dubai Residency Visa section starts here */}

      <div
        className="bg-no-repeat bg-right py-[220px] px-[25px] hidden sm:flex"
        style={{
          backgroundImage: `url('/residencyVisa/globe.png')`,
        }}
      >
        <img src="/residencyVisa/keyFrame.png" alt="desktop frame" />
      </div>
      <div className="block sm:hidden">
        <img src="/residencyVisa/keyFrameMobile.png" alt="mobile frame" />
      </div>
    </div>
  );
}
