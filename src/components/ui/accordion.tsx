'use client';

import { Icon } from '@iconify/react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'group relative overflow-hidden rounded-2xl transition-all',
        'data-[state=open]:p-[1px]',
        'data-[state=open]:bg-gradient-purple-pink',
        'mb-4 last:mb-0 md:mb-5',
        className
      )}
      {...props}
    >
      <div className='pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl'>
        <div className='group-data-[state=open]:animate-sweep-light absolute top-0 left-[-75%] h-full w-[250%] bg-white/50 opacity-0 blur-sm' />
      </div>

      <div className='relative z-20 rounded-2xl bg-neutral-500 p-4 md:px-6 md:py-4 group-data-[state=open]:md:py-6'>
        {props.children}
      </div>
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          '!text-md-semibold md:text-xl-semibold hover:bg-gradient-purple-pink data-[state=open]:bg-gradient-purple-pink group/trigger flex-between flex-1 cursor-pointer gap-4 bg-neutral-100 bg-clip-text text-left text-transparent transition-all',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <Icon
            icon='bxs:down-arrow'
            className='group-data-[state=open]/trigger:hidden'
            color='#ffffff'
          />
          <Icon
            icon='bxs:up-arrow'
            className='group-data-[state=closed]/trigger:hidden'
            color='#ffffff'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular md:text-md-regular overflow-hidden'
      {...props}
    >
      <div
        className={cn(
          'text-sm-regular md:text-md-regular mt-3 text-neutral-200 md:mt-4',
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

// 'use client';

// import { Icon } from '@iconify/react';
// import * as AccordionPrimitive from '@radix-ui/react-accordion';
// import * as React from 'react';

// import { cn } from '@/lib/utils';

// function Accordion({
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
//   return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
// }

// function AccordionItem({
//   className,
//   onClick,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Item> & {
//   onClick?: () => void;
// }) {
//   return (
//     <AccordionPrimitive.Item
//       data-slot='accordion-item'
//       className={cn(
//         'group relative overflow-hidden rounded-2xl transition-all',
//         'data-[state=open]:p-[1px]',
//         'data-[state=open]:bg-gradient-purple-pink',
//         'mb-4 last:mb-0 md:mb-5',
//         className
//       )}
//       onClick={onClick}
//       {...props}
//     >
//       <div className='pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl'>
//         <div className='group-data-[state=open]:animate-sweep-light absolute top-0 left-[-75%] h-full w-[250%] bg-white/50 opacity-0 blur-sm' />
//       </div>

//       <div className='relative z-20 rounded-2xl bg-neutral-500 p-4 md:px-6 md:py-4 group-data-[state=open]:md:py-6'>
//         {props.children}
//       </div>
//     </AccordionPrimitive.Item>
//   );
// }

// function AccordionTrigger({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
//   return (
//     <AccordionPrimitive.Header className='flex'>
//       <AccordionPrimitive.Trigger
//         data-slot='accordion-trigger'
//         className={cn(
//           '!text-md-semibold md:text-xl-semibold hover:bg-gradient-purple-pink data-[state=open]:bg-gradient-purple-pink group/trigger flex-between flex-1 cursor-pointer gap-4 bg-neutral-100 bg-clip-text text-left text-transparent transition-all',
//           className
//         )}
//         {...props}
//       >
//         <div className='flex-1 text-left'>{children}</div>
//         <div className='shrink-0'>
//           <Icon
//             icon='bxs:down-arrow'
//             className='group-data-[state=open]/trigger:hidden'
//             color='#ffffff'
//           />
//           <Icon
//             icon='bxs:up-arrow'
//             className='group-data-[state=closed]/trigger:hidden'
//             color='#ffffff'
//           />
//         </div>
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   );
// }

// function AccordionContent({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
//   return (
//     <AccordionPrimitive.Content
//       data-slot='accordion-content'
//       className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-sm-regular md:text-md-regular overflow-hidden'
//       {...props}
//     >
//       <div
//         className={cn(
//           'text-sm-regular md:text-md-regular mt-3 text-neutral-200 md:mt-4',
//           className
//         )}
//       >
//         {children}
//       </div>
//     </AccordionPrimitive.Content>
//   );
// }

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
