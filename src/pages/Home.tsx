import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { ChessTimer } from '../components/ChessTimer/ChessTimer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Chesson Mobile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Hello Chesson Mobile!</h1>
        <ChessTimer seconds={100} initSeconds={100} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
