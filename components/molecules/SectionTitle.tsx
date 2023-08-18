'use client';
import React from 'react';
import { Divider } from '@nextui-org/react';

interface SectionTitleProps {
   title: string;
   description?: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
   return (
      <div className='px-2 w-full'>
         <div className='space-y-1'>
            <h4 className='text-medium font-medium'>{title}</h4>
            {description && <p className='text-small text-default-400'>{description}</p>}
         </div>
         <Divider className='my-4' />
      </div>
   );
}
