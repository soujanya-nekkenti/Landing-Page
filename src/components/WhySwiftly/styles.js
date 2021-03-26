import styled from 'styled-components';

export const WhySwiftly = styled.section`
	position: relative;
	padding: 7.5rem 0 3rem;
	text-align: center;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding: 5.5rem 0 3rem;
	}
`;

export const Content = styled.p`padding: 0.75rem 0 0.75rem;`;

export const ContentWrapper = styled.div`
	max-width: 100%;

	@media only screen and (max-width: 768px) {
		max-width: 100%;
	}
`;

export const TextAnalysis = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const Box = styled.div`
	width: 300px;
	height: 200px;
	padding-top: 50px;
`;

export const BoxNumber = styled.p`
	text-align: center;
	text-decoration: none;
	color: black;
	font-size: 2.5rem;
	font-weight: 300;
	line-height: 0.978;
	letter-spacing: 0em;
	margin-bottom: 1rem;
`;

export const BoxText = styled.p`
	text-align: center;
	text-decoration: none;
	color: black;
	font-size: 1rem;
	font-weight: 300;
	line-height: 0.978;
	letter-spacing: 0em;
	padding-left: 25px;
	padding-right: 25px;
`;

export const Line = styled.div`padding-top: 60px;`;

export const Line1 = styled.div`
	border-left: 0.063rem solid #dfa800;
	height: 180px;
	display: flex;
	flex-flow: column;
`;
