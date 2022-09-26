/** @format */

export const textSplit = text => {
	const size = text.length;
	const split = 26;
	if (size > split) {
		const textSplit = text.slice(0, split);
		var newText = textSplit + "...";
		return newText;
	}
	return text;
};
