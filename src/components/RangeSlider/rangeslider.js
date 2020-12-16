import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const RangeSlider = ({ min, max, handleChange, step }) => {
	const createSliderWithTooltip = Slider.createSliderWithTooltip;
	const Range = createSliderWithTooltip(Slider.Range);
	return (
		<Range
			min={min}
			max={max}
			onAfterChange={handleChange}
			step={step}
			railStyle={{ backgroundColor: '#20639b' }}
		/>
	);
};

export default RangeSlider;
