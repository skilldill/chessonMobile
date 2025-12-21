import { IonPage, IonContent } from '@ionic/react';
import './GameScreen.css';
import { ChessTimer } from '../../components/ChessTimer/ChessTimer';
import { useCellSize } from '../../hooks/useCellSize';
import { ChessBoard } from 'react-chessboard-ui';
import { PlasmaButton } from '../../components/PlasmaButton/PlasmaButton';
import { CapturedPieces } from '../../components/CapturedPieces/CapturedPieces';

const GameScreen: React.FC = () => {
  const cellSize = useCellSize();

  return (
    <IonPage>
      <IonContent scrollY={true}>
        <div className="flex flex-col items-center justify-center h-full">
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
          <div className="flex justify-center">
            <PlasmaButton />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GameScreen;
