import React from 'react';
import Link from 'next/link';


import ProductList from '../comps/ProductList';
import CategoryList from '../comps/CategoryList';
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
  return (
    <React.Fragment>
      <h1>{merchant.business_name}</h1>

      <h3>
        <Link href="/categories">
          <a>Categories</a>
        </Link>
      </h3>

      <CategoryList categories={categories} />

      <h3>
        <Link href="/products">
          <a>Products</a>
        </Link>
      </h3>

      <ProductList products={products} />
    </React.Fragment>
  );
}