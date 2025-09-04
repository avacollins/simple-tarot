import { type Driver } from 'neo4j-driver';

export async function ensureConstraints(driver: Driver) {
    const session = driver.session();

    try {
        // Create unique constraint for Spread.name
        await session.run(`
            CREATE CONSTRAINT spread_name_unique IF NOT EXISTS 
            FOR (s:Spread) REQUIRE s.name IS UNIQUE
        `);

        // Create unique constraint for SpreadPosition.name
        await session.run(`
            CREATE CONSTRAINT spread_position_name_unique IF NOT EXISTS 
            FOR (sp:SpreadPosition) REQUIRE sp.name IS UNIQUE
        `);

        // Create unique constraint for Card.index
        await session.run(`
            CREATE CONSTRAINT card_index_unique IF NOT EXISTS 
            FOR (c:Card) REQUIRE c.index IS UNIQUE
        `);

        // Create unique constraint for Suite.name
        await session.run(`
            CREATE CONSTRAINT suite_name_unique IF NOT EXISTS 
            FOR (s:Suite) REQUIRE s.name IS UNIQUE
        `);
    } finally {
        await session.close();
    }
}
