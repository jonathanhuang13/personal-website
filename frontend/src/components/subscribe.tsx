import ConvertKitForm from 'convertkit-react/bin/convertkit-react.esm';

const CONVERTKIT_FORM_ID = 3419405;

interface Props {
  className?: string;
}

export default function Subscribe({ className = '' }: Props): JSX.Element {
  return (
    <div className={`${className} mx-auto border bg-slate-100 rounded-md p-4 flex flex-col`}>
      <span className="text-2xl font-bold self-center mb-8">Want more content like this?</span>

      <ConvertKitForm className="ck-form" formId={CONVERTKIT_FORM_ID} format="inline">
        <p>Hi</p>
      </ConvertKitForm>
    </div>
  );
}
