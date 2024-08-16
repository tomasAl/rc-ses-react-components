import { Link, Breadcrumbs as MuiBreadcrumbs } from '@mui/material'

export type BreadcrumbItem = { label: string; path: string }

type Props = {
  path: BreadcrumbItem[]
}

function Breadcrumbs({ path }: Props) {
  return (
    <MuiBreadcrumbs aria-label='breadcrumb'>
      <Link underline='hover' color='inherit' href='/'>
        Pagrindinis
      </Link>
      {path.map((step) => (
        <Link key={step.path} underline='hover' color='inherit' href={step.path}>
          {step.label}
        </Link>
      ))}
    </MuiBreadcrumbs>
  )
}

Breadcrumbs.defaultProps = {}

export default Breadcrumbs
