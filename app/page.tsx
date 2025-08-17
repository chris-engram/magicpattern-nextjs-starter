import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThemeToggle } from '@/components/theme-toggle';
import { Rocket, Code2, Palette, TestTube, Zap, Package } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Next.js 15 + Turbopack',
      description: 'Lightning-fast development with the latest Next.js features',
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework with custom design system',
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'shadcn/ui Components',
      description: 'Beautiful, accessible, and customizable component library',
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'TypeScript',
      description: 'Full type safety for robust application development',
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: 'Testing Ready',
      description: 'Jest and React Testing Library pre-configured',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Production Ready',
      description: 'ESLint, Prettier, Husky, and CI/CD configured',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Rocket className="h-6 w-6" />
              <span className="font-bold">MagicPattern Starter</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <a href="https://github.com/chris-engram/magicpattern-nextjs-starter" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Badge variant="secondary" className="mb-2">
              <Rocket className="mr-1 h-3 w-3" />
              Ready to launch
            </Badge>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Build faster with a{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                modern stack
              </span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A production-ready Next.js starter template with TypeScript, Tailwind CSS, shadcn/ui
              components, Storybook, testing, and more.
            </p>
            <div className="space-x-4">
              <Button size="lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                View Components
              </Button>
            </div>
          </div>
        </section>

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Everything you need
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              This starter includes everything you need to build a modern web application.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Component Showcase
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Explore the pre-configured components available in this starter.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-[64rem]">
            <Tabs defaultValue="buttons" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
              </TabsList>
              <TabsContent value="buttons" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Button Variants</CardTitle>
                    <CardDescription>
                      Different button styles for various use cases.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cards">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Component</CardTitle>
                    <CardDescription>
                      Cards are used to group related content.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is an example card with header and content sections.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="forms">
                <Card>
                  <CardHeader>
                    <CardTitle>Form Components</CardTitle>
                    <CardDescription>
                      Form inputs with validation and accessibility.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Form components showcase coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="dialogs">
                <Card>
                  <CardHeader>
                    <CardTitle>Dialog Components</CardTitle>
                    <CardDescription>
                      Modal dialogs for user interactions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Dialog components showcase coming soon...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}