import Layout from "@/components/template/";
import React from "react";
import Typography from "@/components/shared/Typography";
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { CirclePurple, LinearIconYellow, DotsYellow } from "public/image";
import Image from "next/image";


const Faq = () => {
  return (
    <Layout>
      <section className="mt-16 md:mt-16 relative">
        <div
          className="absolute bottom-[1rem] opacity-0 lg:opacity-25 left-[-1.5rem] w-12 z-[-1] lg:bottom-[7rem] lg:left-[-3.5rem] lg:w-36"
        >
          <Image src={CirclePurple} alt={"circle"} />
        </div>
        <div
          className="absolute opacity-0 lg:opacity-80 right-[0rem] w-12 z-[-1] lg:bottom-[15rem] lg:w-56"
        >
          <Image src={LinearIconYellow} alt={"linear"} />
        </div>
        <div className="flex flex-col md:flex-col justify-center items-center h-full" >
          <div
            className="relative opacity-0 lg:opacity-80 lg:top-[0rem] left-[-28rem]"
          >
            <Image className="lg:w-26" src={DotsYellow} alt={"Dots"} />
          </div>
          <Typography head1 primary bold className="lg:text-[32px] lg:leading-[65px]">Frequently Asked Questions</Typography>
          <div className="text-center px-2 md:w-[53rem] mb-32 mt-[20px] md:mt-[1rem]">
            <Typography>Semua yang ingin Kamu ketahui tentang Tajir dan Takjub Akbar. Jika Kamu tidak dapat menemukan jawaban yang Kamu cari, silakan hubungi tim Kami di tajir@gmail.com </Typography>
            <DisclosureDropdown />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const DisclosureDropdown = () => {
  return (
    <div className="w-full px-4 mt-6 mb-4">
      <div className="mx-auto w-full rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Kapan Acara Takjub Akbar dilaksanakan?</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-700 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-90 opacity-0"
              >
                <Disclosure.Panel static className="px-4 pt-4 pb-2 text-sm">
                  <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Dimana Acara Takjub Akbar dilaksanakan?</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-700 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-90 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                  <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Bagaimana cara daftar ke event Takjub Akbar</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-700 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-90 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                  <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Berapa harga tiket untuk daftar acara Takjub Akbar</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-700 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-90 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                  <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum. nnt, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Bagaimana cara daftar kelas di Takjub Akbar</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-700 ease-out"
                enterFrom="transform scale-90 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-700 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-90 opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                  <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>


      </div>
    </div>
  )
}
export default Faq;
