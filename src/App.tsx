import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Moon, Sun } from 'lucide-react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Design System</h1>
              <p className="text-muted-foreground">
                Built with React, Tailwind CSS, shadcn/ui, and Radix UI
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {isDark ? 'Light' : 'Dark'}
            </Button>
          </div>

          {/* Button Showcase */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Button Component</h2>

            <div className="space-y-8">
              {/* Variantes Padrão */}
              <div>
                <h3 className="text-lg font-medium mb-4">Variantes Padrão</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* Variantes Destrutivas */}
              <div>
                <h3 className="text-lg font-medium mb-4 text-destructive">
                  Variantes Destrutivas
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button destructive>Default</Button>
                  <Button variant="secondary" destructive>Secondary</Button>
                  <Button variant="outline" destructive>Outline</Button>
                  <Button variant="ghost" destructive>Ghost</Button>
                  <Button variant="link" destructive>Link</Button>
                </div>
              </div>

              {/* Tamanhos */}
              <div>
                <h3 className="text-lg font-medium mb-4">Tamanhos</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                </div>
              </div>

              {/* Estados */}
              <div>
                <h3 className="text-lg font-medium mb-4">Estados</h3>
                <div className="flex flex-wrap gap-4">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button destructive loading>Loading Destructive</Button>
                  <Button destructive disabled>Disabled Destructive</Button>
                </div>
              </div>

              {/* Com Ícones */}
              <div>
                <h3 className="text-lg font-medium mb-4">Com Ícones</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>
                    <Mail className="h-4 w-4" />
                    Send Email
                  </Button>
                  <Button variant="secondary">
                    <Mail className="h-4 w-4" />
                    With Icon
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Links */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Documentação</h2>
            <p className="text-muted-foreground mb-4">
              Para visualizar a documentação completa e todas as variantes no Storybook, execute:
            </p>
            <pre className="bg-muted p-4 rounded-md">
              <code>npm run storybook</code>
            </pre>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
