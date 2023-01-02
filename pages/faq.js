import Layout from "@/components/template/";
import React from "react";
import Typography from "@/components/shared/Typography";

const Faq = () => {
  return (
    <Layout>
        <div className="flex flex-col md:flex-col justify-center items-center h-100 w-100" >
          <Typography head1 primary bold className="text-1xl lg:text-[32px] lg:leading-[65px] mt-36 md:mt-32">Frequently Asked Questions</Typography>
          <div className="text-center w-[20rem] md:w-[51rem] text-gray-400 mb-32 mt-[20px] md:mt-[1rem]">
          <Typography>Semua yang ingin Kamu ketahui tentang Tajir dan Takjub Akbar. Jika Kamu tidak dapat menemukan jawaban yang Kamu cari, silakan hubungi tim Kami di tajir@gmail.com </Typography>
          </div>
        </div>
    </Layout>
  );
};

export default Faq;
