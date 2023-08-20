import { Card, CardBody, CardHeader } from '@nextui-org/react';
import SurahCardSkeleton from './SurahCardSkeleton';

export default function JuzSkeleton() {
   return (
      <section className='columns-1 md:columns-2 lg:columns-3 overflow-hidden'>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 2 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 1 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 3 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 3 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 2 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 1 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 2 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 2 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
         <Card
            radius='sm'
            className='bg-default-50 shadow-none mb-4'>
            <CardHeader className='px-4 flex justify-between'></CardHeader>
            <CardBody className='flex flex-col gap-4 p-4'>
               {Array.from({ length: 2 }, (_, index) => (
                  <SurahCardSkeleton
                     className='bg-background/50'
                     key={index}
                  />
               ))}
            </CardBody>
         </Card>
      </section>
   );
}
