import brownie from '../src/products/brownie.jpg'
import capuccino from '../src/products/capuccino.jpg'
import chaiLatte from '../src/products/chaiLatte.jpg'
import croissantsHam from '../src/products/croissantsHam.jpg'
import croissantsSalmon from '../src/products/croissantsSalmon.jpg'
import fruitTartalete from '../src/products/fruitTartalete.jpg'
import lemonPie from '../src/products/lemonPie.jpg'
import mocaccino from '../src/products/mocaccino.jpg'
import omelette from '../src/products/omelette.jpg'
import oragneJuice from '../src/products/oragneJuice.jpg'
import sandwichEggs from '../src/products/sandwichEggs.jpg'
import strawberriesJuice from '../src/products/strawberriesJuice.jpg'
import tea from '../src/products/tea.jpg'
import waffles from '../src/products/waffles.jpg'

const products = [
    {
        id: 1,
        name: 'Croissant del mar',
        description: 'Croissant de salmón ahumado y queso crema, un bocado elegante y sofisticado que combina sabores sutiles y una textura hojaldrada irresistible.',
        price: 2000,
        category: 'panaderia',
        stock: 20,
        image: croissantsSalmon,
      },
      {
        id: 2,
        name: 'Pie de Limón',
        description: 'Disfruta de la frescura y el encanto agridulce de nuestro exquisito pie de limón. La combinación perfecta de sabores en cada bocado.',
        price: 1500,
        category: 'pasteleria',
        stock: 15,
        image: lemonPie,
      },
      {
        id: 3,
        name: 'Tarta de fruta',
        description: 'Deléitate con nuestra tarta de fruta fresca, una combinación irresistible de sabores naturales y masa dorada y crujiente. ¡Sabor natural en cada bocado!',
        price: 3200,
        category: 'pasteleria',
        stock: 8,
        image: fruitTartalete,
      },
      {
        id: 4,
        name: 'Tostadas de la granja',
        description: 'Deléitate con nuestro exquisito pan artesanal acompañado de palta fresca, huevo pochado y berros. Una combinación saludable y deliciosa.',
        price: 3500,
        category: 'panaderia',
        stock: 12,
        image: sandwichEggs,
      },
      {
        id: 5,
        name: 'Brownie',
        description: 'Sumérgete en la indulgencia con nuestro brownie, una mezcla irresistible de chocolate y nueces. Una dulce tentación para disfrutar en cada bocado.',
        price: 1200,
        category: 'pasteleria',
        stock: 25,
        image: brownie,
      },
      {
        id: 6,
        name: 'Omelette Vegetariano',
        description: 'Omelette con espinacas, champiñones, tomate y queso + pan de masa madre. Un desayuno sabroso y saludable para empezar el día.',
        price: 2800,
        category: 'panaderia',
        stock: 18,
        image: omelette,
      },
      {
        id: 7,
        name: 'Wafles de frutilla',
        description: 'Wafles con frutillas frescas y crema batida. Una dulce tentación para deleitar tu paladar. ¡El desayuno perfecto!',
        price: 2900,
        category: 'pasteleria',
        stock: 10,
        image: waffles,
      },
      {
        id: 8,
        name: 'Cappuccino vainilla',
        description: 'Una deliciosa mezcla de café y suave sabor a vainilla. La opción perfecta para consentirte en cualquier momento.',
        price: 3500,
        category: 'cafeteria',
        stock: 30,
        image: capuccino,
      },
      {
        id: 9,
        name: 'Jugo de naranja',
        description: 'Una explosión refrescante de vitamina C. El acompañamiento perfecto para tu desayuno o merienda.',
        price: 2800,
        category: 'jugos',
        stock: 20,
        image: oragneJuice,
      },
      {
        id: 10,
        name: 'Croissant pavo y queso',
        description: 'Croissant gourmet con queso y jamón de pavo. Una delicia hojaldrada y elegante que combina sabores exquisitos para tu deleite.',
        price: 3600,
        category: 'panaderia',
        stock: 5,
        image: croissantsHam,
      },
      {
        id: 11,
        name: 'Jugo de frutos del bosque',
        description: 'Una elegante sinfonía de sabores naturales y antioxidantes que te cautivará con cada sorbo. ¡Saludable y delicioso.',
        price: 3600,
        category: 'jugos',
        stock: 5,
        image: strawberriesJuice,
      },
      {
        id: 12,
        name: 'Mocaccino',
        description: 'Un equilibrio perfecto entre café, chocolate y leche espumada. Una experiencia elegante para los amantes del café.',
        price: 3500,
        category: 'cafeteria',
        stock: 30,
        image: mocaccino,
      },
      {
        id: 13,
        name: 'Latte caramelo',
        description: 'Un café con leche indulgente y cautivador, realzado con el dulce toque del caramelo. Un placer elegante.',
        price: 3500,
        category: 'cafeteria',
        stock: 20,
        image: capuccino,
      },
      {
        id: 14,
        name: 'Té negro con vergamota',
        description: 'Un exquisito brebaje con notas cítricas y aromáticas. Una experiencia elegante y relajante para los amantes del té.',
        price: 3500,
        category: 'cafetería',
        stock: 16,
        image: tea,
      },
      {
        id: 15,
        name: 'Chai latte',
        description: 'Una mezcla de té negro y especias, delicadamente espumoso con leche. Un deleite elegante para los amantes del chai.',
        price: 3500,
        category: 'cafetería',
        stock: 18,
        image: chaiLatte,
      },
]


export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(products)
        }, 800);
    }

    )
}

export const getProductDetails = (productId) => {
  
    return new Promise ((resolve) =>{
            setTimeout(()=>{
              resolve(products.find(prod => prod.id === productId))
            },500);
        }
        )
}

export const getProductByCategory = (productCategory) => {
  return new Promise ((resolve) => {
    setTimeout(()=>{
      resolve(products.filter(prod => prod.category === productCategory))
    },500);
  })
}