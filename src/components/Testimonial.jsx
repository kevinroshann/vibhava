import { AnimatedTestimonials } from "./ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "sample datasample datasample datasample datasample datasample datasample datasample datasample datasample data",
      name: "person1",
      designation: "designation1",
      src: "/mountain.jpg",
    },
    {
      quote:
        "sample datasample datasample datasample datasample datasample datasample datasample datasample datasample data",
      name: "person2",
      designation: "designation1",
      src: "/mountain.jpg",
    },
    {
      quote:
        "sample datasample datasample datasample datasample datasample datasample datasample datasample datasample data",
      name: "person3",
      designation: "designation1",
      src: "/mountain.jpg",
    },
    
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="px-5 pt-7 pb-7 text-center">
        <p className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl text-black tracking-tight">
          Speakers
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
