import styled from '@emotion/styled';
import { mediaSizes } from 'constants';
import { container } from 'helpers';
import imagedesk from 'images/Sidebarimg/imgdesk2x.png';

export const CalculatorStyled = styled.div`
  ${container}
  display: flex;
  flex-direction: column;
  row-gap: 55px;

  @media screen and (min-width: ${mediaSizes.desktop}) {
    flex-direction: row;
  }

  &::before {
    content: '';
    display: none;

    @media screen and (min-width: ${mediaSizes.desktop}) {
      display: block;
      position: fixed;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      width: 40%;
      height: 100vh;
      background: url(${imagedesk}) top 80px right #f0f1f3 no-repeat;
      background-size: auto 900px;
    }
  }
`;