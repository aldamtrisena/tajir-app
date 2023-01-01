import Typography from "@/components/shared/Typography";
import Layout from "@/components/template";
import Image from "next/image";
import { CardMove1, CardMove2, CardMove3, CardMove4 } from "public/image";

export default function AboutPage() {
  return (
    <Layout>
      <_HeadersSection />
      <_ThirdSection />
      <_MovementSection />
    </Layout>
  );
}

const _HeadersSection = () => {
  return (
    <section className="mt-20 lg:mt-28">
      <div className="px-4 py-6 lg:py-12 lg:flex items-end lg:gap-0 lg:pl-8 lg:pr-0 mx-auto xl:max-w-screen-xl">
        <div className="xl:w-full">
          <Typography head1 primary bold className="text-2xl lg:text-[3.1rem] lg:leading-[65px]">
            Segala sesuatu yang <br /> niatnya karena Allah{" "}
          </Typography>
          <Typography bold className="text-2xl lg:text-[3.1rem] lg:leading-[65px]">
            hasilnya akan <br /> menakjubkan
          </Typography>
        </div>
        <div className="mt-4 lg:w-10/12 lg:pl-6">
          <Typography>
            Tajir merupakan gerakan muamalah kolaboratif yang mengajak para saudara seiman yang telah berkecimpung di
            dunia usaha, baik sebagai pelaku usaha maupun profesional Muslim sukses, untuk memberi pembekalan serta
            permodalan kepada kaum muslimin yang telah maupun dalam proses berhijrah.
          </Typography>
        </div>
      </div>
    </section>
  );
};

const _ThirdSection = () => {
  return (
    <section className="mt-8 pb-12 realative overflow-hidden">
      <div className="lg:flex items-center gap-5 justify-between xl:max-w-screen-xl mx-auto">
        <div className="px-4 lg:px-8  xl:w-full">
          <Typography head1 primary bold className="text-xl lg:text-4xl lg:leading-[48px]">
            Ekosistem Tajir mengacu pada penguatan ekonomi umat melalui perwujudan muamalah, yakni bisnis syari.
          </Typography>
        </div>
        <div
          className="bg-greenCard px-4 py-6 ml-4 mt-6 rounded-tl-lg relative
        lg:w-10/12 lg:pt-14 lg:pb-24 lg:px-12 box-description"
        >
          <Typography semibold>
            Lorem ipsum dolor sit amet consectetur. Lectus elementum eget augue nulla tortor pulvinar.{" "}
          </Typography>
          <br />
          <Typography>
            Sapien arcu eget interdum nisl vel eu. Velit tellus velit nullam ac pretium egestas condimentum porttitor.
            Porttitor eu duis nisl maecenas vulputate arcu. Volutpat ultrices consequat volutpat at convallis. <br />
            <br />
            Idpellentesque morbi ante ornare scelerisque libero. Aenean nisi at amet massa malesuada lacus egestas
            varius.
          </Typography>
        </div>
      </div>
    </section>
  );
};

const _MovementSection = () => {
  return (
    <section className="bg-primary pb-8 lg:pb-16">
      <div className="lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="py-12">
          <div className="">
            <Typography
              bold
              className="text-2xl underline underline-offset-8 text-white text-center md:text-[2.5rem] md:mb-8"
            >
              Movement
            </Typography>
          </div>
        </div>
        <div className="px-6 lg:px-12">
          {/* CARD1 */}
          <div className="lg:flex justify-between items-center">
            <div className="xl:w-1/2">
              <Typography bold className="text-white text-2xl lg:text-[3.25rem]">
                Takjub Akbar
              </Typography>
              <div className="mt-4 pl-4 lg:mt-12 lg:pl-12">
                <Typography xs className="text-white">
                  Gerbang utama pengenalan ekosistem muamalah Tajir sekaligus wadah yang menampung semangat, gagasan dan
                  motivasi para teman Tajir. Takjub Akbar menjadi ajang transfer knowledge dan sharing inspirasi
                  perjalanan para mentor selama masa transformasi mencipta iklim ekonomi syarii dalam lingkungan
                  bisnisnya.
                </Typography>
              </div>
            </div>
            <div className="mt-6 w-72 pl-4 lg:w-96">
              <Image src={CardMove3} alt={"card-foto"} />
            </div>
          </div>
          {/* E_BADAH */}
          <div className="mt-12 lg:flex flex-row-reverse justify-between items-center">
            <div className="xl:w-1/2">
              <Typography bold className="text-white text-2xl lg:text-[3.25rem]">
                eBadah{" "}
              </Typography>
              <div className="mt-4 pl-4 lg:mt-12 lg:pl-12">
                <Typography xs className="text-white">
                  Program Ramadhan Tajir bekerjasama dengan Gotix berupa tausyiah online dimana audiens dapat turut
                  serta berdonasi melalui tiket yang dibelinya.
                </Typography>
              </div>
            </div>
            <div className="mt-6 w-72 pl-4 lg:w-96">
              <Image src={CardMove4} alt={"card-foto"} />
            </div>
          </div>
          {/* CARD 3 */}
          <div className="mt-12 lg:flex justify-between items-center">
            <div className="xl:w-1/2">
              <Typography bold className="text-white text-2xl lg:text-[3.25rem]">
                #tajirbergerak
              </Typography>
              <div className="mt-4 pl-4 lg:mt-12 lg:pl-12">
                <Typography xs className="text-white">
                  Bergerak Bareng, Berbagi Bareng. Representasi semangat Tajir dalam melakukan aksi-aksi kebaikan dan
                  mengajak masyarakat terutama teman Tajir untuk ikut terlibat di dalamnya.
                </Typography>
              </div>
            </div>
            <div className="mt-6 w-72 pl-4 lg:w-96">
              <Image src={CardMove1} alt={"card-foto"} />
            </div>
          </div>
          {/* CARD 4 */}
          <div className="mt-12 lg:flex flex-row-reverse justify-between items-center">
            <div className="xl:w-1/2">
              <Typography bold className="text-white text-2xl lg:text-[3.25rem]">
                Bincang Dagang
              </Typography>
              <div className="mt-4 pl-4 lg:mt-12 lg:pl-12">
                <Typography xs className="text-white">
                  Program Tajir yang mengulas strategi dagang yang dikemas ringan melalui obrolan dengan menghadirkan
                  praktisi dan profesional di bidangnya,
                </Typography>
              </div>
            </div>
            <div className="mt-6 w-72 pl-4 lg:w-96">
              <Image src={CardMove2} alt={"card-foto"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
