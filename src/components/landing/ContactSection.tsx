import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Ready to explore Arthava Matric?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Request a personalized demo to see how our platform can transform your research and analytics workflow.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
