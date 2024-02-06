import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
   color: ${(props)=> props.theme.colors.white};
`
export const BreadcrumbList = styled.ol`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    gap: 0.25rem;

    list-style-type: none;
    font: ${(props)=> props.theme.fonts.body3Bold};
`;

export const BreadcrumbItemList = styled.li`
  display: inline;
`;

export const BreadcrumbStyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  color: ${(props)=> props.theme.colors.white};
  margin-right: 0.25rem;
`
