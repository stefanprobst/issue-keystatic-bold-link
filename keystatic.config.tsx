import { config, fields, singleton } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	singletons: {
		homePage: singleton({
			label: "Home page",
			path: "./content/index-page/",
			format: { contentField: "content" },
			schema: {
				title: fields.text({
					label: "Title",
					validation: { isRequired: true },
				}),
				content: fields.mdx({
					label: "Content",
					components: {},
				}),
			},
		}),
	},
});
