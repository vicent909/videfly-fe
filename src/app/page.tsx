"use client";
import ButtonMain from "@/components/ButtonMain";
import Kit from "@/components/Kit";
import { useGlobalContext } from "@/contexts/GlobalContext";
import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { div, p } from "framer-motion/client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { toggleState } = useGlobalContext();
  const [active, setActive] = useState("all");

  const data = [
    {
      title: "Creative Vibes",
      images:
        "https://s3-alpha-sig.figma.com/img/8ed2/22ba/34a070678491d6c02e51b8c2127844d1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cE9k6uf9hxW~~jjrtMDbYEMDusKqmVOP3SleYdO8pb5mbRsprWET0XuO5fals-3jcXZxKnwZZ1nPx3~PdwpQdZ2dopR1SPsaghD3iF4AOcMt88wYBLafTbBRLBJegUGMdEhd-6vlHIuRGec~1bT0tZI-Ru0TK-hqxrUS3KcKpvorG-3wyVF3KnNOeODq-JWWZRvXyNfoobc-WLONEM7f26i-RKwoh6Cg~mddwP4S7CVgss~5J4nnYZIqMlZGRivXXo550LupljS7DVtFBEw80lhXy4rlX9jG4g~G4q~iEP~LMuz2F9mMFwsSImdU-CVwYpTjR7q69i7UaVkKH0XaNg__",
      music: "Upbeat Indie pirates",
      colors: ["#FFEB3B", "#FF4081", "#00BCD4"],
    },
    {
      title: "Tropical",
      images:
        "https://s3-alpha-sig.figma.com/img/6b37/5b5c/9ff607b3d913ca19c6eb80702c9e2970?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mewcuRIkULCqunyr07hiSo5cow7gLT77THS1AXOqiGKpfnOKDxw-uCPuHBZutg8rU9g72t4yvpF-zCif7Xjd7Yey2nvI1TRehKBJmcGHVL6gzizkAdP3p0VIIw1XSle5QRerTdWiWIk0zdbE0QssL5sJR5adSiceRWGhZPrPAuvb-~PIRnmTbY7GSC0lxp9DI3A3aqS4QlaEzfGMGJUj15ilirrZRZCGDtnUSgczCg6WOO9QicXtUL-qSFzpCNRDvY1ZgxP2yQsKSWNQ8L8uXRlSJAPprcQLjFfwE-Ti1mu8mkJq8xe6YpUZg3TfOLaNYvmMAQU61~fikqhz8i7r7Q__",
      music: "Tropical house",
      colors: ["#FF6347", "#40E0D0", "#FFDA89"],
    },
    {
      title: "Pastel Serenity",
      images:
        "https://s3-alpha-sig.figma.com/img/847d/45c0/a81034000864dbb2d882a1162f04f6dc?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn674kRtRCCqYFZshlDpQJRB8ubFe~z-uLUfPa-ko2Wem8O1GzwAM-Wx5W1vY44UyWCWXIhM2YNjBh9XiTUf0Ohg12DTLqQOjxwSzTpi~IbJ--kQUpVMeuvmjb2DmiiQ1ZF4E1MUazolfnHVEwCyYEjU-cqEn03ajEkQEbqW3baH~PwyxHl88h0zpw~fGpQUZzcWg9pD49j2-sF9jj6J9qtIR3J7VQvnSuLmLkrxpriYCVC-GWsWzaknaR2pdDWPCADtE5pYMhPx6iXiXolBgwUX6G1PGkcyAzwfMf9kbkC8cw4dtQZU6-V8zvGJG3uiRrILVrO5EIecaVIk4tm54g__",
      music: "Ambient Electric",
      colors: ["#B2DFFC", "#F8C3D6", "#D9BFE8"],
    },
    {
      title: "Floral Romance",
      images:
        "https://s3-alpha-sig.figma.com/img/0a1c/49c1/026eacf058dc4b5c342b680e47ea6501?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oC1im9CJL27oPxN4mjaB79Bd2~ibCTCRIPAanoK962tQQFOMLGQw8x25mGQwiCTJKf2-eAhGEiOXAY2QwKOSeKypxgDs9Ix3cObgmhrJHzhjLEFFKjpdQ0gdkEBR4ePkcRJZkFhRvhZlQtpYT6J6Bi3oAtKh5ChS1qi0AIKKvKraAVxmbzSJT5~DhSCTmMb4yA2xYjEn6mMWpaXNtClrs54BUHsJjbNTXJT05H0BFTE6GMPMfRYYMHlP88jCgRlI~n1o8vJIEOpaED62ZP-0CF7GA44KUaCHrowQfCgvq-kVaFgIyaBc6RfdmsFtd~ztQZIKAUIF~D-~6BK7vOmi~A__",
      music: "Acoustic Love Song",
      colors: ["#C3A3E6", "#FFC4A3", "#FFF5E4"],
    },
    {
      title: "Minimalis Zen",
      images:
        "https://s3-alpha-sig.figma.com/img/6548/2fa8/405f3cece1fef9883f423d9367884896?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4fuK1Pka3lrdXn2f4o-l~JAo~E1nR1mNJAT-XNHJEE6ybWYQe2uy~VuhtJqSvwB58rSjwW2nUjPdvowdhu3WielRzNACeINQIG3wAheiy1YTYOi04vTH0yQGnMSRYSHF1MhkUMhqUauJfoMM6UsDIVFtzpJmuogsaTUids5iDhxdrCrxn~4y2CSwYhEho8x87~Oj15oc4zdMrPublcvC6~jLQ44C1YNFfNHBuxHa~g1fs020H-h4pdJCZY4V6VXRbQq-d5lnGKHy7GiyIpo5j4~oJqIpIePCQr75khdiKQqY6NkltbxS-g3rOx-Rh2W7sSYWYj5TMMboLiQ0zqLlQ__",
      music: "Calm Instrumental",
      colors: ["#9CBA9E", "#F5F5F5", "#D3D3D3"],
    },
    {
      title: "Urban Jungle",
      images:
        "https://s3-alpha-sig.figma.com/img/7bb6/964e/74a522a1c23770b66eaebb0ea82c9d21?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJcP-KpU1P8N1cbsZFoFfp8oBiKTqKJx90g5OSvQhItql8AFIgHSr6r69xfLwmT9qDfmkK99uQ1YQqcsLKYepyf5hrg2mLfxLLXdIeaaiMG2EG466rjnDIjVTecwlVpYCHtbRyflAYiEH~QTMMHJ58w6r9OTMklJkTVYf9N4Apxb3s83uRTGpSIY5LsDAQtlBKpvpeoNZBUGk5-UQC6tk7zmfOfNfUFw0mceI8v1yKY6rK0gmt67KnghmDdIoA4jcx83FR0wLQvqG2iq63pd4YkkKFdFQtRRZuiOPvdIfhJi52115oRQlqH9tc2eLEEx1QOTtoJ9oXV6pXvIQ3hlrg__",
      music: "Chill Electronic",
      colors: ["#014421", "#6B4226", "#F5F5DC"],
    },
    {
      title: "Vintage",
      images:
        "https://s3-alpha-sig.figma.com/img/bc75/9a70/94c5392d5bd6596aac95b0253d6621bb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EzYsE13ZeLki2gT2hsbh~eNoS69V5Ic4j-0-D4i717~ReVtsbwHi9fdFLvlhyBe4I68oEUQtRR2fJrSe1spx9iurUuJkcf1NGxJcqHvcd~xOV9pc4~aHUAd6krN1Bko2McWzWKX48hz4szgpfdM8pQYAakCDgKvFGn4KIyACItBFKN3zqfxFEHJpYFDiaYJ0taI9jVmFNLntmOebRgGUfZFAmEs1f4QNQfDAuUnS9540DxOuLLHdd3nwf~OMQCfA4VJZGC1TjUJvHe7WwPUxst30n4qOKsaInekGAl7xwnRy1fZD0nWH~dFzoAyYg8nAzQhi92237g43z6RZYhzktA__",
      music: "Everything Strong",
      colors: ["#DBC997", "#432115", "#000000"],
    },
    {
      title: "Beauty Dream",
      images:
        "https://s3-alpha-sig.figma.com/img/77cf/efc1/9b603ec65fd2ae12756da212d81885ef?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aLzdHmPVmUOXPe4vhn9fQJCszGpO5SEK8bnKgLUl0d8VJsS87DhByyLlD7CdyiaVQRA1aqTHbXLymc4HQ8lVCO2KGGuOmbKMWS-z3SLz6AGc1RJ29hH1VA-y8oLw36AQsfw371MYjbiB26Dq3rQIqXs3dcqJEqbLJU2bJ-80j5Oz8oqJiIpR41K9kzqJ9epKLHAAY7BbXSGwK-d6VHIeQ3YVS8wvBjC6PDTMC6kTJBqihSoCAYtYRG8jHZPc-zG9b8UxYJYYrdRqFF86gf1yU-O3~61crefRMoNh3yeIjq2YhEimllzXb34a5e6uRaHn-8Uz4jbIJw5IdZxsD1Ty-w__",
      music: "Indie Folk",
      colors: ["#D08C60", "#A9C2D8", "#F5F5DC"],
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="px-8 lg:px-11 py-4 lg:py-9 min-h-screen">
      <div>
        <p className="font-nunito font-bold text-2xl text-text-dark mb-2">
          Bangun Identitas Brand yang Konsisten
        </p>
        <p className="text-text-gray font-semibold ">
          Pilih brand kit yang sesuai dengan brand anda atau buat sendiri untuk
          <br /> tampilan yang konsisten
        </p>
      </div>
      <div className="mt-9">
        <div className="flex justify-between">
          <p className="font-nunito font-bold text-2xl text-text-dark mb-2">
            Rekomendasi Brand Kit
          </p>
          <>
            <div
              onClick={() => onOpen()}
              className="cursor-pointer hover:text-text-secondary"
            >
              Lainnya
            </div>
            <Modal
              placement="center"
              size={"5xl"}
              isOpen={isOpen}
              onClose={onClose}
              className="!h-3/4 overflow-scroll scrollbar-hide"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    {/* <ModalHeader className="flex flex-col gap-1"></ModalHeader> */}
                    <div className="h-full">
                      <div className="flex flex-col lg:flex-row h-full">
                        <div className="flex mb-2 bg-red p-6 lg:mb-0 lg:flex-col lg:h-full gap-1 border-r-1 pr-2 flex-shrink-0 overflow-scroll scrollbar-hide">
                          <div
                            onClick={() => {
                              setActive("all");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "all"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Semua brand kit</p>
                          </div>
                          <div
                            onClick={() => {
                              setActive("rekomendasi");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "rekomendasi"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Rekomendasi</p>
                          </div>
                          <div
                            onClick={() => {
                              setActive("nature");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "nature"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Nature & Calm</p>
                          </div>
                          <div
                            onClick={() => {
                              setActive("elegance");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "elegance"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Elegance & Classics</p>
                          </div>
                          <div
                            onClick={() => {
                              setActive("vintage");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "vintage"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Vintage</p>
                          </div>
                          <div
                            onClick={() => {
                              setActive("fun");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "fun"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Fun</p>
                          </div>
                          <div
                            onClick={() => {
                              setActive("tropical");
                            }}
                            className={`flex cursor-pointer transition ease w-full nav-item gap-3 px-4 py-3 rounded-xl hover:bg-bg-secondary min-w-fit ${
                              active === "tropical"
                                ? "bg-bg-secondary text-text-secondary font-semibold"
                                : ""
                            }`}
                          >
                            <p>Tropical</p>
                          </div>
                        </div>
                        <div className="p-6 pt-0 lg:pt-6">
                          <div className="flex justify-end">
                            <label className="input input-bordered flex items-center gap-2 bg-bg-secondary h-10 px-4 rounded-xl w-full lg:w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <input
                                type="text"
                                placeholder="Search"
                                className="bg-transparent w-full h-full outline-none"
                              />
                            </label>
                          </div>
                          <div className="pt-4 flex flex-wrap overflow-scroll scrollbar-hide h-full content-start gap-6">
                            {data.map((e, i) => {
                              return (
                                <div>
                                  <Kit
                                    key={e.title}
                                    title={e.title}
                                    images={e.images}
                                    music={e.music}
                                    colors={e.colors}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <ModalFooter>
                    </ModalFooter> */}
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </div>
        <div className="flex gap-4 w-full flex-nowrap overflow-scroll scrollbar-hidden pb-2 ">
          {data.map((e, i) => {
            return (
              <Kit
                key={e.title}
                title={e.title}
                images={e.images}
                music={e.music}
                colors={e.colors}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-7">
        <p className="font-nunito font-bold text-2xl text-text-dark mb-2">
          Buat Brand Kit Anda
        </p>
        <p className="text-text-gray ">
          Desain setiap detail brand kit Anda agar selaras dengan karateristik
          <br /> bisnis anda
        </p>
      </div>
      <div className="mt-4">
        <ButtonMain
          name={"Buat brand kit"}
          onClick={() => console.log("btn")}
        />
      </div>
    </div>
  );
}
