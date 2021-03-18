import Donut from '../components/Donut'

import './Analyse.css'

import eventArray from '../data/fakejson/fakedata.json'

const Analyse = () => {
  return (
    <div>
      Votre mutuelle actuelle ne vous rembourse pas totalement vos actes de
      podologies, <a href='https://apgis.com/'>APGIS</a> propose de meilleur
      remboursement pour ces actes.
      <select>
        <option>Tous les assurés</option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <Donut />
      <div className='analyseBody'>
        <h1>Bienvenue</h1>
        <h2>DENTISTE</h2>
        <h3>10/02/2020 Dr Alain TRAN</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut
          velit excepturi ex enim iure eveniet, voluptatum illo praesentium.
          Distinctio saepe laboriosam facilis molestias quos reprehenderit eaque
          commodi nam ea.
        </p>
        <button className='button'>Test</button>
      </div>
    </div>
  )
}
export default Analyse
