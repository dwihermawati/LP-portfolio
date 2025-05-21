// 'use client';

import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constants/faq-data';

export const FAQ: React.FC = () => {
  return (
    <Section
      id='faq'
      title='Frequently Asked Question'
      subtitle='Find answers to some of the frequently asked questions below.'
    >
      <Accordion type='single' collapsible>
        {FAQData.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

// export const FAQ: React.FC = () => {
//   const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

//   return (
//     <Section
//       id='faq'
//       title='Frequently Asked Question'
//       subtitle='Find answers to some of the frequently asked questions below.'
//     >
//       <Accordion
//         type='single'
//         collapsible
//         value={openItem ?? undefined}
//         onValueChange={setOpenItem}
//       >
//         {FAQData.map((item, index) => {
//           const value = index.toString();
//           const isOpen = openItem === value;

//           return (
//             <AccordionItem
//               key={value}
//               value={value}
//               onClick={() => setOpenItem(isOpen ? undefined : value)}
//               className='cursor-pointer' // penting!
//             >
//               <AccordionTrigger>{item.title}</AccordionTrigger>
//               <AccordionContent>{item.description}</AccordionContent>
//             </AccordionItem>
//           );
//         })}
//       </Accordion>
//     </Section>
//   );
// };
