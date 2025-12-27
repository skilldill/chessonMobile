import { IonPage, IonContent, IonText } from '@ionic/react';

const WaitingScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col items-center justify-center h-full px-4 gap-6">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-4 border-[#4F39F6] border-t-transparent rounded-full animate-spin" />
          </div>
          
          <IonText className="text-white text-center text-2xl font-semibold">
            Waiting for opponent...
          </IonText>
          
          <IonText className="text-white/60 text-center text-base">
            Please wait while we find you a match
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WaitingScreen;

