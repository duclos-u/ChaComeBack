import webPoussin from '../../images/web-poussin.png'

import './styles.sass'

export const Kecece = () => {
  return (
    <section className="kecece-section">
      <div className="container container-reverse">
        <div className="kecece-img">
          <img src={webPoussin} />
        </div>
        <div className="kecece-text-div">
          <h2>Kécecé ce site ?</h2>
          <div className="kecece-text-div-main-text">
            Cet étrange site a vu le jour suite à l’ouverture d’un nouveau poste chez Panopli.
            En effet, le poulailler cherche actuellement <span>son futur poussin graphiste en alternance pour septembre.</span>
          </div>
          <div className="kecece-rapport">→ Mais quel est le rapport ?</div>
        </div>
      </div>
    </section>
  )
}
