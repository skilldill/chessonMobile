import { IonPage, IonContent, IonImg } from '@ionic/react';
import { useCellSize } from '../../hooks/useCellSize';
import { ChessBoard } from 'react-chessboard-ui';
import { CapturedPieces } from '../../components/CapturedPieces/CapturedPieces';
import { HistoryMoves } from '../../components/HistoryMoves/HistoryMoves';
import { GameScreenControls } from '../../components/GameScreenControls/GameScreenControls';
import { ChessTimerWithProfile } from '../../components/ChessTimerWithProfile/ChessTimerWithProfile';
import { useScreenSize } from '../../hooks/useScreenSize';

import Cat1PNG from '../../assets/avatars/cat_1.png';

const MOVES = [
  {
      figure: { type: "king", color: "white", touched: true },
      from: [7, 7],
      to: [7, 6],
      FEN: "k7/p7/8/8/8/8/7K/8 b - - 0 1",
  },
  {
      figure: { type: "pawn", color: "black", touched: true },
      from: [0, 1],
      to: [0, 3],
      FEN: "k7/8/8/p7/8/8/7K/8 w - a6 0 1",
  },
  {
      figure: { type: "king", color: "white", touched: true },
      from: [7, 7],
      to: [7, 6],
      FEN: "k7/p7/8/8/8/8/7K/8 b - - 0 1",
  },
  {
      figure: { type: "pawn", color: "black", touched: true },
      from: [0, 1],
      to: [0, 3],
      FEN: "k7/8/8/p7/8/8/7K/8 w - a6 0 1",
  },
  {
      figure: { type: "king", color: "white", touched: true },
      from: [7, 7],
      to: [7, 6],
      FEN: "k7/p7/8/8/8/8/7K/8 b - - 0 1",
  },
  {
      figure: { type: "pawn", color: "black", touched: true },
      from: [0, 1],
      to: [0, 3],
      FEN: "k7/8/8/p7/8/8/7K/8 w - a6 0 1",
  },
  {
      figure: { type: "king", color: "white", touched: true },
      from: [7, 7],
      to: [7, 6],
      FEN: "k7/p7/8/8/8/8/7K/8 b - - 0 1",
  },
  {
      figure: { type: "pawn", color: "black", touched: true },
      from: [0, 1],
      to: [0, 3],
      FEN: "k7/8/8/p7/8/8/7K/8 w - a6 0 1",
  },
  {
      figure: { type: "king", color: "white", touched: true },
      from: [7, 7],
      to: [7, 6],
      FEN: "k7/p7/8/8/8/8/7K/8 b - - 0 1",
  },
  {
      figure: { type: "pawn", color: "black", touched: true },
      from: [0, 1],
      to: [0, 3],
      FEN: "k7/8/8/p7/8/8/7K/8 w - a6 0 1",
  },
];

const PROFILES = [
  {
    initSeconds: 300,
    seconds: 200,
    nickname: 'Tanya',
    active: true,
    avatar: Cat1PNG,
  },
  {
    initSeconds: 300,
    seconds: 300,
    nickname: 'Tanya',
    active: false,
    avatar: Cat1PNG,
  }
]

const GameScreen: React.FC = () => {
  const screenSize = useScreenSize();
  const cellSize = useCellSize();

  return (
    <IonPage>
      <IonContent scrollY={true}>
        <div className="grid grid-rows-[1fr_56px] h-full">
          <div className="flex flex-col h-full justify-center">


            <HistoryMoves moves={MOVES as any} />
            <div className="w-full p-[16px]">
              <ChessTimerWithProfile {...PROFILES[0]}/>
            </div>
            
            {screenSize === "L" && (
              <CapturedPieces 
                FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR w KQkq - 0 1"
                color="white"
                figure={{
                  color: "black",
                  type: "rook",
                }}
              />
            )}
            <ChessBoard
              FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
              onChange={() => {}}
              onEndGame={() => {}}
              config={{ cellSize, figureSizePercent: 90 }}
            />
            {screenSize === "L" && (
              <CapturedPieces 
                FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                color="white"
                figure={{
                  color: "black",
                  type: "rook",
                }}
              />
            )}
            <div className="w-full p-[16px]">
              <ChessTimerWithProfile {...PROFILES[1]}/>
            </div>
          </div>
          <div className="p-[12px] flex justify-center">
            <GameScreenControls 
              onDrawOffer={() => {}}
              onQuitGame={() => {}}
              onResignation={() => {}}
              gameEnded={false}            
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GameScreen;
