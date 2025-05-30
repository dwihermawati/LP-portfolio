import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center gap-1.5 shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-purple-pink text-sm-medium md:text-md-medium text-neutral-100 rounded-full hover:shadow-[0_0_17px_rgba(135,70,235,0.6)] text-center',
        icon: 'bg-gradient-purple-pink rounded-full hover:shadow-[0_0_17px_rgba(135,70,235,0.6)]',
      },
      size: {
        default: 'h-12 px-11.75 has-[>svg]:px-1.5',
        icon: 'p-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
