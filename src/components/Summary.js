import Image from 'next/image';

export default function Summary(){
    return (
        <section className="scene section" id="scene2">
            <div className="left">
                <div className="img-container">
                    <Image 
                        src="/images/illustration.svg" 
                        alt="Summary illustration"
                        width={400}
                        height={400}
                    />
                </div>
            </div>
            <div className="right">
                <div className="header">SUMMARY</div>
                <div className="summary">
                    A front-end web developer with a passion for clean, minimal designs. I specialize in CSS, JavaScript, React, and Next.js, blending creativity with problem-solving to build user-friendly and visually appealing web experiences. I love tackling challenges and transforming ideas into interactive digital products. Let&apos;s collaborate to bring your ideas to life!
                </div>
            </div>
        </section>
    );
}