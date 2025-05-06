// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Dot from '@/components/ui/dot-orbit';
// import { skillsData } from '@/constants/skills-data';

// const SkillsOrbit: React.FC = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const updateMedia = () => setIsDesktop(window.innerWidth >= 768);
//     updateMedia();
//     window.addEventListener('resize', updateMedia);
//     return () => window.removeEventListener('resize', updateMedia);
//   }, []);

//   const orbits = [
//     { dotAngles: [140], sizeMobile: 145, sizeDesktop: 266 },
//     { dotAngles: [30, 210], sizeMobile: 209.88, sizeDesktop: 385 },
//     { dotAngles: [120, 300], sizeMobile: 280.75, sizeDesktop: 515 },
//   ];

//   const getSize = (mobile: number, desktop: number) =>
//     isDesktop ? desktop : mobile;

//   const sizes = orbits.map((o) => getSize(o.sizeMobile, o.sizeDesktop));
//   const radii = sizes.map((s) => s / 2);

//   const polarToCartesian = (angleDeg: number, radius: number) => {
//     const angleRad = (angleDeg - 90) * (Math.PI / 180);
//     const x = radius + radius * Math.cos(angleRad);
//     const y = radius + radius * Math.sin(angleRad);
//     return { x, y };
//   };

//   return (
//     <div className='flex-center'>
//       <motion.div
//         className='relative'
//         style={{
//           width: sizes[2],
//           height: sizes[2],
//           transformOrigin: '50% 50%',
//         }}
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//       >
//         {/* Dot Decorations */}
//         {orbits.map((orbit, i) =>
//           orbit.dotAngles.map((angle, j) => (
//             <Dot key={`dot-${i}-${j}`} angle={angle} radius={radii[i]} />
//           ))
//         )}

//         {/* Skill Icons */}
//         {skillsData.map((skill, idx) => {
//           const radius = radii[skill.orbitIndex];
//           const { x, y } = polarToCartesian(skill.angleOffset, radius);
//           return (
//             <motion.div
//               key={`icon-${idx}`}
//               className='absolute z-50'
//               style={{
//                 left: x,
//                 top: y,
//                 transform: 'translate(-50%, -50%)',
//                 width: isDesktop ? '10rem' : '5.5rem',
//                 height: isDesktop ? '5rem' : '2.75rem',
//               }}
//               animate={{ rotate: -360 }}
//               transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//             >
//               <Image
//                 src={skill.icon}
//                 alt={skill.label}
//                 fill
//                 sizes='(min-width: 768px) 10rem, 5.5rem'
//                 className='object-contain'
//               />
//             </motion.div>
//           );
//         })}

//         {/* Orbit Layers */}
//         <div
//           className='absolute top-0 left-0 rounded-full border border-neutral-400'
//           style={{ width: sizes[2], height: sizes[2] }}
//         >
//           <div
//             className='flex-center relative rounded-full border border-neutral-400'
//             style={{
//               width: sizes[1],
//               height: sizes[1],
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           >
//             <div
//               className='relative rounded-full border border-neutral-400'
//               style={{ width: sizes[0], height: sizes[0] }}
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SkillsOrbit;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Dot from '@/components/ui/dot-orbit';

// const SkillsOrbit: React.FC = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const updateMedia = () => setIsDesktop(window.innerWidth >= 768);
//     updateMedia();
//     window.addEventListener('resize', updateMedia);
//     return () => window.removeEventListener('resize', updateMedia);
//   }, []);

//   const orbits = [
//     { dotAngles: [90], sizeMobile: 145, sizeDesktop: 266 },
//     { dotAngles: [30, 210], sizeMobile: 209.88, sizeDesktop: 385 },
//     { dotAngles: [120, 300], sizeMobile: 280.75, sizeDesktop: 515 },
//   ];

//   const getSize = (mobile: number, desktop: number) =>
//     isDesktop ? desktop : mobile;

//   const sizes = orbits.map((o) => getSize(o.sizeMobile, o.sizeDesktop));
//   const radii = sizes.map((s) => s / 2);

//   return (
//     <div className='flex-center'>
//       <motion.div
//         className='relative'
//         style={{
//           width: sizes[2],
//           height: sizes[2],
//           transformOrigin: '50% 50%',
//         }}
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//       >
//         {/* Dot Decorations */}
//         {orbits.map((orbit, i) =>
//           orbit.dotAngles.map((angle, j) => (
//             <Dot key={`${i}-${j}`} angle={angle} radius={radii[i]} />
//           ))
//         )}

//         {/* Orbit Layers */}
//         <div
//           className='absolute top-0 left-0 rounded-full border border-neutral-400'
//           style={{ width: sizes[2], height: sizes[2] }}
//         >
//           <div
//             className='flex-center relative rounded-full border border-neutral-400'
//             style={{
//               width: sizes[1],
//               height: sizes[1],
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           >
//             <div
//               className='relative rounded-full border border-neutral-400'
//               style={{ width: sizes[0], height: sizes[0] }}
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SkillsOrbit;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Dot from '@/components/ui/dot-orbit';
// import { skillsData } from '@/constants/skills-data';

// interface IconProps {
//   angle: number;
//   radius: number;
//   src: string;
//   size: number;
// }

