export type Category = {
  id: string;
  name: string;
}

export type CategoryWithKeywords = {
  id: number;
  name: string;
  associatedNames: string[];
};

export type CategoryWithoutId = {
  name: string;
  associatedNames: string[];
};
