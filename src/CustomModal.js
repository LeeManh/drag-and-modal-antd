import React, { useState } from "react";
import { Button, Modal } from "antd";

const CustomModal = (props) => {
  const { children, titleButton, titleModal, isHaveCancelBtn, ...rest } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {titleButton || "  Open Modal"}
      </Button>
      <Modal
        title={titleModal || "Basic Modal"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{
          style: { display: isHaveCancelBtn ? "none" : "" },
        }}
        {...rest}
      >
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
