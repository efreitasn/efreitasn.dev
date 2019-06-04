import styled from 'styled-components';
import { COLOR_GREY_2 } from 'Styles/colors';

const LayoutFooterSeparator = styled.span.attrs({
  children: '/'
})`
  color: ${COLOR_GREY_2};
  margin: 0 1rem;
`;

export default LayoutFooterSeparator;