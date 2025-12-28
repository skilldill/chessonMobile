import { FC, useMemo } from "react";
import { getClockTime } from "../../utils/getClockTime";
import cn from 'classnames';
import { CircleProgress } from "../CircleProgress/CircleProgress";

type ChessTimerWithProfileProps = {
    initSeconds: number;
    seconds: number;
    nickname: string;
    avatar?: string;
    rating?: string;
    active?: boolean;
}

export const ChessTimerWithProfile: FC<ChessTimerWithProfileProps> = (props) => {
    const {
        initSeconds,
        seconds,
        nickname,
        avatar,
        active,
    } = props;

    const [minutesStr, secondsStr] = useMemo(
        () => getClockTime(seconds),
        [seconds]
    );

    const timeInPercent = useMemo(
        () => seconds / (initSeconds / 100),
        [seconds, initSeconds]
    );
    // const isDangerTime = useMemo(() => timeInPercent < 20, [timeInPercent]);

    return (
        <div className={cn("w-full grid grid-cols-[32px_1fr_32px] items-center", { 'opacity-55': !active })}>
            <div className="relative">
                <div className="absolute top-0 left-0 bottom-0 flex items-center gap-[12px]">
                    <div className="w-[32px] h-[32px] rounded-full bg-black overflow-hidden flex justify-center items-center">
                        {avatar && <img src={avatar} className="h-full w-full object-cover" />}
                    </div>
                    <span className="text-sm font-medium" style={{ fontWeight: 500 }}>
                        {nickname}
                    </span>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="font-semibold text-[28px] text-white" style={{ lineHeight: '36px' }}>
                    <span>{minutesStr}</span>
                    <span>:</span>
                    <span>{secondsStr}</span>
                </div>
            </div>

            <div className="flex items-center">
                <CircleProgress progress={seconds / (initSeconds * 0.01)} size={32} strokeWidth={4} />
            </div>
        </div>
    )
}

{/*  */}