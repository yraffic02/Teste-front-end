import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
   color: ${(props)=> props.theme.colors.grayPrimary};
  font: ${(props)=> props.theme.fonts.body3Bold};
`

export const BreadcrumbStyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  color: ${(props)=> props.theme.colors.grayPrimary};
  margin-right: 0.25rem;
`
