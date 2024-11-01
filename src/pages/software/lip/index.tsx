import Image from "next/image";
import type { ReactElement } from "react";

import LipIcon from "@/assets/brand/lip.svg";
import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import ChatBubbleLeftRightIcon from "@/assets/icons/heroicons/chat-bubble-left-right.svg";
import CodeBracketIcon from "@/assets/icons/heroicons/code-bracket.svg";
import CommunityImage from "@/assets/images/community.webp";
import HomeImage1 from "@/assets/images/home-1.webp";
import HomeImage3 from "@/assets/images/home-3.webp";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";

const LipHome = (): ReactElement => {
  return (
    <>
      <SEO title="lip" description="" keywords={[]} canonical="/software/lip" />
      <SoftwareHeader
        id="lip"
        name="lip"
        icon={LipIcon}
        header={<>Mod installing never been easier</>}
        description="lip is our officially recommended package installer for Bedrock mods."
        github="https://github.com/futrime/lip"
        documentation="https://lip.futrime.com"
      />
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            Why lip?
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={BoltIcon}
              label="Fast and efficient installation"
              description="lip is designed with performance in mind, featuring a lightweight core and efficient package management. The installer is optimized to quickly handle mod installations while maintaining stability."
            />
            <FeatureCard
              icon={ChatBubbleLeftRightIcon}
              label="An active and growing community"
              description="lip has an active and growing community of mod developers and server administrators. Get help and support through our active Discord community, where you can connect with other users and contributors."
            />
            <FeatureCard
              icon={CodeBracketIcon}
              label="Simple yet powerful"
              description="lip provides an intuitive command-line interface that makes mod installation easy. With support for multiple package sources and dependency management, lip has all the features you need to manage your mods."
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage3}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              A thriving mod ecosystem
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              Crafted by the LeviMC team & contributors, Bedrinth is our own
              dedicated mod repository, now open to the public! View different
              mods that are specific to LeviLamina, or list your own with a very
              streamlined creation process.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="hhttps://bedrinth.com/?q=platform:levilamina%20type:mod"
                external
                dense
              >
                View on Bedrinth
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage1}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl break-all">
              No Command Line Required
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              For those who prefer a graphical interface, we&apos;ve developed
              <span className="font-semibold"> lipui </span>- a user-friendly
              desktop application that provides all of lip&apos;s functionality
              without requiring command line knowledge. With an intuitive
              interface and streamlined workflow, lipui makes mod management
              accessible to everyone.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="https://github.com/futrime/lipui"
                external
                dense
              >
                GitHub
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl aspect-video relative overflow-clip">
            <Image
              alt=""
              src={CommunityImage}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Together with a community of server owners
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              Whether you need help with your server settings, server lag, or
              need a guide for formatting your chat, our knowledgeable staff and
              friendly community are always around to lend a hand.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="https://discord.gg/8dvbzQMDNQ"
                external
                dense
              >
                Join our Discord
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

LipHome.softwareProps = {
  github: "https://github.com/futrime/lip",
};

export default LipHome;
