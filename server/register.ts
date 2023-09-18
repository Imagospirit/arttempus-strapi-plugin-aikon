import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  // register the custom field
  strapi.customFields.register({
    name: "aikon-custom-field",
    pluginId: "aikon-custom-field",
    // @ts-expect-error
    plugin: "aikon-custom-field",
    type: "text",
    inputSize: {
      default: 4,
      isResizable: true,
    },
  });
};
