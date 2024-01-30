import React from "react";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  lengthOfEmployment: string;
  address: string;
  details: string;
};

const Details = ({
  position,
  company,
  companyLink,
  lengthOfEmployment,
  address,
  details,
}: DetailsProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {lengthOfEmployment} | {address}
        </span>
        <p className="font-medium w-full">{details}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

// Intern @Facebook
// Summer 2021 | Menlo Park, CA.
// Worked on a team responsible for developing a new mobile app feature that allowed users to create and
// share short-form video content, including designing and implementing a new user interface and developing
// the backend infrastructure to support the feature.
//
// Software Developer @Amazon
// 2020-2021 | Seattle, WA.
// Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
// as product recommendations and user reviews, and optimizing the app's performance and reliability.
//
// Software Developer Intern @Microsoft
// Summer 2019 | Redmond, WA.
// Worked on a team responsible for developing new features for Microsoft's Windows operating system,
// including implementing a new user interface for a system settings panel and optimizing the performance of
// a core system component.
//
// Teaching Assistant @MIT
// Fall 2018 | Massachusetts Ave, Cambridge, MA.
// Assisted in teaching a course on computer programming, held office hours to help students with assignments,
// and graded exams and assignments.
