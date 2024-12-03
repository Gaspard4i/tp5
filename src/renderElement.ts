type Attribute = {
	name: string,
	value: string,
};
type Children = string | string[];

export default function renderElement(
	tagName:string = 'div', // paramètre facultatif avec une valeur par défaut
	attribute?: Attribute | null, // paramètre facultatif grâce au "?" devant les ":" (null autorisé)
	children?:Children // paramètre facultatif (null interdit)
) {
	let attributeHtml = ''; // inférence de type : attributeHtml est détecté comme string
	if ( attribute ) { // type coercion : attribute est "converti" en booléen : vaut false si null ou undefined
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
