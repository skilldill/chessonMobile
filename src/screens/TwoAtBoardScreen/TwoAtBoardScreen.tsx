import { IonPage, IonContent, IonImg } from '@ionic/react';
import { useHistory } from 'react-router';
import { INITIAL_FEN } from '../../constants/chess';
import { ChessBoard, DEFAULT_PIECES_MAP } from 'react-chessboard-ui';
import { MoveData } from '../../types';
import { useState } from 'react';
import { useCellSize } from '../../hooks/useCellSize';
import { ROTATED_CHESS_PIECES_MAP } from '../../constants/pieces';


const TwoAtBoardScreen: React.FC = () => {
    const [moves, setMoves] = useState<MoveData[]>([]);

    const cellSize = useCellSize();
    const history = useHistory();

    const handleMove = (moveData: MoveData) => {
        setMoves((savedMoves) => [...savedMoves, moveData]);
    }

    return (
        <IonPage>
            <IonContent>
                <div className="flex flex-col h-full justify-center">
                    <ChessBoard
                        FEN={INITIAL_FEN}
                        onChange={(moveData) => handleMove(moveData as MoveData)}
                        onEndGame={() => { }}
                        config={{
                            cellSize,
                            whiteCellColor: "#E5E7EB",
                            blackCellColor: "#A5AEBD",
                            circleMarkColor: "#0069A8",
                            figureSizePercent: 85,
                            piecesMap: {
                                ...DEFAULT_PIECES_MAP,
                                'pawn-black': ROTATED_CHESS_PIECES_MAP['pawn-black'],
                                'knight-black': ROTATED_CHESS_PIECES_MAP['knight-black'],
                                'bishop-black': ROTATED_CHESS_PIECES_MAP['bishop-black'],
                                'rook-black': ROTATED_CHESS_PIECES_MAP['rook-black'],
                                'queen-black': ROTATED_CHESS_PIECES_MAP['queen-black'],
                                'king-black': ROTATED_CHESS_PIECES_MAP['king-black'],
                            },
                        }}
                    />
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TwoAtBoardScreen;