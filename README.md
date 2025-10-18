# Leywok - On-Demand Service Marketplace

Leywok is a modern, AI-powered service marketplace that connects users with trusted local service providers. Post a task, receive competitive bids, and get your work done efficiently.

## 🌟 Features

- **Task Posting**: Users can describe their service needs and receive bids from qualified professionals
- **Provider Network**: Service providers can sign up and bid on tasks matching their expertise
- **AI-Powered Routing**: Complex requests are intelligently routed to human specialists
- **Secure Platform**: Verified professionals with secure payment processing
- **Multiple Service Categories**: Home Services, Skilled Trades, Creative & Design, Professional Services

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **AI Integration**: Google Genkit for intelligent request routing
- **Animations**: Custom scroll animations and transitions

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:9002](http://localhost:9002) to see the application.

### Build

```bash
npm run build
npm start
```

### Genkit AI Development

```bash
npm run genkit:dev
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── landing/      # Landing page sections
│   ├── layout/       # Header, footer components
│   ├── provider/     # Provider-specific components
│   ├── shared/       # Shared/reusable components
│   └── ui/           # UI primitives
├── ai/               # AI flows and configurations
├── lib/              # Utilities and definitions
└── hooks/            # Custom React hooks
```

## 🎨 Design System

- **Primary Color**: Deep sky blue (#007BFF) - Trust and reliability
- **Accent Color**: Lime green (#32CD32) - Action and emphasis
- **Background**: Light grayish-blue (#F0F8FF) - Clean, modern backdrop
- **Typography**: Inter font family for excellent readability

## 📝 License

Copyright © 2025 Leywok. All rights reserved.
