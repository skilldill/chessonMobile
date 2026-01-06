import { FC, useState, useEffect } from 'react';
import styles from './NetworkWarning.module.css';
import { ChessButton } from '../ChessButton/ChessButton';
import NonConnectionSVG from '../../assets/non-connection.svg';

type NetworkWarningProps = {
    show: boolean;
    onClose?: () => void;
};

export const NetworkWarning: FC<NetworkWarningProps> = ({ show, onClose }) => {
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Сбрасываем состояние закрытия когда show меняется
        if (show) {
            setIsDismissed(false);
        }
    }, [show]);

    const handleClose = () => {
        setIsDismissed(true);
        if (onClose) {
            onClose();
        }
    };

    if (!show || isDismissed) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.iconContainer}>
                    <img src={NonConnectionSVG} alt="no connection" />
                </div>
                <h2 className={styles.title}>
                    No Internet Connection
                </h2>
                <p className={styles.message}>
                    Please check your internet connection and try again.
                </p>
                <div className={styles.buttonContainer}>
                    <ChessButton 
                        className="rounded-md text-sm font-semibold px-4 py-2 bg-[#4F39F6] text-white min-w-[126px] cursor-pointer transition-all duration-300 active:scale-95 focus:outline-none"
                        onClick={handleClose}
                    >
                        OK
                    </ChessButton>
                </div>
            </div>
        </div>
    );
};

