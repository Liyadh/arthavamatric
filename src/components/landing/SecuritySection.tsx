import { ShieldCheck, Lock, DatabaseZap, FileCheck } from "lucide-react";
import { SectionDividerWave } from "../icons/SectionDividerWave";

const securityFeatures = [
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: "End-to-End Encryption",
    description: "All data, both in transit and at rest, is encrypted using industry-standard AES-256 encryption.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Role-Based Access Control",
    description: "Granular permissions ensure users and clients only see the data they are authorized to access.",
  },
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    title: "Comprehensive Audit Logs",
    description: "Maintain a complete, immutable record of all platform activity for compliance and security reviews.",
  },
  {
    icon: <DatabaseZap className="h-8 w-8 text-primary" />,
    title: "Secure Infrastructure",
    description: "Built on a world-class, GDPR-aligned cloud infrastructure with robust data protection protocols.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="w-full py-16 md:py-24 bg-card">
       <div className="absolute top-0 left-0 right-0 opacity-10">
        <SectionDividerWave />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Security & Compliance</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Institutional-grade security, by design.</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Your data's integrity and confidentiality are our top priority. We've built our platform on a foundation of security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-background/30">
              {feature.icon}
              <h3 className="text-lg font-bold font-headline">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
