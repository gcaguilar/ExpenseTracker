import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  categorySchema,
  optionSchema,
} from "@/pages/category/components/CategoryForm";
import { Option as MultiSelectorOption } from "@/components/ui/multiselector";
import { CategoryWithKeywords, CategoryWithoutId } from "@/types/Category";
import { updateCategory, createCategory } from "@/services/categoryService";
import { MinimalKeyword } from "@/types/Keyword";

const transformKeywordsToOptions = (
  keywords: MinimalKeyword[],
): MultiSelectorOption[] => {
  return keywords.map((keyword) => ({
    value: keyword.id.toString(),
    label: keyword.name,
    disable: false,
  }));
};

const transformToOptions = (
  keywords: MinimalKeyword[],
): MultiSelectorOption[] => {
  return keywords.map((keyword) => ({
    value: keyword.id.toString(),
    label: keyword.name.charAt(0).toUpperCase() + keyword.name.slice(1),
    disable: false,
  }));
};

const transformToMinimalKeywords = (
  keyword: z.infer<typeof optionSchema>,
): MinimalKeyword => {
  return {
    id: Number(keyword.value),
    name: keyword.label,
  };
};

const transformToCategoryWithoutId = (
  category: z.infer<typeof categorySchema>,
): CategoryWithoutId => {
  return {
    name: category.title,
    associatedKeywords: category.associatedKeywords.map((item) =>
      transformToMinimalKeywords(item),
    ),
  };
};

const transformToCategoryWithKeywords = (
  category: z.infer<typeof categorySchema>,
): CategoryWithKeywords => {
  return {
    id: category.id,
    name: category.title,
    associatedKeywords: category.associatedKeywords.map((item) =>
      transformToMinimalKeywords(item),
    ),
  };
};

const useCategoryForm = (
  keywords: MinimalKeyword[],
  category?: CategoryWithKeywords,
) => {
  const options = category?.associatedKeywords ? transformToOptions(category.associatedKeywords) : [];
  const keywordsOptions = transformKeywordsToOptions(keywords);

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      id: category?.id ?? 0,
      title: category?.name ?? "",
      associatedKeywords: options,
    },
  });

  const onUpdateSubmit = (values: z.infer<typeof categorySchema>) => {
    const categories = transformToCategoryWithKeywords(values);
    updateCategory(categories);
  };

  const onCreateSubmit = (values: z.infer<typeof categorySchema>) => {
    const categories = transformToCategoryWithoutId(values);
    createCategory(categories);
  };

  return { form, keywordsOptions, onUpdateSubmit, onCreateSubmit };
};

export default useCategoryForm;
