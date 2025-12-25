import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChessTimerWithProfile } from '../ChessTimerWithProfile';
import Cat1AvatarPNG from './cat1.png';
import CatCryAvatarPNG from './catCry.jpg';
import XSwordsSVG from '../../../assets/x-swords.svg';

const meta: Meta = {
    title: 'Components/TwoChessTimersWithProfile',
    component: () => (
        <div className="h-[200px] w-[375px]  flex items-center justify-between">
            <ChessTimerWithProfile
                initSeconds={300}
                seconds={290}
                nickname="Tanya"
                color="white"
                avatar={Cat1AvatarPNG}
                active
            />
            <img src={XSwordsSVG} />
            <ChessTimerWithProfile
                initSeconds={300}
                seconds={100}
                nickname="Sasha"
                color="black"
                avatar={CatCryAvatarPNG}
                active={false}
                isRightProfile
            />
        </div>
    ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initSeconds: 300,
        seconds: 300,
        nickname: 'Tanya',
        color: 'white',
        avatar: Cat1AvatarPNG,
        active: true,
        isRightProfile: false,
    },
};

export const Reversed: Story = {
    args: {
        initSeconds: 300,
        seconds: 200,
        nickname: 'Tanya',
        color: 'black',
        avatar: Cat1AvatarPNG,
        active: true,
        isRightProfile: true,
    },
};

export const NotActive: Story = {
    args: {
        initSeconds: 300,
        seconds: 200,
        nickname: 'Tanya',
        color: 'black',
        avatar: Cat1AvatarPNG,
        active: false,
        isRightProfile: true,
    },
};
