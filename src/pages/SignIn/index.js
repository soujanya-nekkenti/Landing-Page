import { withTranslation } from 'react-i18next';
import bankID_logo from './images/bankIdLogo.svg';

import * as S from './styles';

import * as S1 from '../Home/styles';

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth'
		});
	};

	return (
		<S1.Background max>
			<S.MiddleBlock>
				<S.SignInContainer>
					<S.SignInHeader>Welcome back</S.SignInHeader>
					<S.SignInSubText>Please sign-in via BankID</S.SignInSubText>
					<S.SignInSubLogo>
						<S.BankIdContainer>
							<S.BankIdLogo src={bankID_logo} alt="" />
						</S.BankIdContainer>
						<form style={{ textAlign: 'center' }} onSubmit={() => scrollTo('mission')}>
							<input
								className="form_controller"
								label="Email Address or SSN"
								InputProps={{ disableUnderline: true }}
								id="ssn"
							/>
							<S.SignInButton type="submit">Sign-in with BankID</S.SignInButton>
						</form>
					</S.SignInSubLogo>
					<S.SignUpContainer>
						<S.SignInSubText>New to Swiftly?</S.SignInSubText>
						<S.SignUpLink to={'/registration/step1'}>Sign up</S.SignUpLink>
					</S.SignUpContainer>
				</S.SignInContainer>
			</S.MiddleBlock>
		</S1.Background>
	);
};

export default withTranslation()(LeftContentBlock);
