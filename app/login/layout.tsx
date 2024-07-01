import AuthHeader from '@/components/auth-header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  )
}
