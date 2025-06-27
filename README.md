 # Card Manager App

This is a simple React + Vite + TypeScript app to manage credit/debit cards. You can:

- Add new cards
- Filter by brand or last 4 digits
- Set a default card
- Delete cards

The project uses:

- **React + TypeScript + Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **Zod + react-hook-form**
- **@tanstack/react-table**

---

## Features

- Add new cards with validation (brand, number, CVC, expiry)
- Automatically detect card brand (Visa, MasterCard, Amex)
- Set a card as default
- Filter cards by brand or last 4 digits
- Delete a card
- Responsive UI

---

## Tech Stack

| Tech               | Purpose                   |
|--------------------|----------------------------|
| React + TypeScript | UI & logic                 |
| Tailwind CSS       | Styling                    |
| shadcn/ui          | UI components              |
| Zod                | Schema validation          |
| React Hook Form    | Form handling              |
| TanStack Table     | Data table implementation  |
| UUID               | Unique ID generation       |

---

## Setup

# Clone the repo
git clone https://github.com/solik003/cards-manager-app.git
cd cards-manager-app

# Install dependencies
pnpm install 

# Start the development server
pnpm dev

## Project Structure
src/
├── components/
│   ├── DataTable.tsx
│   ├── CreateCardDialog.tsx
│   ├── ActionsCell.tsx
│   └── ui/              # shadcn/ui components
│   └── utils/   
        └── card.ts    
├── columns/
│   └── card-columns.ts
├── hooks/
│   └── useCards.ts
├── pages/
│   └── Home.tsx
│   └── MyCards.tsx
├── types/
│   └── card.ts
├── utils/
│   └── card.ts          # getCardBrand function
└── mock/
    └── mock-cards.json
├── routes/
│   └── index.ts
│   └── my-cards.ts


## Mock Data
Mock cards are loaded from mock-cards.json. You can update it to simulate backend data.
