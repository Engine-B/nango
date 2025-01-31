const TABLE = '_nango_sync_configs';

exports.up = async function (knex, _) {
    await knex.schema.withSchema('nango').alterTable(TABLE, function (table) {
        table.dropColumn('integration_name');
        table.string('version').notNullable();
        table.specificType('models', 'text ARRAY');
    });
};

exports.down = async function (knex, _) {
    await knex.schema.withSchema('nango').alterTable(TABLE, function (table) {
        table.string('integration_name');
        table.dropColumn('version');
        table.dropColumn('models');
    });
};

