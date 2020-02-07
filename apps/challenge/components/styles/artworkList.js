/*
 * You can EDIT this FILE
 */

import styled from "styled-components";

export const ArtworkList = styled.div`
  h1 {
    display: inline;
    font-size: ${props => props.theme.fontSizes[6]}px;
    font-family: ${props => props.theme.fontFamilySerif};
    font-weight: normal;
    margin-top: 0;
    margin-right: 10px;
  }
  span {
    font-size: ${props => props.theme.fontSizes[3]}px;
    font-family: ${props => props.theme.fontFamilySerif};
  }
`;

export const ListItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, minmax(360px, 1fr));
  }
`;
