import LeftContentBlock from './LeftContentBlock';
import RightContentBlock from './RightContentBlock';
import BenefitsBlock from './BenefitsBlock';
import WorkingSteps from './WorkingSteps';

const ContentBlock = (props) => {
	if (props.type === 'left') return <LeftContentBlock {...props} />;
	if (props.type === 'right') return <RightContentBlock {...props} />;
	if (props.type === 'benefits') return <BenefitsBlock {...props} />;
	if (props.type === 'workingSteps') return <WorkingSteps {...props} />;
	return null;
};

export default ContentBlock;
