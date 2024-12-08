import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

import { Button } from '@/components/ui/button'

export function NextStepButtonLink({
  children,
  isDisabled,
  ...props
}: PropsWithChildren<LinkProps<string> & { isDisabled: boolean }>) {
  return (
    <Button asChild disabled={isDisabled}>
      <Link {...props}>{children}</Link>
    </Button>
  )
}
