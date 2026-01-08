import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { List, FileText } from "lucide-react";
import { NonlinearQuantitativePriceDiscovery } from "../icons/NonlinearQuantitativePriceDiscovery";

export function WorkspacesSection() {
  return (
    <section id="clients" className="w-full py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
          <NonlinearQuantitativePriceDiscovery />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Client Workspaces</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Client-specific workspaces, watchlists, and exports.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Deliver a bespoke experience with customizable watchlists, branded reports, and granular permissions for every client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-headline">A Tailored Experience</h3>
            <p className="text-muted-foreground">
              Move beyond one-size-fits-all reporting. Arthava Matric allows you to create dedicated workspaces for each client, ensuring they only see the strategies and data relevant to them.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <List className="h-5 w-5 mt-1 text-primary shrink-0" />
                <span>Create and manage custom watchlists of strategies per client.</span>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="h-5 w-5 mt-1 text-primary shrink-0" />
                <span>Generate branded, presentation-ready PDF reports on the fly.</span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Role Types:</span>
              <Badge variant="outline">Admin</Badge>
              <Badge variant="outline">Research</Badge>
              <Badge variant="outline">Sales</Badge>
              <Badge variant="default" className="bg-primary/20 text-primary border-primary/50">Client</Badge>
            </div>
          </div>
          <ClientWorkspaceCard />
        </div>
      </div>
    </section>
  );
}

function ClientWorkspaceCard() {
  return (
    <Card className="bg-card/80 backdrop-blur-sm shadow-2xl shadow-accent/5">
      <CardHeader>
        <CardTitle className="font-headline">Client Workspace: SkyBridge Capital</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-muted-foreground mb-2">Watched Strategies</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Global Momentum Equity</li>
            <li>Cross-Asset Futures Trend</li>
            <li>Volatility Risk Premium</li>
          </ul>
        </div>
        <Button className="w-full bg-gradient-to-r from-accent to-orange-400 text-secondary-foreground hover:opacity-90">
          <FileText className="mr-2 h-4 w-4" />
          Generate PDF Report
        </Button>
      </CardContent>
    </Card>
  );
}
