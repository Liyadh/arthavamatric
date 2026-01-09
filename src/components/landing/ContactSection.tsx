import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const features = [
  "Access to proprietary quantitative models",
  "Real-time algorithmic trade signals",
  "Fibonacci-based market analysis reports",
  "Exclusive research on mathematical patterns",
  "Direct communication with our quant team",
];

export function ContactSection() {
  return (
    <section id="join-us" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Join with us</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Join an elite circle of quantitative traders and researchers. Limited membership ensures personalized attention and optimal performance.
            </p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <Card className="bg-card/80 backdrop-blur-sm text-center">
              <CardHeader>
                <CardTitle className="font-headline flex items-center justify-center">
                  <Badge>Application Required</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By invitation and qualification only
                </p>
                <Button asChild size="lg" className="w-full">
                  <Link href="#contact">Apply Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
