import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'text-sm-regular md:text-md-regular h-12 w-full rounded-2xl bg-neutral-500 px-3 py-2 outline-none placeholder:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:px-4',
        'focus:ring-[1px] focus:ring-neutral-200',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
