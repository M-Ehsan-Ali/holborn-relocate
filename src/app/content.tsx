import Image from "next/image";

export default function Home() {
  return (
    <div id="home">
      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "60px",
          marginTop: 140,
          marginRight: 60,
        }}
      >
        <div
          style={{ color: "#FFFFFF", display: "flex", alignItems: "center" }}
        >
          <div>
            <p
              style={{ fontFamily: "Inter", fontWeight: "bold", fontSize: 45 }}
            >
              Welcome to Holborn Relocate
            </p>
            <p
              style={{
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: 28,
              }}
            >
              Seamless Relocation to Dubai with Holborn Relocate
            </p>
            <div>
              <button>Our Services</button>
              <button>
                Book a meeting
                <span style={{ fontSize: 35, color: "#FFFFFF" }}>&#8594;</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                padding: "24px",
                position: "absolute",
                top: "-15%",
                left: "-35%",
                background: "rgba(255, 255, 255, 0.3)",
                borderRadius: 10,
                maxWidth: 450,
              }}
            >
              <p style={{ textAlign: "center", color: "#FFFFFF" }}>
                Holborn Relocate, led by Stephen Quinn, ensures a smooth
                transition with expert visa and relocation services. Trust us to
                make your move stress-free, whether for individuals or
                businesses
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "-25%",
                right: "-10%",
              }}
            >
              <Image
                src="/topRightHeroImage.png"
                width="257"
                height={203}
                alt="top right image"
              />
            </div>
            <div>
              <Image
                src="/mainHeroImage.png"
                width="709"
                height={633}
                alt="main image midd"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-20%",
                left: "-20%",
              }}
            >
              <Image
                src="/bottomLeftHeroImage.png"
                width="326"
                height={228}
                alt="bottom left image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second Section Why Helborn */}
      <div
        style={{
          marginTop: 120,
          color: "#FFFFFF",
          borderBottom: "1px solid #BFBDBD",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "Outfit",
              fontWeight: "normal",
              fontSize: 45,
            }}
          >
            Why Holborn Relocate?
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 56,
            justifyContent: "center",
            padding: "64px 0px 180px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: 476,
            }}
          >
            <div>
              <Image src="/CV.png" width={90} height={90} alt="assistance" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Personalized Assistance
              </p>
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "normal",
                  fontSize: "22px",
                }}
              >
                We cater to your individual needs, crafting customized solutions
                to ensure a seamless and stress-free relocation experience
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: 476,
            }}
          >
            <div>
              <Image src="/Goal.png" width={90} height={90} alt="assistance" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Expert Guidance with a Global Outlook
              </p>
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "normal",
                  fontSize: "22px",
                }}
              >
                Our local expertise and global perspective empower you to plan
                strategically and size the best opportunities in Dubai
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: 476,
            }}
          >
            <div>
              <Image
                src="/Guarantee.png"
                width={90}
                height={90}
                alt="assistance"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Trusted Professionals
              </p>
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "normal",
                  fontSize: "22px",
                }}
              >
                Holborn Relocate is committed to staying ahead of the latest
                immigration regulations, providing reliable and precise support
                every step of the way
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section Our Business Servies */}
      <div
        style={{
          marginTop: 120,
          color: "#FFFFFF",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "Outfit",
              fontWeight: "normal",
              fontSize: 40,
            }}
          >
            Our business services
          </p>
          <p
            style={{
              fontFamily: "Outfit",
              fontWeight: "normal",
              fontSize: 30,
            }}
          >
            We offer a range of expert solutions to ensure your move to Dubai is
            smooth and hassle-free
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 56,
            justifyContent: "center",
            padding: "64px 0px 180px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: 353,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Visa Support
              </p>
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "normal",
                  fontSize: "22px",
                }}
              >
                We specialize in simplifying the visa application process.
                Whether you're an entrepreneur, professional, or relocating with
                family, we ensure you meet all requirements and secure the
                appropriate visa with ease
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: 353,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Hassle-Free Relocation
              </p>
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "normal",
                  fontSize: "22px",
                }}
              >
                From finding your dream home to managing school enrollments for
                your children, we handle all the details to help you settle
                effortlessly into Dubai’s vibrant community
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "24px",
              width: 353,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
              >
                Corporate Solutions
              </p>
              <p
                style={{
                  fontFamily: "Outfit",
                  fontWeight: "normal",
                  fontSize: "22px",
                }}
              >
                For businesses expanding to Dubai, we provide expert guidance on
                corporate relocation and business setup, ensuring a smooth
                transition to this thriving hub
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Section What our Client say? */}
      <div
        style={{
          color: "#FFFFFF",
          padding: "0px 20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ffffff",
            borderRadius: 20,
            padding: "60px 130px",
            background: "linear-gradient(to bottom, #CF142B, #002470)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: 40,
              }}
            >
              What Our Clients Say?
            </p>
            <p
              style={{
                fontFamily: "Outfit",
                fontWeight: "normal",
                fontSize: 30,
              }}
            >
              Hear how we’ve transformed relocations into seamless and
              successful experiences
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 56,
              justifyContent: "center",
              padding: "64px 0px 0px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                width: 519,
                color: "#000000",
                background: "#FFFFFF",
                padding: "60px 20px 20px",
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: "normal",
                    fontSize: "22px",
                    height: 205,
                  }}
                >
                  Holborn Relocate made our move to Dubai effortless. Their team
                  handled every detail, from securing visas to finding the
                  perfect home for my family. I couldn’t have asked for a better
                  experience!
                </p>
                <div
                  style={{ width: 299, height: 1, background: "#000000" }}
                ></div>
                <div>
                  <p style={{ fontSize: 27 }}>
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Sarah Thompson,
                    </span>
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                width: 519,
                color: "#FFFFFF",
                background: "linear-gradient(to bottom, #002470, #CF142B)",
                padding: "60px 20px 20px",
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: "normal",
                    fontSize: "22px",
                    height: 205,
                  }}
                >
                  As an entrepreneur expanding to Dubai, I was impressed by
                  Holborn's expertise in business setup and relocation. Their
                  guidance made the entire process smooth and stress-free
                </p>
                <div
                  style={{ width: 299, height: 1, background: "#FFFFFF" }}
                ></div>
                <div>
                  <p style={{ fontSize: 27, fontWeight: "bold" }}>
                    David Collins, CEO, TechSphere Innovations
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                width: 519,
                color: "#000000",
                background: "#FFFFFF",
                padding: "60px 20px 20px",
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "Outfit",
                    fontWeight: "normal",
                    fontSize: "22px",
                    height: 205,
                  }}
                >
                  Relocating with a family seemed daunting, but Holborn Relocate
                  took care of everything. From school enrollments to settling
                  into our new home, their support was invaluable
                </p>
                <div
                  style={{ width: 299, height: 1, background: "#000000" }}
                ></div>
                <div>
                  <p style={{ fontSize: 27 }}>
                    <span
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Emma Walker,
                    </span>
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
