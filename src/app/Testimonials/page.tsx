import { fetchGraphQL } from "@/utils/fetchGraphQL";
import Content from "./content";

interface Testimonial {
  title: string;
  designation: string;
  review: string;
  logo: {
    mediaItemUrl: string;
  };
}

export default async function Testimonials() {
  const query = `
    query GetTestimonials {
  testimonials {
    nodes {
      testimonial {
        designation
        review
        name
        logo {
          id
          sourceUrl
        }
      }
    }
  }
}
  `;

  let testimonials: Testimonial[] = [];
  try {
    const data = await fetchGraphQL(query);
    testimonials = data?.testimonials?.nodes.map((node: any) => ({
      title: node.testimonial.name,
      designation: node.testimonial.designation,
      review: node.testimonial.review,
      logo: node.testimonial.logo,
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-16 text-xl font-semibold">
        No testimonials available at the moment.
      </div>
    );
  }

  return (
    <div id="testimonials">
      <div className="text-white sm:px-[20px]">
        <div className="border border-white rounded-[20px] py-[24px] sm:py-[60px] px-[32px] sm:px-[130px] bg-gradient-to-b from-[#CF142B] to-[#002470] mb-[60px]">
          <div className="text-center">
            <p className="font-outfit font-normal text-[14px] sm:text-[40px]">
              What Our Clients Say?
            </p>
            <p className="font-outfit font-normal text-[12px] sm:text-[30px]">
              Hear how we’ve transformed relocations into seamless and
              successful experiences
            </p>
          </div>
          {/* Pass testimonials to Content */}
          <Content testimonials={testimonials} />
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
}
