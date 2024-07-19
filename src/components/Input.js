import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { TextInputMask } from "react-native-masked-text";
import CheckBox from "expo-checkbox";
import styles from "./style";

export const Input = (props) => {
	const { label, type, values = {} } = props;
	const [text, onChangeText] = React.useState("");
	const [selectedValue, setSelectedValue] = useState("");
	const [selectedUF, setSelectedUF] = useState();
	const [selectedLanguages, setSelectedLanguages] = useState({});
	const [cell, setCell] = useState("");

	useEffect(() => {
		if (type === "checkbox") {
			setSelectedLanguages(
				Object.keys(values).reduce((acc, key) => {
					acc[key] = false;
					return acc;
				}, {})
			);
		}
	}, [type, values]);

	const handleCheckboxChange = (language) => {
		setSelectedLanguages((prevSelectedLanguages) => {
			const updatedLanguages = {
				...prevSelectedLanguages,
				[language]: !prevSelectedLanguages[language],
			};
			console.log("Selected Languages:", updatedLanguages);
			return updatedLanguages;
		});
	};

	return (
		<View stle={styles.formContext}>
			{/* Label */}
			<Text style={styles.label}>{label}</Text>
			{/* Text */}
			{type == "text" && (
				<TextInput
					onChangeText={onChangeText}
					value={text}
					style={styles.text}
					placeholder={props.placeholder}
					maxLength={35}
					textAlign="center"
				/>
			)}
			{/* Radio */}
			{type == "radio" && (
				<View style={styles.container}>
					{Object.entries(props.values).map(([value, text]) => (
						<TouchableOpacity
							key={value}
							style={styles.radioContainer}
							onPress={() => setSelectedValue(value)}
						>
							<View style={styles.radioCircle}>
								{selectedValue === value && <View style={styles.selectedRb} />}
								{console.log(selectedValue)}
							</View>
							<Text style={styles.radioText}>{text}</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
			{/* UF */}
			{type == "uf" && (
				<View>
					<Picker
						selectedValue={selectedUF}
						onValueChange={(itemValue, itemIndex) => setSelectedUF(itemValue)}
						placeholder={props.placeholder}
						style={styles.text}
					>
						{Object.entries(props.values).map(([value, text]) => (
							<Picker.Item key={value} label={text} value={value} />
						))}
						{console.log(selectedUF)}
					</Picker>
				</View>
			)}
			{/* CheckBox */}
			{type == "checkbox" && (
				<View style={styles.container}>
					{Object.entries(props.values).map(([value, text]) => (
						<View key={value} style={styles.checkboxContainer}>
							<CheckBox
								value={!!selectedLanguages[value]}
								onValueChange={() => handleCheckboxChange(value)}
								style={styles.checkbox}
							/>
							<Text style={styles.checkboxLabel}>{text}</Text>
						</View>
					))}
				</View>
			)}
			{/* Mask */}
			{type == "mask" && (
				<View>
					<TextInputMask
						type={props.value}
						options={{
							format: props.mask,
						}}
						value={cell}
						placeholder={props.placeholder}
						onChangeText={(text) => setCell(text)}
						style={styles.text}
					/>
				</View>
			)}
		</View>
	);
};
