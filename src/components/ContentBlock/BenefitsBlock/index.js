import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import Slide from 'react-reveal/Slide';

import SvgIcon from '../../../common/SvgIcon';

import * as S from './styles';

const BenefitsBlock = ({ icon, title, content, section, t, id }) => {
	return (
		<S.BenefitsBlock>
			<Row type="flex" justify="space-between" align="middle" id={id}>
				<Slide right>
					<S.ContentWrapper>
						<S.Header>{t(title)}</S.Header>
						<S.ServiceWrapper>
							<Row type="flex" justify="space-between">
								{section &&
									typeof section === 'object' &&
									section.map((item, id) => {
										return (
											<Col key={id} span={6}>
												<SvgIcon src={item.icon} width="60px" height="60px" />
												<S.MinTitle>{t(item.title)}</S.MinTitle>
												<S.MinPara>{t(item.content)}</S.MinPara>
											</Col>
										);
									})}
							</Row>
						</S.ServiceWrapper>
					</S.ContentWrapper>
				</Slide>
			</Row>
		</S.BenefitsBlock>
	);
};

export default withTranslation()(BenefitsBlock);
