import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";
import CoalitionLogo from "../public/images/Coalition_Logo.png";

interface CoalitionWelcomeEmailProps {
  name: string;
  industry: string;
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3001";
console.log(baseUrl);

const PropDefaults: CoalitionWelcomeEmailProps = {
  name: "Government Contractor",
  industry: 'hello',
  links: ["Visit the forums", "Read the docs", "Contact an expert"],
};

export const CoalitionSecondaryMail = ({
  name = PropDefaults.name,
  industry = PropDefaults.industry,
  links = PropDefaults.links,
}: CoalitionWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Coalition Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                yellow: "#FFBB3C",
                blue: "#2B70D7",
                pink: "E2A5EE",
                teal: "BAF6EB",
                orange: "#FF5F21",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-blue text-base font-sans">
          {/* <Img
            src={`${baseUrl}/images/Coalition_Logo.png`}
            width="184"
            alt="Coalition"
            className="mx-auto my-20"
          /> */}
          <Container className="bg-white p-45">
            <Heading className="my-2 leading-8">Hi, {name}</Heading>

            <Section>
              <Row className="m-3">
                <Text className="text-base text-3xl font-bold">
                  You know you’re{" "}
                  <u className="bg-yellow no-underline">required</u> to have
                  this.
                </Text>
                <Text className="text-base">
                  You’re already going to have to pay for it, so why not have
                  the best and tools to keep you protected and make you a more
                  attractive applicant when bidding.
                </Text>

                <Text className="text-base">Here's how to get started:</Text>
                <div>
                  <Link href="https://coalitioninc.com" className="bg-blue text-white rounded-lg py-3 px-[18px]">
                    Find a Broker in {industry}
                  </Link>
                  <Button className="bg-yellow text-white rounded-lg m-2 py-3 px-[18px]">
                    Already Have a Broker?
                  </Button>
                </div>
              </Row>
            </Section>

            <Section className="text-center">
              <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                Go to your dashboard
              </Button>
            </Section>

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link}>
                    <Link className="text-black underline font-bold">
                      {link}
                    </Link>{" "}
                    <span className="text-green-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link className="text-white">Unsubscribe</Link>
                </Column>
                <Column className="text-left ">
                  <Link className="text-white">Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            {/* <Text className="text-center text-gray-400 mb-45">
              Netlify, 44 Montgomery Street, Suite 300 San Francisco, CA
            </Text> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CoalitionSecondaryMail;
