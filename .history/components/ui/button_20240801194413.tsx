@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

@layer base {
  :root {
    --foreground: 20 14.3% 4.1%;

    --card: 0 0% 100%;
    --card-foreground: 20 14.3% 4.1%;

    --popover: 0 0% 100%;
    --popover-foreground: 20 14.3% 4.1%;

    --primary: 22 100% 50%;
    --primary-foreground: 60 9.1% 97.8%;

    --secondary: 32 100% 98%;
    --secondary-foreground: 24 9.8% 10%;

    --muted: 60 4.8% 95.9%;
    --muted-foreground: 25 5.3% 44.7%;

    --accent: 60 4.8% 95.9%;
    --accent-foreground: 24 9.8% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 60 9.1% 97.8%;

    --border: 20 5.9% 90%;
    --input: 0 0% 90%;
    --ring: 24.6 95% 53.1%;
    --radius: 1rem;
  }
}

* {
  font-family: var(--font-nunito), sans-serif;
}

.scrollbar::-webkit-scrollbar {
  width: 4px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 6px;
  background: #fff;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #dbdadd;
  border-radius: 6px;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #dbdadd;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}