import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ContactForm } from "./ContactForm";

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
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}