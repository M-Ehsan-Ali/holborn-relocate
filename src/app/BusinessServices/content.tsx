import Testimonials from "./Testimonials";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Entrepreneur",
    image: "/businessServices/profileOne.png",
    feedback:
      "Holborn Relocate made our move to Dubai incredibly smooth and stress-free. From visa processing to finding the perfect school for my kids, they took care of every detail. I highly recommend their services to anyone planning to relocate!",
  },
  {
    name: "David Wilson",
    title: "Business Owner",
    image: "/businessServices/profileTwo.png",
    feedback:
      "Relocating my business to Dubai seemed daunting at first, but Holborn Relocate’s team provided expert guidance every step of the way. Their local network and practical advice were invaluable in helping us settle and grow in this dynamic city.",
  },
  {
    name: "Emily Carter",
    title: "Marketing Professional",
    image: "/businessServices/profileThree.png",
    feedback:
      "The personalized service and attention to detail from Holborn Relocate exceeded all my expectations. They helped me find the perfect apartment and connected me with a great community in Dubai. It truly felt like having a trusted friend by my side during the entire process.",
  },
];
export default function BusinessServices() {
  return (
    <div id="BusinessServices">
      {/* Hero Section */}
      <div
        className="w-[100%] sm:h-[1200px] h-[422px] relative -top-[150px] bg-cover bg-center bg-no-repeat flex justify-center items-end px-[30px] sm:px-[64px]"
        style={{
          backgroundImage: "url('/businessServices/heroImage.png')",
        }}
      >
        <div className="sm:p-[34px_55px] p-[20px] bg-[#CF142B] rounded-[24px] sm:rounded-[50px] text-center mb-[-60px] sm:mb-[-100px]">
          <p className="font-outfit font-bold text-[12px] sm:text-[44px] text-white">
            Why Choose Holborn Relocate for Your Move to Dubai?
          </p>
          <p className="font-alata font-normal text-[12px] sm:text-[36px] text-white mt-[10px]">
            Experience a seamless transition to Dubai with expert guidance
            tailored to your needs.
          </p>
        </div>
      </div>
      {/* Holborn relocate Service Section */}
      <div className="flex flex-col gap-[24px] mt-[0px] sm:mt-[250px] items-center">
        <p className="font-outfit font-semiBold text-[14px] sm:text-[54px] text-white">
          Holborn Relocate Services
        </p>
        <div className="w-[130px] sm:w-[310px] h-[2px] bg-white"></div>
      </div>
      <img
        src="/businessServices/service.png"
        alt="service"
        className="mt-[170px] hidden sm:block"
      />
      <img
        src="/businessServices/serviceMobile.png"
        alt="service"
        className="sm:hidden mt-[20px]"
      />
      {/* review section starts here */}
      <div className="sm:mt-[128px] mt-[64px]">
        <p className="font-outfit font-semibold text-[16px] sm:text-[64px] text-white text-center">
          Our client Testimonials
        </p>
        <div className="sm:hidden">
          <Testimonials />
        </div>
        <div className="sm:flex gap-[30px] mt-[72px] sm:mt-[203px] mb-[170px] px-[60px] hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-[24px] items-center text-center rounded-[20px] bg-[#CF142B] relative px-[16px] pb-[24px]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[224px] h-[258px] rounded-[50%] absolute top-[-112px]"
              />
              <p className="mt-[152px] text-white font-outfit font-bold text-[35px]">
                {testimonial.name} – {testimonial.title}
              </p>
              <p className="font-alata font-normal text-white text-[29px]">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
