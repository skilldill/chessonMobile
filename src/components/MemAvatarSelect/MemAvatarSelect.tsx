import { useState, type FC } from "react";
import { MEM_AVATARS } from "../../constants/avatars";
import cn from 'classnames';

type MemAvatarSelectProps = {
    onSelectAvatar: (index: number) => void;
}

const AVATAR_SIZE = 64;
const SELECTED_AVATAR_SIZE = 51;
const CIRCLE_SIZE = 64;
const GAP_X = 21;
const GAP_Y = 24;

export const MemAvatarSelect: FC<MemAvatarSelectProps> = ({ onSelectAvatar }) => {
    const [selected, setSelected] = useState<number | undefined>(0);
    const [prevSelected, setPrevSelected] = useState<number>(0);

    const selectAvatar = (index: number) => {
        setPrevSelected(selected!);
        setSelected(undefined);

        setTimeout(() => {
            setSelected(index);
        }, 400);

        onSelectAvatar(index);
    }

    return (
        <div className="grid grid-cols-[repeat(4,_64px)] grid-rows-2 gap-x-[21px] gap-y-[24px] relative">
            <div
                className="absolute w-[64px] h-[64px] rounded-full"
                style={{
                    transform: selected !== undefined 
                        ? `translate(${(selected % 4) * (AVATAR_SIZE + GAP_X)}px, ${Math.floor(selected / 4) * (AVATAR_SIZE + GAP_Y)}px)` 
                        : `translate(${(prevSelected % 4) * (AVATAR_SIZE + GAP_X)}px, ${Math.floor(prevSelected / 4) * (AVATAR_SIZE + GAP_Y)}px)`,
                }}
            >
                <svg className="w-full h-full" viewBox="0 0 112 112">
                    <circle
                        cx="56"
                        cy="56"
                        r="54"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeLinecap="round"
                        strokeWidth="3"
                        strokeDasharray="339.29"
                        strokeDashoffset="0"
                        className="transition-all duration-400"
                        style={{
                            transform: 'rotate(-90deg)',
                            transformOrigin: 'center',
                            strokeDashoffset: selected !== undefined ? "0" : "339.29"
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#4F39F6" />
                            <stop offset="100%" stopColor="#57C3FF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {MEM_AVATARS.map((src, index) => (
                <div className="w-[64px] h-[64px] flex justify-center items-center">
                    <img
                        key={index}
                        onClick={() => selectAvatar(index)}
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        className={cn("rounded-full cursor-pointer transition-all duration-200 active:scale-95", {
                            'w-[51px] h-[51px]': selected === index,
                            'w-[64px] h-[64px]': selected !== index,
                        })}
                    />
                </div>
            ))}
        </div>
    )
}
