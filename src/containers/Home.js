import React, { Component } from "react";
import { Badge, Button, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndBox, LotteryTicket } from "../components";

const useStyles = theme => ({
	root: {
		padding: "2rem"
	},
	leftContainer: {
		padding: "2rem"
	},
	tixBuyBtn: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around"
	},
	buyButton: {
		textTransform: "none"
	},
	divider: {
		margin: "2rem -2rem"
	},
	rightContainer: {
		padding: "2rem",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	tixDnd: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	lotteryTicket: {
		backgroundColor: "#debddf4f",
		height: "18rem",
		width: "12rem",
		borderRadius: "4px"
	}
});

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			vouchers: {
				gold: 1,
				silver: 2,
				bronze: 3
			}
		};
	}

	handleRedeemed = voucherType => {
		let updatedState = {
			...this.state.vouchers,
			[voucherType]: this.state.vouchers[voucherType] - 1
		};

		this.setState({
			vouchers: updatedState
		});
	};

	render() {
		const { classes } = this.props;
		const { vouchers } = this.state;

		return (
			<div className={classes.root}>
				<DndProvider backend={HTML5Backend}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={3}>
							<Paper className={classes.leftContainer} elevation={6}>
								<div className={classes.tixBuyBtn}>
									<Typography variant={"h5"}>Get More Tickets</Typography>
									<Button className={classes.buybutton}>Buy</Button>
								</div>
								<Divider className={classes.divider} />
								<div className={classes.tixDnd}>
									<LotteryTicket
										name={"gold"}
										value={vouchers.gold}
										handleRedeemed={this.handleRedeemed}
									/>
									<LotteryTicket
										name={"silver"}
										value={vouchers.silver}
										handleRedeemed={this.handleRedeemed}
									/>
									<LotteryTicket
										name={"bronze"}
										value={vouchers.bronze}
										handleRedeemed={this.handleRedeemed}
									/>
								</div>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={9}>
							<Paper className={classes.rightContainer} elevation={6}>
								<Typography variant={"h4"}>Collectors Event</Typography>
								<Typography variant={"h5"}>Participate and win high quality currated NFTs</Typography>
								<DndBox />
								<Divider className={classes.divider} />
							</Paper>
						</Grid>
					</Grid>
				</DndProvider>
			</div>
		);
	}
}

export default withStyles(useStyles)(Home);
