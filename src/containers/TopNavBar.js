import React, { useState } from "react";
import { AppBar, Button, FormControl, InputBase, InputLabel, MenuItem, Select, Toolbar } from "@material-ui/core";
import { MeetingRoomRounded, SearchRounded } from "@material-ui/icons";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../util/constants";

const useStyles = makeStyles(theme => ({
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto"
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	inputRoot: {
		color: "inherit"
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch"
		}
	},
	grow: {
		flexGrow: 1
	},
	buttons: {
		textTransform: "none"
	},
	link: {
		color: "white",
		textDecoration: "none"
	}
}));

export default function TopNavBar(props) {
	const classes = useStyles();
	const [defaultSearchValue, setDefaultSearchValue] = useState("");

	const handleSearchSelectChange = event => {
		setDefaultSearchValue(event.target.value);
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<MeetingRoomRounded />
				<div className={classes.search}>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
						inputProps={{ "aria-label": "search" }}
					/>
					<FormControl>
						<InputLabel>Type</InputLabel>
						<Select
							id={"search-value-change"}
							value={defaultSearchValue}
							onChange={handleSearchSelectChange}
						>
							{MENU_ITEMS.map(item => (
								<MenuItem value={item.value}>{item.label}</MenuItem>
							))}
						</Select>
					</FormControl>
					<div className={classes.searchIcon}>
						<SearchRounded />
					</div>
				</div>
				<div className={classes.grow} />
				<div>
					<Button className={classes.buttons}>
						<Link className={classes.link} to="/browse">
							Browse
						</Link>
					</Button>
					<Button className={classes.buttons}>
						<Link className={classes.link} to="/discover">
							Discover
						</Link>
					</Button>
					<Button className={classes.buttons}>
						<Link className={classes.link} to="/mintanitem">
							Mint an Item
						</Link>
					</Button>
					<Button className={classes.buttons}>
						<Link className={classes.link} to="/votedao">
							Vote/DAO
						</Link>
					</Button>
					<Button className={classes.buttons}>
						<Link className={classes.link} to="/browse">
							My Account
						</Link>
					</Button>
					<Button className={classes.buttons}>
						<Link className={classes.link} to="/browse">
							Ethereum
						</Link>
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}
