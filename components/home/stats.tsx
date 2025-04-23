import { ArrowRight } from "lucide-react";
import { StatsTypeProps } from "@/types";

interface StatsProps {
  data: StatsTypeProps;
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  const { heading, description, link, stats } = data;
  
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 md:px-0">
      <div className="container">
        <div className="flex flex-col gap-5 max-w-3xl">
          <h2 className="text-2xl font-bold md:text-4xl">{heading}</h2>
          <p className="text-gray-700 text-lg">{description}</p>
          <a
            href={link.url}
            className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200 group w-fit"
          >
            <span>{link.text}</span>
            <ArrowRight className="h-auto w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
        
        <div className="mt-16 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            // Rotating colors for stat blocks
            const colors = [
              "bg-blue-100 text-blue-700 border-blue-300",
              "bg-purple-100 text-purple-700 border-purple-300",
              "bg-emerald-100 text-emerald-700 border-emerald-300",
              "bg-amber-100 text-amber-700 border-amber-300"
            ];
            const colorClass = colors[index % colors.length];
            
            return (
              <div 
                key={stat.id} 
                className={`flex flex-col gap-3 p-6 rounded-lg border-l-4 ${colorClass} transition-transform duration-300 hover:scale-105 shadow-sm`}
              >
                <div className="text-4xl font-bold">{stat.value}</div>
                <p className="font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;