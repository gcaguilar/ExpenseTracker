import React from "react";
import { CategoryWithKeywords } from "@/types/Category";
import { FormField } from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/FormInputField";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import MultiSelector, {
  Option as MultiSelectorOption,
} from "@/components/ui/multiselector";
import useCategoryForm from "@/hooks/useCategoryForm";
import { Keyword } from "@/types/Keyword";

export const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

export const categorySchema = z.object({
  id: z.number(),
  title: z.string().min(1, { message: "El nombre es requerido" }),
  associatedKeywords: z
    .array(optionSchema)
    .min(1, { message: "Las palabras clave son requeridas" }),
});

interface CategoryFormProps {
  keywords: Keyword[];
  category?: CategoryWithKeywords;
  onSubmit: (values: z.infer<typeof categorySchema>) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({
  keywords,
  category,
  onSubmit,
}) => {
  const { form, keywordsOptions } = useCategoryForm(keywords, category);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={`title`}
          render={({ field }) => (
            <FormInputField
              title="Titulo"
              type="text"
              field={field}
              placeholder={form.getValues("title")}
            />
          )}
        />
        <FormField
          control={form.control}
          name={`associatedKeywords`}
          render={({ field: { value, ...rest } }) => (
            <MultiSelector
              {...rest}
              value={value as MultiSelectorOption[]}
              options={keywordsOptions}
              placeholder="Selecciona palabras clave"
              emptyIndicator={
                <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                  no results found.
                </p>
              }
            />
          )}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
};

export default CategoryForm;
