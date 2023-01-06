import * as trpcNext from "@trpc/server/adapters/next";

import { createContext } from "@/server/context";
import { env } from "@/server/env";

import { appRouter } from "../../../server/routers/_app";

// export API handler
export default trpcNext.createNextApiHandler({
  createContext,
  router: appRouter,
  onError:
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          // eslint-disable-next-line @typescript-eslint/no-base-to-string
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
