export default function renderElement( tagName = 'div', attribute, children ) {
	let attributeHtml = '';
	if ( attribute ) {
		attributeHtml = `${attribute.name}="${attribute.value}"`;
	}

	let html = `<${tagName} ${attributeHtml}`;

	if ( children ) {
		html += `>
			${children instanceof Array ? children.join('') : children}
		</${tagName}>`;
	} else {
		html += '/>';
	}
	return html;
}
