export default function Resource() {
  return (
    <div
      id="Resource"
      className="mb-[102px] sm:mb-[300px] mt-[52px] sm:mt-[148px]"
    >
      {/* Success Section */}
      <div className="flex flex-col gap-[16px] sm:gap-[56px] items-center px-[16px] sm:px-[148px] text-center">
        <p className="font-outfit font-bold text-white text-[16px] sm:text-[57px]">
          Success Storie with Holborn Relocate:
          <br />
          Making Dreams Come True in Dubai
        </p>
        <p className="font-alata font-normal text-[12px] sm:text-[34px] text-white">
          At Holborn Relocate, we pride ourselves on delivering an exceptional
          relocation experience, ensuring every client transitions smoothly into
          their new life in Dubai.
        </p>
      </div>
      <div className="flex justify-center mt-[42px] sm:mt-[148px] px-[16px] sm:px-[0px]">
        <img
          src="/resource/resource.png"
          alt="resource"
          className="hidden sm:flex"
        />
        <img
          src="/resource/resourceMobile.png"
          alt="resource"
          className="sm:hidden"
        />
      </div>
      {/* Blog Section */}
      <div className="mt-[68px] sm:mt-[300px] sm:pl-[165px] sm:pr-[99px] px-[16px] sm:px-[0px] text-center">
        <div>
          <p className="font-outfit font-semiBold text-white text-[16px] sm:text-[50px]">
            Essential Blog Articles for a Successful Relocation to Dubai
          </p>
        </div>
        <div className="flex bg-[#CF142B] items-center relative rounded-[20px] p-[14px] sm:p-[40px] mt-[48px] sm:mt-[134px] mb-[52px] sm:mb-[187px] justify-between">
          <div className="flex flex-col justify-between item-center gap-[4px] sm:gap-[24px] w-[158px] sm:w-[724px]">
            <p className="font-alata font-normal text-[12px] sm:text-[40px] text-white">
              6 Marketing Strategies to Look out For
            </p>
            <p className="font-alata font-normal text-[8px] sm:text-[29px] text-white">
              When it comes to successful marketing, change, and development are
              two universal facts you ....
            </p>
          </div>
          <div className="absolute right-[10%]">
            <img
              src="/resource/blogOne.png"
              alt="first blog"
              className="w-[114px] h-[124px] sm:w-auto sm:h-auto"
            />
          </div>
          <div>
            <img
              src="/resource/arrowRight.svg"
              alt="arrow"
              className="w-[22px] sm:w-auto"
            />
          </div>
        </div>
        <div className="flex bg-[#CF142B] items-center relative rounded-[20px] p-[14px] sm:p-[40px] justify-between">
          <div className="flex flex-col justify-between item-center gap-[4px] sm:gap-[24px] w-[158px] sm:w-[724px]">
            <p className="font-alata font-normal text-[12px] sm:text-[40px] text-white">
              Cross-border wealth management in the UAE
            </p>
            <p className="font-alata font-normal text-[8px] sm:text-[29px] text-white">
              Are you looking for a local yet global expert that can provide
              guidance, a proactive approach and long-term security?....
            </p>
          </div>
          <div className="absolute right-[10%]">
            <img
              src="/resource/blogTwo.png"
              alt="first blog"
              className="w-[114px] h-[124px] sm:w-auto sm:h-auto"
            />
          </div>
          <div>
            <img
              src="/resource/arrowRight.svg"
              alt="second arrow"
              className="w-[22px] sm:w-auto"
            />
          </div>
        </div>
      </div>
      {/* Is Dubai Safe Section */}
    </div>
  );
}
