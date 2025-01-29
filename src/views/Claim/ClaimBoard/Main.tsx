import { Container } from '@/components/shared'
import { Avatar, Button, Card } from '@/components/ui'
import AvatarGroup from '@/components/ui/Avatar/AvatarGroup'
import user from '@/assets/Images/user.png'
import { CiFilter } from 'react-icons/ci'
import { TbSettings, TbUserPlus } from 'react-icons/tb'
import ClaimBoard from './ClaimBoard'

const Main = () => {
    return (
        <Container>
            <Card>
                <div className="flex flex-row items-center justify-between mb-4">
                    <p className="text-2xl font-bold">Claim pipeline</p>
                    <div className="flex flex-row gap-3 items-center">
                        <AvatarGroup chained maxCount={3}>
                            <Avatar src={user} />
                            <Avatar src={user} />
                            <Avatar src={user} />
                            <Avatar src={user} />
                            <Avatar src={user} />
                        </AvatarGroup>
                        <Button icon={<CiFilter />}></Button>
                        <Button icon={<TbUserPlus />}></Button>
                        <Button icon={<TbSettings />}></Button>
                    </div>
                </div>
                <div>
                    <ClaimBoard />
                </div>
            </Card>
        </Container>
    )
}

export default Main
