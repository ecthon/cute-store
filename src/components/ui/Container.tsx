interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`flex flex-col w-full max-w-[1248px] mx-auto space-y-4 px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
} 