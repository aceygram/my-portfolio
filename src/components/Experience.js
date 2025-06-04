import Tools from "./Tools"
import WorkCarousel from "./WorkCarousel"

export default function Experience() {
    return (
      <section className="scene section" id="scene5">
        <div className="work-experience-wrapper">
          <div className="header">My Personal Works</div>
          <WorkCarousel />
          <div id="scene5-header" className="header">My Tools</div>
          <Tools />
        </div>
      </section>
    )
}