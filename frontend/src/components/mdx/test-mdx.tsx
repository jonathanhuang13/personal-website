interface Props {
  foo: string;
  children: React.ReactNode;
}

export default function ({ foo, children }: Props): JSX.Element {
  return (
    <div>
      Hello {foo} {children}
    </div>
  );
}
