import React from 'react';

import ContactForm from '@/components/ui/contactForm';

export const ContactRevisi: React.FC = () => {
  return (
    <section className='flex-center relative'>
      <div className='grid-contact ellipse-contact before-bg-blur5 relative h-full w-360'>
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
          {/* <div className='rounded-3xl bg-gradient-to-b from-[#262626] to-[#262626]/0 p-[1px] md:rounded-4xl'> */}
          <div className='w-80 flex-[3.2] basis-80 rounded-3xl border border-[#262626]/30 bg-neutral-100/5 p-4 backdrop-blur-2xl md:w-120 md:rounded-4xl md:p-6'>
            {/* </div> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
