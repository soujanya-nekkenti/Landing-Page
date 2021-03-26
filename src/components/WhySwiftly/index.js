import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

const WhySwiftly = ({ title, content, t }) => {
	return (
		<S.WhySwiftly>
			<Row type="flex" justify="center" align="middle">
				<Fade bottom>
					<S.ContentWrapper>
						<Col lg={24} md={24} sm={24} xs={24}>
							<h6>{t(title)}</h6>
							<S.Content>{t(content)}</S.Content>
						</Col>
						<S.TextAnalysis data-aos-delay="500" data-aos="fade-up">
							<S.Box>
								<S.BoxNumber>212,458</S.BoxNumber>
								<S.BoxText>Available jobs local and international</S.BoxText>
							</S.Box>
							<S.Line>
								<S.Line1 />
							</S.Line>
							<S.Box>
								<S.BoxNumber>2 hours</S.BoxNumber>
								<S.BoxText>Average time spent per job application</S.BoxText>
							</S.Box>
							<S.Line>
								<S.Line1 />
							</S.Line>
							<S.Box>
								<S.BoxNumber>37,758</S.BoxNumber>
								<S.BoxText>Skilled measure and taught</S.BoxText>
							</S.Box>
							<S.Line>
								<S.Line1 />
							</S.Line>
							<S.Box>
								<S.BoxNumber>1 in 20</S.BoxNumber>
								<S.BoxText>Jobseekers get rating and feedback</S.BoxText>
							</S.Box>
						</S.TextAnalysis>
					</S.ContentWrapper>
				</Fade>
			</Row>
		</S.WhySwiftly>
	);
};

export default withTranslation()(WhySwiftly);
