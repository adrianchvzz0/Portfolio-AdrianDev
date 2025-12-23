import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useEffect, useRef } from "react";



export default function HeroAnimation() {
    const textRef = useRef();
    const textRef2 = useRef(); // Nuevo ref para el segundo split
    const pRef = useRef();
    const navRef = useRef();

    useEffect(() => {
        const split = new SplitText(textRef.current, { type: "words" });
        const split2 = new SplitText(textRef2.current, { type: "words" });
        const split3 = new SplitText(pRef.current, { type: "chars" });

        const tl = gsap.timeline();

        tl.from(split.words, {
            duration: 1,
            y: 20,
            filter: "blur(8px)",
            autoAlpha: 0,
        });
        tl.from(split2.words, {
            duration: 0.8,
            y: 20,
            filter: "blur(8px)",
            autoAlpha: 0,
        });
        tl.from(split3.chars, {
            duration: 0.5,
            y: 10,
            stagger: 0.02,
            filter: "blur(8px)",
            autoAlpha: 0,
        });
        tl.fromTo(
            navRef.current,
            {
                y: 10,
                opacity: 0,
                scale: 0.9,
                filter: "blur(10px)",
            },
            {
                duration: 0.5,
                y: 0,
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                ease: "back.in",
            }

        );
    }, []);

    return (
        <section className="block w-full lg:w-[740px] mx-auto pt-52 pb-0">
            <h1
                ref={textRef}
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-wrap gap-4 lg:gap-x-4 pb-6 lg:pb-2"
            >
                Hey! I'm Adrián Chávez
            </h1>

            <h2
                ref={textRef2}
                className="text-indigo-200 text-xl md:text-2xl lg:text-2xl font-medium pb-4"
            >
                Full Stack Developer
            </h2>

            <p
                ref={pRef}
                className="text-white text-lg md:text-xl lg:text-xl opacity-80 max-w-[800px] whitespace-pre-wrap"
            >
                <span>+1 year of experience as Full Stack Developer. </span>
                <span className="text-indigo-300">From Monterrey, Nuevo León. </span>
                <span className="opacity-80">
                    I'm specialized in modern web development and unique applications.
                </span>
            </p>


        </section>
    );
}
