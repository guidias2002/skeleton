import Skeleton from 'react-loading-skeleton'

export default function CardSkeleton() {
  return (
    <div className='card-skeleton'>
        <div className=''>
            <Skeleton width={150} height={200}/>
        </div>
        <div>
            <Skeleton/>
        </div>
    </div>
  )
}
