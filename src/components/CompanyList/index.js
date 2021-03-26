import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

import img1 from '../../images/svg/companion_logo.svg';
import img2 from '../../images/svg/wellstreet_logo.svg';
import img3 from '../../images/svg/founderly_logo.svg';
import img4 from '../../images/svg/connect_logo.svg';

import * as S from './styles.js';

const Company = () => {
	return (
		<S.AppData>
			<Fade top>
				<S.AppDataText data-aos-delay="300" data-aos="fade-down">
					Recognized By
				</S.AppDataText>
			</Fade>
			<S.Images>
				<ul>
					<S.BrandLogo href="/" data-aos-delay="300" data-aos="fade-right">
						<img src={img1} alt="" />
					</S.BrandLogo>
				</ul>
				<ul>
					<S.BrandLogo href="/" data-aos-delay="250" data-aos="fade-right">
						<img src={img2} alt="" />
					</S.BrandLogo>
				</ul>
				<ul>
					<S.BrandLogo href="/" data-aos-delay="250" data-aos="fade-left">
						<img src={img3} alt="" />
					</S.BrandLogo>
				</ul>
				<ul>
					<S.BrandLogo href="/" data-aos-delay="300" data-aos="fade-left">
						<img src={img4} alt="" />
					</S.BrandLogo>
				</ul>
			</S.Images>
		</S.AppData>
	);
};

export default withTranslation()(Company);
