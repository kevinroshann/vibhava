"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 font-sans antialiased sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="relative h-64 w-full sm:h-80 md:h-96">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{
                  opacity: active === index ? 1 : 0,
                  scale: active === index ? 1 : 0.95,
                  rotate: active === index ? 0 : -5,
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  draggable={false}
                  className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center lg:text-left">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 ">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 ">
              {testimonials[active].designation}
            </p>
            <p className="mt-6 text-lg text-gray-600 ">
              {testimonials[active].quote}
            </p>
          </motion.div>
          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <IconArrowLeft className="h-5 w-5 text-black " />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 "
            >
              <IconArrowRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
