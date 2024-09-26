import { useState } from 'react'
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Badge } from "@nextui-org/badge"
import { IconShoppingCart, IconStar, IconPlus, IconMinus } from "@tabler/icons-react"
import { useParams } from 'react-router-dom'
import DefaultLayout from '@/layouts/default'

// In a real application, this would be fetched from an API or database
const data = [{
  id: 1,
  name: "Farm Fresh Eggs",
  price: 4.99,
  category: "Dairy & Eggs",
  rating: 4.5,
  producer: "Happy Hens Farm",
  description: "Our farm-fresh eggs come from free-range chickens raised on organic feed. Each egg is hand-collected daily to ensure the highest quality and freshness.",
  nutritionInfo: "Rich in protein and essential vitamins. Contains 6g of protein per egg.",
  origin: "Locally sourced from Happy Hens Farm, located just 10 miles from our marketplace.",
  imageUrl: "/image1.jpg",
},{
  id: 2,
  name: "Organic Honey",
  price: 9.99,
  category: "Pantry",
  rating: 4.8,
  producer: "Sweet Bee Apiary",
  description: "Our organic honey is harvested from local beehives and is free of pesticides and additives. Enjoy the natural sweetness and health benefits of pure honey.",
  nutritionInfo: "Rich in antioxidants and essential nutrients. Contains 60 calories per tablespoon.",
  origin: "Locally sourced from Sweet Bee Apiary, located just 15 miles from our marketplace.",
  imageUrl: "/image2.jpg",
},{
  id: 3,
  name: "Fresh Strawberries",
  price: 3.99,
  category: "Produce",
  rating: 4.3,
  producer: "Berry Patch Farm",
  description: "Our fresh strawberries are hand-picked at peak ripeness to deliver the juiciest and most flavorful berries. Enjoy them on their own or in your favorite recipes.",
  nutritionInfo: "Low in calories and high in vitamin C. Contains 45 calories per cup.",
  origin: "Locally sourced from Berry Patch Farm, located just 5 miles from our marketplace.",
  imageUrl: "/image3.jpg",
}]

export default function IndividualProductView() {
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams<{ id: string }>()
  const product = data.filter((product) => product.id === parseInt(id || '0'))[0]

  console.log(id)

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity)) // Ensure quantity is at least 1
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{product.producer}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <IconStar 
                  key={i} 
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                />
              ))}
            </div>
            <span className="text-lg font-medium">{product.rating.toFixed(1)}</span>
          </div>
          <Badge variant="solid" className="text-lg px-3 py-1">{product.category}</Badge>
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center space-x-4">
            <Button 
              size="sm" 
              variant="bordered"
              onClick={() => handleQuantityChange(quantity - 1)}
              aria-label="Decrease quantity"
            >
              <IconMinus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              value={quantity.toString()}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
              className="w-20 text-center"
              aria-label="Quantity"
            />
            <Button 
              variant="bordered"
              onClick={() => handleQuantityChange(quantity + 1)}
              aria-label="Increase quantity"
            >
              <IconPlus className="h-4 w-4" />
            </Button>
          </div>
          <Button className="w-full text-lg py-6" size="lg">
            <IconShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
    </DefaultLayout>
  )
}