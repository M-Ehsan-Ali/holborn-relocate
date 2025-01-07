import Image from "next/image";

export default function StartJourney() {
  return (
    <div className="bg-[#103582] pt-[60px] px-[220px] flex flex-col items-center">
      <div className="flex gap-[82px]">
        <div className="flex flex-col gap-[52px] min-w-[257px]">
          <Image
            src="/JourneyTopLeft.png"
            width="257"
            loading="lazy"
            height={203}
            alt="top right image"
            className="transform rotate-[10deg] mb-[52px]"
          />
          <Image
            src="/JourneyBottomLeft.png"
            width="257"
            loading="lazy"
            height={203}
            alt="top right image"
            className="transform rotate-[-15deg]"
          />
        </div>
        <div className="text-white flex flex-col gap-[52px] text-center items-center">
          <p className="font-outfit font-normal text-[40px]">
            Start Your Journey with Holborn Relocate
          </p>
          <p className="font-outfit font-normal text-[30px]">
            Ready to make your move to Dubai? Our team is here to guide you
            through every step of the process. Whether you’re ready to start
            your visa application or have questions, we’re here for you.
          </p>
          <button
            className="square-red-btn w-fit"
            style={{
              padding: "16px 46px !important",
            }}
          >
            Book a meeting{" "}
          </button>
        </div>
        <div className="flex flex-col gap-[52px] min-w-[257px]">
          <Image
            src="/JourneyTopRight.png"
            width="249"
            loading="lazy"
            height={145}
            alt="top right image"
            className="transform rotate-[-10deg] mb-[52px]"
          />
          <Image
            src="/JourneyBottomRight.png"
            width="249"
            loading="lazy"
            height={145}
            alt="top right image"
            className="transform rotate-[15deg]"
          />
        </div>
      </div>
      <Image
        className="relative bottom-[-10px]"
        width={936}
        height={468}
        alt="Start Journey"
        src="/startJourney.png"
        loading="lazy"
      />
    </div>
  );
}
