import useLoadingIndicator from "./core/components/useLoading";
import BarChart from "./core/components/Chart";

function App() {
	const [isLoading, LoadingIndicator] = useLoadingIndicator({
		initialLoadingState: true,
	});
	const data = [12, 19, 3, 5, 2, 3];
	return (
		<div
			className='App'
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100vw",
				margin: 0,
				padding: 0,
			}}
		>
			{isLoading ? (
				LoadingIndicator
			) : (
				<div>
					<h1>My Chart App</h1>
					<BarChart />
				</div>
			)}
		</div>
	);
}

export default App;
