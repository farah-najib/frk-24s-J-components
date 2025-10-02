// Menu.stories.js
import Menu from './Menu'

export default {
    title: 'components/Menu',
    component: Menu
}

// Default story
export const Default = {
    args: {
        className: true
    }
}

// Another variation
export const BreakMyComponent = () => <Menu />
