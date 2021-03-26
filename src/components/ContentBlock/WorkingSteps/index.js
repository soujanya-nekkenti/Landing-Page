import { Row } from 'antd';
import { withTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

import SvgIcon from '../../../common/SvgIcon';
import Button from '../../../common/Button';

import * as S from './styles';

const WorkingSteps = ({ icon, title, content, section, t, id, button }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);
		element.scrollIntoView({
			behavior: 'smooth'
		});
	};
	return (
		<S.WorkingSteps>
			<Row type="flex" justify="space-between" align="middle" id={id}>
				<Slide left>
					<S.ContentWrapper>
						<S.Header>{t(title)}</S.Header>
						<S.ServiceWrapper>
							<Row type="flex" justify="space-between">
								{section &&
									typeof section === 'object' &&
									section.map((item, id) => {
										return (
											<S.Card key={id} span={4}>
												<div>
													<S.Number>{t(item.id)}.</S.Number>
													<SvgIcon src={item.icon} width="60px" height="60px" />
												</div>
												<S.MinTitle>{t(item.title)}</S.MinTitle>
												<S.MinPara>{t(item.content)}</S.MinPara>
												{item.button && (
													<Button
														name="submit"
														type="submit"
														onClick={() => scrollTo('signup')}
													>
														{t(item.button)}
													</Button>
												)}
											</S.Card>
										);
									})}
							</Row>
						</S.ServiceWrapper>
					</S.ContentWrapper>
				</Slide>
			</Row>
		</S.WorkingSteps>
	);
};

export default withTranslation()(WorkingSteps);
