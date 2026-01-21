import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(portal)/student/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(portal)/student/"!</div>
}
