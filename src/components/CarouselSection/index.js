import Projet1 from "../../images/op-avril.png"
import Projet2 from "../../images/op-femme.png"
import Projet3 from "../../images/Plan de travail 3 1.png"

import './styles.sass'

export const CarouselSection = () => {
  return (
    <section className="carousel-section">
      <div>
        <h2>Pourquoi reprendre Charlène ?</h2>
        <div className="simple-text">(Et pourquoi pas ?)</div>
        <div className="projects-wrapper">
          <div className="project"><img src={Projet1} /></div>
          <div className="project"><img src={Projet2} /></div>
          <div className="project"><img src={Projet3} /></div>
        </div>
        <div className="last-text">Elle a déjà fait ses preuves non ?</div>
      </div>
    </section>
  )
}
