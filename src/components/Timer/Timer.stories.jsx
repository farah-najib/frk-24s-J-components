import Timer from "./Timer";

export default {
	title: "components/Timer",
	component: Timer,
};

export const Default = () => <Timer initialTime={120} />;

export const WithOnTimeUp = {
	args:{
		initialTime: 10,
		onTimeUp: () => alert("Time is up!")
	}
}

