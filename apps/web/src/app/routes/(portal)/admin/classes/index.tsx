import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(portal)/admin/classes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(portal)/admin/classes/"!</div>
}
