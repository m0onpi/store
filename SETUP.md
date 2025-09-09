# Furniture Test Store Setup

This is a test furniture store built with Next.js and Snipcart for testing checkout functionality.

## Quick Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Snipcart (for test mode):**
   - Go to [Snipcart Dashboard](https://app.snipcart.com/)
   - Create a free account
   - Get your test API key from the dashboard
   - Create a `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_SNIPCART_API_KEY=your_test_api_key_here
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Test the checkout:**
   - Visit `http://localhost:3000`
   - Add furniture items to cart
   - Click checkout
   - Use test credit card: `4242 4242 4242 4242`
   - Complete the test order

## Test Products

The store includes 6 test furniture products:
- Modern Wooden Coffee Table (Oak/Walnut)
- Minimalist Dining Chair (White/Black)
- Luxury Sectional Sofa (Gray/Navy)
- Industrial Bookshelf (Black)
- Elegant Bed Frame (Queen/King)
- Modern Desk Lamp (Brass)

## Features

- ✅ Product catalog with variants
- ✅ Add to cart functionality
- ✅ Snipcart checkout integration
- ✅ Test mode enabled
- ✅ Responsive design
- ✅ Wishlist functionality

## Notes

- This is set up for testing purposes only
- All products are mock data (no real inventory)
- Snipcart is configured in test mode
- No real payments will be processed
