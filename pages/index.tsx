import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-0 h-screen pb-0">
      <Head>
        <title>Ozzie Kirkby – Central Filing</title>
        <link rel="shortcut icon" href="/icon-48x48.png" />
        <style>
          {`
          body {
            background: white;
            background-image: radial-gradient(#b7b9bc 1px, transparent 0);
            background-size: 30px 30px;
            background-position: -12px -12px;
          }
          `}
        </style>
      </Head>
      <header>
        <ul className="flex space-x-3 justify-end py-2">
          <li>
            <a href="https://twitter.com/kirkbyo_">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-300"
                fill="currentColor"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/kirkbyo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-300"
                fill="currentColor"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>
      <main className="flex flex-col h-full">
        <div className="table w-full md:w-3/4 mt-5 md:mt-0" style={{ flexBasis: "100%" }}>
          <p className="text-xl table-cell align-middle">
            Hey there, I’m Ozzie{" "}
            <span role="img" aria-label="Wave">
              👋
            </span>{" "}
            I currently do some software engineering at{" "}
            <a href="https://www.coinbase.com" className="text-blue-800">
              Coinbase
            </a>
            , but in the past I have also interned at{" "}
            <a href="https://www.shopify.com/" className="text-green-600">
              Shopify
            </a>
            . My undergrad was in Mechanical Engineering at Queen's University 🇨🇦, but right now I
            am interested in creating tools for learning and the decentralized web. I also enjoy
            running, reading or taking{" "}
            <a href="https://unsplash.com/@ozziek" className="text-red-600">
              photos
            </a>
            .
          </p>
        </div>

        <section className="flex w-full md:space-x-5 flex-col md:flex-row mt-10 md:mt-0">
          <WorksSection className="from-blue-100 to-blue-200 translate-y-2">
            <SectionTitle className="text-blue-600">
              <span className="mr-2" role="img" aria-label="Thinking">
                🙇‍♂️
              </span>{" "}
              Current Projects
            </SectionTitle>
            <ProjectSection>
              <ProjectTitle>Biome (more soon)</ProjectTitle>
              <p className="text-sm text-gray-600">An environment for learning</p>
            </ProjectSection>
          </WorksSection>
          <WorksSection className="from-red-100 to-red-200 translate-y-2">
            <SectionTitle className="text-red-800">
              <span className="mr-2" role="img" aria-label="Community">
                🍄
              </span>{" "}
              Open Source Work
            </SectionTitle>
            <ProjectSection href="https://github.com/andymatuschak/orbit">
              <ProjectTitle>andymatuschak/orbit</ProjectTitle>
              <p className="text-sm text-gray-600">
                Experimental spaced repetition platform for exploring ideas in memory augmentation
                and programmable attention.
              </p>
            </ProjectSection>
            <ProjectSection href="https://github.com/kirkbyo/SciSwift">
              <ProjectTitle>kirkbyo/SciSwift</ProjectTitle>
              <p className="text-sm text-gray-600">
                Dimensionally homogenous calculations at compile time.
              </p>
            </ProjectSection>
            <ProjectSection href="https://github.com/HomeStandardsProject/home-project">
              <ProjectTitle>HomeStandardsProject/home-project</ProjectTitle>
              <p className="text-sm text-gray-600">
                Evaluate Kingston Ontario housing conditions against municipal bylaws and provincial
                standards.
              </p>
            </ProjectSection>
          </WorksSection>
          <WorksSection className="from-gray-200 to-gray-100">
            <SectionTitle className="text-gray-800">
              <span className="mr-2" role="img" aria-label="Sunset">
                🌅
              </span>{" "}
              Past Projects
            </SectionTitle>
            <ProjectSection href="https://zetro.co">
              <ProjectTitle>Zetro</ProjectTitle>
              <p className="text-sm text-gray-600">
                An experiment around integrated PDF annotation and outlining.
              </p>
            </ProjectSection>
            <ProjectSection href="http://outflowapp.com">
              <ProjectTitle>Outflow</ProjectTitle>
              <p className="text-sm text-gray-600">
                Manage the complexity of reacuring subscriptions. Instantly see where your money is
                going.
              </p>
            </ProjectSection>
          </WorksSection>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

type ClassNameProp = {
  className?: string;
};

const WorksSection: React.FC<ClassNameProp> = ({ children, className }) => (
  <div
    className={`transition duration-200 ease-in-out py-4 w-full md:w-1/3 bg-gradient-to-b filter drop-shadow-xl rounded-t-lg transform hover:-translate-y-1 hover:scale-105 md:translate-y-0 ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);

const SectionTitle: React.FC<ClassNameProp> = ({ children, className }) => (
  <h2 className={`text-lg font-medium ${className ?? ""} px-4`}>{children}</h2>
);

const ProjectSection: React.FC<{ href?: string }> = ({ children, href }) => (
  <div className="hover:bg-gray-50 hover:bg-opacity-40 my-2 mx-2 px-2 py-1 rounded-md">
    <a href={href}>{children}</a>
  </div>
);

const ProjectTitle: React.FC = ({ children }) => (
  <h3 className="font-medium text-gray-800">{children}</h3>
);

export default Home;
