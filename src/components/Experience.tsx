'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';
import TimelineLine from './TimelineLine';

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  lengthOfEmployment: string;
  address: string;
  details: string[];
};

const Details = ({
  position,
  company,
  companyLink,
  lengthOfEmployment,
  address,
  details,
}: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon forwardedRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl xs:text-lg capitalize sm:text-xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
            rel="noopener"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-dark/75 xs:text-sm capitalize dark:text-light/75">
          {lengthOfEmployment} | {address}
        </span>
        <ul className="mt-2 w-full list-disc space-y-1.5 pl-5 font-medium md:text-sm">
          {details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className="my-64 md:mt-24 md:mb-24">
      <h2 className="mb-32 w-full text-center font-bold text-8xl xs:text-4xl md:mb-16 md:text-6xl">
        Experience
      </h2>
      <div className="relative mx-auto w-[75%] md:w-full lg:w-[90%]">
        <TimelineLine listRef={listRef} />

        <ul
          ref={listRef}
          className="ml-4 xs:ml-2 flex w-full flex-col items-start justify-between"
        >
          <Details
            position="Software Engineer"
            company="DataArt"
            companyLink="https://www.dataart.com/"
            details={[
              'Build and maintain FastAPI/SQLAlchemy microservices and containerized SQS-fed AWS Lambdas for a royalty accounting platform processing billions of revenue rows, exposed to a React frontend through REST and a GraphQL aggregation layer.',
              'Own delivery end-to-end via Jenkins CI/CD (Dockerized lint, type, and unit stages, real-container Lambda integration tests per PR, blocking vulnerability scanning) and Terraform infrastructure with Checkov and AI review gates; remediated CVEs and right-sized Lambdas from measured memory peaks.',
              'Profiled and resolved Lambda performance issues end-to-end, using CloudWatch and Snowflake query history to disprove assumed bottlenecks before changing code, then cut peak memory by ~50% with vectorized PyArrow processing and streaming zip output to S3.',
              'Develop secure service-to-service APIs with JWT auth middleware, Auth0 M2M tokens backed by AWS Secrets Manager, YAML-driven access rules, Pydantic request validation, and per-request correlation IDs traced through Datadog APM and Sentry.',
            ]}
            lengthOfEmployment="2026-Present"
            address="Sofia, Bulgaria"
          />
          <Details
            position="Backend / Full-Stack Software Developer"
            company="MClimate"
            companyLink="https://mclimate.eu/"
            details={[
              'Designed and implemented a Python rules engine evaluating real-time IoT device events (LoRaWAN telemetry) to trigger automations, powering 500+ active rules in production.',
              'Led Meilisearch integration and backend microservice refactors (PHP API, NestJS), deploying a dedicated search service in Docker Swarm and achieving a 10x improvement in search performance.',
              'Led a JavaScript-to-TypeScript migration and introduced CI quality gates (pre-commit hooks, commit standards), cutting type-related production defects.',
            ]}
            lengthOfEmployment="2024-2025"
            address="Sofia, Bulgaria"
          />
          <Details
            position="Technical Consultant"
            company="FactSet"
            companyLink="https://www.factset.com/"
            details={[
              'Wrote and optimized complex SQL over large-scale financial datasets, cutting query times for data deliveries.',
              'Built and maintained ETL workflows delivering financial data to clients, with a focus on data correctness.',
            ]}
            lengthOfEmployment="2022-2024"
            address="Sofia, Bulgaria"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
