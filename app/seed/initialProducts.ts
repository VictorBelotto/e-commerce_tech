
const generic_images_ryzen = ['/processors/ryzen-generic-box.jpeg', '/public/processors/ryzen-generic-box.jpeg']


export const products = {
  processors: [
    {
      id: "ryzen-5-5600x",
      name: "Ryzen 5 5600X",
      manufacturer: "AMD",
      stock: 20,
      description: "Processador de 6 núcleos para jogos e produtividade.",
      technicalInfo: "6 núcleos, 12 threads, 3.7GHz base clock, 4.6GHz boost clock, socket AM4",
      image_url: ['/processors/ryzen-5-thumbnail.jpeg', ...generic_images_ryzen],
      category: "Processor",
      price: 299.99
    },
    {
      id: "intel-core-i7-11700k",
      name: "Intel Core i7-11700K",
      manufacturer: "Intel",
      stock: 15,
      description: "Processador de alto desempenho com 8 núcleos.",
      technicalInfo: "8 núcleos, 16 threads, 3.6GHz base clock, 5.0GHz boost clock, socket LGA1200",
      image_url: ['/processors/intel-i7-thumbnail.jpeg', '/processors/intel-generic-processor.jpeg'],
      category: "Processor",
      price: 399.99
    },
    {
      id: "ryzen-9-5900x",
      name: "Ryzen 9 5900X",
      manufacturer: "AMD",
      stock: 10,
      description: "Processador premium para multitarefas e jogos exigentes.",
      technicalInfo: "12 núcleos, 24 threads, 3.7GHz base clock, 4.8GHz boost clock, socket AM4",
      image_url: ['/processors/ryzen-9-thumbnail.jpeg', ...generic_images_ryzen],
      category: "Processor",
      price: 549.99
    },
    {
      id: "intel-core-i9-11900k",
      name: "Intel Core i9-11900K",
      manufacturer: "Intel",
      stock: 5,
      description: "Processador de altíssimo desempenho com 8 núcleos.",
      technicalInfo: "8 núcleos, 16 threads, 3.5GHz base clock, 5.3GHz boost clock, socket LGA1200",
      image_url: ['/processors/intel-i9-thumbnail.jpeg', '/processors/intel-generic-processor.jpeg'],
      category: "Processor",
      price: 599.99
    },
    {
      id: "ryzen-7-5800x",
      name: "Ryzen 7 5800X",
      manufacturer: "AMD",
      stock: 25,
      description: "Processador com 8 núcleos para jogos e criação de conteúdo.",
      technicalInfo: "8 núcleos, 16 threads, 3.8GHz base clock, 4.7GHz boost clock, socket AM4",
      image_url: ['/processors/ryzen-7-thumbnail.jpeg', ...generic_images_ryzen],
      category: "Processor",
      price: 449.99
    }
  ],

  motherBoards: [
    {
      id: "b550m-gigabyte",
      name: "Placa Mãe Gigabyte B550M, Aorus Elite, socket AM4",
      manufacturer: "Gigabyte",
      stock: 30,
      description: "Placa mãe para processadores AMD Ryzen, com suporte a DDR4.",
      technicalInfo: "Socket AM4, suporte a DDR4, 4 slots de RAM, formato ATX",
      image_url: ['/motherBoards/gigabyte-b550m-thumbnail.jpeg', '/motherBoards/gigabyte-b550m-motherBoard.jpeg'],
      category: "Motherboard",
      price: 89.99
    },
    {
      id: "z590-gigabyte",
      name: "Placa-Mãe Gigabyte Z590 D, Intel LGA 1200, DDR4",
      manufacturer: "Gigabyte",
      stock: 12,
      description: "Placa mãe de alto desempenho para processadores Intel de 11ª geração.",
      technicalInfo: "Socket LGA1200, suporte a DDR4, 4 slots de RAM, formato ATX",
      image_url: ['/motherBoards/gigabyte-z590-thumbnail.jpeg', '/motherBoards/gigabyte-z590-motherBoard.jpeg'],
      category: "Motherboard",
      price: 199.99
    },
    {
      id: "x570-asrock",
      name: "Placa-Mãe AsRock X570 Phantom Gaming 4S, AMD AM4",
      manufacturer: "AsRock",
      stock: 18,
      description: "Placa mãe de alta performance para processadores Ryzen 3000 e 5000.",
      technicalInfo: "Socket AM4, suporte a DDR4, 4 slots de RAM, PCIe 4.0, formato ATX",
      image_url: ['/motherBoards/asrock-x570-thumbnail.jpeg', '/motherBoards/asrock-x570-motherBoard.jpeg'],
      category: "Motherboard",
      price: 249.99
    },
    {
      id: "b450-tuf-gaming-asus",
      name: "Placa Mãe B450 TUF Gaming, ASUS socket AM4",
      manufacturer: "ASUS",
      stock: 22,
      description: "Placa mãe resistente com suporte a processadores AMD Ryzen.",
      technicalInfo: "Socket AM4, suporte a DDR4, formato ATX",
      image_url: ['/motherBoards/asus-b450-thumbnail.jpeg', '/motherBoards/asus-b450-motherBoard.jpeg'],
      category: "Motherboard",
      price: 119.99
    },
  ],

  graphicsCards: [
    {
      id: "msi-rtx-3060",
      name: "Placa de Vídeo RTX 3060 Ventus 2X MSI NVIDIA",
      manufacturer: "Msi",
      stock: 15,
      description: "Placa de vídeo com suporte a Ray Tracing para jogos em 1080p.",
      technicalInfo: "12GB GDDR6, Ray Tracing, PCIe 4.0",
      image_url: ['/graphicsCards/msi-rtx-3060-thumbnail.jpeg', '/graphicsCards/msi-rtx-3060-graphicCard.jpeg'],
      category: "Graphics Card",
      price: 399.99
    },
    {
      id: "asrock-rx-6600",
      name: "Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon",
      manufacturer: "Asrock",
      stock: 10,
      description: "Placa de vídeo de alto desempenho para jogos em 1440p.",
      technicalInfo: "8GB GDDR6, PCIe 4.0",
      image_url: ['/graphicsCards/asrock-rx-6600-thumbnail.jpeg', '/graphicsCards/asrock-rx-6600-graphicCard.jpeg'],
      category: "Graphics Card",
      price: 479.99
    },
    {
      id: "asus-rtx-4060",
      name: "Placa de Vídeo RTX 4060 8G V2 Gaming ATS OC ASUS NVIDIA ",
      manufacturer: "Asus",
      stock: 8,
      description: "Placa de vídeo premium com Ray Tracing para jogos em 4K.",
      technicalInfo: "10GB GDDR6X, Ray Tracing, PCIe 4.0",
      image_url: ['/graphicsCards/msi-rtx-3060-thumbnail.jpeg', '/graphicsCards/msi-rtx-3060-graphicCard.jpeg'],
      category: "Graphics Card",
      price: 699.99
    },
  ]
}

interface findProps {
  category : 'processors' |  'graphicsCards' | 'motherBoards',
  key: 'id' | 'name' | 'manufacturer' | 'category',
  filter: string
}

function findProduct({category ,key, filter }: findProps) {
  return products[category].filter(product => product[key].toLowerCase().includes(filter.toLowerCase()) );
}


export const highlights = findProduct({category: 'processors', key: 'name', filter: 'ryzen 5'})


