import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, key: "FaHtml5" },
          { icon: <FaCss3 />, key: "FaCss3" },
          { icon: <FaJs />, key: "FaJs" },
          { icon: <FaReact />, key: "FaReact" },
          { icon: <SiNextdotjs />, key: "SiNextdotjs" },
          { icon: <SiFramer />, key: "SiFramer" },
          { icon: <FaWordpress />, key: "FaWordpress" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma />, key: "FaFigma" },
          { icon: <SiAdobexd />, key: "SiAdobexd" },
          { icon: <SiAdobephotoshop />, key: "SiAdobephotoshop" },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

// component
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl-flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            5 years ago, I began freelancing as a developer. Since then, I&apos;ve
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </p>
          {/* counters */}
          <div>
            <div className="mb-5">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] lending-[1.4] max-w-{100px]">Years of experience</div>
              </div>

              clients
              <div className="relative flex-1 after:w-[1px] after:h-full 
              after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={150} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] lending-[1.4] max-w-{100px]">Satisfied clients</div>
              </div>
            </div>
          </div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, indexItem) => {
              return (
                <div
                  key={indexItem}
                  className={`${
                    index === indexItem &&
                    "text-accent after:w-[100%] after:bg-accent after:translate-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] 
                  after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(indexItem)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, indexItem) => {
              return (
                <div
                  key={indexItem}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, indexIcon) => {
                      return (
                        <div key={icon.key} className="text-2xl text-white">{icon.icon}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
