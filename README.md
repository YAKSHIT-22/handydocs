# Collaborative Docs

A real-time collaborative document editor built with Next.js 15, Tailwind CSS, Clerk for authentication, ShadCN UI for components, TypeScript, and Liveblocks for real-time collaboration.

## 🚀 Features

- **Real-time Editing**: Multiple users can edit documents simultaneously.
- **Authentication**: Secure user authentication using Clerk.
- **Beautiful UI**: ShadCN UI components for a modern and responsive interface.
- **Markdown Support**: Write and format text using Markdown.
- **Role-Based Access**: Control document access based on user roles.
- **Version History**: Track and revert to previous versions.
- **Optimized Performance**: Server-side rendering (SSR) and static site generation (SSG) with Next.js 15.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Component Library**: [ShadCN UI](https://ui.shadcn.com/)
- **Real-time Collaboration**: [Liveblocks](https://liveblocks.io/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/collaborative-docs.git
cd collaborative-docs
npm install
```

## 🔑 Environment Variables

Create a `.env.local` file and add the following:

```sh
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

## 🏃 Running the Project

To start the development server:

```sh
npm run dev
```

To build the project:

```sh
npm run build
```

To start the production server:

```sh
npm start
```

## 📖 Usage

1. Sign in using Clerk authentication.
2. Create a new document.
3. Share the document link with collaborators.
4. Edit the document in real time.

## 🛠 Deployment

Deploy easily on Vercel:

```sh
npx vercel
```

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License.

## 📧 Contact

For any questions, feel free to reach out:
- **GitHub**: [yakshit-22](https://github.com/yakshit-22)
