import PoussinPerdu from '../../images/poussinperdu.png'

import './styles.sass'

export const PoussinBack = () => {
  return (
    <section className="poussin-back-section">
      <div className="poussin-back-section-container">
        <div className="poussin-back-div">
          <div className="poussin-back-div-img">
            <img className="" src={PoussinPerdu} alt="édez moa" />
          </div>
          <div className="poussin-back-div-text">
            <h2>Mais le poussin veut rentrer.</h2>
            <div className="simple-text">
              Une décision prise trop tôt, et voilà que tout bascule.
              Un poussin perdu souhaitant sortir de sa zone de confort se retrouva égaré dans ce vaste monde.
              <div className="semi-bold">Pourquoi se forcer alors que l’aventure est si belle ici ?</div>
            </div>
          </div>
        </div>
        <div className="poussin-alone-text">
          Rentrer chez lui semble facile, pourtant le défi est de taille. La porte jadis grande ouverte pour le poussin
          fut fermée à jamais par lui-même.
          <div className="semi-bold">Comment réouvrir cette porte sans forcer le verrou ?</div>
        </div>
      </div>
    </section>
  )
}
