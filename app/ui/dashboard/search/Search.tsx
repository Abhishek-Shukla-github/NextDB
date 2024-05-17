"use client";

import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

const Search = ({ placeholder }) => {
  const router = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams()

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString())
    if(e.target.value === "") router.push(`${path}`) 
    else {
      params.set("q", e.target.value)
      let queryString = params.toString()
      router.push(`${path}?${queryString}`)
    }
  }
  

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleURLChange}
      />
    </div>
  );
};

export default Search;