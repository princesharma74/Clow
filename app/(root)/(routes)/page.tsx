import Connect from "@/components/home/connect";
import Hero from "@/components/home/hero";
import Logos from "@/components/home/logos";
import Stats from "@/components/home/stats";
import Testimonials from "@/components/home/testimonials";
import { Container } from "@/components/ui/container";
import { features, logos, stats, testimonials } from "@/config/site";

const Page = () => {
  return (
    <Container>
      <Hero data={features}/>
      <Stats data={stats}/>
      <Logos data={logos}/>
      <Testimonials testimonials={testimonials}/>
      <Connect/>
    </Container>
  )
}

export default Page;