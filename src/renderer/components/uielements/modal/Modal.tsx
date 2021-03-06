import React from 'react'

import { ModalProps } from 'antd/lib/modal'

import { ModalWrapper } from './Modal.style'

interface Props extends ModalProps {
  className?: string
  children?: React.ReactNode
}

const Modal: React.FC<Props> = ({ className = '', children, ...rest }): JSX.Element => {
  return (
    <ModalWrapper
      className={`modal-wrapper ${className}`}
      okButtonProps={{ className: 'ok-ant-btn' }}
      cancelButtonProps={{ className: 'cancel-ant-btn' }}
      {...rest}>
      {children}
    </ModalWrapper>
  )
}

export default Modal
