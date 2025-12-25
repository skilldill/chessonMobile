import { FC, useMemo } from "react";
import { getClockTime } from "../../utils/getClockTime";
import cn from 'classnames';
import { CAPTURED_CHESS_PIECES_MAP } from "../../constants/pieces";
import { FigureColor } from "react-chessboard-ui";

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
        <div className={cn("w-[122px] flex flex-col gap-[10px]", { 'opacity-55': !active })}>
            <div className={cn("flex justify-between items-center", { 'flex-row-reverse': isRightProfile })}>
                <div className="w-[34px] h-[34px] rounded-full bg-black overflow-hidden flex justify-center items-center">
                    {avatar && <img src={avatar} className="h-full w-full object-cover" />}
                </div>
                <div className="font-semibold text-[28px] text-white">
                    <span>{minutesStr}</span>
                    <span>:</span>
                    <span>{secondsStr}</span>
                </div>
            </div>

            <div className="w-full h-[6px] bg-indigo-400/20 rounded-r-full rounded-l-full">
                <div className="w-full h-full bg-gradient-to-r from-[#4F39F6] to-[#57C3FF] rounded-r-full rounded-l-full transition delay-150 duration-300 ease-in-out" style={{ width: `${timeInPercent}%` }} />
            </div>

            <div className={cn("flex justify-between items-center", { 'flex-row-reverse': isRightProfile })}>
                <span className="text-sm font-medium">
                    {nickname}
                </span>
                <div>
                    {color && CAPTURED_CHESS_PIECES_MAP[`pawn-${color}`]?.(16)}
                </div>
            </div>
        </div>
    )
}