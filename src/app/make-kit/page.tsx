"use client";
import React, { useEffect, useState } from "react";
import "@rc-component/color-picker/assets/index.css";
import Sketch from "@uiw/react-color-sketch";
import {
  AddImage,
  DownChevron,
  LeftChevron,
  LogoBoa,
  Paint,
  Plus,
} from "@/assets";
import Link from "next/link";
import Image from "next/image";
import ImageDeleteBtn from "@/components/ImageDeleteBtn";
import LogoComponent from "@/components/LogoComponent";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import ColorPickerComponent from "@/components/ColorPicker";
import { motion } from "framer-motion";
import DropdownComponent, { selected } from "@/components/DropdownComponent";
import ButtonMain from "@/components/ButtonMain";
import ModalInput from "@/components/ModalInput";
import { useRouter } from "next/navigation";

export default function page() {
  const [hex, setHex] = useState("#fff");
  const [data, setData] = useState({
    mainColor: "#fff",
    secondaryColor: "#fff",
    neutralColor: "#fff",
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
  const route = useRouter();

  return (
    <div className="px-8 lg:px-11 py-4 lg:py-9 min-h-screen">
      <Link
        href={"/"}
        className="flex gap-4 px-3 py-2 w-fit hover:underline decoration-text-violet1"
      >
        <LeftChevron />
        <p className="text-text-violet1">Kembali</p>
      </Link>
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
            closeModal={() => {
              setModal(false);
              setIsLoading(false);
            }}
            onClick={(e: string) => {
              console.log(e);
              route.push("/")
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
          {(onClose) => (
            <>
              <div className="h-fit">
                <Sketch
                  color={hex}
                  disableAlpha={true}
                  onChange={(color) => handleClick(color.hex)}
                />
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
