import styled from 'styled-components';
import img1 from './bgImage.svg';
import img2 from './bgImage2.svg';

export const Background = styled.div`
	background-image: ${(props) => (props.dark ? `url(${img2})` : `url(${img1})`)};
	width: 100%;
	max-height: ${(props) => (props.max ? '100%' : '700px')};
`;

export const Img = styled.img`
	position: absolute;
	top: 150px;
`;
