import { print } from "graphql/language/printer";
import type { Metadata } from "next";

import { setSeoData } from "@/utils/seoData";

import { PageQuery } from "@/components/Templates/Page/PageQuery";
// import { ContentNode, Page } from "@/gql/graphql";
import { SeoQuery } from "@/queries/general/SeoQuery";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

const notFoundPageWordPressId = 27;

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(SeoQuery),
    { slug: notFoundPageWordPressId, idType: "DATABASE_ID" }
  );

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
    },
  } as Metadata;
}

export default async function NotFound() {
  const { page } = await fetchGraphQL<{ page: any }>(print(PageQuery), {
    id: notFoundPageWordPressId,
  });

  return <div dangerouslySetInnerHTML={{ __html: page.content || " " }} />;
  // return <div>Not found</div>;
}
