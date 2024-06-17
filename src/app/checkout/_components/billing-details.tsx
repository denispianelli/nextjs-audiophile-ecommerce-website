import { Control } from 'react-hook-form';
import { CheckoutFormValues, FormFieldWrapper } from './form-field-wrapper';

interface BillingDetailsProps {
  control: Control<CheckoutFormValues>;
}

export const BillingDetails: React.FC<BillingDetailsProps> = ({ control }) => (
  <div className="grid gap-6">
    <div className="grid gap-4">
      <p className="subtitle">Billing Details</p>
      <FormFieldWrapper
        control={control}
        name="name"
        label="Name"
        placeholder="Alexei Ward"
      />
    </div>
    <FormFieldWrapper
      control={control}
      name="email"
      label="Email Address"
      placeholder="alexei@mail.com"
    />
    <FormFieldWrapper
      control={control}
      name="phone"
      label="Phone Number"
      placeholder="+1 202-555-0136"
    />
  </div>
);
