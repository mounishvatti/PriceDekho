# PriceDekho

PriceDekho is a web application that allows users to paste any Amazon link and track the price of the product. When the product's price drops to a desired level, the application sends out an email notification. This project is built using Next.js, Tailwind CSS, Headless UI, NodeMailer, and MongoDB, and is deployed on Vercel.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) 

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Track prices of products from Amazon.
- Receive email notifications when the price drops.
- User-friendly interface with Tailwind CSS and Headless UI.
- Scheduled price checks using cron jobs.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Vercel account (for deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pricedekho.git
   cd pricedekho
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Set up your environment variables. Create a `.env.local` file in the root directory and add the following variables:

   ```env
   NEXT_PUBLIC_AMAZON_API_KEY=your_amazon_api_key
   NEXT_PUBLIC_EMAIL_API_KEY=your_email_api_key
   NEXT_PUBLIC_EMAIL_FROM=your_email@example.com
   NEXT_PUBLIC_MONGODB_HOST=*******************
   NEXT_PUBLIC_MONGODB_PWD=*******************
   ```

2. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Paste an Amazon product link into the input field on the homepage.
2. Click on search then view your product.
3. Click on track under the product details page and enter your email to start tracking the product.
4. You will receive an email notification when the product's price drops to your desired level.

## Deployment

To deploy the application on Vercel:

1. Push your project to a GitHub repository.
2. Go to the Vercel dashboard and import your repository.
3. Set up your environment variables in the Vercel project settings.
4. Deploy the project. Vercel will automatically build and deploy your application.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [cron](https://www.npmjs.com/package/cron)
- [Vercel](https://vercel.com/)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using PriceDekho! We hope it helps you save money on your Amazon purchases. If you have any questions or feedback, feel free to open an issue or contact us.