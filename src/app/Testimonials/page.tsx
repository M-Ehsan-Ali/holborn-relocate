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
      wpTestimonials {
        nodes {
          wp_testimonial {
            designation
            logo {
              mediaItemUrl
            }
            review
            userName
          }
        }
      }
    }
  `;

  let testimonials: Testimonial[] = [];
  try {
    const data = await fetchGraphQL(query);
    testimonials = data?.wpTestimonials?.nodes.map((node: any) => ({
      title: node.wp_testimonial.userName,
      designation: node.wp_testimonial.designation,
      review: node.wp_testimonial.review,
      logo: node.wp_testimonial.logo,
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
    <div id="testimonials" className="bg-color_E3F1FF">
      <div className="py-6 md:py-12">
        <div className="font-extrabold text-center text-color_003262 text-sm_main_heading md:text-main_heading">
          What Clients Are Saying
        </div>
        <div className="mt-4 md:mt-8 px-6 flex justify-center">
          <div className="max-w-[1100px]">
            <div className="text-center text-[13px] md:text-[20px]">
              Read how our tailored LinkedIn strategies have helped clients
              elevate their profiles, expand their networks, and achieve their
              business goals.
            </div>
          </div>
        </div>
      </div>

      {/* Pass testimonials to Content */}
      <Content testimonials={testimonials} />
      {/* <ContactForm /> */}
    </div>
  );
}
