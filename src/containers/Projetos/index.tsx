import Titulo from '../../components/Titulo'
import Projeto from '../Projetos'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <ul>
      <li>
        <Projeto />
      </li>
    </ul>
  </section>
)

export default Projetos
