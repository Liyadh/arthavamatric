import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroWaves } from "@/components/icons/HeroWaves";
import { ArrowUpRight, BarChart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroWaves />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-glow">
              Where<br/>Mathematics<br/>Meets Markets
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Leverage advanced quantitative models and machine learning algorithms to unlock alpha in global financial markets through mathematical precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                <Link href="#contact">Join Our Research</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="#">View Performance</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:flex flex-col items-center justify-center gap-6">
            <MetricCard title="Golden Ratio" value="φ 1.618" />
            <MetricCard title="Market Models" value="∞" />
            <MetricCard title="Precision Factor" value="π²" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ title, value, icon }: { title: string; value: string; icon?: React.ReactNode }) {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-xl w-64 animate-fade-in-up">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold font-headline">{value}</p>
        </div>
        {icon && <div className="w-8 h-8">{icon}</div>}
      </CardContent>
    </Card>
  );
}
