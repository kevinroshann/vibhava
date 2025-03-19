import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
export const RevealBento = () => {
    return (
        <div className="min-h-50vh bg-white px-4 py-12 text-zinc-50">
            {/* <Logo /> */}
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-8 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                {/* <AboutBlock /> */}
                <LocationBlock />
                <EmailListBlock />
            </motion.div>
            {/* <Footer /> */}
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        {/* <img
            src="hero-1.jpg"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        /> */}
        <h1 className="mb-12 text-4xl font-medium text-black leading-tight">
            For any Queries
            <br />
            <span className="text-black">
                contact 234534332
            </span>
        </h1>
        {/* <a
            href="#"
            className="flex items-center gap-1 text-red-300 hover:underline"
        >
            Contact me <FiArrowRight />
        </a> */}
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-white md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <FaYoutube />
            </a>
        </Block>
        {/* <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <FaGithub />
            </a>
        </Block> */}
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-white md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <FaInstagram />
            </a>
        </Block>
        {/* <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <FaTwitter />
            </a>
        </Block> */}
    </>
);



const LocationBlock = () => (
    <Block className="col-span-12  flex flex-col items-center gap-4 md:col-span-9">
        <FiMapPin className="text-3xl text-black" />
        <p className="text-center text-lg text-black">CUSAT</p>
    </Block>
);

const EmailListBlock = () => (
    <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg text-black">For any Queries</p>
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
        >
            <input
                type="text"
                placeholder="enter message"
                className="w-full rounded border border-black bg-white px-3 py-1.5 transition-colors focus:border-black focus:outline-0"
            />
            <button
                type="submit"
                className="flex items-center gap-2 whitespace-nowrap rounded bg-[#46beb9] px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-[#46beb9]"
            >
                <FiMail /> sent
            </button>
        </form>
    </Block>
);

