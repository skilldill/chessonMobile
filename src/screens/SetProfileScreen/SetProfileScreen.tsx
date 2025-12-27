import { IonPage, IonContent, IonText } from '@ionic/react';
import { useState } from 'react';
import { MemAvatarSelect } from '../../components/MemAvatarSelect/MemAvatarSelect';
import { ChessButton } from '../../components/ChessButton/ChessButton';

const MAX_NICKNAME_LENGTH = 16;

type SetProfileScreenProps = {
  onSetUserName: (userName: string, avatarIndex: number) => void;
}

const SetProfileScreen: React.FC<SetProfileScreenProps> = ({ onSetUserName }) => {
  const handleToPlay = ({ nickname, avatarIndex }: { nickname: string, avatarIndex: number }) => {
    onSetUserName(nickname, avatarIndex);
  };

  return (
    <IonPage>
      <IonContent>
        <form className="grid grid-rows-[1fr_88px] h-full">
          <div className="flex flex-col justify-center items-center gap-[20px]">
            <IonText>
              <h1 
                className="text-white text-center" 
                style={{ fontSize: 30, margin: 0, fontWeight: 600 }}
              >
                Input your name <br /> sand choice avatar
              </h1>
            </IonText>
            <div className="w-full px-[36px] py-[20px]">
              <input
                type="text"
                value={'123'}
                onChange={() => { }}
                placeholder="Your name"
                className="bg-white/4 w-full h-[46px] px-[12px] py-[11px] text-base leading-[24px] placeholder-[#99A1AF] rounded-md focus:border-indigo-700 focus:outline-none focus:border-[2px] focus:border-[#615FFF] focus:px-[10px] focus:bg-black"
              />
            </div>
            <MemAvatarSelect onSelectAvatar={() => { }} />
          </div>
          <div className="w-full px-[36px] py-[20px]">
            <ChessButton onClick={() => {}}>Create room</ChessButton>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default SetProfileScreen;

