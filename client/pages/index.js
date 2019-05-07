import React from 'react'
import TitleBar from '../components/home/titleBar'
import Actions from '../components/home/actions'

class Index extends React.Component {
    render() {
        return (<React.Fragment>
                <TitleBar />
                <Actions />
            </React.Fragment>
        );
    }
}


export default Index