export interface ICommonErrorStructure {
    errors: {
      message: string;
      field?: string;
    }[];
  }