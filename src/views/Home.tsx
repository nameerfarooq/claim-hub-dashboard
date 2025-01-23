import { AdaptiveCard } from '@/components/shared'
import { Card, Button } from '@/components/ui'

const Home = () => {
    return (
        <main className="flex flex-row gap-4">
            <div className="w-9/12">
                <AdaptiveCard>
                    <div className="flex flex-row w-full justify-between items-center">
                        <p className="text-2xl font-bold text-black">
                            Overview
                        </p>
                        <Button variant="default">All Claims</Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 w-full bg-[#F2F2F2] p-1 rounded-[20px]">
                        <Card bordered={false}></Card>
                        <Card bordered={false}></Card>
                        <Card bordered={false}></Card>
                    </div>
                </AdaptiveCard>
            </div>
            <div className="w-3/12">
                <AdaptiveCard>
                    <p>Overview</p>
                </AdaptiveCard>
            </div>
        </main>
    )
}

export default Home
