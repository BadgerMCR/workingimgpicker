module.exports = {
	name: "newImg",
	description: "Team Sheet for the away team",
	category: "Basic",
	icon: "image",
	hasEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			global_padding: "",
			widget_offset: "",
			width: "100",
			height: "100",
			widget_padding: "0"
		}
		},
	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		}
	],

	vue_template: getFile("newImg.html").toString(),
	vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}

