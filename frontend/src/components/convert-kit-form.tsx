import { FormEventHandler, useState } from 'react';
import toast from 'react-hot-toast';

interface Props {
  className?: string;
  formId: number;
  submitText?: string;
  emailPlaceholder?: string;
  namePlaceholder?: string;
  nameLabel?: string;
  emailLabel?: string;
}

export default function ConvertKitForm({
  className = '',
  formId,
  submitText = 'Subscribe',
  emailPlaceholder,
  namePlaceholder,
  nameLabel,
  emailLabel,
}: Props): JSX.Element {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    // const data = new FormData();
    // data.append('fields[first_name]', firstName);
    // data.append('email_address', email);

    const subscribePromise = fetch(`https://app.convertkit.com/forms/${formId}/subscriptions`, {
      method: 'POST',
      body: new URLSearchParams({ 'fields[first_name]': firstName, email_address: email }),
      headers: { 'content-type': 'application/x-www-form-urlencoded ' },
    });

    toast
      .promise(subscribePromise, {
        loading: 'Loading...',
        success: 'Thanks for subscribing! 🙏',
        error: 'Sorry, please try again',
      })
      .catch((e) => {});

    await subscribePromise;

    // setFirstName('');
    // setEmail('')
  };

  return (
    <form className={`${className} flex justify-center`} onSubmit={handleSubmit}>
      <input
        type="text"
        className="py-1 px-2 border border-gray-300 rounded-md mr-2 dark:bg-slate-100 dark:text-gray-800"
        placeholder={namePlaceholder}
        aria-label={nameLabel}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="email"
        className="py-1 px-2 border border-gray-300 rounded-md mr-2 dark:bg-slate-100 dark:text-gray-800"
        placeholder={emailPlaceholder}
        aria-label={emailLabel}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-slate-700 dark:bg-slate-900 text-white dark:text-gray-300 py-1 px-6 rounded-md"
        type="submit"
      >
        {submitText}
      </button>
    </form>
  );
}
