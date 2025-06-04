import Image from 'next/image';

export default function Hero() {
    return (
      <section className="scene active section" id="scene1">
        <div className="hero">
          <div className="left">
            <div className="header">
              Hi! I am – Promise
              <span>Aceygram Okeke</span>
            </div>
            <div className="support-text">Web Developer</div>
            <div className="buttons">
              <button>
                <a href="#scene2" className="download-link">Enter</a>
              </button>
              <button>
                <a
                  href="/CV/CV_Tone_Elisabeth_Baekholt.pdf"
                  className="download-link"
                  target="_blank"
                  download
                >
                  <span className="text">Download CV</span>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>download</title>
                      <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                    </svg>
                  </span>
                </a>
              </button>
            </div>
          </div>
  
          <div className="center-line"></div>
  
          <div className="right">
            <div className="img-container">
                <Image 
                    src="/images/ace-no-bg.png" 
                    alt="Hero Image"
                    width={400}
                    height={400}
                />
            </div>
          </div>
        </div>
      </section>
    );
  }