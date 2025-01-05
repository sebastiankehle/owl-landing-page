"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContactFAQProps {
  dictionary: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export function ContactFAQ({ dictionary }: ContactFAQProps) {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">{dictionary.title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {dictionary.items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="py-3 text-left text-sm font-medium hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
