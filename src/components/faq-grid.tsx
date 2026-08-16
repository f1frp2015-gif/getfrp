"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqGridItem = {
  question: string;
  answer: string;
};

export function FaqGrid({
  items,
  className,
  itemClassName,
  questionClassName,
  answerClassName,
}: {
  items: readonly FaqGridItem[];
  className?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerClassName?: string;
}) {
  return (
    <Accordion
      hiddenUntilFound
      className={cn(
        "grid w-full grid-cols-1 gap-x-10 border-t border-border/70 md:grid-cols-2",
        className,
      )}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={`${index}-${String(item.question)}`}
          value={`faq-${index}`}
          className={cn("border-b border-border/70", itemClassName)}
        >
          <AccordionTrigger
            className={cn(
              "min-h-20 rounded-sm py-5 text-left text-[15px] font-semibold leading-snug tracking-tight hover:no-underline",
              questionClassName,
            )}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "pb-5 pr-8 text-[14px] leading-7 text-muted-foreground",
              answerClassName,
            )}
          >
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
