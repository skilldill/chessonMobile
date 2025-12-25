import { IonPage, IonContent, IonImg } from '@ionic/react';
import './GameScreen.css';
import { ChessTimer } from '../../components/ChessTimer/ChessTimer';
import { useCellSize } from '../../hooks/useCellSize';
import { ChessBoard } from 'react-chessboard-ui';
import { CapturedPieces } from '../../components/CapturedPieces/CapturedPieces';
import { Profile } from '../../components/Profile/Profile';
import CatAvatarPNG from './cat1.png';
import { HistoryMoves } from '../../components/HistoryMoves/HistoryMoves';
import { GameScreenControls } from '../../components/GameScreenControls/GameScreenControls';
import { ChessTimerWithProfile } from '../../components/ChessTimerWithProfile/ChessTimerWithProfile';
import XSwordsSVG from '../../assets/x-swords.svg';

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
    seconds: 300,
    nickname: 'Tanya',
    color: 'white' as any,
    avatar: CatAvatarPNG,
    active: true,
    isRightProfile: false,
  },
  {
    initSeconds: 300,
    seconds: 300,
    nickname: 'Tanya',
    color: 'white' as any,
    avatar: CatAvatarPNG,
    active: false,
    isRightProfile: true,
  }
]

const GameScreen: React.FC = () => {
  const cellSize = useCellSize();

  return (
    <IonPage>
      <IonContent scrollY={true}>
        <div className="flex flex-col h-full">
          <div className="w-full flex justify-between px-[18px] py-[34px] mb-[6px] items-center">
            <div className="w-full flex justify-between items-center px-[14px]">
              <ChessTimerWithProfile {...PROFILES[0]}/>
              <IonImg src={XSwordsSVG} />
              <ChessTimerWithProfile {...PROFILES[1]}/>
            </div>
          </div>
          
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
          <HistoryMoves moves={MOVES as any} />
          <div className="flex flex-1 justify-center items-end pb-[12px]">
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
