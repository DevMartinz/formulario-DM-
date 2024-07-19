import React from "react";
import { Input } from "./src/components/Input";
import { View, StyleSheet } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Input label="Nome:" type="text" placeholder="Digite seu nome" />
			<Input
				label="Estado:"
				type="uf"
				placeholder="Selecione seu Estado"
				values={{
					AC: "Acre",
					AL: "Alagoas",
					AM: "Amazonas",
					AP: "Amapá",
					BA: "Bahia",
					CE: "Ceará",
					DF: "Distrito Federal",
					ES: "Espírito Santo",
					GO: "Goiás",
					MA: "Maranhão",
					MG: "Minas Gerais",
					MS: "Mato Grosso do Sul",
					MT: "Mato Grosso",
					PA: "Pará",
					PB: "Paraíba",
					PE: "Pernambuco",
					PI: "Piauí",
					PR: "Paraná",
					RJ: "Rio de Janeiro",
					RN: "Rio Grande do Norte",
					RO: "Rondônia",
					RR: "Roraima",
					RS: "Rio Grande do Sul",
					SC: "Santa Catarina",
					SE: "Sergipe",
					SP: "São Paulo",
					TO: "Tocantins",
				}}
			/>
			<Input
				label="Sexo:"
				type="radio"
				values={{ m: "Masculino", f: "Feminino" }}
			/>
			<Input
				label="Data de Nascimento:"
				type="mask"
				value="datetime"
				mask="DD/MM/YYYY"
				placeholder="__/__/____"
			/>
			<Input
				label="Linguagens de Programação:"
				type="checkbox"
				values={{
					py: "Python",
					java: "Java",
					php: "PHP",
					js: "JavaScript",
					cpp: "C++",
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
