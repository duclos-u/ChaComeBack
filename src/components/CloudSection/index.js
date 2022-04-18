import Cloud from "../../images/cloud.png"
import './styles.sass'

export const CloudSection = () => {
  return (
    <section className="cloud-section">
      <div className="first-cloud-wrapper">
        <img className="cloud" src={Cloud} />
      </div>
      <div className="cloud-text-div">
        <h2 className="">Et la graphiste actuelle ?</h2>
        <div className="simple-text">
          Bien que la proposition de rester en alternance fut bien mise sur la table, le poussin
          actuel a choisit de quitter le nid plutôt que de continuer l’aventure au sein du
          poulailler, malgré son chagrin immense.
        </div>
      </div>
      <div className="third-cloud-wrapper">
        <img className="cloud" src={Cloud} />
      </div>
    </section>
  )
}
