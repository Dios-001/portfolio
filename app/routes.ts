import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("test", "routes/forTest.tsx"),
  route("projects", "routes/projects.tsx"),
  route("about", "routes/info.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
