import { NextApiRequest, NextApiResponse } from "next";
import { saveOrder, OrderData } from "../../../lib/mock-database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const orderData: OrderData = req.body;

    // Save to database
    const success = saveOrder(orderData);

    if (!success) {
      throw new Error('Failed to save order to database');
    }

    // In a real implementation, you would:
    // 1. Connect to your database (Prisma, MongoDB, PostgreSQL, etc.)
    // 2. Save the order data
    // 3. Return the saved order with any generated IDs
    
    // Example with Prisma:
    // const order = await prisma.order.create({
    //   data: {
    //     orderId: orderData.orderId,
    //     total: orderData.total,
    //     shipping: orderData.shipping,
    //     payment: orderData.payment,
    //     timestamp: orderData.timestamp,
    //     items: {
    //       create: orderData.items.map(item => ({
    //         productId: item.id,
    //         name: item.name,
    //         price: item.price,
    //         quantity: item.quantity,
    //         image: item.image
    //       }))
    //     }
    //   }
    // });

    res.status(200).json({
      success: true,
      orderId: orderData.orderId,
      message: 'Order saved successfully'
    });

  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to save order' 
    });
  }
}
