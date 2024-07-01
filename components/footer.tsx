import Link from 'next/link'
import { GithubIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t px-4 py-1 text-sm shadow-sm md:fixed md:bottom-0 md:gap-x-4">
      <div>
        <span className="text-dark font-medium">
          Trabajo Final Web 2024 &copy;
        </span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="text-dark rounded-full"
        asChild
      >
        <Link
          href="https://github.com/code-ventage/final-project-web"
          title="Repositorio de GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="size-7" />
        </Link>
      </Button>
    </footer>
  )
}
