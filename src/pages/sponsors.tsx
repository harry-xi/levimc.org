import type { NextPage } from "next";

import BoltIcon from "@/assets/icons/heroicons/bolt.svg";
import GlobeAmericasIcon from "@/assets/icons/heroicons/globe-americas.svg";
import HeartIcon from "@/assets/icons/heroicons/heart.svg";
import FeatureCard from "@/components/data/FeatureCard";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Sponsors: NextPage = () => {
  return (
    <>
      <SEO
        title="Sponsors"
        description=""
        keywords={[]}
        canonical="/sponsors"
      />
      <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
        <div className="flex-1">
          <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
            Sponsors
          </h1>
          <p className="text-xl mt-4">
            LeviMC is an open source project, and maintaining our services and
            infrastructure requires ongoing funding. While we work hard to keep
            costs minimal and sustainable, we rely on community support to cover
            essential expenses like servers, development tools, and services.
          </p>
          <div className="flex flex-row gap-4 mt-8">
            <Button
              variant="filled"
              href="https://opencollective.com/levilamina"
              external
            >
              Open Collective
            </Button>
            <Button
              variant="outlined"
              href="https://github.com/sponsors/LiteLDev"
              external
            >
              GitHub Sponsors
            </Button>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden justify-end"></div>
      </header>
      <section
        id="why"
        className="w-full pt-10 pb-5 bg-primary-200 dark:bg-background-dark-80"
      >
        <div className="max-w-7xl mx-auto py-2">
          <h2 className="font-semibold text-xl md:text-2xl px-6 lg:px-4">
            Why We Need Your Support
          </h2>
          <div className="grid md:grid-cols-3 mt-6 gap-2 px-2 xl:gap-4">
            <FeatureCard
              icon={GlobeAmericasIcon}
              label="Sustainability"
              description="Donations help keep LeviMC sustainable and open to all. Only those who can afford to donate should do so, and no one should feel bad if they can't. Our financial information is available on our Open Collective page."
            />
            <FeatureCard
              icon={BoltIcon}
              label="Future plans"
              description="We need to upgrade our hosting to meet the growing demand for our services and APIs. This will increase costs, which we hope to offset with donations through Open Collective and GitHub Sponsors."
            />
            <FeatureCard
              icon={HeartIcon}
              label="Giving back"
              description="If we receive more in donations than our monthly costs, we may consider distributing funds to contributors in a fair and transparent way."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
