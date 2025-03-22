export function sluglify(text: string) {
	const charMap: { [key: string]: string } = {
		'č': 'c',
		'š': 's',
		'ž': 'z',
		'ć': 'c',
		'đ': 'd',
		'Č': 'C',
		'Š': 'S',
		'Ž': 'Z',
		'Ć': 'C',
		'Đ': 'D'
	}

	return text
		.split('')
		.map(char => charMap[char] || char)
		.join('')
		.replace(/\s+/g, '-')
		.toLowerCase()
}

// Helper function to convert text to ASCII for comparison
export function toAscii(text: string) {
	const charMap: { [key: string]: string } = {
		'č': 'c',
		'š': 's',
		'ž': 'z',
		'ć': 'c',
		'đ': 'd',
		'Č': 'c',
		'Š': 's',
		'Ž': 'z',
		'Ć': 'c',
		'Đ': 'd'
	}

	return text
		.split('')
		.map(char => charMap[char] || char)
		.join('')
		.toLowerCase()
}

export function unsluglify(text: string) {
	return text.replace(/-/g, ' ')
}
