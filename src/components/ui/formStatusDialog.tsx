import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader className='relative pt-[55.45px] pb-[40.85px] md:pt-[72px] md:pb-[47px]'>
          <Image
            src='/Icons/bg-ilustrasi-dialog-form.svg'
            alt='bg'
            width={1384}
            height={1386}
            className='pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 scale-150'
          />

          {/* Ilustrasi utama */}
          <Image
            src={
              variant === 'success'
                ? '/Icons/ilustrasi-dialog-form-success.svg'
                : '/Icons/ilustrasi-dialog-form-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={124}
            height={119}
            className='relative z-10 mx-auto md:h-40.5 md:w-[168.8px]'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Message failed to send.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'An unexpected error occurred. Kindly try again in a few moments.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button asChild className='mb-8 w-full md:mb-10'>
              <Link href='#home'>
                {loading ? 'Loading...' : 'Back to Home'}
              </Link>
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
