import Image from 'next/image';

export default function About() {
    return (
        <section className="scene section" id="scene3">
            <div className="left">
                <div className="header">About Me</div>
                <div className="img-container">
                    <Image 
                        src="/images/ace-collage.png" 
                        alt="Ace collage" 
                        width={550} 
                        height={550}
                        className="about-image"
                    />
                </div>
            </div>
            <div className="right">
                <div className="about-text">
                <div className="top">
                    <p>
                        Hi there! I&apos;m a 30-year-old web developer, born on May 14th (Taurus) — focused, creative, and grounded in my approach to building digital experiences. I specialize in designing and developing modern, responsive websites that are as visually appealing as they are functional.

                        What drives me most is the art of simplicity. I love creating clean, stunning, and user-friendly designs that catch the eye without overwhelming the viewer. My work reflects a balance between aesthetics and performance — because great design is more than just visuals; it&apos;s about how it feels and functions too.
                    </p>

                    <p>
                        My tech stack includes HTML, CSS, JavaScript, React, and Next.js, and I&apos;m always exploring ways to improve user experience through thoughtful design choices and smooth, responsive layouts. Whether it&apos;s a personal portfolio, a startup landing page, or a showcase for a product, I aim to craft interfaces that speak clearly and elegantly.

                        Outside of web development, I enjoy immersing myself in video games, shooting a game of billiards, and binge-watching Marvel movies (yes, I&apos;ve seen them all—more than once). These hobbies keep me inspired and remind me of the power of storytelling, design, and strategy — all of which I bring back into my coding work.
                    </p>
                    
                    <p className="span">
                        I&apos;m also someone who thrives in collaborative environments. I value strong communication, clear goals, and the ability to share ideas with designers, developers, and clients alike. I&apos;m comfortable working solo, but I truly enjoy the energy of team projects — especially when we&apos;re building something meaningful together.

                        Over time, I&apos;ve learned that success in this field isn&apos;t just about writing good code — it&apos;s also about being reliable, adaptable, and self-motivated. I approach every project with a can-do attitude and an eye for improvement, whether it&apos;s refining a component, rethinking a layout, or learning a new tool to get the job done better.

                        So if you&apos;re looking for someone who can build clean, elegant, and engaging web experiences — and have fun doing it — I&apos;d love to connect. Let&apos;s bring your ideas to life, one scroll at a time.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}
