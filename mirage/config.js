export default function () {
  this.get('/users', function (schema, request) {
    const users = schema.users.all();

    if (request.requestHeaders['Accept'] === 'application/vnd.api+json') {
      return this.serialize(users, 'json-api');
    }

    return this.serialize(users, 'application');
  });
}
