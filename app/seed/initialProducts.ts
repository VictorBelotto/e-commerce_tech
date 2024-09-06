
export const products = {
  processors: [
   {
     id: "ryzen-5-5600x",
     name: "Ryzen 5 5600X",
     manufacturer: "AMD",
     stock: 20,
     description: "Processador de 6 núcleos para jogos e produtividade.",
     technicalInfo: "6 núcleos, 12 threads, 3.7GHz base clock, 4.6GHz boost clock, socket AM4",
     image_url: '',
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
     image_url: '',
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
     image_url: '',
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
     image_url: '',
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
     image_url: '',
     category: "Processor",
     price: 449.99
   }
 ],
 
  motherboards: [
   {
     id: "b350m-gigabyte",
     name: "Placa Mãe B350M, Gigabyte socket AM4",
     manufacturer: "Gigabyte",
     stock: 30,
     description: "Placa mãe para processadores AMD Ryzen, com suporte a DDR4.",
     technicalInfo: "Socket AM4, suporte a DDR4, 4 slots de RAM, formato Micro ATX",
     image_url: '',
     category: "Motherboard",
     price: 89.99
   },
   {
     id: "z590-a-pro-msi",
     name: "Placa Mãe Z590-A PRO, MSI socket LGA1200",
     manufacturer: "MSI",
     stock: 12,
     description: "Placa mãe de alto desempenho para processadores Intel de 11ª geração.",
     technicalInfo: "Socket LGA1200, suporte a DDR4, 4 slots de RAM, formato ATX",
     image_url: '',
     category: "Motherboard",
     price: 199.99
   },
   {
     id: "x570-aorus-elite-gigabyte",
     name: "Placa Mãe X570 Aorus Elite, Gigabyte socket AM4",
     manufacturer: "Gigabyte",
     stock: 18,
     description: "Placa mãe de alta performance para processadores Ryzen 3000 e 5000.",
     technicalInfo: "Socket AM4, suporte a DDR4, 4 slots de RAM, PCIe 4.0, formato ATX",
     image_url: '',
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
     image_url: '',
     category: "Motherboard",
     price: 119.99
   },
   {
     id: "z490-aorus-ultra-gigabyte",
     name: "Placa Mãe Z490 Aorus Ultra, Gigabyte socket LGA1200",
     manufacturer: "Gigabyte",
     stock: 8,
     description: "Placa mãe premium para processadores Intel de 10ª geração.",
     technicalInfo: "Socket LGA1200, suporte a DDR4, PCIe 4.0, formato ATX",
     image_url: '',
     category: "Motherboard",
     price: 299.99
   }
 ],
 
  graphicsCards: [
   {
     id: "rtx-3060-nvidia",
     name: "Placa de Vídeo RTX 3060, NVIDIA",
     manufacturer: "NVIDIA",
     stock: 15,
     description: "Placa de vídeo com suporte a Ray Tracing para jogos em 1080p.",
     technicalInfo: "12GB GDDR6, Ray Tracing, PCIe 4.0",
     image_url: '',
     category: "Graphics Card",
     price: 399.99
   },
   {
     id: "rx-6700-xt-amd",
     name: "Placa de Vídeo RX 6700 XT, AMD",
     manufacturer: "AMD",
     stock: 10,
     description: "Placa de vídeo de alto desempenho para jogos em 1440p.",
     technicalInfo: "12GB GDDR6, PCIe 4.0",
     image_url: '',
     category: "Graphics Card",
     price: 479.99
   },
   {
     id: "rtx-3080-nvidia",
     name: "Placa de Vídeo RTX 3080, NVIDIA",
     manufacturer: "NVIDIA",
     stock: 8,
     description: "Placa de vídeo premium com Ray Tracing para jogos em 4K.",
     technicalInfo: "10GB GDDR6X, Ray Tracing, PCIe 4.0",
     image_url: '',
     category: "Graphics Card",
     price: 699.99
   },
   {
     id: "rx-6900-xt-amd",
     name: "Placa de Vídeo RX 6900 XT, AMD",
     manufacturer: "AMD",
     stock: 5,
     description: "Placa de vídeo topo de linha para jogos em 4K.",
     technicalInfo: "16GB GDDR6, PCIe 4.0",
     image_url: '',
     category: "Graphics Card",
     price: 999.99
   },
   {
     id: "rtx-3090-nvidia",
     name: "Placa de Vídeo RTX 3090, NVIDIA",
     manufacturer: "NVIDIA",
     stock: 3,
     description: "Placa de vídeo ultra premium com Ray Tracing para jogos e trabalho em 8K.",
     technicalInfo: "24GB GDDR6X, Ray Tracing, PCIe 4.0",
     image_url: '',
     category: "Graphics Card",
     price: 1499.99
   }
 ]
 }
 

export const highlights = [

]