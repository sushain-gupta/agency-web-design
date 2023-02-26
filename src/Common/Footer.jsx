import React from "react";
import FooterLink from "./Components/FooterLinks";

function Footer() {
  return (
    <>
      <section className="relative flex h-max flex-col gap-24 bg-darkBlue py-28 px-20 text-white">
        <div className="flex">
          <div className="grid w-[70%] grid-cols-4">
            <div className="flex flex-col gap-5">
              <h2 className="text-xl">Services</h2>
              <ul className="flex flex-col gap-2">
                <FooterLink to="/" linkName={"Web Hosting"}></FooterLink>
                <FooterLink to="/" linkName={"Domains"}></FooterLink>
                <FooterLink to="/" linkName={"Premium Hosting"}></FooterLink>
                <FooterLink to="/" linkName={"Private Server"}></FooterLink>
                <FooterLink to="/" linkName={"E-mail Hosting"}></FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl">Support</h2>
              <ul className="flex flex-col gap-2">
                <FooterLink to="/" linkName={"Pricing Plan"}></FooterLink>
                <FooterLink to="/" linkName={"Documentation"}></FooterLink>
                <FooterLink to="/" linkName={"Guide"}></FooterLink>
                <FooterLink to="/" linkName={"Tutorial"}></FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl">Company</h2>
              <ul className="flex flex-col gap-2">
                <FooterLink to="/" linkName={"About"}></FooterLink>
                <FooterLink to="/" linkName={"Blog"}></FooterLink>
                <FooterLink to="/" linkName={"Join us"}></FooterLink>
                <FooterLink to="/" linkName={"Press"}></FooterLink>
                <FooterLink to="/" linkName={"Partners"}></FooterLink>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-xl">Legal</h2>
              <ul className="flex flex-col gap-2">
                <FooterLink to="/" linkName={"Claim"}></FooterLink>
                <FooterLink to="/" linkName={"Privacy"}></FooterLink>
                <FooterLink to="/" linkName={"Terms"}></FooterLink>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-bold">Subcribe to our newsletter</h2>
            <p>
              Funding freemium long tail hypotheses first mover advantage assets
              ownership
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                className="w-full rounded-lg p-2"
                placeholder="Your email address…"
              />
              <button className="rounded-lg bg-[#6E00FA] p-3">Subscribe</button>
            </div>
          </div>
        </div>

        <p className="w-full border-t border-gray-500 pt-10 text-center text-gray-500">
          Design with love © TanahAirStudio 2020. All right reserved
        </p>
      </section>
    </>
  );
}

export default Footer;
