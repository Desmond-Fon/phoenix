/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-[200px] lg:pt-[140px]">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Phoenix Protocol"
            width={173}
            height={34}
            priority
          />
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="font-sans text-white transition-opacity hover:opacity-80"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Home
          </a>
          <a
            href="#story"
            className="font-sans text-white transition-opacity hover:opacity-80"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            The Story
          </a>
          <a
            href="#community"
            className="font-sans text-white transition-opacity hover:opacity-80"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Community
          </a>
          <a
            href="#future"
            className="font-sans text-white transition-opacity hover:opacity-80"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            The Future
          </a>
        </nav>
        <button
          className="hidden md:block rounded-lg font-medium bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-6 py-2.5 text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Buy $PHX
        </button>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <img src="/hamburger.svg" alt="Menu" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="relative z-10 px-6 pt-4">
            <div className="relative w-full bg-[#000510FC] rounded-2xl p-10 space-y-8">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-white hover:opacity-80 transition-opacity"
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Navigation Items */}
              <nav className="flex flex-col items-start space-y-8">
                <a
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-white text-center text-2xl transition-opacity hover:opacity-80"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  Home
                </a>
                <a
                  href="#story"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-white text-center text-2xl transition-opacity hover:opacity-80"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  The Story
                </a>
                <a
                  href="#community"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative font-sans text-white text-center text-2xl transition-opacity hover:opacity-80"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  The Community
                </a>
                <a
                  href="#future"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-white text-center text-2xl transition-opacity hover:opacity-80"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  The Future
                </a>
              </nav>

              {/* Buy Button */}
              <button
                className="w-full rounded-lg font-medium bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-6 py-3.5 text-white transition-opacity hover:opacity-90 shadow-lg shadow-[#1558FF]/30"
                style={{ fontFamily: "Satoshi, sans-serif" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Buy $PHX
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10  px-10 h-[85vh] lg:min-h-screen pb-20"
      >
        <img
          className="hidden lg:block absolute top-0 left-0 w-full h-full z-0"
          alt="Hero Background"
          src="/hero.svg"
        />
        <img
          className="lg:hidden absolute bottom-0 left-0 z-0"
          alt="Hero Background"
          src="/heroMob.png"
        />
        {/* Main Headline */}
        <h1
          className="mb-1 lg:mt-[130px] bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text lg:text-center text-5xl font-normal leading-tight text-transparent lg:text-7xl xl:text-[105px]"
          style={{
            fontFamily: '"Editor\'s Note", serif',
            textShadow: "0 0 40px rgba(0, 220, 233, 0.5)",
          }}
        >
          Turning Market Fear Into Fuel
        </h1>

        {/* Content Grid */}
        <div className="mx-auto container lg:px-o relative flex w-full max-w-7xl flex-col items-center gap-12 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left Text Block */}
          <div className=" w-full text-left lg:col-span-1">
            <p
              className="mt-[20px] lg:mt-0 mb-5 lg:mb-[38px] text-base lg:text-[26px] font-medium leading-[26px] lg:leading-[38px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              The market burns, Phoenix rebuilds, Turning fear into fuel.
            </p>
            <p
              className="text-base lg:text-[26px] font-medium leading-[26px] lg:leading-[38px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              The fear that <br className="hidden lg:block" /> weakens others{" "}
              <br className="hidden lg:block" /> becomes the
              <br className="hidden lg:block" /> energy that makes{" "}
              <br className="hidden lg:block" /> Phoenix stronger.
            </p>
          </div>
          <div />

          {/* Right Text Block */}
          <div className="w-ful  hidden lg:block text-right lg:col-span-1">
            <p
              className="text-lg lg:text-[26px] font-medium leading-[38px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Every sell, every
              <br className="hidden lg:block" /> drop in confidence
              <br className="hidden lg:block" /> fuels a regenerative
              <br className="hidden lg:block" /> cycle that rewards
              <br className="hidden lg:block" /> holders and rebuilds
              <br className="hidden lg:block" /> the system from{" "}
              <br className="hidden lg:block" />
              within.
            </p>
          </div>
        </div>

        <button
          className="rounded-lg lg:hidden font-medium bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-6 py-2.5 text-white transition-opacity hover:opacity-90"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          Buy $PHX
        </button>
      </section>

      {/* The Story Section */}
      <section
        id="story"
        className="relative lg:min-h-[120vh] w-full lg:px-16 bg-cover bg-center bg-no-repeat"
      >
        {/* Desktop Background */}
        <img
          src="/bg.png"
          alt="Story Background"
          className="hidden lg:block absolute top-0 left-0 w-full h-full z-0 object-cover"
        />
        {/* Mobile Background */}
        <img
          src="/flame.png"
          alt="Story Background Mobile"
          className="lg:hidden absolute bottom-0 left-0  z-0 object-cover"
        />
        <img
          src="/blur.svg"
          alt="Story Background"
          className="hidden lg:block absolute bottom-0 left-0 w-full h-full z-0"
        />
        <div className="container mx-auto relative z-10 px-8 py-20 lg:px-[170px] lg:py-32">
          {/* Title Box */}
          <div className="mb-5 lg:mb-12 inline-block border bg-[#01164580] px-10 py-5 lg:px-20 lg:py-6">
            <h2
              className="text-[18px] lg:text-[30px] font-normal uppercase tracking-[10px] lg:tracking-[15px] text-white lg:mx-16"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              THE STORY
            </h2>
          </div>

          {/* Text Content */}
          <div className="pb-32 space-y-[18px] lg:space-y-[58px] text-left">
            <p
              className="text-[14px] lg:text-[25px] leading-[26px] lg:leading-[40px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              In every bear market, billions in value disappear as panic selling
              takes over. Most systems collapse under that pressure, But Phoenix
              was built to turn that fear into strength.
            </p>
            <p
              className="text-[14px] lg:text-[25px] leading-[26px] lg:leading-[40px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              At its core, Phoenix Protocol introduces a self-healing economic
              design. When sell activity occurs, a portion of it is
              automatically redirected into a{" "}
              <span className="text-[#00C8FF]">REBUILD RESERVE</span>, a
              mechanism that rewards holders and fuels future growth. This
              transforms downturns into opportunities, creating a regenerative
              loop that stabilizes the ecosystem over time.
            </p>
            <p
              className="text-[14px] lg:text-[25px] leading-[26px] lg:leading-[40px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Inspired by the legendary bird that rises renewed from its own
              ashes, Phoenix Protocol stands as a symbol of resilience in a
              volatile world — a protocol that doesn&apos;t just survive the
              storm, but grows stronger because of it.
            </p>
          </div>

          {/* Flame Graphic
          <div className="relative -bottom-20 left-0 right-0 flex items-end justify-center">
            <Image
              src="/revolution.svg"
              alt="Phoenix Flame"
              width={1200}
              height={600}
              className="w-full max-w-7xl"
              priority
            />
          </div> */}
        </div>
      </section>

      {/* Market Section */}
      <section
        id="future"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="relative z-10 flex min-h-screen flex-col justify-between pt-20 lg:pt-32">
          {/* Top Section */}
          <div className="container mx-auto px-8 lg:pl-[150px]">
            <div
              className="text-left text-[100px] lg:text-[160px] text-white leading-[100px]"
              style={{ fontFamily: '"Editor\'s Note", serif' }}
            >
              “
            </div>
            <p
              className="-mt-10 lg:-mt-16 mb-4 text-xl text-white lg:text-[40px] leading-[30px] lg:leading-[43px] px-2 lg:px-16"
              style={{ fontFamily: '"Editor\'s Note", serif' }}
            >
              This coin could be the last coin getting added to the US Crypto{" "}
              <br className="hidden lg:block" />
              Reserve
            </p>
            <p
              className="my-8 text-xl text-[#ABEDFF] lg:text-[40px] leading-[30px] lg:leading-[43px] px-2 lg:px-16"
              style={{ fontFamily: '"Editor\'s Note", serif' }}
            >
              Why? Because this coin solves a big problem in the crypto world.
            </p>
            <h2
              className="text-4xl text-left text-[#FF2020] lg:text-[117px] px-2 lg:px-16"
              style={{ fontFamily: '"Editor\'s Note", serif' }}
            >
              THE BEAR MARKET
            </h2>
          </div>

          {/* Central Collage */}
          <div className="relative flex lg:min-h-[300px] lg:-mt-16 items-center justify-center">
            <Image
              src="/marketBg.png"
              alt="Market Background"
              width={1000}
              height={1000}
              className="hidden lg:block h-full w-full object-contain"
            />
            <img
              src="/marketBgMob.png"
              alt="Market Background"
              width={1000}
              height={1000}
              className="lg:hidden h-full w-full object-contain"
            />
          </div>

          {/* Bottom Section */}
          <div className="lg:-mt-32  px-8 lg:px-[200px]">
            <div
              className="text-left text-[100px] lg:text-[160px] text-white leading-[100px]"
              style={{ fontFamily: '"Editor\'s Note", serif' }}
            >
              “
            </div>{" "}
            <div className="lg:px-16">
              <p
                className="-mt-10 lg:-mt-16 px-2 lg:px-0 mb-[17px] text-xl bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text text-transparent font-medium lg:text-[40px] leading-[33px] lg:leading-[70px]"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                After tracking what people believe could be one of Barron
                Trump&apos;s wallets because it has transactions with his main
                wallet, we can see that this wallet is accumulating a certain
                amount of <span className="font-black">$PHX</span>.
              </p>
              <div
                className="text-right text-[100px] lg:text-[160px] text-white leading-[50px] lg:leading-[100px]"
                style={{ fontFamily: '"Editor\'s Note", serif' }}
              >
                &rdquo;
              </div>{" "}
              <button
                className="rounded-lg bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-10 py-3 text-[30px] font-medium lg:font-semibold text-white transition-opacity hover:opacity-90"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Buy $PHX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section
        id="community"
        className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-[120px] overflow-hidden"
      >
        <div className="relative z-10 mx-auto container px-8">
          <div
            className="flex flex-col items-center justify-between gap-[60px] rounded-3xl bg-linear-to-r from-[#145FE3] to-[#7BE3FA] p-12 lg:flex-row lg:gap-12 lg:py-[120px] lg:px-[158px] "
            // style={{
            //   backgroundImage: "url('/joinBg.svg')",
            // }}
          >
            {/* Left Side - Text and Logo */}
            <img
              src="/joinBg.svg"
              alt="Phoenix Protocol Logo"
              className="absolute top-0 lg:-left-[400px] w-full h-full z-0"
            />
            <div className="flex flex-1 items-center gap-6">
              <div className="shrink-0">
                <h1
                  className="text-[62px] text-center lg:text-left font-normal leading-[57px] lg:leading-tight lg:text-[100px] bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text text-transparent"
                  style={{
                    fontFamily: '"Editor\'s Note", serif',
                    textShadow: "0 0 40px rgba(0, 220, 233, 0.5)",
                  }}
                >
                  Join the
                  <br />
                  Revolution{" "}
                </h1>
              </div>
              <div className="shrink-0">
                <img
                  src="/revolution.svg"
                  alt="Phoenix Protocol Logo"
                  className="h-[65px] w-[65px] absolute top-[19%] lg:top-[30%] left-[68%] lg:left-[33%] lg:h-32 lg:w-32"
                />
              </div>
            </div>

            {/* Right Side - Social Buttons */}
            <div className="flex gap-4">
              <a href="#" aria-label="X (Twitter)">
                <img src="/x.svg" alt="X" />
              </a>
              <a href="#" aria-label="Telegram">
                <img src="/tg.svg" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="mx-auto flex justify-center flex-col items-center pt-[240px] relative pb-[50px]">
        <img
          src="/foot.svg"
          alt="Footer Background"
          className="absolute -top-[100px] lg:-top-[180px] left-[50%] translate-x-[-50%] z-0"
        />
        <img src="/phx.svg" alt="Footer Background" />

        <div className="mx-auto bg-[#00C8FF] w-[90%] h-px lg:hidden my-10"></div>
        <div className="px-16 container mx-auto">
          <p className="bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text text-transparent text-center text-xs lg:text-[20px] leading-[20px] lg:leading-[42px]">
            Phoenix Protocol is an evolving project within the crypto ecosystem.
            Participation or investment involves significant risk and should not{" "}
            <br className="hidden lg:block" />
            be interpreted as financial advice. Always do your own research and
            consult with a qualified financial advisor before making investment{" "}
            <br className="hidden lg:block" />
            decisions.
          </p>
        </div>
      </section>
    </div>
  );
}
