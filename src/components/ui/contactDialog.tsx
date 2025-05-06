import Image from 'next/image';
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

interface ContactDialogProps extends React.ComponentProps<typeof Dialog> {
  loading?: boolean;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ loading, ...props }) => {
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
            src='/Icons/ilustrasi-dialog-form.svg'
            alt='form'
            width={124}
            height={119}
            className='relative z-10 mx-auto md:h-40.5 md:w-[168.8px]'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>Message Sent Successfully!</DialogTitle>
          <DialogDescription>
            Thank you for reaching out. I’ll get back to you as soon as possible
          </DialogDescription>
          <DialogClose asChild>
            <Button className='mb-8 w-full md:mb-10'>
              {loading ? 'Loading...' : 'Back to Home'}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
