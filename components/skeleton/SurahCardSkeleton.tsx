import { Card, CardBody, CardHeader, Skeleton } from '@nextui-org/react';

export default function SurahCardSkeleton({ className }: any) {
   return (
      <Card
         radius='sm'
         className={className}
         classNames={{ base: 'h-[137px]' }}>
         <CardHeader className='justify-between items-center px-5'>
            <Skeleton className='rounded-lg h-[28px] w-[28px]'></Skeleton>
            <Skeleton className='rounded-lg h-[28px] w-[28px]'></Skeleton>
         </CardHeader>
         <CardBody className='flex flex-row items-center overflow-hidden'>
            <Skeleton className='w-10 h-10 mr-2 rounded-lg absolute'></Skeleton>
            <div className='flex flex-col gap-2 ml-12 w-[75%]'>
               <Skeleton className='w-3/5 h-3 rounded-lg'></Skeleton>
               <Skeleton className='w-4/5 h-3 rounded-lg'></Skeleton>
            </div>
            <div className='flex flex-col gap-2 justify-end items-center'>
               <Skeleton className='w-8 h-3 rounded-lg'></Skeleton>
               <Skeleton className='w-10 h-3 rounded-lg'></Skeleton>
            </div>
         </CardBody>
      </Card>
   );
}
