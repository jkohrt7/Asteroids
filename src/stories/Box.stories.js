import Box from '../components/Box.js';
import BasicScene from '../components/BasicScene.js';
import { Suspense } from 'react';


export default {
    title: "Meshes",
    component: Box
}

const Template = (args) => {
    return (
        <BasicScene>

                <Box {...args} />

        </BasicScene>
    )
    
}

export const RegularBox = Template.bind({});
RegularBox.args = {
    position: [0,0,0]
}