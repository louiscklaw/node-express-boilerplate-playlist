const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: 'mongodb://mongodb:27017/node-boilerplate',
  dropDatabase: true,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve('./example/data'), {
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });
