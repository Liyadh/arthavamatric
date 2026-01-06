"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(1, "Organization is required"),
  message: z.string().min(1, "Message is required"),
});

const initialState = {
  message: "",
  errors: {},
  type: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Submitting..." : "Request a Demo"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.type === "success") {
      toast({
        title: "Success!",
        description: state.message,
        variant: "default",
      });
      form.reset();
    }
  }, [state, toast, form]);

  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline">Get in Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Input {...form.register("name")} placeholder="Name" />
          {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
          
          <Input {...form.register("email")} placeholder="Work Email" type="email" />
          {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}

          <Input {...form.register("organization")} placeholder="Organization" />
          {state.errors?.organization && <p className="text-sm text-destructive">{state.errors.organization[0]}</p>}
          
          <Textarea {...form.register("message")} placeholder="Message" />
          {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}

          {state.type === 'error' && state.message && (
             <Alert variant="destructive">
               <Terminal className="h-4 w-4" />
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>{state.message}</AlertDescription>
             </Alert>
          )}

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
