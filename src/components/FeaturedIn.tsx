import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Star } from "lucide-react";

const FeaturedIn = () => {
  const logos = [
    { name: "Forbes" },
    { name: "Wired" },
    { name: "TechCrunch" },
    { name: "Fast Company" },
    { name: "The Verge" },
    { name: "MIT Tech" },
  ];

  return (
    <section id="featured-in" className="featured-in-section relative bg-white text-black overflow-hidden py-16 lg:py-24">
      {/* subtle grid + corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Left: Heading */}
          <div className="flex flex-col justify-center order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4 text-black/70 text-sm tracking-widest">
                <div className="w-2 h-2 bg-black" /> 002
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                  Featured in top publications
                </span>
              </h2>
              <p className="mt-4 text-black/70 max-w-md text-sm">
                Recognized by global media for transparent AI, safety-first autonomy,
                and breakthrough performance benchmarks.
              </p>
            </motion.div>

            <div className="hidden lg:block h-full" />
          </div>

          {/* Middle: Logos Card (marquee) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-3 lg:order-2"
          >
            <Card className="border-black/10 shadow-sm bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white/80 text-sm tracking-widest">Media Coverage</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                {/* Edge fades to avoid harsh cropping */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 via-gray-900/70 to-transparent" />
                <div className="overflow-hidden">
                  <div className="flex gap-4 min-w-max animate-[featuredMarquee_18s_linear_infinite] will-change-transform">
                    {[...logos, ...logos].map((logo, i) => (
                      <div
                        key={`${logo.name}-${i}`}
                        className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-semibold"
                      >
                        {logo.name}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-3"
          >
            <Card className="border-black/10 shadow-sm bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white">
              <CardHeader>
                <CardTitle className="text-white/80 text-sm tracking-widest">Press Analytics</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div className="col-span-2 flex items-center gap-4 p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="text-3xl font-bold">50M+</div>
                  <div className="text-white/70 text-sm">Article Views</div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
                  <Star className="w-4 h-4 fill-white/90 text-white" />
                  <div>
                    <div className="text-lg font-semibold">4.9</div>
                    <div className="text-white/60 text-xs">Press Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="text-lg font-semibold">Global</div>
                  <div className="text-white/60 text-xs">Recognition</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
      <style>{`
        @keyframes featuredMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default FeaturedIn;