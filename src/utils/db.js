import { createClient } from '@neondatabase/serverless';

// Initialize the database client
const client = createClient({
    connectionString: process.env.DATABASE_URL, // Using the environment variable
});

export default client;
