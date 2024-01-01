export type BasicSupplierPayload = {
  id: string;
  data: {
    name: string;
    description: string;
    email: string;
    featured: boolean;
  };
};
