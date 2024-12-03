type Attribute = null | {
	name: string,
	value: string,
};
type Children = string | string[];

export default function renderElement( tagName:string = 'div', attribute?: Attribute, children?:Children ) {
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
