import Head from 'next/head'
import { get, ref, query, orderByChild, equalTo } from 'firebase/database'
import { useEffect } from 'react'
import className from '../styles/pagination.module.css'
import { database } from '../services/firebase-sdk'

const getValues = async (path) => {
  const dbRef = ref(database, path)
  const dbGet = await get(dbRef)
  const dbValue = dbGet.val()
  return dbValue
}

const getQuery = async (path, child, queries) => {
  const dbRef = ref(database, path)
  const dbQuery = query(dbRef, orderByChild(child), ...queries)
  const dbGet = await get(dbQuery)
  const dbValue = dbGet.val()
  return dbValue
}

const RelationPage = () => {
  const getData = async () => {
    const user001 = await getValues('users/user001')
    const user001Profile = await getValues('profile/user001')
    const user001Posts = await getValues('posts/user001')
    const user001Products = await getQuery('products', 'userId', [
      equalTo('user001')
    ])

    const productsTags = await getQuery('products_tags', 'productId', [
      equalTo('product001')
    ])

    const tags = await getValues('tags/tag001')

    console.log({ user001 })
    console.log({ user001Profile })
    console.log({ user001Posts })
    console.log({ user001Products })
    console.log({ productsTags })
    console.log({ tags })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Head>
        <title>Relation Pages</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={className.container}>
        <h1 style={{ fontSize: '5rem' }}>Relation Pages</h1>
      </div>
    </div>
  )
}

export default RelationPage
