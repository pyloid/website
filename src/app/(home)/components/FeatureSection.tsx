'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Monitor, Cpu, HardDrive } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Any frontend / Backend framework support',
      description:
        'Pyloid supports any frontend / backend framework you want to use. Sveltekit ? Ok, FastAPI ? Ok, Flask ? Ok.',
      skeleton: <SkeletonOne />,
      className:
        'col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800',
    },
    {
      title: 'Many Built-in Tools',
      description: 'Pyloid comes with many built-in tools',
      skeleton: <SkeletonTwo />,
      className: 'border-b col-span-1 lg:col-span-2 dark:border-neutral-800',
    },
    {
      title: 'Intuitive Developer Experience',
      description:
        'Transparent and intuitive APIs that make development a breeze.',
      skeleton: <SkeletonThree />,
      className:
        'col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800',
    },
    {
      title: 'One Code, Cross Platform',
      description: 'Write once, run everywhere.',
      skeleton: <SkeletonFour />,
      className: 'col-span-1 lg:col-span-3 border-b lg:border-none',
    },
    {
      title: 'Custom Build Tool and Optimize',
      description:
        'Built-in build tool and auto optimize to simplify distribution.',
      skeleton: <SkeletonFive />,
      className: 'col-span-1 lg:col-span-6',
    },
  ];
  return (
    <div className='relative z-20 py-10 lg:py-40 max-w-7xl mx-auto'>
      <div className='px-8'>
        <h4 className='text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white'>
          Many Features of Pyloid
        </h4>
      </div>

      <div className='relative '>
        <div className='grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=' h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=' max-w-5xl text-left tracking-tight text-black dark:text-white text-xl md:text-3xl md:leading-snug'>
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        'text-lg md:text-base  max-w-4xl text-left mx-auto',
        'text-neutral-500 text-center font-normal dark:text-neutral-300',
        'text-left max-w-sm mx-0 md:text-lg my-2'
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-full'>
      <div className='w-full p-2  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2  '>
          <img
            src='/images/example.png'
            alt='example'
            className='h-full w-full object-cover object-left-top rounded-sm'
          />
        </div>
      </div>

      <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none' />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className='relative flex flex-col items-center justify-center p-6 gap-6 h-full overflow-hidden'>
      {/* Code Example */}
      <div className='w-full max-w-md'>
        <div className='bg-card border border-border rounded-lg p-4 shadow-sm'>
          <div className='flex items-center gap-2 mb-3'>
            <div className='w-3 h-3 rounded-full bg-red-500'></div>
            <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
            <span className='ml-2 text-xs text-muted-foreground font-mono'>
              app.py
            </span>
          </div>

          <div className='space-y-1 font-mono text-sm'>
            <div className='text-blue-600 dark:text-blue-400'>
              from pyloid import Pyloid
            </div>
            <div></div>
            <div className='text-foreground'>
              app = Pyloid(app_name="MyApp")
            </div>
            <div className='text-foreground'>window = app.create_window(</div>
            <div className='text-green-600 dark:text-green-400 ml-4'>
              title="Hello Pyloid",
            </div>
            <div className='text-green-600 dark:text-green-400 ml-4'>
              width=800,
            </div>
            <div className='text-green-600 dark:text-green-400 ml-4'>
              height=600
            </div>
            <div className='text-foreground'>)</div>
            <div></div>
            <div className='text-foreground'>window.show_and_focus()</div>
            <div className='text-foreground'>app.run()</div>
          </div>
        </div>
      </div>

      {/* Simple API Explanation */}
      <div className='text-center space-y-3 mb-6'>
        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium'>
          <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
          All functions are thread-safe
        </div>

        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium'>
          <span className='w-2 h-2 rounded-full bg-primary animate-pulse'></span>
          All functions are dynamic
        </div>
      </div>

      {/* Floating elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-8 right-8 w-6 h-6 border-2 border-primary/30 rounded animate-spin-slow'></div>
        <div className='absolute bottom-8 left-8 w-4 h-4 bg-primary/20 rounded-full animate-bounce'></div>
        <div className='absolute top-1/2 right-12 w-3 h-3 bg-primary/40 rounded-full animate-pulse'></div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const features = [
    'Timer, File Watching',
    'Custom Titlebar',
    'Multi Thread, Multi Window',
    'Build Tools',
    'System Tray, Notification',
    'Splash Screen, Icon Animation',
    'Devtools, Monitors',
    'Event, RPC, Clipboard',
    'Auto Start, Single Instance',
    'Shortcuts, Clipboard',
    'And More And More',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div className='relative flex flex-col items-start p-8 gap-6 h-full overflow-hidden'>
      <motion.div
        className='flex flex-col gap-3 w-full max-w-xs'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {features.map((feature) => (
          <motion.div
            key={feature}
            variants={itemVariants}
            whileHover={{
              x: 8,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className='group relative flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent border border-primary/10 dark:border-primary/20 hover:border-primary/30 dark:hover:border-primary/40 transition-all duration-300'
          >
            <div className='w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-colors flex-shrink-0' />
            <span className='text-sm font-medium text-foreground group-hover:text-primary transition-colors'>
              {feature}
            </span>

            {/* Subtle glow effect */}
            <motion.div
              className='absolute inset-0 rounded-lg bg-primary/5 dark:bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Subtle background pattern */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl' />
        <div className='absolute bottom-10 left-10 w-24 h-24 rounded-full bg-primary/30 blur-2xl' />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  const platforms = [
    {
      name: 'Windows',
      icon: Monitor,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      name: 'macOS',
      icon: Cpu,
      color: 'text-gray-600 dark:text-gray-300',
      bgColor: 'bg-gray-500/10',
    },
    {
      name: 'Linux',
      icon: HardDrive,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div className='relative flex flex-col items-center justify-center p-8 gap-8 h-full overflow-hidden'>
      {/* Main title */}
      <motion.div
        className='text-center'
        variants={codeVariants}
        initial='hidden'
        animate='visible'
      >
        <h3 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2'>
          ONE CODE
        </h3>
        <div className='w-16 h-1 bg-primary mx-auto rounded-full mb-6' />
      </motion.div>

      {/* Platform icons */}
      <motion.div
        className='flex items-center justify-center gap-8 md:gap-12'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {platforms.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <motion.div
              key={platform.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className='flex flex-col items-center gap-3 group'
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${platform.bgColor} flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-primary/10 group-hover:border-primary/30`}
              >
                <IconComponent
                  className={`w-8 h-8 md:w-10 md:h-10 ${platform.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </div>
              <span className='text-sm font-medium text-foreground group-hover:text-primary transition-colors'>
                {platform.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Connecting arrows */}
      <motion.div
        className='flex items-center justify-center gap-4 text-primary/60'
        variants={codeVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.span
          animate={{ x: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          →
        </motion.span>
        <motion.span
          animate={{ x: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.1 }}
        >
          →
        </motion.span>
        <motion.span
          animate={{ x: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        >
          →
        </motion.span>
      </motion.div>

      {/* Cross platform text */}
      <motion.div
        className='text-center mb-6'
        variants={codeVariants}
        initial='hidden'
        animate='visible'
      >
        <p className='text-lg md:text-xl font-semibold text-primary mb-2'>
          CROSS PLATFORM
        </p>
        <p className='text-lg text-muted-foreground max-w-md'>
          Coding once, deploy everywhere with Pyloid
        </p>
      </motion.div>

      {/* Background decoration */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/20 blur-3xl' />
      </div>
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <div className='relative flex flex-col items-center justify-center p-6 gap-8 h-full overflow-hidden'>
      {/* Build Tool Images */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl'>
        {/* Build Tool 1 */}
        <motion.div
          className='relative group'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className='relative overflow-hidden rounded-lg bg-card border border-border shadow-sm'>
            <img
              src='/images/build-tool.png'
              alt='PyInstaller Build Interface'
              className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
            <div className='absolute bottom-3 left-3 text-white text-sm font-medium'>
              PyInstaller build interface
            </div>
          </div>
        </motion.div>

        {/* Build Tool 2 */}
        <motion.div
          className='relative group'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='relative overflow-hidden rounded-lg bg-card border border-border shadow-sm'>
            <img
              src='/images/build-tool2.png'
              alt='Build Log and Process'
              className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
            <div className='absolute bottom-3 left-3 text-white text-sm font-medium'>
              Optimize build process
            </div>
          </div>
        </motion.div>
      </div>

      {/* Build Features */}
      <motion.div
        className='text-center space-y-6 max-w-3xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
          <div className='flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20'>
            <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
              <svg
                className='w-5 h-5 text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <div className='text-left'>
              <div className='font-semibold text-sm'>Custom Build</div>
              <div className='text-xs text-muted-foreground'>
                Simple Code to build apps
              </div>
            </div>
          </div>

          <div className='flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20'>
            <div className='w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center'>
              <svg
                className='w-5 h-5 text-primary'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            </div>
            <div className='text-left'>
              <div className='font-semibold text-sm'>bundle optimize</div>
              <div className='text-xs text-muted-foreground'>
                Auto bundling and size optimization
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          className='absolute top-8 right-8 w-8 h-8 border-2 border-primary/30 rounded-full'
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute bottom-8 left-8 w-6 h-6 bg-primary/20 rounded-full'
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </div>
  );
};
