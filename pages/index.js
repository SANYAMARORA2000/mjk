import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <>
    <Head>
    <title>Projects</title>
    </Head>
    <Homepage></Homepage>
    </>
  )
}
