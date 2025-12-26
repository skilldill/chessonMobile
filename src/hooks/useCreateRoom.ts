import { useState } from "react";
import { API_PREFIX } from "../constants/api";
import { useHistory } from "react-router-dom";

type CreateRoomData = {
    timeMinutes: number; 
    incrementSeconds: number;
}

export const useCreateRoom = () => {
    const [isCreating, setIsCreating] = useState(true);
    const [roomCreatingError, setRoomCreatingError] = useState<string | null>(null);
    const history = useHistory();

    const createRoom = async (roomData: CreateRoomData) => {
        try {
            setIsCreating(true);
            setRoomCreatingError(null);

            const timeSeconds = roomData.timeMinutes * 60;

            const response = await fetch(API_PREFIX + '/rooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    whiteTimer: timeSeconds,
                    blackTimer: timeSeconds,
                    increment: roomData.incrementSeconds
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create room');
            }

            const data = await response.json();

            if (data.success && data.roomId) {
                // Редирект на созданную комнату
                history.push(`/${data.roomId}`);
            } else {
                throw new Error('Invalid response from server');
            }
        } catch (err) {
            console.error('Error creating room:', err);
            setRoomCreatingError(err instanceof Error ? err.message : 'Failed to create room');
            setIsCreating(false);
        }
    };

    return {
        createRoom,
        isCreating,
        roomCreatingError,
    };
}
