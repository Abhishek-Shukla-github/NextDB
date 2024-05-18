import React from 'react'
import Search from "@/app/ui/dashboard/search/Search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from '@/app/lib/data';

const Page = async ({searchParams}) => {
    const products = await fetchProducts(searchParams.q)
    // console.log("propducts", products)
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a product..." />
      <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <div className={styles.product}>
                <Image
                  src={product?.img || "/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                {product.title}
              </div>
            </td>
            <td>{product.desc}</td>
            <td>${product.price}</td>
            <td>{product.createdAt.toDateString()}</td>
            <td>{product.stock}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/${product.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination />
  </div>
  )
}

export default Page