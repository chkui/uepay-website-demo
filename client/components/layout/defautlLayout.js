import React from 'react'
import PropTypes from 'prop-types';
import Footer from './footer'
import styles from './defaultLayout.scss'


console.log(styles);
/**
 * 默认布局末班
 * @param props
 * @param props.Component {Function} 要渲染的页面组件
 * @return {*}
 * @constructor
 */
const DefaultLayout = props => {
    const {Component} = props;
    return (<React.Fragment>
        <div className={styles.content}>
            <Component/>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
    </React.Fragment>);
}

DefaultLayout.propTypes = {
    Component: PropTypes.func
};

export default DefaultLayout