import { Container, StatIcon, StatBody, StatTitle, StatValue } from './StatsOverview.styles'

export function StatsOverview(props) {
  const { title, value } = props

  return <Container>
    <StatIcon>📈</StatIcon>

    <StatBody>
      <StatTitle>{title}</StatTitle>
      <StatValue>{value}</StatValue>
    </StatBody>
  </Container>
}