import { Button } from "@/components/ui/button";
import { Smartphone, Settings, Database, Rocket, Code } from "lucide-react";
import { ServiceCardProps } from "@/types";
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";


async function getServices() {
  const servicesDir = path.join(process.cwd(), "data/services");
  const files = fs.readdirSync(servicesDir);
  const services: ServiceCardProps[] = files.map((file) => {
    const filePath = path.join(servicesDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const service = JSON.parse(fileContents);
    return {
      title: service.title,
      slug: service.slug,
      description: service.description,
      icon: getIcon(service.slug),
    };
  });
  return services;
}

function getIcon(slug: string) {
  switch (slug) {
    case "web-mobile-apps":
      return Smartphone;
    case "automation":
      return Settings;
    case "database-cms":
      return Database;
    case "mvp-prototyping":
      return Rocket;
    case "on-demand-expertise":
      return Code;
    default:
      return Rocket;
  }
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services | Clow
          </h1>
        </title>
        <meta
          name="description"
          content="Explore Clow's no-code and low-code services for startups and SaaS teams, including web/mobile apps, automation, databases, MVPs, and on-demand expertise."
        />
      </Head>
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Clow, we empower startups and SaaS teams with no-code and
            low-code solutions to build, automate, and scale efficiently.
            Discover how we can bring your vision to life.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="h-12 w-12 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
              <div className="text-center">
                <Button
                  asChild
                  variant="link"
                  className="text-blue-600 hover:underline"
                >
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Contact us today to discuss your project and receive a tailored
            roadmap for success.
          </p>
          <Button
            asChild
            className="bg-yellow-400 text-blue-600 hover:bg-yellow-500"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}