export default defineNuxtPlugin(() => {
  return {
    provide: {
      consts: () => ({
        test: {
          tFlag: true,
          tText: "Global const in Nuxt.",
        },
        envStr: {
          local: {
            first: "갬생 충만한",
            second: "개발자 Local",
          },
          dev: {
            first: "행복한",
            second: "개발서버",
          },
        },
        type: {
          layers: ["form", "layer"],
        },
      }),
    },
  };
});
