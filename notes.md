# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser

Component = () => {
    return (
        <div>

        <div>
    )
}


cross-env = npm package used to abstract away OS differences when setting up env variables.

DB_ENV=testing

`npx knex migrate:latest --env=testing`