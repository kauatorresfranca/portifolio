import Titulo from '../../components/Titulo'
import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Kauã torres</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        kauatorresfranca
      </Paragrafo>
      <Descricao tipo="principal" fontSize={13}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
