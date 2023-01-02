import ButtonMenu from "@/components/Button/ButtonMenu";
import CardPrimary from "@/components/Card/CardPrimary";
import CardSecondary from "@/components/Card/CardSecondary";
import FilterButton from "@/components/shared/FilterButton";
import Typography from "@/components/shared/Typography";
import Layout from "@/components/template";
import Image from "next/image";
import { Substract1, Substract2, Substract3, Dots } from "public/image/index";
import { dataLineUp, dataWorkShop } from "public/static";
import { useState } from "react";

export default function WorkshopPage() {
  return (
    <Layout>
      <_HeadersSection />
      <_ListWorkshopSection />
    </Layout>
  );
}

const _HeadersSection = () => {
  return (
    <section className="mt-24 px-4 lg:mb-12 lg:mt-36 xl:max-w-screen-xl mx-auto">
      <div
        className="bg-woHead w-full h-44 bg-center bg-cover bg-no-repeat 
      rounded-t-lg grid place-content-center relative lg:h-80"
      >
        <div className="absolute flex items-center top-5">
          <div className="w-9 lg:w-28">
            <Image src={Substract1} alt="foto" />
          </div>
          <div className="w-10 lg:w-32">
            <Image src={Substract3} alt="foto" />
          </div>
        </div>
        <div className="absolute right-0 top-1/3">
          <div className="w-8 lg:w-20">
            <Image src={Substract2} alt="foto" />
          </div>
        </div>
        <div className="absolute top-[1.5rem] right-1/3">
          <div className="w-12 lg:w-24">
            <Image src={Dots} alt="foto" />
          </div>
        </div>
        <Typography xl semibold className="text-white lg:text-[3.25rem]">
          Workshop in Takjub Akbar
        </Typography>
      </div>
      <div className="bg-secondary w-full h-5 lg:h-7 rounded-b-lg" />
    </section>
  );
};

const _ListWorkshopSection = () => {
  const [filter, setFilter] = useState("Semua");
  const [filterDate, setFilterDate] = useState("27 Januari 2023");
  return (
    <section className="xl:max-w-screen-xl mx-auto pb-12">
      <div>
        <div className="flex lg:items-center lg:justify-between lg:px-4">
          <div className="hidden md:block">
            <FilterButton
              border
              onChange={setFilter}
              value={filter}
              data={[{ name: "27 Januari 2023" }, { name: "28 Januari 2023" }, { name: "29 Januari 2023" }]}
            />
          </div>
          <div className="flex justify-center px-4 mt-4 gap-6 lg:mt-0 lg:px-0">
            <div className="flex-grow md:hidden">
              <ButtonMenu
                onChange={setFilterDate}
                value={filterDate}
                data={[{ name: "27 Januari 2023" }, { name: "28 Januari 2023" }, { name: "29 Januari 2023" }]}
              >
                {filterDate}
              </ButtonMenu>
            </div>
            <div className="flex flex-grow">
              <ButtonMenu
                onChange={setFilter}
                value={filter}
                data={[{ name: "Semua" }, { name: "Plenary" }, { name: "Workshop" }, { name: "Bincang Dagang" }]}
              >
                {filter}
              </ButtonMenu>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-8 px-4 mt-6 lg:grid-cols-3">
          {dataWorkShop.map((el, i) => {
            return <CardPrimary key={i} data={el} small />;
          })}
        </div>
      </div>
    </section>
  );
};
