import { IonPage, IonContent } from '@ionic/react';
import './GameScreen.css';
import { ChessTimer } from '../../components/ChessTimer/ChessTimer';
import { useCellSize } from '../../hooks/useCellSize';
import { ChessBoard } from 'react-chessboard-ui';
import { CapturedPieces } from '../../components/CapturedPieces/CapturedPieces';
import { Profile } from '../../components/Profile/Profile';
import CatAvatarPNG from './cat1.png';
import { HistoryMoves } from '../../components/HistoryMoves/HistoryMoves';
import { GameScreenControls } from '../../components/GameScreenControls/GameScreenControls';

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

const GameScreen: React.FC = () => {
  const cellSize = useCellSize();

  return (
    <IonPage>
      <IonContent scrollY={true}>
        <div>
          <div className="w-full flex justify-between px-[18px] py-[34px] items-center">
            <ChessTimer initSeconds={120} seconds={30} />
            <Profile nickname="Tanya" avatar={CatAvatarPNG} />
            <ChessTimer initSeconds={120} seconds={30} />
          </div>
          <HistoryMoves moves={MOVES as any} />
          <CapturedPieces 
            FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR w KQkq - 0 1"
            color="white"
            figure={{
              color: "black",
              type: "rook",
            }}
          />
          <ChessBoard 
            FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            onChange={() => {}}
            onEndGame={() => {}}
            config={{ cellSize }}
          />
          <CapturedPieces 
            FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            color="white"
            figure={{
              color: "black",
              type: "rook",
            }}
          />
          <div className="flex justify-center pt-[43px]">
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
