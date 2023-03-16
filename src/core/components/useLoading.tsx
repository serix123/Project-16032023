import reactLogo from "../../assets/react.svg";
import { useEffect, useState } from "react";
import "../../App.css";

type UseLoadingIndicatorProps = {
	initialLoadingState: boolean;
};

const useLoadingIndicator = ({
	initialLoadingState,
}: UseLoadingIndicatorProps): [boolean, JSX.Element | null] => {
	const [isLoading, setIsLoading] = useState(initialLoadingState);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return [
		isLoading,
		isLoading ? (
			<a href='https://reactjs.org'>
				<img src={reactLogo} className='logo react' alt='React logo' />
			</a>
		) : null,
	];
};

export default useLoadingIndicator;
