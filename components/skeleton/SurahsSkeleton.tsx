import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react';

export default function SurahsSkeleton() {
   return (
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
         {Array.from({ length: 12 }, (_, index) => (
            <Card
               radius='sm'
               key={index}
               classNames={{ base: 'h-[137px]' }}>
               <CardHeader className='justify-between items-center px-5'>
                  <Skeleton className='rounded-lg'>
                     <div className='h-[28px] w-[28px] bg-default-200'></div>
                  </Skeleton>
                  <Skeleton className='rounded-lg'>
                     <div className='h-[28px] w-[28px] bg-default-200'></div>
                  </Skeleton>
               </CardHeader>
               <CardBody className='flex justify-between flex-row items-center overflow-hidden'>
                  <div className='flex gap-2 items-center'>
                     <Skeleton className='rounded-lg'>
                        <div className='w-10 h-10 rounded-lg bg-default-200'></div>
                     </Skeleton>
                     <div className='flex flex-col gap-2'>
                        <Skeleton className='w-20 rounded-lg'>
                           <div className='h-3 w-20 rounded-lg bg-default-200'></div>
                        </Skeleton>
                        <Skeleton className='w-24 rounded-lg'>
                           <div className='h-3 w-24 rounded-lg bg-default-200'></div>
                        </Skeleton>
                     </div>
                  </div>
                  <div className='flex flex-col gap-2 items-center'>
                     <Skeleton className='w-8 rounded-lg'>
                        <div className='h-3 w-8 rounded-lg bg-default-200'></div>
                     </Skeleton>
                     <Skeleton className=' w-10 rounded-lg'>
                        <div className='h-3 w-10 rounded-lg bg-default-200'></div>
                     </Skeleton>
                  </div>
               </CardBody>
            </Card>
         ))}
      </section>
   );
}
