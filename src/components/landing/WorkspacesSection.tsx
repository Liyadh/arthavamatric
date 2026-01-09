import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { NonlinearQuantitativePriceDiscovery } from "../icons/NonlinearQuantitativePriceDiscovery";
import { PiWave } from "../icons/PiWave";

const approachPoints = [
    {
        title: "Quantitative Foundation",
        description: "Every strategy is built on rigorous mathematical principles, from stochastic calculus to advanced statistical modeling, ensuring robust performance across market cycles."
    },
    {
        title: "Pattern Recognition",
        description: "Our proprietary algorithms identify fractal patterns and Fibonacci relationships in market data, revealing hidden opportunities invisible to traditional analysis."
    },
    {
        title: "Risk Optimization",
        description: "Advanced Monte Carlo simulations and Black-Scholes derivatives ensure optimal risk-adjusted returns while maintaining capital preservation as our primary objective."
    }
];

const metrics = ["Annual Return", "Sharpe Ratio", "Max Drawdown"];

export function WorkspacesSection() {
  return (
    <section id="clients" className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <NonlinearQuantitativePriceDiscovery />
      </div>
       <PiWave className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-50 -z-10 text-primary" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Approach</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Mathematical Approach</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We fuse advanced mathematics with financial theory to build strategies that thrive in complex, dynamic markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-8">
                {approachPoints.map((point) => (
                    <div key={point.title} className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 mt-1 text-primary shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold font-headline">{point.title}</h3>
                            <p className="text-muted-foreground">{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          <div className="flex flex-col gap-4 max-w-sm ml-auto w-full">
            {metrics.map((metric) => (
                 <div key={metric} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <Card className="relative bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-4 flex flex-col text-center">
                            <span className="text-muted-foreground">----</span>
                            <h4 className="font-semibold text-lg">{metric}</h4>
                        </CardContent>
                    </Card>
                 </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
