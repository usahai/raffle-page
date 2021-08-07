import { Badge, makeStyles } from "@material-ui/core";
import { useDrag } from "react-dnd";
import { ITEM_TYPES } from "../util/constants";

const useStyles = makeStyles(theme => ({
	lotteryTicket: {
		backgroundColor: "#debddf4f",
		height: "18rem",
		width: "12rem",
		borderRadius: "4px"
	}
}));

const LotteryTicket = function LotteryTicket(props) {
	const { name, value, handleRedeemed } = props;
	const classes = useStyles();

	const canDrag = value > 0 ? true : false;

	const [{ isDragging }, drag] = useDrag(() => ({
		type: ITEM_TYPES.BOX,
		item: { name },
		canDrag: canDrag,
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				// alert(`You dropped ${item.name} into ${dropResult.name}!`);
				handleRedeemed(item.name);
			}
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId()
		})
	}));

	const opacity = isDragging ? 0.4 : 1;
	const cursor = canDrag ? "move" : "default";

	return (
		<div ref={drag} role="Box" style={{ cursor, opacity }} data-testid={`box-${name}`}>
			<Badge style={{ marginBottom: "1rem" }} badgeContent={value} color={"primary"}>
				<div className={classes.lotteryTicket}></div>
			</Badge>
		</div>
	);
};

export default LotteryTicket;
