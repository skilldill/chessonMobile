import { type FC } from "react";
import type { MoveData } from "react-chessboard-ui";
import { getReadableMoveNotation } from "../../utils/getReadableMoveNotation";

type HistoryMovesProps = {
    moves: MoveData[];
}

export const HistoryMoves: FC<HistoryMovesProps> = ({ moves }) => {
    return (
        <div className="w-full h-[32px] overflow-hidden">
            <div className="min-w-full flex items-center gap-[12px] py-[6px]">
                {moves.map((move, index) => 
                    <span className="min-w-[32px] text-sm font-medium text-gray-400" key={index}>{getReadableMoveNotation(move)}</span>
                )}
            </div>
        </div>
    );
};