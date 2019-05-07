import React from 'react'
import Head from 'next/head'
import App, {Container} from 'next/app'
import DefaultApplication from '../components/application/defaultApplication'
import 'antd-mobile/dist/antd-mobile.css';
import './style.css'

class ExpressApp extends App {

    constructor(...props) {
        super(...props);
    }

    render() {
        const {Component} = this.props;
        return (
            <Container>
                <Head>
                    <title>UePay-Demo</title>
                    <meta charSet='utf-8'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                    <style>
                        {"#__next {height:100%};"}
                    </style>
                </Head>
                <DefaultApplication Component={Component}/>
            </Container>
        );
    }
}

export default ExpressApp