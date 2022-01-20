import React from 'react';
import { Modal } from 'antd';

interface ModalProps {
  children: JSX.Element,
  isModalVisible?: boolean,
  onClose: () => void,
}

export const ModalLayout: React.FC<ModalProps> = (
  {
    onClose,
    isModalVisible,
    children
}) => {
  // asset prefix
  const {ASSET_PREFIX} = process.env;
  return (
    <Modal
      onCancel={onClose}
      footer={null}
      visible={isModalVisible}
      closeIcon={<img src={ASSET_PREFIX +'/modals/close.svg'} />}
    >
      {children}
    </Modal>
  )
}

