import { useDrop } from "react-dnd";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { ITEM_TYPES } from "../util/constants";

const useStyles = makeStyles(theme => ({
	root: {
		border: "1px dashed #debddf",
		width: "80%",
		height: "30rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "xx-large",
		margin: "2rem 0rem"
	},
	lotteryTicket: {
		backgroundColor: "#debddf4f",
		height: "18rem",
		width: "12rem",
		borderRadius: "4px",
		cursor: "move"
	}
}));

const DndBox = () => {
	const classes = useStyles();

	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ITEM_TYPES.BOX,
		drop: () => ({ name: "DndBox" }),
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}));
	const isActive = canDrop && isOver;

	let backgroundColor = "#fff";

	if (isActive) {
		backgroundColor = "darkgreen";
	} else if (canDrop) {
		backgroundColor = "darkkhaki";
	}

	return (
		<div className={classes.root} ref={drop} role={"DndBox"} style={{ backgroundColor }}>
			{isActive ? (
				"Release to drop"
			) : (
				<Grid container justifyContent="center" alignItems="center" direction="column">
					<Grid item>
						<div className={classes.lotteryTicket}></div>
					</Grid>
					<Grid item>
						<Typography>Drag a box here</Typography>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default DndBox;
