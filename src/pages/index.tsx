import Image from "next/image";

import LeviLaminaIcon from "@/assets/brand/levilamina.svg";
import LipIcon from "@/assets/brand/lip.svg";
import HomeImage1 from "@/assets/images/home-1.webp";
import HomeImage2 from "@/assets/images/home-2.webp";
import HomeImage3 from "@/assets/images/home-3.webp";
import Skeleton from "@/components/data/Skeleton";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import { Terminal } from "@/components/data/Terminal";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";
import { useBstatsPlayers } from "@/lib/service/bstats";

const Home = ({}) => {
  const { data: playerData } = useBstatsPlayers();

  return (
    <>
      <SEO title="Home" description="" keywords={[]} canonical="/" />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-26 lg:(pt-48 pb-46)">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            Modding made simple. <br />
            <span className="text-green-700">Built for creators.</span>
          </h1>
          <p className="text-xl mt-4 max-w-2xl">
            LeviMC enhances Minecraft Bedrock&apos;s ecosystem with powerful
            modding tools and an extensive API, empowering creators to build
            amazing experiences with a stable, performant, and well-documented
            framework.
          </p>
          <p className="text-xl mt-4 max-w-2xl">
            <span className="font-semibold">LeviLamina</span> is the core of
            LeviMC, powering the modding ecosystem. Click the button below to
            get started.
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button
              variant="filled"
              href="https://lamina.levimc.org/quickstart/"
              external
            >
              Quickstart
            </Button>
            <Button
              variant="outlined"
              href="https://lamina.levimc.org"
              external
            >
              Documentation
            </Button>
          </div>
        </div>
        <div className="flex-1 xl:flex hidden justify-end items-center">
          <Terminal />
        </div>
      </header>
      <section
        id="software"
        className="w-full pt-12 pb-8 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4 mb-4">
            Your mods deserve the&nbsp;
            <span className="text-green-700">best framework.</span>
          </h2>
          <div className="grid md:(grid-cols-3 -ml-4) gap-2 px-2 xl:gap-4">
            <SoftwarePreview
              id="levilamina"
              name="LeviLamina"
              icon={LeviLaminaIcon}
              description="LeviLamina is a lightweight, modular and versatile mod loader for Minecraft Bedrock Edition."
            />
            <SoftwarePreview
              id="lip"
              name="lip"
              icon={LipIcon}
              description="lip is our officially recommended package installer for Bedrock mods."
            />
          </div>
        </div>
      </section>
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
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
              Discover mods for LeviMC on Bedrinth, the dedicated mod index for
              Minecraft Bedrock Edition. From simple utilities to complex
              gameplay enhancements, developers can easily share their creations
              and server owners can enhance their players&apos; experience. With
              lip, our official package installer, managing your mods has never
              been easier.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                variant="filled"
                href="https://bedrinth.com/?q=platform:levilamina%20type:mod"
                external
              >
                View on Bedrinth
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
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
              Powering&nbsp;
              {playerData ? (
                <span className="text-green-700">{playerData[0][1]}</span>
              ) : (
                <Skeleton className="w-30 h-6 inline-block" />
              )}
              &nbsp;players
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              LeviMC powers a growing number of Minecraft servers on a daily
              basis, from small single-server setups to massive Minecraft server
              networks.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:(flex-row-reverse gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={HomeImage2}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Extensible and modular by design
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              Our software is built with extensibility at its core. The modular
              architecture allows you to easily customize and extend
              functionality through our comprehensive API and modding system,
              giving you complete control over your Minecraft experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
