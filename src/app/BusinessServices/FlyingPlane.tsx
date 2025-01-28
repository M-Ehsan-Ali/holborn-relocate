import Image from "next/image";
import React from "react";

const FlyingPlane: React.FC = () => {
  return (
    <div className="flex relative -left-[200px]">
      <Image
        src="/residencyVisa/Vector.png"
        width={600}
        loading="lazy"
        height={400}
        alt="main image midd"
        style={{
          transform: "scaleY(1.7)",
        }}
      />
      <div>
        <Image
          src="/residencyVisa/Plane.png"
          width={60}
          loading="lazy"
          height="60"
          alt="main image midd"
        />
      </div>
    </div>
  );
};

export default FlyingPlane;
