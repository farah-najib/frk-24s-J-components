// Menu.stories.js
import Menu from './Menu'

export default {
    title: 'components/Menu',
    component: Menu
}

// Default story
export const Default = {
    args: {
        openModal: true
    }
}

// Another variation
export const BreakMyComponent = () => <Menu />
