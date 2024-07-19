import { AppState, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	/* Geral */
	container: {
		margin: 10,
	},
	/* Label */
	label: {
		fontSize: 10,
		marginLeft: 5,
		marginTop: 10,
	},
	/* Text */
	text: {
		width: 200,
		margin: 5,
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
	},
	/* Radio */
	radioContainer: {
		width: 200,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 10,
	},
	radioCircle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	selectedRb: {
		width: 12,
		height: 12,
		borderRadius: 6,
		backgroundColor: "#000",
	},
	radioText: {
		marginLeft: 10,
		fontSize: 16,
	},
	/* UF */
  uf: {
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
  },
	/* Checkbox */
	checkboxContainer: {
		width: 200,
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 3,
	},
	checkbox: {
		marginRight: 5,
	},
	checkboxLabel: {
		fontSize: 16,
	},
});

export default styles;
