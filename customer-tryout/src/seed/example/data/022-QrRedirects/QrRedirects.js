const { getObjectId, getObjectIds } = require('../../helpers/index');

console.log('seeding 022-QrRedirect  ');

const QrRedirects = [
  {
    id: getObjectId('QrRedirect_1'),
    description: '<h2>bbbb</h2> description',
    url: 'received',
    redirect_url: 'https://www.example.com/redirect',
    meta: { hello: 'world' },
    qr_data: 'https://i.pravatar.cc/150',
    status: 'Available',
    isActive: true,
  },
  {
    id: getObjectId('QrRedirect_2'),
    description: '<h2>bbbb</h2> description 2',
    url: 'received2',
    redirect_url: 'https://www.example.com/redirect2',
    meta: { hello: 'world2' },
    qr_data: 'https://i.pravatar.cc/150',
    status: 'Available',
    isActive: true,
  },
  {
    id: getObjectId('QrRedirect_3'),
    description: '<h2>bbbb</h2> description 3',
    url: 'received3',
    redirect_url: 'https://www.example.com/redirect3',
    meta: { hello: 'world3' },
    qr_data: 'https://i.pravatar.cc/150',
    status: 'Available',
    isActive: true,
  },
];

module.exports = QrRedirects;
