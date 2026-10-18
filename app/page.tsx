import type { Metadata } from "next";
import { Home3 } from "./components/homes/home-3";
import { Home1 } from "./components/homes/home-1";

type HomePageProps = {
  searchParams: Promise<{ home?: string | string[] }>;
};

function homeId(value: string | string[] | undefined) {
  const home = Array.isArray(value) ? value[0] : value;
  return home === "3" ? "3" : "1";
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  return { title: `Home ${homeId(params.home)}` };
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  return homeId(params.home) === "3" ? <Home3 /> : <Home1 />;
}
