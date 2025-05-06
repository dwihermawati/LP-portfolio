'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { BeatLoader } from 'react-spinners';
import { z } from 'zod';
import React, { useState } from 'react';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Button } from './button';
import ContactDialog from './contactDialog';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  // const onSubmit = async (data: z.infer<typeof contactSchema>) => {
  //   try {
  //     setLoading(true);

  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     console.log('Mock submission success:', data);
  //     form.reset();
  //   } catch (error) {
  //     console.error('Mock error:', error);
  //   } finally {
  //     setShowDialog(true);
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <Form {...form}>
        <form
          className='w-full space-y-4 md:space-y-5'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field, fieldState }) => (
              <FormItem>
                <Input
                  disabled={loading}
                  placeholder='Name'
                  {...field}
                  aria-invalid={!!fieldState.error}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field, fieldState }) => (
              <FormItem>
                <Input
                  disabled={loading}
                  placeholder='Email'
                  {...field}
                  aria-invalid={!!fieldState.error}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field, fieldState }) => (
              <FormItem>
                <Textarea
                  disabled={loading}
                  placeholder='Message'
                  {...field}
                  aria-invalid={!!fieldState.error}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className='mt-4 w-full md:mt-5'>
            {loading ? <BeatLoader size={20} color='#fff' /> : 'Send'}
          </Button>
        </form>
      </Form>
      <ContactDialog
        open={showDialog}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </>
  );
};

export default ContactForm;
