import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import test from "./test.md"
import ReactMarkdown from 'react-markdown'
import Layout from './layout';
import Footer from  './footer'

interface Props {
    postTitle: string,
    date: string,
    text: string
}

const Post: NextPage<Props> = ({ postTitle = "No Title", date = "", text = "" }) => {
    return (
        <>
            <h1>{postTitle}</h1>
            <div>{date}</div>
            <ReactMarkdown>{text}</ReactMarkdown>
        </>
    )
}

const Blog: NextPage = () => {
    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="Blog" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-screen bg-light-beige dark:bg-sky-800 dark:text-white">
                <Layout></Layout>
                <h1 className="pt-16">Blog</h1>
                <Post postTitle={'Lorem Ipsum'} date={'01.01.01'} text={test} />
            </div>
            <Footer></Footer>
        </>
    )
}

export default Blog