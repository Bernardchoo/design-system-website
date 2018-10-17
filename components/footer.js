import React from 'react'
import styled from 'styled-components'

import {
  flexDirection,
  space
} from 'styled-system'

import Container from './Container'
import Text from './Text'
import Link from './Link'

const FooterStyled = styled.footer`
  background: ${props => props.theme.colors['primary-light']};
`

const MyContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;

  ${space}
  ${flexDirection}
`

const Footer = ({}) => (
  <FooterStyled>
    <MyContainer flexDirection={['column', 'row']} py={3}>
      <Link href="//consensys.design/" target='_blank'>Made by ConsenSys Design</Link>
      <Text color='#888D95'>© 2018 ConsenSys Inc.</Text>
    </MyContainer>
  </FooterStyled>
)

export default Footer
