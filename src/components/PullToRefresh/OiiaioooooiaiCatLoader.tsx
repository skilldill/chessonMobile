import { useFrame } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import maxwellModel from "../../assets/3d/oiiaioooooiai_cat.glb";

// Предзагружаем модель для оптимизации
useGLTF.preload(maxwellModel);

const RotatingCat = () => {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF(maxwellModel);

    // Клонируем и настраиваем сцену только один раз с помощью useMemo
    const clonedScene = useMemo(() => {
        if (!scene) return null;
        const cloned = scene.clone();
        
        // Модифицируем материалы только один раз при клонировании
        cloned.traverse((child) => {
            if (child instanceof THREE.Mesh && child.material) {
                const material = child.material as THREE.MeshStandardMaterial;
                if (material.isMeshStandardMaterial) {
                    // Увеличиваем яркость через emissive
                    material.emissive = new THREE.Color(0xb5b8c0);
                    material.emissiveIntensity = 0.05;
                    // Увеличиваем яркость базового цвета
                    if (material.color) {
                        material.color.multiplyScalar(0.5);
                    }
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

export const OiiaioooooiaiCatLoaderLoader = () => {
    return (
        <div style={{ 
            width: '46px', 
            height: '46px', 
            borderRadius: '50%', 
            // backgroundColor: '#ffffff80',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                style={{ width: '170px', height: '170px' }}
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
