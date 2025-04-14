import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home Page" },
    { name: "", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className=""></div>;
}
