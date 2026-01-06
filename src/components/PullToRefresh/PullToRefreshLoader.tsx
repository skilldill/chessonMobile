import { useState, useEffect } from "react";
import { IonSpinner } from '@ionic/react';
import { MaxwellCatLoader } from "./MaxwellCatLoader";

export const PullToRefreshLoader = () => {
    const [showCat, setShowCat] = useState(false);

    useEffect(() => {
        // Случайно выбираем между spinner и котом
        const randomChoice = Math.random() < 0.5;
        setShowCat(randomChoice);
    }, []);

    return showCat ? 
        <MaxwellCatLoader /> : 
        <div style={{ padding: 40 }}>
            <IonSpinner />
        </div>
    ;
};

