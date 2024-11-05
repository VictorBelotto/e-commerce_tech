/* import { PrismaClient } from '@prisma/client';
import { products} from '../app/lib/initial-products';

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    for (const product of products) {
      await prisma.product.create({
        data: {
          name: product.name,
          manufacturer: product.manufacturer,
          stock: product.stock,
          description: product.description,
          technicalinfo: product.technicalInfo,
          image_url: JSON.stringify(product.image_url), 
          category: product.category,
          price: product.price,
        },
      });
    }
    

    console.log('Dados inseridos com sucesso.');
  } catch (error) {
    console.error('Erro ao inserir dados', error);
  }finally {
    await prisma.$disconnect();
  }
};

seedDatabase(); 



 */