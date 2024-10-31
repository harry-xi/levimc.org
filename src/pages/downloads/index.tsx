import type { NextPage } from "next";

import LeviLaminaIcon from "@/assets/brand/levilamina.svg";
import LipIcon from "@/assets/brand/lip.svg";
import LiteLoaderBDSIcon from "@/assets/brand/liteloaderbds.svg";
import SoftwarePreview from "@/components/data/SoftwarePreview";
import SEO from "@/components/util/SEO";

const Downloads: NextPage = () => {
  return (
    <>
      <SEO
        title="Downloads"
        description=""
        keywords={[]}
        canonical="/downloads"
      />
      <header className="max-w-4xl flex flex-col items-center mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-26) gap-2">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          Downloads
        </h1>
        <p className="text-xl text-center mb-6">
          {"Select the software you want to download."}
        </p>
        <h2 className="text-2xl text-center font-medium mt-4">
          Modding Framework
        </h2>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="levilamina"
            name="LeviLamina"
            icon={LeviLaminaIcon}
            description="LeviLamina is a lightweight, modular and versatile mod loader for Minecraft Bedrock Edition."
          />
          <SoftwarePreview
            id="liteloaderbds"
            name="LiteLoaderBDS"
            icon={LiteLoaderBDSIcon}
            description="LiteLoaderBDS is a legacy cross-language plugin loader for Minecraft Bedrock Dedicated Server."
            eol
          />
        </div>
        <h2 className="text-2xl text-center font-medium mt-4">
          Utility Software
        </h2>
        <div className="grid md:grid-cols-2 gap-2 px-2 xl:gap-4">
          <SoftwarePreview
            id="lip"
            name="lip"
            icon={LipIcon}
            description="lip is our officially recommended package installer for Bedrock mods."
          />
        </div>
      </header>
    </>
  );
};

export default Downloads;
