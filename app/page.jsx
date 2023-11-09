import Button from "./components/Button";
import H1 from "./components/H1";
import H2 from "./components/H2";
import H3 from "./components/H3";
import Paragraph from "./components/Paragraph";

import Header from "./components/Header";
import Option from "./components/Option";
import { serviceBestList } from "./infoList";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  function renderFeature(imageSrc, imageAlt, title, description) {
    return (
      <div className="items-center flex flex-row gap-6 w-full">
        <div className="h-full justify-center w-1/5">
          <Image alt={imageAlt} src={imageSrc} width={92} height={188}></Image>
        </div>
        <div className=" text-left w-10/12 flex flex-col">
          <H3>{title}</H3>
          <Paragraph>{description}</Paragraph>
        </div>
      </div>
    );
  }
  return (
    <main>
      <Header />
      <div className="box-border h-[80vh] w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 object-cover z-[-1] h-screen w-full"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="items-start flex flex-col h-full justify-center mx-[10%]">
          <H1>
            Max Your profit with <br /> Custom Digital Products
          </H1>
          <Paragraph className="w-6/12">
            Our expert team creates and maintains cutting-edge tech solutions,
            empowering you to maximize profits today.
          </Paragraph>
          <div className="flex justify-center">
            <Button href="/contact-us">Contact Us</Button>
            <Link className="mx-6 flex items-center" href="/services">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="box-border items-center bg-black flex flex-col justify-between p-12">
        <H2>Best B2B deal ever!</H2>
        <div className="mt-4 flex justify-center">
          <div className="box-border flex w-10/12 gap-9 mt-4 items-center">
            {renderFeature(
              "/bag.png",
              "dark bag with yen 3d",
              "Affordable pricing",
              "We believe that every business deserves access to high-quality digital solutions, regardless of their size."
            )}
            {renderFeature(
              "/medal.png",
              "dark medal with white star 3d",
              "Best technology",
              "We stay current with the most up-to-date industry standards. We&aposre using the best tools to create custom digital products."
            )}
            {renderFeature(
              "/calendar.png",
              "dark calendar with 25 Oct date 3d",
              "No Delays",
              "We optimize productivity and deliver high-quality results faster using project management tools to work efficiently."
            )}
          </div>
        </div>
      </div>
      <div className="items-center bg-[#0b0b0b] flex w-full">
        <div className="pl-[10vw] w-1/2">
          <H2>Our Goal</H2>
          <br />
          <H3>
            &quotTech should be user-friendly, <br /> adaptable, and accessible
            to all.&quot
          </H3>
          <br />
          <Paragraph className="ph">
            We offer affordable technology services without compromising quality
            or speed. Our success stems from extensive preparation, rigorous
            peer review, scientific research, and years of experience in diverse
            environments and projects.
          </Paragraph>
        </div>
        <Image
          className="box-border object-cover overflow-hidden w-1/2 ph"
          alt="dark medal with white star 3d"
          src="/portfolio-background.jpg"
          width="856"
          height="856"
        ></Image>
      </div>
      <div className="items-center flex flex-col justify-between p-[5vh] text-center">
        <H2>
          Our Best <br /> Custom Digital Products
        </H2>
        <div className="m-6 flex flex-wrap gap-6 justify-center w-10/12">
          {serviceBestList.map((list) => (
            <Option
              key={list.options}
              title={list.title}
              options={list.options}
              href={list.href}
            />
          ))}
        </div>
        <Button href="/services">More Services</Button>
      </div>
    </main>
  );
}
