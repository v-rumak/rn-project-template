module.exports = {
  client: {
    service: {
      name: 'Countries API',
      url: 'https://countries.trevorblades.com',
      includes: ['src/**/*.ts'],
      excludes: ['./src/**.spec.*'],
      // optional headers
      /*      headers: {
        authorization: 'Bearer lkjfalkfjadkfjeopknavadf',
      },
      // optional disable SSL validation check
      skipSSLValidation: true,*/
    },
  },
};
