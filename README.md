# music-bar

Bars and restaurants music hub service backend.

## Database

This project uses PostgreSQL database and Sequelize as ORM.

### Migrations

There are few tasks created as boilerplate for database migrations. To create new migration, run:

```javascript
yarn run migrations:generate {migration_name}
```

The migration name should be in snake_case and there should be a corresponding migration file in `db/migrations` folder.
