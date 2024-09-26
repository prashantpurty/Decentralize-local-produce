

import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { IconCopy } from '@tabler/icons-react'
import DefaultLayout from "@/layouts/default";

export default function SellerPage() {
  const sellerData = {
    name: "John Doe",
    publicAddress: "0x1234...5678",
    items: [
      { id: 1, name: "Fresh Strawberries", price: 3.99, quantity: 100 },
      { id: 2, name: "Organic Blueberries", price: 4.99, quantity: 75 },
      { id: 3, name: "Raspberry Jam", price: 5.99, quantity: 50 },
    ],
  }

  return (
    <DefaultLayout>
   <div className="min-h-screen bg-gray-600 dark:bg-gray-900 dark:text-gray-100 p-4">
  <div className="max-w-4xl mx-auto">
    <div className="bg-gray-800 dark:bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col md:flex-row items-center md:items-start">
      <div className="mx-8">
        <img src="/avatar-svgrepo-com.png" alt="Seller" className="w-24 h-24 rounded-full" />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold mb-2 text-white dark:text-black">{sellerData.name}</h1>
        <div className="flex items-center justify-center md:justify-start mb-4">
          <span className="text-gray-400 dark:text-gray-600 mr-2">Public Address:</span>
          <span className="font-mono text-white dark:text-black">{sellerData.publicAddress}</span>
          <Button variant="ghost" size="sm" className="ml-2" aria-label="Copy public address">
            <IconCopy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>

    <Card className="bg-gray-800 dark:bg-white border-gray-700">
      <CardHeader className="text-white dark:text-black">Your Items</CardHeader>
      <CardBody>
        <ul className="divide-y divide-gray-700 dark:divide-gray-300">
          {sellerData.items.map((item) => (
            <li key={item.id} className="py-3 flex justify-between items-center">
              <div>
                <span className="font-medium text-white dark:text-black">{item.name}</span>
                <p className="text-sm text-gray-400 dark:text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <span className="font-semibold text-white dark:text-black">${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  </div>
</div>

    </DefaultLayout>
  )
}