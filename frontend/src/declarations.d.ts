declare module 'convertkit-react/bin/convertkit-react.esm' {
  interface ConvertKitFormProps {
    className?: string;
    format?: 'inline' | 'modal' | 'slidein' | 'sticky';
    template?: string;
    formId: number;
    submitText?: string;
    emailPlaceholder?: string;
    namePlaceholder?: string;
    nameLabel?: string;
    emailLabel?: string;
    showLabels?: bool;
    hideName?: bool;
    newTab?: bool;
    stacked?: bool;
    hideWarnings?: bool;
    backgroundImage?: string;
    backgroundOpacity?: number;
    backgroundColor?: number[];
    borderRadius?: number;
    children?: React.ReactNode;
  }

  export default function ConvertKitForm(props: ConvertKitFormProps): JSX.Element {}
}
