import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

import LiteLoaderBDSImage from "@/assets/brand/liteloaderbds.svg";
import CommunityImage from "@/assets/images/community.webp";
import VelocityImage from "@/assets/images/velocity.webp";
import Button from "@/components/input/Button";
import SoftwareHeader from "@/components/layout/SoftwareHeader";
import SEO from "@/components/util/SEO";

const LiteLoaderBDSHome = (): ReactElement => {
  return (
    <>
      <SEO
        title="LiteLoaderBDS"
        description=""
        keywords={[]}
        canonical="/software/liteloaderbds"
      />
      <SoftwareHeader
        id="liteloaderbds"
        name="LiteLoaderBDS"
        header={<>LiteLoaderBDS has reached end of life</>}
        icon={LiteLoaderBDSImage}
        description={
          <>
            We recommend you transition to{" "}
            <Link
              className="text-green-700 hover:text-green-400 hover:underline"
              href="/software/levilamina"
            >
              LeviLamina
            </Link>
            . <br /> Archived LiteLoaderBDS builds and docs are available here.
          </>
        }
        github="https://github.com/LiteLDev/LiteLoaderBDS"
        documentation="https://github.com/LiteLDev/liteloaderbds-documentation"
        eol
      />
      <section
        id="facts"
        className="flex flex-col max-w-7xl mx-auto px-4 py-8 gap-8 md:(gap-12 py-16)"
      >
        <div className="flex flex-col gap-6 md:(flex-row gap-8) xl:gap-24 items-center">
          <div className="w-full flex-1 rounded-xl bg-gray-900 aspect-video relative overflow-clip">
            <Image
              alt=""
              src={VelocityImage}
              placeholder="blur"
              fill
              sizes="(min-width: 80rem) 40rem, (min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-2xl md:text-4xl">
              Need an updated mod loader? Use LeviLamina!
            </h2>
            <p className="md:(mt-6 text-xl) text-gray-900 dark:text-gray-100 mt-3">
              All the experience the LeviMC team has gained from working on
              LiteLoaderBDS has applied to LeviLamina. Designed with performance
              and scalability in mind, LeviLamina is the best mod loader for
              Minecraft Bedrock Edition.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              <Button variant="filled" href="/software/levilamina" dense>
                Learn more
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

LiteLoaderBDSHome.softwareProps = {
  github: "https://github.com/LiteLDev/LiteLoaderBDS",
};

export default LiteLoaderBDSHome;
