import ConvertKitForm from './convert-kit-form';

const CONVERTKIT_FORM_ID = 3419405;

interface Props {
  className?: string;
}

export default function Subscribe({ className = '' }: Props): JSX.Element {
  return (
    <div
      className={`${className} mx-auto border dark:border-slate-600 bg-slate-100 dark:bg-slate-700 rounded-md p-4 flex flex-col items-center`}
    >
      <span className="text-2xl font-bold mb-1">Want more content like this?</span>
      <span className="text-sm mb-6 text-gray-500 dark:text-gray-400">
        Subscribe to get my latest content by email. I won't send you spam and you can unsubscribe at any
        time.
      </span>

      <ConvertKitForm
        formId={CONVERTKIT_FORM_ID}
        emailPlaceholder="Email"
        namePlaceholder="First Name"
      ></ConvertKitForm>
    </div>
  );
}
