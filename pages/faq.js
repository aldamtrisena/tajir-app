import Layout from "@/components/template/";
import React from "react";
import Typography from "@/components/shared/Typography";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Faq = () => {
  return (
    <Layout>
      <section className="mt-32 md:mt-32">
        <div className="flex flex-col md:flex-col justify-center items-center h-full" >
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
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
              <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Kapan Acara Takjub Akbar dilaksanakan?</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
              <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Kapan Acara Takjub Akbar dilaksanakan?</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
              <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Kapan Acara Takjub Akbar dilaksanakan?</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
              <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum. nnt, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="md:mt-8">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-purple-900">
                <Typography semibold className="md:mr-32">Kapan Acara Takjub Akbar dilaksanakan?</Typography>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
              <Typography className="text-gray-500 text-[14px] text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor innt, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

       
      </div>
    </div>
  )
}
export default Faq;
