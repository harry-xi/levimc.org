import type { NextPage } from "next";

import SavingsIllustration from "@/assets/illustrations/undraw/savings.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Roadmap: NextPage = () => (
  <>
    <SEO title="Roadmap" description="" keywords={[]} canonical="/roadmap" />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          Roadmap
        </h1>
        <p className="text-xl mt-4">
          {
            "Our roadmap outlines the future direction and key milestones for LeviMC's development. It helps contributors understand where we are now, where we're headed, and how they can help us get there."
          }
        </p>
        <div className="flex flex-row gap-4 mt-8"></div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row">
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">Client Side</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          We are currently working on client side modding support for
          LeviLamina. This will allow users to play Bedrock Edition with mods,
          just like Minecraft Java Edition.
        </p>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row">
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">Game Launcher</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          LeviLauncher is our upcoming game launcher for LeviMC. It will allow
          users to easily launch the game with a single click, install mods from
          Bedrinth, and more.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LiteLDev/LeviLauncher"
            external
            dense
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
    <section className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row">
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">More Dimensions</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          Multi-dimensional worlds are often considered a &quot;holy grail&quot;
          in Minecraft Bedrock Edition, with countless developers attempting to
          implement them. We are committed to making this dream a reality
          through LeviLamina&apos;s powerful modding system.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LiteLDev/MoreDimensions"
            external
            dense
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row">
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">
          Machine Learning-based Anticheat
        </h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          We are developing an advanced anticheat system powered by machine
          learning technology. By analyzing player behavior patterns and
          movement data, we aim to provide highly accurate cheat detection while
          minimizing false positives that could impact legitimate players.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/futrime/mlac"
            external
            dense
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Roadmap;
