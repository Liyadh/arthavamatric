import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { PiCyclicalTimeSeries } from "@/components/icons/PiCyclicalTimeSeries";

const researchItems = [
  {
    id: 'predictive-alpha',
    title: 'Predictive Alpha Models using Deep Learning',
    description: 'Exploring neural architectures for short-term market prediction and alpha generation.',
    tags: ['AI', 'Deep Learning', 'Trading'],
    pdfUrl: '/pdf/predictive-alpha.pdf',
  },
  {
    id: 'volatility-regimes',
    title: 'Volatility Regimes in Global Markets',
    description: 'Statistical framework for identifying and capitalizing on volatility clusters across asset classes.',
    tags: ['Volatility', 'Risk Management', 'Statistical Modeling'],
    pdfUrl: '/pdf/volatility-regimes.pdf',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis for Market Prediction',
    description: 'NLP techniques to extract alpha from alternative data sources and news sentiment.',
    tags: ['NLP', 'Sentiment Analysis', 'Alternative Data'],
    pdfUrl: '/pdf/sentiment-analysis.pdf',
  },
  {
    id: 'hft-strategies',
    title: 'High-Frequency Trading Strategies',
    description: 'Microstructure analysis and execution algorithms for high-frequency trading environments.',
    tags: ['HFT', 'Market Microstructure', 'Execution'],
    pdfUrl: '/pdf/hft-strategies.pdf',
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="w-full py-12 md:py-16 relative overflow-hidden">
       <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
        <PiCyclicalTimeSeries />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Insights</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
            Discover our collection of quantitative research papers and AI-driven market studies shaping the future of financial innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchItems.map((item) => (
            <Card key={item.id} className="bg-card/60 backdrop-blur-sm border-white/10 hover:bg-card/80 transition-colors flex flex-col">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <CardDescription>{item.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={item.pdfUrl} target="_blank" aria-label={`Download PDF: ${item.title}`}>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/research">
              View All Research
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
