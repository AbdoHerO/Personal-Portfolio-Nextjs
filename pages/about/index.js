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
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          { icon: <FaHtml5 />, key: 'FaHtml5' },
          { icon: <FaCss3 />, key: 'FaCss3' },
          { icon: <FaJs />, key: 'FaJs' },
          { icon: <FaReact />, key: 'FaReact' },
          { icon: <SiNextdotjs />, key: 'SiNextdotjs' },
          { icon: <SiFramer />, key: 'SiFramer' },
          { icon: <FaWordpress />, key: 'FaWordpress' },
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          { icon: <FaFigma />, key: 'FaFigma' },
          { icon: <SiAdobexd />, key: 'SiAdobexd' },
          { icon: <SiAdobephotoshop />, key: 'SiAdobephotoshop' },
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  return (
    <div>
      {aboutData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2>{section.title}</h2>
          {section.info.map((infoItem, infoIndex) => (
            <div key={infoIndex}>
              <h3>{infoItem.title}</h3>
              {infoItem.icons && (
                <div>
                  {infoItem.icons.map(iconObj => (
                    <span key={iconObj.key}>{iconObj.icon}</span>
                  ))}
                </div>
              )}
              {infoItem.stage && <p>{infoItem.stage}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default About;
