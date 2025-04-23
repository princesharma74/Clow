import { ServiceProps } from "@/types";
import ServiceSubpage from "./service";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  const servicesDir = path.join(process.cwd(), "data/services");
  const files = fs.readdirSync(servicesDir);
  return files.map((file) => ({
    slug: file.replace(".json", ""),
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "data/services", `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const service: ServiceProps = JSON.parse(fileContents);

  return <ServiceSubpage service={service} />;
}