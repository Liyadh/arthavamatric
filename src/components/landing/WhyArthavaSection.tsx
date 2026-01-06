import { InformationDrivenPriceDynamics } from "@/components/icons/InformationDrivenPriceDynamics";
import { Card, CardContent } from "@/components/ui/card";

const edgePoints = [
  "Information-Driven Price Dynamics",
  "Wave-Based Market Modeling",
  "Machine Learning Signal Propagation",
  "Fibonacci-Inspired Market Structure",
  "Pi-Cyclical Time-Series Analysis",
  "Nonlinear Quantitative Price Discovery",
];


export function WhyArthavaSection() {
  return (
    <section id="edge" className="w-full py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
          <InformationDrivenPriceDynamics />
        </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Quantitative Edge</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Combining decades of mathematical research with cutting-edge technology to deliver consistent alpha generation in any market environment.
            </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {edgePoints.map((point) => (
             <Card key={point} className="bg-card/60 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-colors">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <span className="font-medium text-center text-lg">{point}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
