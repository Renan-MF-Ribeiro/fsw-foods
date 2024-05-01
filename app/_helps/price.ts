import { Product } from "@prisma/client";

export const calculateProductTotalPrice = (product: Product): Number => {
  if (product.discountPercentage === 0) {
    return Number(product.price);
  }
  const discount = Number(product.price) * (product.discountPercentage / 100);
  return Number(product.price) - discount;
};

export const formatCurrency = (value: number): string => {
  return `R$
            ${Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
              currency: "BRL",
            }).format(value)}`;
};
