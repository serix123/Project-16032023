import useLoadingIndicator from "./core/components/useLoading";

function App() {
	const [isLoading, LoadingIndicator] = useLoadingIndicator({
		initialLoadingState: true,
	});
	return (
		<div
			className='App'
			style={{
				display: "flex",
				justifyContent: "center",
        alignItems:"center",
				height: "100vh",
				width: "100vw",
				margin: 0,
				padding: 0,
			}}
		>
			{isLoading ? LoadingIndicator : <div>Hello, world!</div>}
		</div>
	);
}

export default App;
