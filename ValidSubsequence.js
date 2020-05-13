function isValidSubsequence(array, sequence) {
	let arrayIdx = 0;
	let seqIdx = 0;
	while (seqIdx < sequence.length && arrayIdx < array.length){
		if (sequence[seqIdx] === array[arrayIdx]){
			seqIdx++;
		}
		arrayIdx++
	}
	return seqIdx === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;
