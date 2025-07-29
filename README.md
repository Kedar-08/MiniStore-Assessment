# MiniStore

## 🚀 Features :

- **Product Catalog**: Browse products fetched from the Fake Store API
- **Search Functionality**: Real-time search with debounced input for better performance
- **Product Details**: Dedicated pages for individual product information
- **State Management**: Redux Toolkit for efficient state management
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean UI interface using IBM Carbon components

## 🛠️ Tech Stack used :

- **Framework**: Next.js 14.2.30
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **UI Components**: IBM Carbon Design System (@carbon/react)
- **Styling**: SCSS with Carbon Design tokens
- **HTTP Client**: Axios
- **API**: Fake Store API (https://fakestoreapi.com)

## 📁 Project Structure

```
├───public
│   │   favicon.ico
│   │
│   └───fonts
│           GeistMonoVF.woff
│           GeistVF.woff
│
└───src
    ├───components
    │       ProductCard.tsx
    │
    ├───features
    │   └───product
    │           productSlice.ts
    │
    ├───hooks
    │       reduxHooks.ts
    │
    ├───pages
    │      index.tsx
    │      _app.tsx
    │      _document.tsx
    │   
    │   
    │           
    │
    ├───store
    │       store.ts
    │
    └───styles
            globals.scss
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ministore
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Pages

### Home Page (`/`)
- Displays a grid of product cards
- Real-time search functionality with 300ms debounce
- Responsive layout using Carbon Grid system
- Loading states and error handling



### Components

#### ProductCard
- Reusable component for displaying product information



## 🎨 Styling & Design

The application uses IBM Carbon Design System for Consistent UI components such as:**
📝 Heading
Used to display the "MiniStore" title because it provides consistent typography styling and semantic HTML structure for page headings.
⏳ Loading
Used to show a loading spinner with overlay while products are being fetched because it provides a professional loading state with built-in accessibility features.
🔍 Search
Used for the product search input because it includes search-specific styling, icons, clear button, and proper ARIA labels for accessibility.
🔲 Grid
Used as the main container for the product layout because it provides a responsive framework that handles spacing and alignment automatically.
📏 Column
Used to wrap each ProductCard and control responsive behavior because it defines how many columns each product takes up on different screen sizes (lg=4, md=4, sm=2).
- **Design tokens** for spacing, colors, and typography



## 🔄 State Management

The app uses Redux Toolkit for state management:

- **Product Slice**: Manages product data, loading states, and errors
- **Async Thunks**: Handle API calls with proper loading/error states
- **Typed Hooks**: Custom hooks for type-safe Redux usage

### State Structure
```typescript
{
  products: {
    items: Product[],
    loading: boolean,
    error: string | null
  }
}
```

## 🌐 API Integration

- **Data Source**: Fake Store API (https://fakestoreapi.com)
- **Endpoints Used**:
  - `GET /products` - Fetches all products
- **Error Handling**: Comprehensive error states for network issues

