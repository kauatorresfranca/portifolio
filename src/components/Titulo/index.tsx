import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontsize: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontsize={props.fontsize}>{props.children}</TituloEstilo>
)

export default Titulo
