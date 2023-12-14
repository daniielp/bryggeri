import z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useHookForm, UseFormProps } from 'react-hook-form';

export function useZodForm<Schema extends z.ZodType>(
  props: Omit<UseFormProps<Schema['_input']>, 'resolver'> & {
    schema: Schema;
  }
) {
  const form = useHookForm<Schema['_input']>({
    ...props,
    resolver: zodResolver(props.schema, undefined)
  });

  return form;
}