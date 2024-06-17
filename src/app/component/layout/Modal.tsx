'use client';

import { useGlobalState } from '@/contexts/GlobalStateContext';

const Modal: React.FC = () => {
  const { isModalOpen, exitMenu } = useGlobalState();

  return (
    <>
      {isModalOpen && (
        <div>
          Modal Content
          <button onClick={exitMenu}>Close Modal</button>
        </div>
      )}
    </>
  );
};

export default Modal;
