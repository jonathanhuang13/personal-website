import ConvertKitForm from 'convertkit-react/bin/convertkit-react.esm';

const CONVERTKIT_FORM_ID = 3419405;

interface Props {
  className?: string;
}

export default function Subscribe({ className = '' }: Props): JSX.Element {
  return (
    <div className={`${className} mx-auto border bg-slate-100 rounded-md p-4 flex flex-col items-center`}>
      <span className="text-2xl font-bold mb-1 text-gray-900">Want more content like this?</span>
      <span className="text-sm mb-6 text-gray-500">
        Subscribe to get my latest content by email. I won't send you spam and you can unsubscribe at any
        time.
      </span>

      <ConvertKitForm
        className="ck-form"
        formId={CONVERTKIT_FORM_ID}
        format="inline"
        emailPlaceholder="Email"
        namePlaceholder="First Name"
      ></ConvertKitForm>
    </div>
  );
}
