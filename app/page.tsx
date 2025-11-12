/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#000510]">
      <img
        src="/headPattern.svg"
        className="absolute w-full object-contain z-20"
        alt=""
      />
      <div className="relative z-30">
        {/* Header */}
        <header className="relative z-30 flex items-center justify-between px-8 py-6 lg:px-[200px] lg:pt-[140px]">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/logo.svg"
              alt="Phoenix Protocol"
              width={173}
              height={34}
              priority
            />
          </motion.div>
          <motion.nav
            className="hidden items-center gap-8 md:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
          </motion.nav>
          <motion.button
            className="hidden md:block rounded-lg font-medium bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-6 py-2.5 text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: "Satoshi, sans-serif" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Buy $PHX
          </motion.button>
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
          className="relative z-10 px-10 min-h-[90vh] lg:min-h-screen lg:pb-20"
        >
          <video
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-auto lg:h-[1200px] h-[500px] z-1 object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/phoenixAnimation.mp4" type="video/mp4" />
          </video>
          <img
            className="w-full absolute bottom-0 left-0 z-1"
            alt="Hero Background"
            src="/blur.svg"
          />
          {/* Main Headline */}
          <motion.h1
            className="relative z-20 mb-1 lg:mt-[130px] bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text lg:text-center text-5xl font-bold leading-tight text-transparent lg:text-7xl xl:text-[95px]"
            style={{
              fontFamily: '"grift", serif',
              textShadow: "0 0 40px rgba(0, 220, 233, 0.5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Turning Market Fear Into Fuel
          </motion.h1>
          {/* Content Grid */}
          <motion.div
            className="mx-auto container lg:px-o relative z-20 flex w-full max-w-7xl flex-col items-center gap-12 lg:grid lg:grid-cols-3 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, staggerChildren: 0.2 }}
          >
            {/* Left Text Block */}
            <motion.div
              className=" w-full text-left lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
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
            </motion.div>
            <div />
            {/* Right Text Block */}
            <motion.div
              className="w-ful  hidden lg:block text-right lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p
                className="text-lg lg:text-[26px] font-medium leading-[38px] text-white"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                Every sell, every drop
                <br className="hidden lg:block" /> in confidence fuels a
                <br className="hidden lg:block" /> regenerative cycle
                <br className="hidden lg:block" /> that rewards holders
                <br className="hidden lg:block" /> and rebuilds the
                <br className="hidden lg:block" /> system from within.{" "}
                <br className="hidden lg:block" />
              </p>
            </motion.div>
          </motion.div>
          <motion.button
            className="relative z-20 rounded-lg lg:hidden font-medium bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-6 py-2.5 text-white transition-opacity hover:opacity-90"
            style={{ fontFamily: "Satoshi, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Buy $PHX
          </motion.button>
        </section>
      </div>

      {/* The Story Section */}
      <section
        id="story"
        className="relative z-50 lg:min-h-[120vh] w-full lg:px-16 bg-cover bg-center bg-no-repeat"
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
          <motion.div
            className="mb-5 lg:mb-12 inline-block border bg-[#01164580] px-10 py-5 lg:px-20 lg:py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[18px] lg:text-[30px] font-normal uppercase tracking-[10px] lg:tracking-[15px] text-white lg:mx-10"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              THE STORY
            </h2>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="pb-32 space-y-[18px] lg:space-y-[58px] text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.p
              className="text-[14px] lg:text-[25px] leading-[26px] lg:leading-[40px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              In every bear market, billions in value disappear as panic selling
              takes over. Most systems collapse under that pressure, But Phoenix
              was built to turn that fear into strength.
            </motion.p>
            <motion.p
              className="text-[14px] lg:text-[25px] leading-[26px] lg:leading-[49px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At its core, Phoenix Protocol introduces a self-healing economic
              design. When sell activity occurs, a portion of it is
              automatically redirected into a{" "}
              <span className="text-[#00C8FF] font-bold">REBUILD RESERVE</span>,
              a mechanism that rewards holders and fuels future growth. This
              transforms downturns into opportunities, creating a regenerative
              loop that stabilizes the ecosystem over time.
            </motion.p>
            <motion.p
              className="text-[14px] lg:text-[25px] leading-[26px] lg:leading-[40px] text-white"
              style={{ fontFamily: "Satoshi, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Inspired by the legendary bird that rises renewed from its own
              ashes, Phoenix Protocol stands as a symbol of resilience in a
              volatile world — a protocol that doesn&apos;t just survive the
              storm, but grows stronger because of it.
            </motion.p>
          </motion.div>

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
          <motion.div
            className="container mx-auto px-8 lg:pl-[150px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div
              className="text-left text-[100px] lg:text-[160px] text-white leading-[100px]"
              style={{ fontFamily: "'Editor's Note', serif" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              &ldquo;
            </motion.div>
            <motion.p
              className="-mt-10 lg:-mt-16 mb-4 text-xl text-white lg:text-[40px] leading-[30px] lg:leading-[43px] px-2 lg:px-16"
              style={{ fontFamily: '"grift", serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              This coin could be the last coin getting added to the US{" "}
              <br className="hidden lg:block" />
              Crypto Reserve
            </motion.p>
            <motion.p
              className="my-8 text-xl text-[#ABEDFF] lg:text-[40px] leading-[30px] lg:leading-[43px] px-2 lg:px-16"
              style={{ fontFamily: '"grift", serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Why? Because this coin solves a big problem in the crypto{" "}
              <br className="hidden lg:block" /> world.
            </motion.p>
            <motion.h2
              className="text-4xl font-semibold text-left text-[#FF2020] lg:text-[117px] px-2 lg:px-16"
              style={{ fontFamily: '"grift", serif' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              THE BEAR MARKET
            </motion.h2>
          </motion.div>

          {/* Central Collage */}
          <motion.div
            className="relative flex lg:min-h-[300px] lg:-mt-16 items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/marketBg.svg"
              alt="Market Background"
              width={1000}
              height={1000}
              className="hidden lg:block h-full w-full object-contain"
            />
            <img
              src="/marketBgMob.svg"
              alt="Market Background"
              width={1000}
              height={1000}
              className="lg:hidden h-full w-full object-contain"
            />
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="lg:-mt-32  px-8 lg:px-[200px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.div
              className="text-left text-[100px] lg:text-[160px] text-white leading-[100px]"
              style={{ fontFamily: "'Editor's Note', serif" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              &ldquo;
            </motion.div>{" "}
            <div className="lg:px-16">
              <motion.p
                className="-mt-10 lg:-mt-16 px-2 lg:px-0 mb-[17px] text-xl bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text text-transparent font-medium lg:text-[40px] leading-[33px] lg:leading-[70px]"
                style={{ fontFamily: "Satoshi, sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                After tracking what people believe could be one of Barron
                Trump&apos;s wallets because it has transactions with his main
                wallet, we can see that this wallet is accumulating a certain
                amount of <span className="font-black">$PHX</span>.
              </motion.p>
              <motion.div
                className="text-right text-[100px] lg:text-[160px] text-white leading-[50px] lg:leading-[100px]"
                style={{ fontFamily: "'Editor's Note', serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                &rdquo;
              </motion.div>{" "}
              <motion.button
                className="rounded-lg bg-linear-to-r from-[#1558FF] to-[#00DCE9] px-10 py-3 text-[30px] font-medium lg:font-semibold text-white transition-opacity hover:opacity-90"
                style={{ fontFamily: "Satoshi, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Buy $PHX
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section
        id="community"
        className="relative w-full bg-cover bg-center bg-no-repeat py-20 lg:py-[120px] overflow-hidden"
      >
        <div className="relative z-10 mx-auto container px-8">
          <motion.div
            className="relative flex flex-col items-center justify-between gap-[60px] rounded-3xl bg-linear-to-r from-[#145FE3] to-[#7BE3FA] p-12 lg:flex-row lg:gap-12 lg:py-[120px] lg:px-[158px] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            {/* Left Side - Text and Logo */}
            <img
              src="/joinBg.svg"
              alt="Phoenix Protocol Logo"
              className="absolute top-0 left-0 lg:left-[40px] z-0 object-cover"
            />
            <motion.div
              className="flex flex-1 items-center gap-6 relative z-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="shrink-0">
                <h1
                  className="text-[62px] text-center lg:text-left font-semibold leading-[57px] lg:leading-[100px] lg:text-[100px] bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text text-transparent"
                  style={{
                    fontFamily: '"grift", serif',
                    textShadow: "0 0 40px rgba(0, 220, 233, 0.5)",
                  }}
                >
                  Join the
                  <br />
                  Revolution{" "}
                </h1>
              </div>
              <div className="shrink-0">
                <motion.img
                  src="/revolution.svg"
                  alt="Phoenix Protocol Logo"
                  className="h-[65px] w-[65px] absolute top-[7%] lg:top-[5%] left-[80%] lg:left-[53%] lg:h-32 lg:w-32"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                />
              </div>
            </motion.div>

            {/* Right Side - Social Buttons */}
            <motion.div
              className="flex gap-4 relative z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="#" aria-label="X (Twitter)">
                <img src="/x.svg" alt="X" />
              </a>
              <a href="#" aria-label="Telegram">
                <img src="/tg.svg" alt="Telegram" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <motion.section
        className="mx-auto flex justify-center flex-col items-center pt-[170px] lg:pt-[240px] relative pb-[50px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        <video
          src="/phx.mp4"
          className="absolute -top-[100px] lg:-top-[180px] left-[50%] translate-x-[-50%] z-0 w-auto h-[70%]"
          autoPlay
          loop
          muted
          playsInline
        />

        <motion.img
          src="/phx.svg"
          alt="Footer Background"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        />

        <motion.div
          className="mx-auto bg-[#00C8FF] w-[90%] lg:w-[69%] h-px my-10"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="px-16 container mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="bg-linear-to-t from-[#ABEDFF] to-[#FFFFFF] bg-clip-text text-transparent text-center text-xs lg:text-[20px] leading-[20px] lg:leading-[42px]">
            Phoenix Protocol is an evolving project within the crypto ecosystem.
            Participation or investment involves significant risk and should not{" "}
            <br className="hidden lg:block" />
            be interpreted as financial advice. Always do your own research and
            consult with a qualified financial advisor before making investment{" "}
            <br className="hidden lg:block" />
            decisions.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}
