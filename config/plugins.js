module.exports = {
  // Force Strapi Cloud to use its official cloud upload provider
  upload: {
    config: {
      provider: "strapi-provider-upload-strapi-cloud",
      providerOptions: {}
    }
  }
};
