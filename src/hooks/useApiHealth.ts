import { useState, useEffect } from 'react';
import { CapacitorHttp } from '@capacitor/core';
import { API_PREFIX } from '../constants/api';

export const useApiHealth = () => {
    const [isChecking, setIsChecking] = useState(true);
    const [isOnline, setIsOnline] = useState(false);

    useEffect(() => {
        const checkHealth = async () => {
            setIsChecking(true);
            try {
                const response = await CapacitorHttp.get({
                    url: API_PREFIX + '/health',
                });

                // Проверяем успешный ответ
                if (response.status === 200) {
                    setIsOnline(true);
                } else {
                    setIsOnline(false);
                }
            } catch (error) {
                console.error('API health check failed:', error);
                setIsOnline(false);
            } finally {
                setIsChecking(false);
            }
        };

        checkHealth();
    }, []);

    return {
        isChecking,
        isOnline,
    };
};

