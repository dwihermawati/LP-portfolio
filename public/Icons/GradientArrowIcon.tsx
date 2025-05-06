const GradientArrowIcon = () => (
  <div className='inline-block transition-transform duration-300 ease-in-out hover:scale-110'>
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='url(#gradient)'
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='cursor-pointer'
    >
      <defs>
        <linearGradient id='gradient' x1='0' y1='0' x2='100%' y2='100%'>
          <stop offset='0%' stopColor='#dc49a6' />
          <stop offset='100%' stopColor='#8746eb' />
        </linearGradient>
      </defs>
      <path d='M7 7h10v10' />
      <line x1='7' y1='17' x2='17' y2='7' />
    </svg>
  </div>
);

export default GradientArrowIcon;