// const Icon: React.FC<IconProps> = ({ angle, radius, src, size }) => {
//   const rad = (angle * Math.PI) / 180;
//   const x = radius * Math.cos(rad);
//   const y = radius * Math.sin(rad);

//   return (
//     <motion.div
//       className='absolute z-10'
//       style={{
//         width: size,
//         height: size,
//         top: `calc(50% + ${y}px)`,
//         left: `calc(50% + ${x}px)`,
//         transform: 'translate(-80%, -20%)',
//       }}
//       animate={{ rotate: -360 }}
//       transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//     >
//       <img src={src} className='h-full w-full object-contain' />
//     </motion.div>
//   );
// };

// const SkillsOrbit: React.FC = () => {
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     const update = () => setIsDesktop(window.innerWidth >= 768);
//     update();
//     window.addEventListener('resize', update);
//     return () => window.removeEventListener('resize', update);
//   }, []);

//   const orbits = [
//     { dotAngles: [90], sizeMobile: 145, sizeDesktop: 266 },
//     { dotAngles: [30, 210], sizeMobile: 210, sizeDesktop: 385 },
//     { dotAngles: [120, 300], sizeMobile: 281, sizeDesktop: 515 },
//   ];

//   const sizes = orbits.map((o) => (isDesktop ? o.sizeDesktop : o.sizeMobile));
//   const radii = sizes.map((s) => s / 2);
//   const ICON_SIZE = isDesktop ? 162 : 88.3;

//   return (
//     <div className='flex-center'>
//       <motion.div
//         className='relative'
//         style={{
//           width: sizes[2],
//           height: sizes[2],
//           transformOrigin: '50% 50%',
//         }}
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//       >
//         {/* Orbit Layers */}
//         {sizes.map((s, i) => (
//           <div
//             key={`orbit-${i}`}
//             className='absolute rounded-full border border-neutral-400'
//             style={{
//               width: s,
//               height: s,
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           />
//         ))}

//         {/* Dot Decorations */}
//         {orbits.map((orbit, i) =>
//           orbit.dotAngles.map((angle, j) => (
//             <Dot key={`dot-${i}-${j}`} angle={angle} radius={radii[i]} />
//           ))
//         )}

//         {/* Skill Icons */}
//         {skillsData.map((skill, idx) => {
//           const adjustedRadius = radii[skill.orbitIndex] - ICON_SIZE / 2;
//           return (
//             <Icon
//               key={idx}
//               angle={skill.angleOffset}
//               radius={adjustedRadius}
//               src={skill.icon}
//               size={ICON_SIZE}
//             />
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default SkillsOrbit;

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Dot from '@/components/ui/dot-orbit';
// import { skillsData } from '@/constants/skills-data';
// import { motion } from 'framer-motion';

// interface IconProps {
//   angle: number;
//   radius: number;
//   src: string;
// }

// const Icon: React.FC<IconProps> = ({ angle, radius, src }) => {
//   const rad = (angle * Math.PI) / 180;
//   const x = radius * Math.cos(rad);
//   const y = radius * Math.sin(rad);

//   return (
//     <motion.div
//       className='absolute z-10 h-11 w-22 md:h-20 md:w-40'
//       style={{
//         top: `calc(50% + ${y}px)`,
//         left: `calc(50% + ${x}px)`,
//         transform: 'translate(-50%, -50%)',
//       }}
//       animate={{ rotate: -360 }}
//       transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//     >
//       <img src={src} className='h-full w-full object-contain' />
//     </motion.div>
//   );
// };

// const SkillsOrbit: React.FC = () => {
//   const [isDesktop, setIsDesktop] = useState(false);
//   useEffect(() => {
//     const upd = () => setIsDesktop(window.innerWidth >= 768);
//     upd();
//     window.addEventListener('resize', upd);
//     return () => window.removeEventListener('resize', upd);
//   }, []);

//   const orbits = [
//     { dotAngles: [90], sizeM: 145, sizeD: 266 },
//     { dotAngles: [30, 210], sizeM: 210, sizeD: 385 },
//     { dotAngles: [120, 300], sizeM: 281, sizeD: 515 },
//   ];

//   const sizes = orbits.map((o) => (isDesktop ? o.sizeD : o.sizeM));
//   const radii = sizes.map((s) => s / 2);

//   return (
//     <div className='flex-center'>
//       <motion.div
//         className='relative'
//         style={{
//           width: sizes[2],
//           height: sizes[2],
//           transformOrigin: '50% 50%',
//         }}
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//       >
//         {sizes.map((s, i) => (
//           <div
//             key={i}
//             className='absolute z-0 rounded-full border border-neutral-400'
//             style={{
//               width: s,
//               height: s,
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//             }}
//           />
//         ))}

//         {orbits.map((o, i) =>
//           o.dotAngles.map((angle, j) => (
//             <Dot key={`dot-${i}-${j}`} angle={angle} radius={radii[i]} />
//           ))
//         )}

//         {skillsData.map((skill, i) => {
//           const angle = 'angleOffset' in skill ? (skill.angleOffset ?? 0) : 0;
//           const radius = i === 0 ? radii[0] : i <= 2 ? radii[1] : radii[2];
//           return (
//             <Icon
//               key={`skill-icon-${i}`}
//               angle={angle}
//               radius={radius}
//               src={skill.icon}
//             />
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default SkillsOrbit;
