import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import { RiGooglePlayLine } from "react-icons/ri";
import { SiOpensea, SiSketchfab, SiPatreon, SiLinktree } from "react-icons/si";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
import H2 from "./H2";
import H3 from "./H3";
import Paragraph from "./Paragraph";
import SmallParagraph from "./SmallParagraph";

const SocialLink = ({ href, Icon }) => (
  <Link href={href}>
    <Icon className=" h-[30px] w-[30px] m-3" />
  </Link>
);

const Footer = () => {
  return (
    <div>
      <div className="antialiased text-white font-cfont font-thin flex flex-col gap-6 p-[5vh] px-[10vw] items-center">
        <H2>Ready to go?</H2>
        <Button href="/contact-us">Contact Us</Button>
      </div>

      <footer className="antialiased text-white font-cfont font-thin w-full bg-neutral-900 flex flex-col h-auto">
        <div className="flex gap-4 p-[5vh] px-[10vw]">
          <div className="flex flex-col w-[40%]">
            <H3>Browse</H3>
            <div className="flex flex-col gap-4 w-full">
              <Link
                className="text-white font-cfont"
                aria-label="home page"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-white font-cfont"
                aria-label="blog page"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-white font-cfont"
                aria-label="service page"
                href="/services"
              >
                Services
              </Link>
            </div>
          </div>
          <div className="hidden md:flex flex-col w-[40%]">
            <H3>Our Services</H3>
            <div className="flex flex-col gap-4 w-full">
              <Link className="text-white font-cfont" href="/services/webpage">
                Webpage
              </Link>
              <Link className="text-white font-cfont" href="/services/web-app">
                Web-app
              </Link>

              <Link
                className="text-white font-cfont"
                href="/services/mobile-app"
              >
                Mobile app
              </Link>
              <Link
                className="text-white font-cfont"
                href="/services/webpage-builder"
              >
                Webpage Builder
              </Link>
              <Link className="text-white font-cfont" href="/services/api">
                API
              </Link>
              <Link
                className="text-white font-cfont"
                href="/services/e-commerce"
              >
                E-commerce
              </Link>
              <Link className="text-white font-cfont" href="/services/other">
                Other
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-[40%]">
            <H3>Contact</H3>
            <div className="flex">
              <SocialLink
                href="mailto:max.bezsmertnyi@gmail.com"
                Icon={HiOutlineMail}
              />
              <SocialLink
                href="https://youtube.com/@max_bezs"
                Icon={AiOutlineYoutube}
              />
              <SocialLink
                href="https://www.instagram.com/max_bezs/"
                Icon={BsInstagram}
              />
              <SocialLink href="https://github.com/maxbezs" Icon={FiGithub} />
              <SocialLink href="https://t.me/max_bezs" Icon={TbBrandTelegram} />
              <SocialLink
                href="https://play.google.com/store/apps/details?id=com.eafappb.leafapp"
                Icon={RiGooglePlayLine}
              />
              <SocialLink href="https://opensea.io/max_bezs" Icon={SiOpensea} />
              <SocialLink
                href="https://sketchfab.com/max_bezs"
                Icon={SiSketchfab}
              />
              <SocialLink
                href="https://www.patreon.com/max_bezs"
                Icon={SiPatreon}
              />
              <SocialLink href="https://linktr.ee/max_bezs" Icon={SiLinktree} />
            </div>
            <Button href="/contact-us">Contact Us</Button>
          </div>
        </div>
        <div className="antialiased text-white font-cfont font-thin items-center bg-neutral-800 flex h-16 justify-between px-[10vw]">
          <Image
            alt="max_bezs logo"
            src="/max-bezs-logo-header.png"
            width="64"
            height="64"
          />
          <SmallParagraph>
            © Copyright 2023 max-bezs. All rights reserved.
          </SmallParagraph>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
