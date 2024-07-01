import AuthHeader from '@/components/login-navbar'

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
