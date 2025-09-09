// Mock database for orders - replace with your actual database connection
// This ensures consistency between create and fetch operations

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface OrderData {
  orderId: string;
  items: OrderItem[];
  total: number;
  shipping: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  payment: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    nameOnCard: string;
  };
  timestamp: string;
}

// In-memory storage - replace with your actual database
const orders: { [key: string]: OrderData } = {};

export const saveOrder = (orderData: OrderData): boolean => {
  try {
    orders[orderData.orderId] = orderData;
    console.log('Order saved to database:', {
      orderId: orderData.orderId,
      total: orderData.total,
      itemCount: orderData.items.length,
      timestamp: orderData.timestamp
    });
    return true;
  } catch (error) {
    console.error('Error saving order to database:', error);
    return false;
  }
};

export const getOrder = (orderId: string): OrderData | null => {
  try {
    const order = orders[orderId];
    if (order) {
      console.log('Order retrieved from database:', {
        orderId: order.orderId,
        total: order.total,
        itemCount: order.items.length
      });
    }
    return order || null;
  } catch (error) {
    console.error('Error retrieving order from database:', error);
    return null;
  }
};

export const getAllOrders = (): OrderData[] => {
  try {
    return Object.values(orders);
  } catch (error) {
    console.error('Error retrieving all orders from database:', error);
    return [];
  }
};

// Export types for use in API routes
export type { OrderData, OrderItem };
