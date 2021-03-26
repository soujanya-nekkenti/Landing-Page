import styled from 'styled-components';
import { Col } from 'antd';

export const WorkingSteps = styled.section`
	position: relative;
	padding: 7.5rem 0 3rem;
	text-align: center;
	display: flex;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding: 5.5rem 0 3rem;
	}
`;

export const Content = styled.p`margin: 1.5rem 0 2rem 0;`;

export const ContentWrapper = styled.div`
	position: relative;
	max-width: 1280px;

	@media only screen and (max-width: 480px) {
		margin: 2rem 0;
	}
`;

export const Header = styled.h6`padding-bottom: 40px;`;

export const ServiceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 100%;
	background: #f7f8f9;
	padding: 40px;
`;

export const Card = styled(Col)`
   background: #ffffff;
   font-size: 24px;
`;

export const Number = styled.span`color: black;`;

export const MinTitle = styled.h6`
	font-size: 1rem;
	line-height: 1rem;
	padding: 0.5rem 0;
`;

export const MinPara = styled.p`font-size: 0.75rem;`;

export const ServiceItem = styled(Col)`
  margin: 2rem 0;
  position: relative;
`;
