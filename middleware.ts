import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhooks(.*)",
    "/api/webhook/stripe(.*)",
    "/api/uploadthing(.*)",
  ],
  ignoredRoutes: [
    "/api/webhooks(.*)",
    "/api/webhook/stripe(.*)",
    "/api/uploadthing(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
