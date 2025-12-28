import { FC, useMemo } from "react";
import { getClockTime } from "../../utils/getClockTime";
import cn from 'classnames';
import { CAPTURED_CHESS_PIECES_MAP } from "../../constants/pieces";
import { FigureColor } from "react-chessboard-ui";
import { CircleProgress } from "../CircleProgress/CircleProgress";

type ChessTimerWithProfileProps = {
    initSeconds: number;
    seconds: number;
    nickname: string;
    color?: FigureColor;
    avatar?: string;
    rating?: string;
    active?: boolean;
    isRightProfile?: boolean;
}

export const ChessTimerWithProfile: FC<ChessTimerWithProfileProps> = (props) => {
    const {
        initSeconds,
        seconds,
        nickname,
        color,
        avatar,
        active,
        isRightProfile,
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
        <div className={cn("w-full grid grid-cols-[32px_1fr_32px]", { 'opacity-55': !active })}>
            <div className="relative">
                <div className="absolute top-0 left-0 bottom-0 flex items-center gap-[12px]">
                    <div className="w-[32px] h-[32px] rounded-full bg-black overflow-hidden flex justify-center items-center">
                        {avatar && <img src={avatar} className="h-full w-full object-cover" />}
                    </div>
                    <span className="text-sm font-medium">
                        {nickname}
                    </span>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="font-semibold text-[28px] text-white">
                    <span>{minutesStr}</span>
                    <span>:</span>
                    <span>{secondsStr}</span>
                </div>
            </div>

            <div className={cn("flex justify-between items-center", { 'flex-row-reverse': isRightProfile })}>
                <CircleProgress progress={seconds / (initSeconds * 0.01)} size={32} strokeWidth={4} />
            </div>
        </div>
    )
}

{/*  */}