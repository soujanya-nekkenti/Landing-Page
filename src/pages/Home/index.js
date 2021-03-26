import { lazy } from 'react';

import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
// import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import ContactContent from '../../content/ContactContent.json';
import BenefitsContent from '../../content/Benefits.json';
import WorkingStepsContent from '../../content/WorkingSteps.json';
import Benefits3 from '../../content/Benefits3.json';
import Benefits4 from '../../content/Benefits4.json';
import WhySwiftly from '../../content/WhySwiftly.json';
import Company from '../../components/CompanyList';

import * as S from './styles';

const ContactFrom = lazy(() => import('../../components/ContactForm'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const WhySwiftlyBlock = lazy(() => import('../../components/WhySwiftly'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Home = () => {
	return (
		<Container>
			<ScrollToTop />
			<S.Background>
				<ContentBlock
					type="right"
					first="true"
					title={IntroContent.title}
					content={IntroContent.text}
					button={IntroContent.button}
					id="intro"
				/>
			</S.Background>
			<Company />

			<ContentBlock
				type="workingSteps"
				title={WorkingStepsContent.title}
				content={WorkingStepsContent.text}
				section={WorkingStepsContent.section}
				icon="graphs.svg"
				id="workingSteps"
			/>
			<S.Background>
				<MiddleBlock
					title={MiddleBlockContent.title}
					content={MiddleBlockContent.text}
					button={MiddleBlockContent.button}
				/>
			</S.Background>
			<ContentBlock
				type="benefits"
				title={BenefitsContent.title}
				content={BenefitsContent.text}
				section={BenefitsContent.section}
				icon="graphs.svg"
				id="benefits"
			/>
			{/* 
			<ContentBlock
				type="left"
				title={AboutContent.title}
				content={AboutContent.text}
				section={AboutContent.section}
				icon="graphs.svg"
				id="about"
			/> */}
			<S.Background>
				<ContentBlock
					type="right"
					title={MissionContent.title}
					content={MissionContent.text}
					button={ProductContent.button}
					icon="product-launch.svg"
					id="mission"
				/>
			</S.Background>

			<ContentBlock
				type="right"
				title={ProductContent.title}
				content={ProductContent.text}
				button={ProductContent.button}
				icon="waving.svg"
				id="product"
			/>
			<S.Background>
				<ContentBlock
					type="right"
					title={Benefits3.title}
					content={Benefits3.text}
					button={Benefits3.button}
					icon="product-launch.svg"
					id="mission"
				/>
			</S.Background>
			<ContentBlock
				type="right"
				title={Benefits4.title}
				content={Benefits4.text}
				button={Benefits4.button}
				icon="waving.svg"
				id="product"
			/>
			<S.Background dark>
				<WhySwiftlyBlock title={WhySwiftly.title} content={WhySwiftly.text} button={WhySwiftly.button} />
			</S.Background>
			<ContactFrom title={ContactContent.title} content={ContactContent.text} id="contact" />
		</Container>
	);
};

export default Home;
