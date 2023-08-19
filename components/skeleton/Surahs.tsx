import { Card, Skeleton } from '@nextui-org/react';

export default function SurahsSkeleton() {
   return (
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
         {Array.from({ length: 12 }, (_, index) => (
            <Card
               radius='sm'
               key={index}
               classNames={{ base: 'h-[137px]' }}>
               <div className='h-[52] w-full flex items-center justify-between p-5'>
                  <Skeleton className='rounded-lg'>
                     <div className='h-[28px] w-[28px] bg-default-200'></div>
                  </Skeleton>
                  <Skeleton className='rounded-lg'>
                     <div className='h-[28px] w-[28px] bg-default-200'></div>
                  </Skeleton>
               </div>
               <div className='p-5 flex gap-2'>
                  <Skeleton className='rounded-lg'>
                     <div className='w-10 h-10 rounded-lg bg-default-200'></div>
                  </Skeleton>
                  <div className='flex flex-col'>
                     <Skeleton className='rounded-lg'>
                        <div className='h-3 w-2/5 rounded-lg bg-default-200'></div>
                     </Skeleton>
                     <Skeleton className='rounded-lg'>
                        <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
                     </Skeleton>
                  </div>
               </div>
            </Card>
         ))}
      </section>
   );
}
