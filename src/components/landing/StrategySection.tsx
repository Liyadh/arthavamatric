import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CandlestickChart } from "@/components/icons/CandlestickChart";
import { SectionDividerWave } from "@/components/icons/SectionDividerWave";

const strategies = [
  { name: "Global Momentum Equity", assetClass: "Equity", cagr: "18.2%", sharpe: "1.9", drawdown: "-12.5%" },
  { name: "Cross-Asset Futures Trend", assetClass: "Futures", cagr: "14.8%", sharpe: "1.6", drawdown: "-9.8%" },
  { name: "Volatility Risk Premium", assetClass: "Options", cagr: "12.1%", sharpe: "2.1", drawdown: "-7.2%" },
  { name: "Multi-Asset Tactical", assetClass: "Multi-Asset", cagr: "16.5%", sharpe: "1.8", drawdown: "-11.4%" },
];

export function StrategySection() {
  return (
    <section id="strategies" className="w-full py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <CandlestickChart />
      </div>
      <div className="absolute top-0 left-0 right-0 opacity-20">
        <SectionDividerWave />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Strategy Catalogue</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Discover and evaluate quant strategies faster.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Access a curated library of institutional-grade strategies. Filter, compare, and dive deep into analytics to find the right fit for your portfolio.
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Strategy</TableHead>
                  <TableHead>Asset Class</TableHead>
                  <TableHead className="text-right">CAGR</TableHead>
                  <TableHead className="text-right">Sharpe Ratio</TableHead>
                  <TableHead className="text-right">Max. Drawdown</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {strategies.map((strategy) => (
                  <TableRow key={strategy.name}>
                    <TableCell className="font-medium text-primary">{strategy.name}</TableCell>
                    <TableCell className="text-muted-foreground">{strategy.assetClass}</TableCell>
                    <TableCell className="text-right font-mono text-success">{strategy.cagr}</TableCell>
                    <TableCell className="text-right font-mono text-success">{strategy.sharpe}</TableCell>
                    <TableCell className="text-right font-mono text-destructive">{strategy.drawdown}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
