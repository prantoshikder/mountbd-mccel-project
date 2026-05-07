import { STATS_BG } from "@/lib/images";

const STATS = [
  { count: "150", label: "Projects Completed" },
  { count: "120", label: "Really Happy Clients" },
  { count: "250", label: "Total Tasks Completed" },
  { count: "5",   label: "In House Professionals" },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-16"
      style={{ backgroundImage: `url(${STATS_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ count, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="text-white text-5xl font-bold mb-2">{count}</span>
              <span className="text-white text-base font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
