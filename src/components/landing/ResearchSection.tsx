import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NodeNetwork } from "@/components/icons/NodeNetwork";
import { ArrowRight } from "lucide-react";

const reports = [
  { title: "The Impact of Macro Regimes on Momentum", tags: ["Strategy", "Regime"] },
  { title: "Factor Analysis: Q3 2024 Review", tags: ["Factor", "Region: US"] },
  { title: "Machine Learning Signals in FX Markets", tags: ["ML", "Strategy"] },
  { title: "A Deep Dive into Volatility Clustering", tags: ["Research", "Futures"] },
];

export function ResearchSection() {
  return (
    <section id="research" className="w-full py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none">
        <NodeNetwork />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Research Library</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Research reports and machine-learning insights in one place.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Stay ahead of the curve with our proprietary research. Search, tag, and collaborate on insights that drive performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report) => (
            <Card key={report.title} className="bg-background/50 hover:bg-background transition-colors flex flex-col">
              <CardHeader>
                <CardTitle>{report.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {report.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-primary flex items-center gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
