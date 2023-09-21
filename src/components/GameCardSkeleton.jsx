import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react"

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={15} width={{lg:'300px',md:'310px' ,sm:'500px'}} overflow={'hidden'}>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton