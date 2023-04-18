import { useFrame } from "@react-three/fiber";

const RotatingComputer = ({ computerRef }) => {
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime() / 3; // Divide by a constant to slow down the rotation
    computerRef.current.rotation.y = elapsed % (Math.PI * 2); // Use modulo operator to keep rotation continuous
  });

  return null;
};

export default RotatingComputer;
