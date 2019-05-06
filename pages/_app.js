import React from 'react'
import Head from 'next/head'
import App, {Container} from 'next/app'
import DefaultApplication from '../components/application/defaultApplication'

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
                    <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                </Head>
                <DefaultApplication Component={Component}/>
            </Container>
        );
    }
}

export default ExpressApp