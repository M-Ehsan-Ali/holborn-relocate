import Image from "next/image";

export default function Home() {
  return (
    <div id="home">
      {/* Hero Section */}
      <div className="flex justify-between p-[60px] mt-[140px] mr-[60px]">
        <div className="text-white flex items-center">
          <div className="flex flex-col items-center gap-[20px]">
            <p className="text-white flex items-center font-inter font-bold text-[45px]">
              Welcome to Holborn Relocate
            </p>
            <p className="font-outfit font-medium text-[28px] max-w-[575px] text-center">
              Seamless Relocation to Dubai with Holborn Relocate
            </p>
            <div className="flex justify-center gap-[35px]">
              <button className="rounded-white-btn">Our Services</button>
              <button className="square-red-btn">
                Book a meeting
                <span className="text-[22px] text-white">&#8594;</span>
              </button>
            </div>
          </div>
        </div>
        <div>
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
      <div className="mt-[120px] text-white border-b-[1px] border-[#BFBDBD]">
        <div className="text-center">
          <p className="font-outfit font-normal text-[45px]">
            Why Holborn Relocate?
          </p>
        </div>
        <div className="flex gap-[56px] justify-center py-[64px] pb-[180px]">
          <div className="flex flex-col items-center gap-[24px] w-[476px]">
            <div>
              <Image
                src="/CV.png"
                width={90}
                height={90}
                alt="assistance"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-[24px] text-center">
              <p className="font-outfit font-bold text-[30px]">
                Personalized Assistance
              </p>
              <p className="font-outfit font-normal text-[22px]">
                We cater to your individual needs, crafting customized solutions
                to ensure a seamless and stress-free relocation experience
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[24px] w-[476px]">
            <div>
              <Image
                src="/Goal.png"
                width={90}
                height={90}
                alt="assistance"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-[24px] text-center">
              <p className="font-outfit font-bold text-[30px]">
                Expert Guidance with a Global Outlook
              </p>
              <p className="font-outfit font-normal text-[22px]">
                Our local expertise and global perspective empower you to plan
                strategically and size the best opportunities in Dubai
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[24px] w-[476px]">
            <div>
              <Image
                src="/Guarantee.png"
                width={90}
                loading="lazy"
                height={90}
                alt="assistance"
              />
            </div>
            <div className="flex flex-col items-center gap-[24px] text-center">
              <p className="font-outfit font-bold text-[30px]">
                Trusted Professionals
              </p>
              <p className="font-outfit font-normal text-[22px]">
                Holborn Relocate is committed to staying ahead of the latest
                immigration regulations, providing reliable and precise support
                every step of the way
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section Our Business Servies */}
      <div className="mt-[120px] text-white">
        <div className="text-center">
          <p className="font-outfit font-normal text-[40px]">
            Our business services
          </p>
          <p className="font-outfit font-normal text-[30px]">
            We offer a range of expert solutions to ensure your move to Dubai is
            smooth and hassle-free
          </p>
        </div>
        <div className="flex justify-center items-center mt-[100px]">
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
        <div className="flex gap-[56px] justify-center py-[64px] pb-[180px]">
          <div className="flex flex-col items-center gap-[24px] w-[353px]">
            <div className="flex flex-col items-center gap-[24px] text-center">
              <p className="font-outfit font-bold text-[30px]">Visa Support</p>
              <p className="font-outfit font-normal text-[22px]">
                We specialize in simplifying the visa application process.
                Whether you're an entrepreneur, professional, or relocating with
                family, we ensure you meet all requirements and secure the
                appropriate visa with ease
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[24px] w-[353px]">
            <div className="flex flex-col items-center gap-[24px] text-center">
              <p className="font-outfit font-bold text-[30px]">
                Hassle-Free Relocation
              </p>
              <p className="font-outfit font-normal text-[22px]">
                From finding your dream home to managing school enrollments for
                your children, we handle all the details to help you settle
                effortlessly into Dubai’s vibrant community
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[24px] w-[353px]">
            <div className="flex flex-col items-center gap-[24px] text-center">
              <p className="font-outfit font-bold text-[30px]">
                Corporate Solutions
              </p>
              <p className="font-outfit font-normal text-[22px]">
                For businesses expanding to Dubai, we provide expert guidance on
                corporate relocation and business setup, ensuring a smooth
                transition to this thriving hub
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Section What our Client say? */}
      <div className="text-white px-[20px]">
        <div className="border border-white rounded-[20px] py-[60px] px-[130px] bg-gradient-to-b from-[#CF142B] to-[#002470] mb-[60px]">
          <div className="text-center">
            <p className="font-outfit font-normal text-[40px]">
              What Our Clients Say?
            </p>
            <p className="font-outfit font-normal text-[30px]">
              Hear how we’ve transformed relocations into seamless and
              successful experiences
            </p>
          </div>
          <div className="flex gap-[56px] justify-center pt-[64px]">
            <div className="flex flex-col items-center gap-[20px] w-[519px] text-black bg-white py-[60px] px-[20px] rounded-[10px]">
              <div className="flex flex-col items-center gap-[20px] text-center">
                <p className="font-outfit font-normal text-[22px] h-[205px]">
                  Holborn Relocate made our move to Dubai effortless. Their team
                  handled every detail, from securing visas to finding the
                  perfect home for my family. I couldn’t have asked for a better
                  experience!
                </p>
                <div className="w-[299px] h-[1px] bg-black"></div>
                <div>
                  <p className="text-[27px]">
                    <span className="font-bold">Sarah Thompson,</span>
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[20px] w-[519px] text-white bg-gradient-to-b from-[#002470] to-[#CF142B] py-[60px] px-[20px] rounded-[10px]">
              <div className="flex flex-col items-center gap-[24px] text-center">
                <p className="font-outfit font-normal text-[22px] h-[205px]">
                  As an entrepreneur expanding to Dubai, I was impressed by
                  Holborn's expertise in business setup and relocation. Their
                  guidance made the entire process smooth and stress-free
                </p>
                <div className="w-[299px] h-[1px] bg-white"></div>
                <div>
                  <p className="text-[27px] font-bold">
                    David Collins, CEO, TechSphere Innovations
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[24px] w-[519px] text-black bg-white py-[60px] px-[20px] rounded-[10px]">
              <div className="flex flex-col items-center gap-[24px] text-center">
                <p className="font-outfit font-normal text-[22px] h-[205px]">
                  Relocating with a family seemed daunting, but Holborn Relocate
                  took care of everything. From school enrollments to settling
                  into our new home, their support was invaluable
                </p>
                <div className="w-[299px] h-[1px] bg-black"></div>
                <div>
                  <p className="text-[27px]">
                    <span className="font-bold">Emma Walker,</span>
                    HR Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
