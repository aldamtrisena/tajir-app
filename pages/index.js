import Template from "@/components/template";
import BgImage from "public/image/imagebg.png";
import Typography from "@/components/shared/Typography";
import CurvePurple from "public/image/curve-purplr.png";
import Image from "next/image";
import ButtonMenu from "@/components/Button/ButtonMenu";
import { cardEvent } from "public/static";
import CardEvent from "@/components/Card/CardEvent";
import CardLineUp from "@/components/Card/CardLineUp";

export default function HomePage() {
  return (
    <Template>
      <section>
        <div className="bg-scroll flex justify-center items-center bg-center bg-cover bg-red-50 bg-home_page h-60 w-full md:h-[38rem]">
          <Typography semibold className={"md:text-[7rem] text-xl text-white"} head1>
            Takjub Akbar
          </Typography>
        </div>
      </section>

      <section>
        <div className="w-full h-14 flex justify-between items-center px-4 box-border md:px-24">
          <Typography medium className="hidden md:block">
            {"LET'S MAKE IT REAL"}
          </Typography>
          <div className="w-2 h-2 rounded-full bg-standart hidden md:block" />
          <Typography medium>TAKJUB AKBAR</Typography>
          <div className="w-2 h-2 rounded-full bg-standart" />
          <Typography medium>27-29 Januari 2023, Bandung</Typography>
          <div className="w-2 h-2 rounded-full bg-standart hidden md:block" />
          <Typography medium className="hidden md:block">
            #the<span className="text-primary">REAL</span>Journey
          </Typography>
        </div>
      </section>

      <SecondSection />
      <ThirdSection />
      <FourtSection />
      <FiveSection />
    </Template>
  );
}

const SecondSection = () => {
  return (
    <section className="bg-primary">
      <div className="bg-green_third w-full h-96 bg-center bg-cover md:h-[29rem] 2xl:h-[50rem]"></div>
      <div className="bg-curve_purple relative bg-no-repeat pl-6 pt-28 pr-4 h-72 bg-contain md:bg-cover top-[-105px] md:top-[-108px] 2xl:top-[-194px] 2xl:h-56  z-10">
        <div className="relative md:px-48">
          <Typography xl bold className="text-white md:text-[40px]">
            Apa itu Takjub Akbar?
          </Typography>
          <Typography className="text-white mt-4 md:mt-12 pl-3 md:pl-12 font-normal">
            Takjub Akbar adalah gerbang utama pengenalan ekosistem muamalah Tajir sekaligus wadah yang menampung
            semangat, gagasan dan motivasi para teman Tajir. <br />
            <br />
            Takjub Akbar menjadi ajang transfer knowledge dan sharing inspirasi perjalanan para mentor selama masa
            transformasi mencipta iklim ekonomi syarii dalam lingkungan bisnisnya.
          </Typography>
        </div>
      </div>
    </section>
  );
};

const ThirdSection = () => {
  return (
    <section className="bg-linearGreen py-6">
      <div className="">
        <Typography bold className="text-2xl text-primary text-center md:text-[40px] md:mb-8">
          Schedule
        </Typography>
        <div className="flex justify-center  px-4 mt-4">
          <div className="flex-grow">
            <ButtonMenu>27 Januari 2023</ButtonMenu>
          </div>
          <div className="md:hidden flex-grow">
            <ButtonMenu>27 Januari 2023</ButtonMenu>
          </div>
        </div>
        <div className="px-4 mt-4 md:px-24">
          {cardEvent.map((el, i) => {
            return <CardEvent key={i} data={el} />;
          })}
        </div>
      </div>
    </section>
  );
};

const FourtSection = () => {
  return (
    <section className="my-6">
      <div className="my-6">
        <Typography bold className="text-2xl text-primary text-center md:text-[40px] md:mb-8">
          Lineup
        </Typography>
      </div>
      {/* <div
        className="grid  grid-cols-2  justify-items-center content-center
      md:grid-cols-4 md:px-12 "
      > */}
      <div className="flex flex-wrap px-8 justify-center items-center gap-4 ">
        <CardLineUp />
        <CardLineUp />
        <CardLineUp />
        <CardLineUp />
        <CardLineUp />
        <CardLineUp />
        <CardLineUp />
        <CardLineUp />
      </div>
    </section>
  );
};

const FiveSection = () => {
  return (
    <section className="bg-linearGreen py-6">
      <div className="">
        <Typography bold className="text-2xl text-primary text-center md:text-[40px] md:mb-8">
          WorkShop
        </Typography>
        <div className="px-4 mt-4">
          <div className="md:hidden">
            <ButtonMenu>27 Januari 2023</ButtonMenu>
          </div>
        </div>
        <div className="px-4 mt-4 md:px-24">
          {cardEvent.map((el, i) => {
            return <CardEvent key={i} data={el} />;
          })}
        </div>
      </div>
    </section>
  );
};
