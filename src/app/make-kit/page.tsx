"use client";
import React, { useState } from "react";
import "@rc-component/color-picker/assets/index.css";
import Sketch from "@uiw/react-color-sketch";
import { AddImage, LeftChevron, Plus } from "@/assets";
import Link from "next/link";
import LogoComponent from "@/components/LogoComponent";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import ColorPickerComponent from "@/components/ColorPicker";
import DropdownComponent, { selected } from "@/components/DropdownComponent";
import ButtonMain from "@/components/ButtonMain";
import ModalInput from "@/components/ModalInput";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function MakeKit() {
  const [data, setData] = useState({
    mainColor: "#C65D72",
    secondaryColor: "#F9EEF1",
    neutralColor: "#2D2D2D",
    headingLight: "#fff",
    headingDark: "#fff",
    bodyLight: "#fff",
    bodyDark: "#fff",
  });
  const [active, setActive] = useState("mainColor");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [headingSelected, setHeadingSelected] = useState({
    title: "",
    style: "",
  });
  const [bodySelected, setBodySelected] = useState({
    title: "",
    style: "",
  });

  const listFont = [
    {
      title: "Poppins Bold",
      style: "font-poppins font-bold",
    },
    {
      title: "Poppins Semi Bold",
      style: "font-poppins font-semibold",
    },
    {
      title: "Poppins Normal",
      style: "font-poppins",
    },
    {
      title: "Nunito Bold",
      style: "font-nunito font-bold",
    },
    {
      title: "Nunito Semi Bold",
      style: "font-nunito font-semibold",
    },
  ];

  const handleClick = (color: string) => {
    setData({ ...data, [active]: color });
  };

  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [back, setBack] = useState(false);
  const route = useRouter();

  return (
    <div className="px-8 lg:px-11 py-4 lg:py-9 min-h-screen">
      <div
        onClick={() => setBack(true)}
        className="flex gap-4 px-3 py-2 w-fit hover:underline decoration-text-violet1 cursor-pointer"
      >
        <LeftChevron />
        <p className="text-text-violet1">Kembali</p>
      </div>
      <div className="mt-9">
        <div>
          <p className="font-semibold text-lg">Logo</p>
          <div className="pt-4 flex gap-4  overflow-scroll scrollbar-hide">
            <div className="w-[220px] h-[96px] bg-bg-secondary flex flex-col items-center justify-center rounded-xl cursor-pointer flex-shrink-0">
              <AddImage />
              <p className="text-text-gray-2">Upload Logo</p>
            </div>
            <LogoComponent
              type="Cerah"
              image="https://s3-alpha-sig.figma.com/img/eb81/094e/d650a8777d60706df47b9a4e78b8961c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDcDB9VcjFhjFP0klRnSfnxDCU3nBfvGKsAj1-FpXvTf8Hm88xxRkZHfD7V3PR9tBYK3HWuDmXhrZ-BN5kgyA6t4~dygjJkYBsHXzD~~KxZmFx596sdhO-cPb-KXMxOWnR8-70aG5z~j5Ktj8n96dauLK2q46Wk59SBMk1gUa2VPCjwRTWyUn3JpAAyO1UmCxeM4eLSgGR-gtvkVBS36U17qh330Zl5YMIxtu~Qp25ZQsQI-USsIzrE9vwmlMJfWrTeYdThqz1pA7xgJHDwynHxuZEeVmoymwpqJPcH6cA3TXCRjhaPJ0W-lln0G5V1Qx6p0JKfswJ66m8skK4S6ow__"
            />
            <LogoComponent
              type="Gelap"
              image="https://s3-alpha-sig.figma.com/img/eb81/094e/d650a8777d60706df47b9a4e78b8961c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDcDB9VcjFhjFP0klRnSfnxDCU3nBfvGKsAj1-FpXvTf8Hm88xxRkZHfD7V3PR9tBYK3HWuDmXhrZ-BN5kgyA6t4~dygjJkYBsHXzD~~KxZmFx596sdhO-cPb-KXMxOWnR8-70aG5z~j5Ktj8n96dauLK2q46Wk59SBMk1gUa2VPCjwRTWyUn3JpAAyO1UmCxeM4eLSgGR-gtvkVBS36U17qh330Zl5YMIxtu~Qp25ZQsQI-USsIzrE9vwmlMJfWrTeYdThqz1pA7xgJHDwynHxuZEeVmoymwpqJPcH6cA3TXCRjhaPJ0W-lln0G5V1Qx6p0JKfswJ66m8skK4S6ow__"
            />
          </div>
        </div>
        <div className="mt-9">
          <p className="font-semibold text-lg">Warna</p>
          <div className="pt-4 flex gap-4 overflow-scroll scrollbar-hide lg:scrollbar-default">
            <ColorPickerComponent
              title="Warna utama"
              color={data.mainColor}
              onClick={() => {
                onOpen();
                setActive("mainColor");
              }}
            />
            <ColorPickerComponent
              title="Warna pendukung"
              color={data.secondaryColor}
              onClick={() => {
                onOpen();
                setActive("secondaryColor");
              }}
            />
            <ColorPickerComponent
              title="Warna netral"
              color={data.neutralColor}
              onClick={() => {
                onOpen();
                setActive("neutralColor");
              }}
            />
          </div>
        </div>
        <div className="mt-9">
          <div className="flex items-center gap-4 justify-between lg:justify-start">
            <p className="font-semibold text-lg">Font</p>
            <div className="flex gap-2 bg-bg-secondary py-1 px-3 rounded-xl">
              <p>Tambah Font</p>
              <Plus />
            </div>
          </div>
          <div className="pt-4 flex gap-4 overflow-scroll scrollbar-hide lg:scrollbar-default">
            <div>
              <p className="text-text-gray-2">Heading</p>
              <DropdownComponent
                title="Heading"
                data={listFont}
                selected={headingSelected}
                onClick={(e: selected) =>
                  setHeadingSelected({
                    title: e.title,
                    style: e.style,
                  })
                }
              />
            </div>
            <ColorPickerComponent
              title="Warna font (Latar cerah)"
              color={data.headingLight}
              onClick={() => {
                onOpen();
                setActive("headingLight");
              }}
            />
            <ColorPickerComponent
              title="Warna font (Latar gelap)"
              color={data.headingDark}
              onClick={() => {
                onOpen();
                setActive("headingDark");
              }}
            />
          </div>
          <div className="pt-4 flex gap-4 overflow-scroll scrollbar-hide lg:scrollbar-default">
            <div>
              <p className="text-text-gray-2">Body</p>
              <div>
                <DropdownComponent
                  title="Body"
                  data={listFont}
                  selected={bodySelected}
                  onClick={(e: selected) =>
                    setBodySelected({
                      title: e.title,
                      style: e.style,
                    })
                  }
                />
              </div>
            </div>
            <ColorPickerComponent
              title="Warna font (Latar cerah)"
              color={data.bodyLight}
              onClick={() => {
                onOpen();
                setActive("bodyLight");
              }}
            />
            <ColorPickerComponent
              title="Warna font (Latar gelap)"
              color={data.bodyDark}
              onClick={() => {
                onOpen();
                setActive("bodyDark");
              }}
            />
          </div>
        </div>
        <div className="mt-9">
          <div className="flex items-center gap-4 justify-between lg:justify-start">
            <p className="font-semibold text-lg">Brand Voice</p>
          </div>
          <div className="pt-4 flex gap-4 overflow-scroll scrollbar-hide lg:scrollbar-default">
            <DropdownComponent
              title="Pilih brand voice"
              data={listFont}
              selected={headingSelected}
              onClick={(e: selected) =>
                setHeadingSelected({
                  title: e.title,
                  style: e.style,
                })
              }
            />
          </div>
        </div>
        <div className="flex justify-end mt-10">
          <ButtonMain
            name="Simpan"
            onClick={() => {
              setModal(true);
              setIsLoading(true);
            }}
            isLoading={isLoading}
          />
          <ModalInput
            isOpen={modal}
            title="Beri nama Brand Kit anda"
            closeModal={() => {
              setModal(false);
              setIsLoading(false);
            }}
            onClick={(e: string) => {
              console.log(e);
              route.push("/");
            }}
          />
        </div>
      </div>
      <Modal
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
        className="!w-fit"
      >
        <ModalContent>
          {() => (
            <>
              <div className="h-fit">
                <Sketch
                  color={"#fff"}
                  disableAlpha={true}
                  onChange={(color) => handleClick(color.hex)}
                />
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        placement="center"
        isOpen={back}
        onClose={() => setBack(false)}
        size={"lg"}
        className="w-fit"
      >
        <ModalContent>
          {() => (
            <div className="p-8 flex flex-col gap-9 items-center">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl text-center text-text-dark">
                  Tinggalkan pembuatan Brand Kit?
                </p>
                <p className="text-sm text-center text-text-gray">
                  Perubahan yang belum disimpan akan hilang
                </p>
              </div>
              <div className="flex gap-4 justify-end w-full">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setBack(false)}
                  className="h-[40px] w-[132px] lg:w-[144px] xl:w-[180px] cursor-pointer bg-bg-main text-white px-4 py-2 text-sm rounded-xl hover:bg-hover-main flex items-center justify-center"
                >
                  <p className="text-center">Batal</p>
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => route.push("/")}
                  className="h-[40px] w-[132px] lg:w-[144px] xl:w-[180px] cursor-pointer bg-bg-secondary px-4 py-2 text-sm rounded-xl flex items-center justify-center"
                >
                  <p className="text-center">Kembali</p>
                </motion.div>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
