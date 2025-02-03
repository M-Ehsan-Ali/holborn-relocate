import Image from "next/image";
import Testimonials from "./Testimonials/page";

export default function Home() {
  return (
    <div id="home">
      {/* Hero Section */}
      <div className="flex flex-col-reverse items-center sm:items-unset sm:flex-row justify-between sm:p-[60px] mt-[50px] sm:mt-[140px] sm:mr-[60px] sm:gap-[0px] gap-[58px]">
        <div className="text-white flex items-center">
          <div className="flex flex-col items-center gap-[20px]">
            <p className="text-white flex items-center sm:font-inter font-bold sm:text-[45px] text-[16px]">
              Welcome to Holborn Relocate
            </p>
            <p className="sm:font-outfit font-alata font-normal text-[14px] sm:font-medium sm:text-[28px] max-w-[575px] text-center">
              Seamless Relocation to Dubai with Holborn Relocate
            </p>
            <div className="flex justify-center sm:gap-[35px] gap-[12px]">
              <button className="rounded-white-btn">Our Services</button>
              <button className="square-red-btn">
                Book a meeting
                <span className="text-[22px] text-white">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:hidden pl-[20px]">
          <img src="/mobileHero.png" alt="hero" />
        </div>
        <div className="hidden lg:flex">
          <div className="flex items-center justify-center relative">
            <div className="p-[24px] absolute top-[-15%] left-[-35%] bg-[rgba(255,_255,_255,_0.3)] rounded-[10px] max-w-[450px]">
              <p className="text-center text-white">
                Holborn Relocate, led by Stephen Quinn, ensures a smooth
                transition with expert visa and relocation services. Trust us to
                make your move stress-free, whether for individuals or
                businesses
              </p>
            </div>
            <div className="absolute top-[-25%] right-[-10%]">
              <Image
                src="/topRightHeroImage.png"
                width="257"
                loading="lazy"
                height={203}
                alt="top right image"
              />
            </div>
            <div>
              <Image
                src="/mainHeroImage.png"
                width="709"
                loading="lazy"
                height={633}
                alt="main image midd"
              />
            </div>
            <div className="absolute bottom-[-20%] left-[-20%]">
              <Image
                src="/bottomLeftHeroImage.png"
                width="326"
                loading="lazy"
                height={228}
                alt="bottom left image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Section Why Helborn */}
      <div className="sm:mt-[120px] mt-[72px] text-white border-b-[1px] border-[#BFBDBD] sm:pb-[0px] pb-[72px]">
        <div className="text-center">
          <p className="font-outfit font-normal sm:text-[45px] text-[16px]">
            Why Holborn Relocate?
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-[56px] justify-center px-[30px] sm:px-[0px] sm:py-[64px] sm:pb-[180px] mt-[50px] sm:mt-[0px]">
          <div className="flex sm:flex-col items-start sm:items-center gap-[4px] sm:gap-[24px] sm:w-[476px]">
            <div>
              <Image
                src="/CV.png"
                width={90}
                height={90}
                alt="assistance"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start sm:items-center sm:gap-[24px] text-left sm:text-center">
              <p className="font-outfit font-bold text-[14px] sm:text-[30px]">
                Personalized Assistance
              </p>
              <p className="font-outfit font-normal text-[12px] sm:text-[22px]">
                We cater to your individual needs, crafting customized solutions
                to ensure a seamless and stress-free relocation experience
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col items-start sm:items-center gap-[4px] sm:gap-[24px] sm:w-[476px]">
            <div>
              <Image
                src="/Goal.png"
                width={90}
                height={90}
                alt="assistance"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-start sm:items-center sm:gap-[24px] text-left sm:text-center">
              <p className="font-outfit font-bold text-[14px] sm:text-[30px]">
                Expert Guidance with a Global Outlook
              </p>
              <p className="font-outfit font-normal text-[12px] sm:text-[22px]">
                Our local expertise and global perspective empower you to plan
                strategically and size the best opportunities in Dubai
              </p>
            </div>
          </div>
          <div className="flex sm:flex-col items-start sm:items-center gap-[4px] sm:gap-[24px] sm:w-[476px]">
            <div>
              <Image
                src="/Guarantee.png"
                width={90}
                loading="lazy"
                height={90}
                alt="assistance"
              />
            </div>
            <div className="flex flex-col items-start sm:items-center sm:gap-[24px] text-left sm:text-center">
              <p className="font-outfit font-bold text-[14px] sm:text-[30px]">
                Trusted Professionals
              </p>
              <p className="font-outfit font-normal text-[12px] sm:text-[22px]">
                Holborn Relocate is committed to staying ahead of the latest
                immigration regulations, providing reliable and precise support
                every step of the way
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section Our Business Servies */}
      <div className="sm:mt-[120px] mt-[55px] text-white sm:px-[0px] px-[30px]">
        <div className="text-center">
          <p className="font-outfit font-normal text-[16px] sm:text-[40px]">
            Our business services
          </p>
          <p className="font-outfit font-normal sm:text-[30px] text-[14px]">
            We offer a range of expert solutions to ensure your move to Dubai is
            smooth and hassle-free
          </p>
        </div>
        <div className="flex flex-row sm:flex-col sm:gap-[0px] gap-[4px]">
          <div className="hidden lg:flex justify-center items-center mt-[100px]">
            <div className="w-[150px] h-[150px] rounded-full bg-[#CF142B] flex justify-center items-center">
              <p className="text-[50px] font-outfit font-bold">01</p>
            </div>
            <div className="w-[330px] h-[1px] bg-white"></div>
            <div className="w-[150px] h-[150px] rounded-full bg-[#CF142B] flex justify-center items-center">
              <p className="text-[50px] font-outfit font-bold">02</p>
            </div>
            <div className="w-[330px] h-[1px] bg-white"></div>
            <div className="w-[150px] h-[150px] rounded-full bg-[#CF142B] flex justify-center items-center">
              <p className="text-[50px] font-outfit font-bold">03</p>
            </div>
          </div>
          <div className="block lg:hidden w-[60px] py-[50px] pb-[90px]">
            <img
              src="/threeNumber.png"
              alt="threeNumber"
              className="w-[60px] h-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-[32px] sm:gap-[56px] justify-center py-[50px] sm:py-[64px] pb-[90px] sm:pb-[180px]">
            <div className="flex flex-col sm:items-center gap-[24px] w-[266px] sm:w-[353px]">
              <div className="flex flex-col sm:items-center gap-[0px] sm:gap-[24px] sm:text-center">
                <p className="font-outfit font-bold text-[14px] sm:text-[30px]">
                  Visa Support
                </p>
                <p className="font-outfit font-normal text-[12px] sm:text-[22px]">
                  We specialize in simplifying the visa application process.
                  Whether you're an entrepreneur, professional, or relocating
                  with family, we ensure you meet all requirements and secure
                  the appropriate visa with ease
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:items-center gap-[24px] w-[266px] sm:w-[353px]">
              <div className="flex flex-col sm:items-center gap-[0px] sm:gap-[24px] sm:text-center">
                <p className="font-outfit font-bold text-[14px] sm:text-[30px]">
                  Hassle-Free Relocation
                </p>
                <p className="font-outfit font-normal text-[12px] sm:text-[22px]">
                  From finding your dream home to managing school enrollments
                  for your children, we handle all the details to help you
                  settle effortlessly into Dubai’s vibrant community
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:items-center gap-[24px] w-[266px] sm:w-[353px]">
              <div className="flex flex-col sm:items-center gap-[0px] sm:gap-[24px] sm:text-center">
                <p className="font-outfit font-bold text-[14px] sm:text-[30px]">
                  Corporate Solutions
                </p>
                <p className="font-outfit font-normal text-[12px] sm:text-[22px]">
                  For businesses expanding to Dubai, we provide expert guidance
                  on corporate relocation and business setup, ensuring a smooth
                  transition to this thriving hub
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section What our Client say? */}
      <Testimonials />
    </div>
  );
}
