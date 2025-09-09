import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface OrderData {
  orderNumber: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    variant?: string;
  }>;
  total: number;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  orderDate: string;
}

const ConfirmationPage: React.FC = () => {
  const router = useRouter();
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const orderNumber = router.query.order as string;
    
    if (orderNumber) {
      const storedOrder = localStorage.getItem('lastOrder');
      if (storedOrder) {
        const parsedOrder = JSON.parse(storedOrder);
        if (parsedOrder.orderNumber === orderNumber) {
          setOrderData(parsedOrder);
        }
      }
    }
    
    setLoading(false);
  }, [router.query.order]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find the order you're looking for.</p>
          <Link href="/">
            <a className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Continue Shopping
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
      </div>

      {/* Order Details */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Order Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Order Number:</span> {orderData.orderNumber}</p>
              <p><span className="font-medium">Order Date:</span> {formatDate(orderData.orderDate)}</p>
              <p><span className="font-medium">Total:</span> ${orderData.total.toFixed(2)}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Shipping Address</h2>
            <div className="text-gray-600">
              <p>{orderData.customer.firstName} {orderData.customer.lastName}</p>
              <p>{orderData.customer.address}</p>
              <p>{orderData.customer.city}, {orderData.customer.state} {orderData.customer.zipCode}</p>
              <p>{orderData.customer.country}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h2>
        <div className="space-y-4">
          {orderData.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                {item.variant && (
                  <p className="text-sm text-gray-600">{item.variant}</p>
                )}
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${orderData.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">What's Next?</h2>
        <div className="space-y-2 text-blue-800">
          <p>• You will receive an email confirmation shortly</p>
          <p>• Your order will be processed within 1-2 business days</p>
          <p>• You will receive tracking information once your order ships</p>
          <p>• Estimated delivery: 3-5 business days</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <a className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center">
            Continue Shopping
          </a>
        </Link>
        <button
          onClick={() => window.print()}
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          Print Receipt
        </button>
      </div>

      {/* Test Store Notice */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800 text-sm text-center">
          <strong>Test Store Notice:</strong> This is a demonstration store. No real products were ordered and no payment was processed.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;
