export default function Resource() {
  return (
    <div id="Resource" className="mb-[300px] mt-[148px]">
      {/* Success Section */}
      <div className="flex flex-col gap-[56px] items-center px-[148px] text-center">
        <p className="font-outfit font-bold text-white text-[57px]">
          Success Storie with Holborn Relocate:
          <br />
          Making Dreams Come True in Dubai
        </p>
        <p className="font-alata font-normal text-[34px] text-white">
          At Holborn Relocate, we pride ourselves on delivering an exceptional
          relocation experience, ensuring every client transitions smoothly into
          their new life in Dubai.
        </p>
      </div>
      <div className="flex justify-center mt-[148px]">
        <img src="/resource/resource.png" alt="resource" />
      </div>
      {/* Blog Section */}
      <div className="mt-[300px] pl-[165px] pr-[99px] text-center">
        <div>
          <p className="font-outfit font-semiBold text-white text-[50px]">
            Essential Blog Articles for a Successful Relocation to Dubai
          </p>
        </div>
        <div className="flex bg-[#CF142B] items-center relative rounded-[20px] p-[40px] mt-[134px] mb-[187px] justify-between">
          <div className="flex flex-col justify-between item-center gap-[24px] w-[724px]">
            <p className="font-alata font-normal text-[40px] text-white">
              6 Marketing Strategies to Look out For
            </p>
            <p className="font-alata font-normal text-[29px] text-white">
              When it comes to successful marketing, change, and development are
              two universal facts you ....
            </p>
          </div>
          <div className="absolute right-[10%]">
            <img src="/resource/blogOne.png" alt="first blog" />
          </div>
          <div>
            <img src="/resource/arrowRight.svg" alt="arrow" />
          </div>
        </div>
        <div className="flex bg-[#CF142B] items-center relative rounded-[20px] p-[40px] justify-between">
          <div className="flex flex-col justify-between item-center gap-[24px] w-[724px]">
            <p className="font-alata font-normal text-[40px] text-white">
              Cross-border wealth management in the UAE
            </p>
            <p className="font-alata font-normal text-[29px] text-white">
              Are you looking for a local yet global expert that can provide
              guidance, a proactive approach and long-term security?....
            </p>
          </div>
          <div className="absolute right-[10%]">
            <img src="/resource/blogTwo.png" alt="first blog" />
          </div>
          <div>
            <img src="/resource/arrowRight.svg" alt="second arrow" />
          </div>
        </div>
      </div>
      {/* Is Dubai Safe Section */}
    </div>
  );
}
