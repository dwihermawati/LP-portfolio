import React from 'react';

import ContactForm from '@/components/ui/contactForm';

export const Contact: React.FC = () => {
  return (
    <section className='flex-center relative overflow-hidden'>
      <div className="pointer-events-none absolute top-[21.5%] left-0 z-[-1] aspect-square size-[196px] bg-[url('/Images/contact-ellipse-decoration.svg')] bg-cover bg-no-repeat sm:hidden" />
      <div className='contact-decoration contact-dot-grid relative h-full w-360'>
        <div
          className='custom-container flex-between flex-wrap gap-6 py-10 md:pt-20 md:pb-25'
          id='contact'
        >
          <div className='flex-[6.8] basis-80'>
            <h2 className='display-sm-extrabold md:display-2xl-extrabold text-neutral-100'>
              Contact Me
            </h2>
            <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-200'>
              Feel free to drop a message for any inquiries or collaborations.
            </p>
          </div>
          <div className='w-80 flex-[3.2] basis-80 rounded-3xl border border-[#262626]/30 bg-neutral-100/5 p-4 backdrop-blur-2xl md:w-120 md:rounded-4xl md:p-6'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
