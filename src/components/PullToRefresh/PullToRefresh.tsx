import { FC, PropsWithChildren, useState, TouchEvent, useMemo } from "react";
import { IonSpinner } from '@ionic/react';
import { debounce } from "../../utils/debounce";

type PullToRefreshProps = {
    onRefresh?: () => void;
    loader?: React.ReactElement;
}

export const PullToRefresh: FC<PropsWithChildren<PullToRefreshProps>> = ({ children, onRefresh, loader }) => {
    const [translateY, setTranslateY] = useState(0);
    const [touchStartY, setTouchStartY] = useState<number>();
    const [withTransition, setWithTransition] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        const { clientY } = event.touches[0];
        setTouchStartY(clientY);
    }

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        if (!touchStartY) return;

        const { clientY } = event.touches[0];
        const diff = clientY - touchStartY;

        if (diff > 100) {
            setTimeout(() => {
                setShowLoader(true);
                setWithTransition(true);
            }, 10)

            setTimeout(() => {
                setTranslateY(80);
            }, 50)
        };
    }

    const handleTouchEnd = debounce(() => {
        if (translateY < 80) {
            setTouchStartY(undefined);
            return;
        }

        console.log(touchStartY);

        onRefresh?.();
        setWithTransition(true);
        
        setTimeout(() => {
            setTranslateY(0);
        }, 2000);
        
        setTimeout(() => {
            setTouchStartY(undefined);
            setWithTransition(false);
            setShowLoader(false);
        }, 2100);
    }, 2100);

    const loaderElement = useMemo(() => loader || <IonSpinner />, [loader]);

    return (
        <div
            style={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                // height: 60,
                // padding: 40,
                zIndex: 90,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {showLoader && loaderElement}
            </div>
            <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  zIndex: 100,
                  transform: `translateY(${translateY}px)`,
                  backgroundColor: 'var(--background)',
                  transition: withTransition ? 'all .1s' : 'none',
                }}

                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {children}
            </div>
        </div>
    )
}
