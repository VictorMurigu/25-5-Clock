interface Props {
	title: any;
	changeTime: any;
	type: any;
	time: any;
	formatTime: any;
}

const Length = ({ title, changeTime, type, time, formatTime }: Props) => {
	return (
		<div>
			<h2>{title}</h2>
			<div className="time-sets">
				<button className="btn-minus" onClick={() => changeTime(-60, type)}>
					-
				</button>
				<h3>{formatTime(time)}</h3>
				<button className="btn-plus" onClick={() => changeTime(+60, type)}>
					+
				</button>
			</div>
		</div>
	);
};

export default Length;
