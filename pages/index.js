import Template from "@/components/template";
import BgImage from "public/image/imagebg.png";
import Typography from "@/components/shared/Typography";
import CurvePurple from "public/image/curve-purplr.png";
import Image from "next/image";
import ButtonMenu from "@/components/Button/ButtonMenu";
import { cardEvent, dataLineUp, dataTenant, dataTiket, dataWorkShop } from "public/static";
import CardEvent from "@/components/Card/CardEvent";
import CardSecondary from "@/components/Card/CardSecondary";
import { ImageAMG, ImageGratyo, ImageTdp, ImageBSI, ImageMax, ImageOtego, ImageTokped } from "public/image/index";
import CardPrimary from "@/components/Card/CardPrimary";
import CardTiket from "@/components/Card/CardTiket";

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
      <LineUpSection />
      <WorkShopSection />
      <TiketPriceSection />
      <TenantSection />
      <SponsorsSection />
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

const LineUpSection = () => {
  return (
    <section className="my-6">
      <div className="my-6">
        <Typography bold className="text-2xl text-primary text-center md:text-[40px] md:mb-8">
          Lineup
        </Typography>
      </div>
      <div className="flex flex-wrap px-8 justify-center items-center gap-4 ">
        {dataLineUp.map((el, index) => {
          return <CardSecondary key={index} nama={el.name} foto={el.image} pekerjaan={el.job} />;
        })}
      </div>
    </section>
  );
};

const WorkShopSection = () => {
  return (
    <section className="bg-linearGreen pt-6 md:pt-12 pb-[22rem] md:pb-[17rem] relative z-10">
      <div className="">
        <Typography bold className="text-2xl text-primary text-center md:text-[40px] md:mb-8">
          Workshop
        </Typography>
        <div className="px-4 mt-4">
          <div className="md:hidden">
            <ButtonMenu>27 Januari 2023</ButtonMenu>
          </div>
        </div>
        <div className="px-4 mt-4 md:px-24 py-8 flex overflow-x-scroll gap-3 md:gap-8 snap-x snap-mandatory no-scrollbar">
          {dataWorkShop.map((el, i) => {
            return <CardPrimary key={i} data={el} />;
          })}
        </div>
      </div>
    </section>
  );
};

const TiketPriceSection = () => {
  return (
    <section className="px-8 pb-12 mt-[-330px] md:mt-[-230px] relative z-10 md:grid md:place-content-center ">
      <div className="bg-white rounded-lg w-full md:w-max p-1">
        <div className="bg-primary rounded-lg w-full md:w-max relative py-6 md:px-20 md:py-20">
          <div>
            <Typography bold center className="text-white text-2xl md:text-[2.5rem]">
              Dapatkan Tiketmu
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row relative gap-4 md:gap-20 justify-center items-center mt-6 md:mt-14">
            {dataTiket.map((el, index) => {
              return <CardTiket key={index} category={el.text} price={el.price} />;
            })}
          </div>
          <div
            className="bg-secondary w-full md:w-[25rem] h-32 md:h-full rounded-lg absolute bottom-[-1rem] 
          md:bottom-[-1.5rem] right-[-1rem] md:right-[-1.5rem] z-[-1]"
          />
          <div
            className="hidden md:block bg-secondary w-full  h-44  rounded-lg absolute bottom-[-1rem] 
          md:bottom-[8.5rem] left-[-1.5rem] md:right-[-1.5rem] z-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

const TenantSection = () => {
  return (
    <section className="my-6 md:mt-20">
      <div className="my-6">
        <Typography bold className="text-2xl text-primary text-center md:text-[2.5rem] md:mb-8">
          Tenant
        </Typography>
      </div>
      <div className="flex flex-wrap px-8 justify-center items-center gap-4 ">
        {dataTenant.map((el, index) => {
          return <CardSecondary key={index} nama={el.name} foto={el.image} />;
        })}
      </div>
    </section>
  );
};

const SponsorsSection = () => {
  return (
    <section className="bg-primary py-6 md:py-14">
      <div>
        <Typography bold center className="text-white text-2xl md:text-[2.5rem]">
          Sponsor
        </Typography>
      </div>
      <div className="mt-0 md:my-11">
        <Typography center className="text-white text-base my-6">
          Main Sponsors
        </Typography>
        <div className="flex px-6 justify-between items-center md:justify-evenly">
          <div className="w-28 md:w-60">
            <Image src={ImageBSI} alt="sponsor" style={{ objectFit: "fill" }} />
          </div>
          <div className="w-20 md:w-28">
            <Image src={ImageTokped} alt="sponsor" />
          </div>
          <div className="w-28 md:w-56">
            <Image src={ImageMax} alt="sponsor" style={{ objectFit: "fill" }} />
          </div>
        </div>
      </div>
      <div>
        <Typography center className="text-white text-base mb-6 mt-9 md:mt-24">
          Supporting Sponsors
        </Typography>
        <div className="flex px-6 justify-between items-center md:justify-evenly md:mt-12">
          <div className="w-16 md:w-32">
            <Image src={ImageTdp} alt="sponsor" />
          </div>
          <div className="w-16 md:w-32">
            <Image src={ImageGratyo} alt="sponsor" />
          </div>
          <div className="w-16 md:w-32">
            <Image src={ImageOtego} alt="sponsor" />
          </div>
          <div className="w-16 md:w-32">
            <Image src={ImageAMG} alt="sponsor" />
          </div>
        </div>
      </div>
    </section>
  );
};
