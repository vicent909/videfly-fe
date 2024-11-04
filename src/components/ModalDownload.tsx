import { Modal, ModalContent } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import ButtonMain from "./ButtonMain";
import ButtonSecondary from "./ButtonSecondary";
import { Checklist } from "@/assets";
import { motion } from "framer-motion";

export default function ModalDownload({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [download, setDownload] = useState(false);

  useEffect(() => {
    if(download){
      setTimeout(() => {
        closeModal();
        setDownload(false);
      }, 3000);
    }
  }, [download])

  return (
    <div>
      <Modal
        placement="center"
        isOpen={isOpen}
        onClose={closeModal}
        size={"md"}
        className="h-[260px] flex justify-center"
      >
        <ModalContent>
          {() => (
            <div>
              {download ? (
                <div className="px-8 flex flex-col gap-9 items-center justify-center">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 1 }} // Starting scale
                      animate={{ scale: [1, 2, 1] }} // Scale to 1.5 and back to 1
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity, // Repeat indefinitely
                        repeatType: "mirror", // Alternate between scaling up and down
                      }}
                      className="bg-bg-main h-[50px] aspect-square flex items-center justify-center rounded-full bg-opacity-30"
                    ></motion.div>
                    <div className="bg-bg-main h-[50px] aspect-square flex items-center justify-center rounded-full absolute top-0">
                      <Checklist />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    <p className="font-semibold text-base">
                      Brand Kit Berhasil diunduh
                    </p>
                  </div>
                </div>
              ) : (
                <div className="px-8 flex flex-col gap-9">
                  <div className="flex flex-col gap-2 text-center">
                    <p className="font-semibold text-base">
                      Apakah anda yakin ingin mengunduh Brand Kit ini?
                    </p>
                    <p className="text-xs text-text-gray">
                      Unduh Brand Lit ini akan menggunakan 1 kredit.
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <ButtonSecondary title="Cancel" onClick={closeModal} />
                    <ButtonMain
                      name="Download"
                      onClick={() => setDownload(true)}
                      isLoading={false}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
