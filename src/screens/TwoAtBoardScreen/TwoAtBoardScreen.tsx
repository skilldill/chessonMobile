import { IonPage, IonContent, IonImg } from '@ionic/react';
import { useHistory } from 'react-router';
import { INITIAL_FEN } from '../../constants/chess';
import { ChessBoard, DEFAULT_PIECES_MAP } from 'react-chessboard-ui';
import { MoveData } from '../../types';
import { useState } from 'react';
import { useCellSize } from '../../hooks/useCellSize';
import { ROTATED_CHESS_PIECES_MAP } from '../../constants/pieces';
import { HistoryMoves } from '../../components/HistoryMoves/HistoryMoves';
import { GameScreenControls } from '../../components/GameScreenControls/GameScreenControls';
import { CapturedPieces } from '../../components/CapturedPieces/CapturedPieces';


const TwoAtBoardScreen: React.FC = () => {
    const [moves, setMoves] = useState<MoveData[]>([]);
    const [chessboardId, setChessboardId] = useState(0);

    const cellSize = useCellSize();
    const history = useHistory();

    const handleMove = (moveData: MoveData) => {
        setMoves((savedMoves) => [...savedMoves, moveData]);
    }

    const handleQuit = () => {
        history.push('/');
    }

    const handleRestart = () => {
        setMoves([]);
        setChessboardId((prevId) => prevId + 1);
    }

    return (
        <IonPage>
            <IonContent>
                <div className="grid grid-rows-[1fr_56px] h-full">  
                    <div className="flex flex-col h-full justify-center">
                        <div style={{ transform: 'rotate(180deg)' }}>
                            <HistoryMoves moves={moves} />
                        </div>
                        <div style={{ transform: 'rotate(180deg)' }}>
                            <CapturedPieces
                                FEN={moves.length > 0 ? (moves[moves.length - 1].FEN || INITIAL_FEN) : INITIAL_FEN}
                                color="black"
                                figure={{
                                    type: "pawn",
                                    color: "black",
                                }}
                                listInBottom={true}
                            />
                        </div>
                        <ChessBoard
                            key={chessboardId}
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
                        <CapturedPieces
                            FEN={moves.length > 0 ? (moves[moves.length - 1].FEN || INITIAL_FEN) : INITIAL_FEN}
                            color="white"
                            figure={{
                                type: "pawn",
                                color: "white",
                            }}
                            listInBottom={true}
                        />
                        <HistoryMoves moves={moves} />
                    </div>

                    <div className="p-[12px] flex justify-center">
                        <GameScreenControls
                            gameEnded={false}
                            onQuitGame={handleQuit}
                            onRestart={handleRestart}
                        />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TwoAtBoardScreen;