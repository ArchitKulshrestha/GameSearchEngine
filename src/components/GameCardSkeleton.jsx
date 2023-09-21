import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={15} width={{lg:'250px',md:'200px' ,sm:'200px'}} overflow={'hidden'}>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton