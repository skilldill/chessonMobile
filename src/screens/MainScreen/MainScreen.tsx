import { IonPage, IonContent, IonImg } from '@ionic/react';
import { Chessboard3DScene } from '../../components/Chessboard3DScene/Chessboard3DScene';
import { useHistory } from 'react-router';


const MainScreen: React.FC = () => {
    const history = useHistory();

    const handleClickCreateOnlineRoom = () => {
        history.push('/createRoom');;
    }

    const handleClickTwoAtTheBoard = () => {
        history.push('/offlineGame');
    }

    return (
        <IonPage>
            <IonContent className="main-screen-content">
                <div className="h-full relative flex flex-col justify-center items-center">
                    <Chessboard3DScene />
                    <div className="h-[300px] flex flex-col justify-between gap-[24px] absolute right-0 left-0 px-[36px]">
                        <div className="flex items-center justify-center">
                            <IonImg src="/chesson-logo.svg" alt="Chesson Logo" style={{ width: '60%' }} />
                        </div>
                        <div className="flex flex-col gap-[24px]">
                            <button
                                className="flex justify-center items-center gap-[8px] bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300 text-lg cursor-pointer"
                                onClick={handleClickCreateOnlineRoom}
                                style={{
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    WebkitTouchCallout: 'none',
                                    padding: 12,
                                    borderRadius: '0.375rem',
                                    lineHeight: '24px'
                            }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                                </svg>
                                Play online with friend
                            </button>
                            <button
                                className="flex justify-center items-center gap-[8px] bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition duration-300 text-lg cursor-pointer"
                                onClick={handleClickTwoAtTheBoard}
                                style={{
                                    userSelect: 'none',
                                    WebkitUserSelect: 'none',
                                    WebkitTouchCallout: 'none',
                                    padding: 12,
                                    borderRadius: '0.375rem',
                                    lineHeight: '24px'
                            }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                                </svg>
                                Two at the board
                            </button>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MainScreen;