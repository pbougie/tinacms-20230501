import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || "main",
  clientId: null,
  token: null,
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "_src",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "_src",
    },
  },
  schema: {
    collections: [

      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "_src",
        match: {
          include: "{en,fr}/pages/*",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
            required: true,
          },
        ],
      },

    ],
  },
});
