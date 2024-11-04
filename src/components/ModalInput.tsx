import { Modal, ModalContent } from "@nextui-org/react";
import React, { useState } from "react";
import ButtonMain from "./ButtonMain";
import ButtonSecondary from "./ButtonSecondary";

export default function ModalInput({
  isOpen,
  closeModal,
  onClick
}: {
  isOpen: boolean;
  closeModal: () => void;
  onClick: (args: string) => void;
}) {
  const [data, setData] = useState("");

  return (
    <div>
      <Modal
        placement="center"
        isOpen={isOpen}
        onClose={closeModal}
        size={"lg"}
      >
        <ModalContent>
          {() => (
            <div className="p-8 flex flex-col gap-9">
              <div className="flex flex-col gap-2">
                <p>Beri nama Brand Kit anda</p>
                <input
                  type="text"
                  value={data}
                  placeholder="Nama Brand Kit"
                  className="bg-bg-secondary w-full outline-none py-3 px-4 rounded-xl"
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div className="flex gap-4 justify-end">
                <ButtonSecondary title="Batal" onClick={closeModal} />
                <ButtonMain name="Simpan" onClick={() => onClick(data)} isLoading={false} />
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
