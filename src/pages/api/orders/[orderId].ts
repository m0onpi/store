import { NextApiRequest, NextApiResponse } from "next";
import { getOrder, saveOrder, OrderData } from "../../../lib/mock-database";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { orderId } = req.query;

  if (req.method === 'GET') {
    try {
      const order = getOrder(orderId as string);
      
      if (!order) {
        return res.status(404).json({ 
          success: false, 
          message: 'Order not found' 
        });
      }

      res.status(200).json({
        success: true,
        order
      });

    } catch (error) {
      console.error('Error fetching order:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch order' 
      });
    }
  } else if (req.method === 'POST') {
    // This endpoint can also be used to save orders
    try {
      const orderData: OrderData = req.body;
      const success = saveOrder(orderData);
      
      if (!success) {
        throw new Error('Failed to save order to database');
      }
      
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
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
