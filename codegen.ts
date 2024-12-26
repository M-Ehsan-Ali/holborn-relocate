import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
import https from "https";
const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Create a custom HTTPS agent
const agent = new https.Agent({
  rejectUnauthorized: false, // Disable SSL verification (not recommended for production)
});

// Create a custom fetch function
const customFetch = async (url: string, options: any) => {
  return fetch(url, {
    ...options,
    agent, // Attach custom HTTPS agent
  });
};
const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`]: {
      headers: {
        "User-Agent": "Codegen",
      },
    },
  },
  generates: {
    "src/gql/": {
      preset: "client",
    },
    "src/gql/schema.gql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
