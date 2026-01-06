import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import maxwellModel from "../../assets/3d/maxwell.glb";

// Предзагружаем модель для оптимизации
useGLTF.preload(maxwellModel);

const RotatingCat = () => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(maxwellModel);

    // Клонируем и настраиваем сцену только один раз с помощью useMemo
    const clonedScene = useMemo(() => {
        if (!scene) return null;
        const cloned = scene.clone(true); // deep clone для клонирования материалов
        
        // Модифицируем материалы только один раз при клонировании
        cloned.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                // Клонируем материал, чтобы не изменять оригинал
                const originalMaterial = child.material as THREE.MeshStandardMaterial;
                if (originalMaterial.isMeshStandardMaterial) {
                    // Создаем новый материал на основе оригинала
                    const material = originalMaterial.clone();
                    
                    // Сохраняем исходный цвет, клонируем его и умножаем на копии
                    const originalColor = originalMaterial.color.clone();
                    const modifiedColor = originalColor.clone().multiplyScalar(0.5);
                    material.color.copy(modifiedColor);
                    
                    // Увеличиваем яркость через emissive
                    material.emissive = new THREE.Color(0xb5b8c0);
                    material.emissiveIntensity = 0.06;
                    
                    child.material = material;
                }
            }
        });
        
        return cloned;
    }, [scene]);

    useEffect(() => {
        if (groupRef.current && clonedScene) {
            // Вычисляем bounding box для автоматического масштабирования
            const box = new THREE.Box3().setFromObject(clonedScene);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            
            // Масштабируем модель чтобы она помещалась в кадр (примерно 2 единицы)
            const scale = 2 / maxDim;
            groupRef.current.scale.set(scale, scale, scale);
            
            // Центрируем модель
            const center = box.getCenter(new THREE.Vector3());
            groupRef.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
        }
    }, [clonedScene]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Используем requestAnimationFrame для плавного вращения
            groupRef.current.rotation.y += delta * 18; // Скорость вращения
        }
    });

    if (!clonedScene) return null;

    return (
        <group ref={groupRef}>
            <primitive object={clonedScene} />
        </group>
    );
};

export const MaxwellCatLoader = () => {
    return (
        <div style={{ 
            // width: '80px', 
            // height: '80px', 
            borderRadius: '50%', 
            // backgroundColor: '#ffffff80',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                style={{ width: '80px', height: '80px' }}
                gl={{ 
                    antialias: true, 
                    alpha: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: false
                }}
                frameloop="always"
                dpr={[1, 2]}
            >
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <directionalLight position={[-5, 5, -5]} intensity={1.2} />
                <pointLight position={[0, 5, 0]} intensity={1.0} />
                <pointLight position={[-5, -5, -5]} intensity={0.8} />
                <pointLight position={[5, -5, 5]} intensity={0.8} />
                <RotatingCat />
            </Canvas>
        </div>
    );
};
