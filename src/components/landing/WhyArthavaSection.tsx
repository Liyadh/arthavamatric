import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Atom } from "lucide-react";
import { InformationDrivenPriceDynamics } from "@/components/icons/InformationDrivenPriceDynamics";

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
    <section id="edge" className="w-full py-12 md:py-16 bg-card relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
          <InformationDrivenPriceDynamics />
        </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Quantitative Edge</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Combining decades of mathematical research with cutting-edge technology to deliver consistent alpha generation in any market environment.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {edgePoints.map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <Atom className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
