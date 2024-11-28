/** @format */
import PropTypes from "prop-types";
import { FaSquareXTwitter } from "react-icons/fa6";

const Card = ({ quoteTxt, getRandomQuote, bgColor }) => {
	// console.log("👉 Line-5 ▶︎▶︎", Object.keys(quoteTxt));
	// console.log("👉 Line-6 ▶︎▶︎", getRandomQuote);
	let { author, quote: quoteText } = quoteTxt;

	return (
		<section id="quote-box">
			<p id="text">{quoteText}</p>
			<p id="author">– {author}</p>
			<div className="content">
				<a
					href={encodeURI(`https://twitter.com/intent/tweet?text=${quoteText} - ${author}`)}
					id="tweet-quote"
					target="_blank"
					rel="noopener noreferrer"
				>
					Post it on <FaSquareXTwitter />
				</a>
				<button id="new-quote" onClick={getRandomQuote} style={{ backgroundColor: bgColor }}>
					New Quote
				</button>
			</div>
		</section>
	);
};
Card.propTypes = {
	quoteTxt: PropTypes.exact({
		quote: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
	}).isRequired,
	getRandomQuote: PropTypes.func.isRequired,
	bgColor: PropTypes.string.isRequired,
};

export default Card;
