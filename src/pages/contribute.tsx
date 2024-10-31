import type { NextPage } from "next";

import ChattingIllustration from "@/assets/illustrations/undraw/chatting.svg";
import CodeReviewIllustration from "@/assets/illustrations/undraw/code-review.svg";
import KnowledgeIllustration from "@/assets/illustrations/undraw/knowledge.svg";
import SavingsIllustration from "@/assets/illustrations/undraw/savings.svg";
import Button from "@/components/input/Button";
import SEO from "@/components/util/SEO";

const Contribute: NextPage = () => (
  <>
    <SEO
      title="Contributing"
      description=""
      keywords={[]}
      canonical="/contribute"
    />
    <header className="max-w-7xl flex flex-row mx-auto px-4 pt-32 pb-16 lg:(pt-48 pb-32) gap-16">
      <div className="flex-1">
        <h1 className="font-medium leading-normal lg:(text-5xl leading-normal) text-4xl">
          You can contribute
        </h1>
        <p className="text-xl mt-4">
          {
            "Our projects are based on community contributions and wouldn't be possible without them. There are a lot of ways to contribute, even without programming knowledge."
          }
        </p>
        <div className="flex flex-row gap-4 mt-8"></div>
      </div>
      <div className="flex-1 lg:flex hidden justify-end"></div>
    </header>
    <section
      id="donate"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Financially</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          LeviMC uses Open Collective to manage our ongoing expenses, primarily
          for servers and development infrastructure. Through Open
          Collective&apos;s transparent platform, you can track exactly how your
          donations help sustain and grow our projects.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button variant="filled" href="/sponsors" dense>
            Learn More
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <SavingsIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="code"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Code</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          A big chunk of the code in our projects is written by community
          members, and we welcome your contributions!
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LiteLDev"
            external
            dense
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <CodeReviewIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="support"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="lg:flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Support</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          A lot of users result in a lot of questions. Everyone is welcome to
          answer questions or provide support, especially on our Discord server.
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
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <ChattingIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
    <section
      id="website"
      className="px-4 py-4 max-w-7xl mx-auto flex flex-col-reverse items-center mt-12 gap-8 lg:flex-row"
    >
      <div className="flex-1">
        <h2 className="font-medium text-2xl md:text-4xl">...Website</h2>
        <p className="md:(mt-6 text-lg) text-gray-900 dark:text-gray-100 mt-3">
          We use Next.js and Tailwind CSS to build our website. If you want to
          help us improve the website, you can contribute to our GitHub
          repository.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Button
            variant="filled"
            href="https://github.com/LiteLDev/levimc.org"
            external
            dense
          >
            Website Repository
          </Button>
        </div>
      </div>
      <div className="justify-start flex w-full lg:(flex-1 justify-end)">
        <KnowledgeIllustration className="max-h-32 lg:(max-w-72 max-h-none)" />
      </div>
    </section>
  </>
);

export default Contribute;
