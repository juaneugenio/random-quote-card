/** @format */

import { useState, useCallback, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import COLORS from "./colors";

const QUOTES_URI =
	"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
	const [quote, setQuote] = useState({ quote: "", author: "" });
	const [bgColor1, setBgColor1] = useState("");

	const randomQuoteAndColor = (quotesArray, colorsArray) => {
		if (quotesArray.length > 0 && colorsArray.length > 0) {
			let randomQuoteIndex = Math.floor(Math.random() * quotesArray.length);
			let randomColorIndex1 = Math.floor(Math.random() * colorsArray.length);

			setQuote(quotesArray[randomQuoteIndex]);
			setBgColor1(colorsArray[randomColorIndex1]);
		} else {
			console.error("Quotes or colors array is undefined or empty");
		}
	};

	const getQuotes = useCallback(async () => {
		try {
			const response = await fetch(QUOTES_URI);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			randomQuoteAndColor(data.quotes, COLORS);
		} catch (error) {
			console.error("Failed to fetch quotes:", error.message);
		}
	}, []);

	useEffect(() => {
		getQuotes();
	}, [getQuotes]);

	return (
		<>
			<div className="cloud-background" id="cloud1" style={{ backgroundColor: bgColor1 }}></div>
			<div className="cloud-background" id="cloud2"></div>
			<div className="cloud-background" id="cloud3"></div>
			<Card quoteTxt={quote} getRandomQuote={getQuotes} bgColor={bgColor1} />
			<p id="footer">
				Done by{" "}
				<a href="https://github.com/juaneugenio" target="_blank" rel="noopener noreferrer">
					Eugenio JC
				</a>
				- <span>2023</span>
			</p>
		</>
	);
}

export default App;
