import './Message.css'

const Message = () => {
  return (
    <div className='message'>
      <p>3 nouveaux messages</p>
      <table>
        <thead>
          <tr id='headTable'>
            <th>
              <input type='checkbox' disabled />
            </th>
            <th>📎</th>
            <th>❕</th>
            <th>de ▼</th>
            <th>objet ▼</th>
            <th>date ▼</th>
          </tr>
        </thead>
        <tbody id='bodyTable'>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>📎</td>
            <td></td>
            <td>CPAM</td>
            <td>Compte-rendu rendez-vous</td>
            <td>17/03/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td>❗</td>
            <td>CPAM</td>
            <td>Confirmation rendez-vous</td>
            <td>04/03/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>📎</td>
            <td></td>
            <td>
              <b>Mutuelle</b>
            </td>
            <td>
              <b>Nouveaux documents disponibles</b>
            </td>
            <td>28/02/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td></td>
            <td>Mutuelle</td>
            <td>Ordonnance bien reçu</td>
            <td>15/02/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td>❗</td>
            <td>Mutuelle</td>
            <td>Ordonnance manquante</td>
            <td>14/02/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>📎</td>
            <td></td>
            <td>
              <b>CPAM</b>
            </td>
            <td>
              <b>Nouveaux documents disponibles</b>
            </td>
            <td>31/01/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td></td>
            <td>CPAM</td>
            <td>Re: Demande de renseignements</td>
            <td>16/01/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td></td>
            <td>Mutuelle</td>
            <td>Justificatif bien reçu</td>
            <td>08/01/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td>❗</td>
            <td>Mutuelle</td>
            <td>Demande de justificatifs</td>
            <td>05/01/21</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td>📎</td>
            <td></td>
            <td>
              <b>CPAM</b>
            </td>
            <td>
              <b>Nouveaux documents disponibles</b>
            </td>
            <td>31/12/20</td>
          </tr>
          <tr>
            <td>
              <input type='checkbox' />
            </td>
            <td></td>
            <td></td>
            <td>CPAM</td>
            <td>Re: Réclamation</td>
            <td>15/12/20</td>
          </tr>
        </tbody>
      </table>
      <select>
        <option>Action à effectuer</option>
        <option>Supprimer le(s) message(s)</option>
        <option>Archiver le(s) message(s)</option>
        <option>Marquer comme lu(s)</option>
      </select>
      <button>Valider</button>
    </div>
  )
}

export default Message
