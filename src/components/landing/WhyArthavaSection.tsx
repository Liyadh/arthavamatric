import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { InformationDrivenPriceDynamics } from "@/components/icons/InformationDrivenPriceDynamics";

export function WhyArthavaSection() {
  return (
    <section id="edge" className="w-full py-16 md:py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <InformationDrivenPriceDynamics />
        </div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Quantitative Edge</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Combining decades of mathematical research with cutting-edge technology to deliver consistent alpha generation in any market environment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ProblemCard />
          <SolutionCard />
        </div>
      </div>
    </section>
  );
}

const problemPoints = [
  "Fragmented tools and data sources",
  "Slow strategy evaluation cycles",
  "Static, non-interactive PDF reports",
  "Lack of centralized research repository",
];

const solutionPoints = [
  "Central strategy and research catalogue",
  "Institutional-grade analytics engine",
  "Dynamic, interactive reporting",
  "Client-specific workspaces and permissions",
];

function ProblemCard() {
  return (
    <Card className="bg-background/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <XCircle className="text-destructive h-8 w-8" />
          The Old Way: The Problem
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {problemPoints.map((point) => (
            <li key={point} className="flex items-start gap-4">
              <XCircle className="h-5 w-5 mt-1 text-destructive/50 shrink-0" />
              <span className="text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function SolutionCard() {
  return (
    <Card className="border-primary/50 bg-gradient-to-br from-card to-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <CheckCircle className="text-success h-8 w-8" />
          The New Way: The Solution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {solutionPoints.map((point) => (
            <li key={point} className="flex items-start gap-4">
              <CheckCircle className="h-5 w-5 mt-1 text-success shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
