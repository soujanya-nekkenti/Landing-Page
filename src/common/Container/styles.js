import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding: ${(props) => (props.padding ? '2.8rem' : '0 25px')};
	overflow: hidden;
	border-top: ${(props) => (props.border ? '1px solid #CDD1D4' : '')};
`;
