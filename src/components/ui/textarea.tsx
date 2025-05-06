import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'text-sm-regular md:text-md-regular h-42 w-full resize-none rounded-2xl bg-neutral-500 p-3 outline-none placeholder:text-neutral-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:p-4',
        'focus:ring-[1px] focus:ring-neutral-200',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
