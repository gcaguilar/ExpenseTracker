import React from "react";
import { CategoryWithKeywords } from "@/types/Category";
import { FormField } from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/FormInputField";
import { singleExpenseSchema } from "@/pages/expense/schemaValidation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface CategoryFormProps {
  category: CategoryWithKeywords;
  onSubmit: (values: z.infer<typeof singleExpenseSchema>) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ category, onSubmit }) => {
  const categorySchema = z.object({
    id: z.number(),
    title: z.string().min(1, { message: "El nombre es requerido" }),
    associatedNames: z
      .string()
      .min(1, { message: "Las palabras clave son requeridas" }),
  });

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      id: category.id,
      title: category.name,
      associatedNames: category.associatedNames.join(","),
    },
  });

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
        <Textarea
          placeholder={form.getValues("associatedNames")}
          {...form.register("associatedNames")}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
};

export default CategoryForm;
