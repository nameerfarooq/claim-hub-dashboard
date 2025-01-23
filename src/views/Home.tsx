import Switcher from '@/components/ui/Switcher'
import type { ChangeEvent } from 'react'

const Home = () => {
    const onSwitcherToggle = (val: boolean, e: ChangeEvent) => {
        console.log(val, e)
    }

    return (
        <div>
            <Switcher defaultChecked onChange={onSwitcherToggle} />
        </div>
    )
}

export default Home
