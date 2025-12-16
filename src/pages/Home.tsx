import { IonPage, IonContent } from '@ionic/react';
import './Home.css';
import { ChessTimer } from '../components/ChessTimer/ChessTimer';
import { useCellSize } from '../hooks/useCellSize';
import { ChessBoard } from 'react-chessboard-ui';

const Home: React.FC = () => {
  const cellSize = useCellSize();

  return (
    <IonPage>
      <IonContent className="page" scrollY={true}>
        <div className="flex flex-col items-center justify-center h-full">
          <ChessBoard 
            FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            onChange={() => {}}
            onEndGame={() => {}}
            config={{ cellSize }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
