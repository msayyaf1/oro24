// middleware.js
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/home"], // Add any other protected routes here
};
