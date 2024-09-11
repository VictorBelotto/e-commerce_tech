/* import { sql } from '@vercel/postgres';
import { products} from '../lib/initial-products';


const seedDatabase = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS Product (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        manufacturer TEXT NOT NULL,
        stock INT NOT NULL,
        description TEXT NOT NULL,
        technicalInfo TEXT NOT NULL,
        image_url TEXT NOT NULL,
        category TEXT NOT NULL,
        price FLOAT NOT NULL
      );
    `;

    console.log('Table created successfully.');   

    for (const product of products) {
      const image_url = JSON.stringify(product.image_url)
      await sql`
      INSERT INTO Product (name, manufacturer, stock, description, technicalInfo, image_url, category, price)
      VALUES (${product.name}, ${product.manufacturer}, ${product.stock}, ${product.description}, ${product.technicalInfo}, ${image_url}, ${product.category}, ${product.price});
    `;
    }

    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase(); */



