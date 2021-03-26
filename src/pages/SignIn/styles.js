import styled from 'styled-components';
import { Col } from 'antd';

export const MiddleBlock = styled.section`
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
	max-width: 570px;

	@media only screen and (max-width: 768px) {
		max-width: 100%;
	}
`;

export const ServiceWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 100%;
`;

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

export const SignInContainer = styled.div`
	display: flex;
	flex-flow: column;
	width: 610px;
	// height: 530px;
	border-radius: 28px;
	background-color: rgba(255, 255, 254, 0.45);
	margin-top: 100px;
`;

export const SignInHeader = styled.div`
	height: 42px;
	margin-top: 36px;
	font-family: 'Mulish-Regular';
	font-size: 42px;
	font-weight: bold;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.29;
	letter-spacing: normal;
	text-align: center;
	color: #111111;
`;

export const SignInSubText = styled.p`
	text-align: center;
	color: #686868;
`;

export const SignInSubLogo = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`;

export const BankIdContainer = styled.div`
	width: 90px;
	height: 80px;
	border-radius: 6px;
	background-color: #ffffff;
	display: flex;
	place-content: center;
	user-select: none;
	margin-bottom: 32px;
	margin-top: 49px;
`;

export const BankIdLogo = styled.img`
	width: 48px;
	height: 45px;
	margin-right: 0;
`;

export const SignInButton = styled.button`
	border-radius: 10px;
	background-color: #7056c8;
	font-weight: 400;
	color: white;
	text-decoration: none;
	padding-right: 25px;
	padding-left: 25px;
	padding-top: 14px;
	padding-bottom: 14px;
	position: relative;
	box-shadow: 0 10px 40px 0 rgba(206, 155, 0, 0.2);
	margin-top: 16px;
`;

export const SignUpContainer = styled.div`
	margin-top: 70px;
	text-align: center;
	margin-bottom: 36px;
`;

export const SignUpLink = styled.a`
	text-align: center;
	color: #7056c8;
	text-decoration: none;
	font-weight: bold;
	margin-left: 8px;
`;
