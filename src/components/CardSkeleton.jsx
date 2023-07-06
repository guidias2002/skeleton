import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import './CardSkeleton.css'

export default function CardSkeleton({ cards }) {
  return (
    Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor='#252525' highlightColor="#333" key={i}>
        <div className='card-skeleton'>
          <Skeleton width={200} height={300} style={{ marginBottom: '5px' }}/>
          <Skeleton width={200} height={20}/>
        </div>
      </SkeletonTheme>
    ))
  );
}
