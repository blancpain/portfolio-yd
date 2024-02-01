import Transition from '@/components/Transition';

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <Transition />
      {children}
    </>
  );
}
