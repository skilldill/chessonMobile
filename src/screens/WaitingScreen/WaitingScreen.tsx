import { IonPage, IonContent, IonText } from '@ionic/react';
import { ShareLinkBlock } from '../../components/ShareLinkBlock/ShareLinkBlock';

const WaitingScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <ShareLinkBlock link={window.location.toString()} />
      </IonContent>
    </IonPage>
  );
};

export default WaitingScreen;

