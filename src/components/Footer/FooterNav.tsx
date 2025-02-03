import Image from "next/legacy/image";
import Link from "next/link";

export default function FooterNav() {
  return (
    <div className="text-color_E3F1FF bg-color_003262 md:pl-[80px] md:pr-[80px]">
      <div className="pt-3 pb-3 md:pt-12 px-4">
        <div className="flex flex-col gap-y-8 md:gap-y-1 items-center md:grid md:grid-cols-3">
          <div className="order-1">
            <div className="flex justify-center md:block">
              <Link href={"/"}>
                <div className="md:pl-4">
                  <div className="text-center">
                    <Image
                      src="/mobIcon.svg"
                      height={140}
                      width={225}
                      alt="Holborn"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="mt-1 flex justify-center">
              <div className="max-w-[562px] text-[22px] text-color_E3F1FF text-center font-outfit font-semibold">
                At Holborn, we understand that relocating to Dubai can be both
                exciting and overwhelming. Our team is here to provide expert
                support and guide you through every step of the process. Make
                your transition seamless and stress-free with Holborn Relocate
              </div>
            </div>
            <div className="mt-1 flex justify-center">
              <Image
                height={50}
                width={50}
                alt="instagram"
                src="/Instagram.png"
                loading="lazy"
              />
              <Image
                height={50}
                width={50}
                alt="facebook"
                src="/Facebook.png"
                loading="lazy"
              />
              <Image
                height={50}
                width={50}
                alt="linkedIn"
                src="/LinkedIn.png"
                loading="lazy"
              />
              <Image
                height={50}
                width={50}
                alt="TwitterX"
                src="/TwitterX.png"
                loading="lazy"
              />
              <Image
                height={50}
                width={50}
                alt="youtube"
                src="/youtube.png"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex items-center justify-center flex-col order-3 md:order-2">
            <div>
              <p className="py-3 lg:px-5 lg:py-3 text-[18px] lg:text-[26px] font-overpass font-semibold">
                Company
              </p>
            </div>
            <div className="mt-6 flex sm:block w-[98%] sm:w-auto flex-wrap">
              <p className="py-3 px-6 lg:px-5 lg:py-3 text-[14px] lg:text-[22px] font-overpass font-medium">
                Business Setup
              </p>
              <p className="py-3 px-6 lg:px-5 lg:py-3 text-[14px] lg:text-[22px] font-overpass font-medium">
                Business Services
              </p>
              <p className="py-3 px-6 lg:px-5 lg:py-3 text-[14px] lg:text-[22px] font-overpass font-medium">
                Residency visa
              </p>
              <p className="py-3 px-6 lg:px-5 lg:py-3 text-[14px] lg:text-[22px] font-overpass font-medium">
                Resources
              </p>
            </div>
          </div>

          <div className="flex justify-end order-2 md:order-3">
            <div>
              <div className="py-4 md:py-12">
                <div className="font-outfit font-semibold text-[28px]">
                  Request a Call back
                </div>
              </div>

              <div>
                <div>
                  <form
                    action={"#"}
                    className="flex flex-col gap-4 justify-center items-center"
                  >
                    <div>
                      <input
                        name="name"
                        type="text"
                        className="bg-white sm:w-[380px] h-[64px] rounded-[5px] px-2 text-[20px] placeholder:text-[#969696] text-gray-700"
                        placeholder="Name*"
                        required
                      />
                    </div>

                    <div>
                      <input
                        name="phone_no"
                        type="text"
                        className="bg-white sm:w-[380px] h-[64px] rounded-[5px] px-2 py-2 text-[20px] placeholder:text-[#969696] text-gray-700"
                        placeholder="Phone no*"
                        required
                      />
                    </div>

                    <div>
                      <input
                        name="company_setup"
                        type="text"
                        className="bg-white sm:w-[380px] h-[64px] rounded-[5px] px-2 py-2 text-[20px] placeholder:text-[#969696] text-gray-700"
                        placeholder="Company Setup*"
                        required
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        className="square-red-btn w-fit"
                        style={{
                          padding: "16px 46px !important",
                        }}
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div className="hidden md:block absolute right-1 bottom-0">
                  <img
                    src="/Footer/linkedin.png"
                    className="w-[220px] h-[220px]"
                  />
                </div> */}
              </div>
              <div className="pb-6"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-t border-white">
          <div className="py-3 md:py-5 flex justify-center text-[10px] md:text-[22px] font-bold font-overpass">
            <div>@2024 Holborn Relocate. All right Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
