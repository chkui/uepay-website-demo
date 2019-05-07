import React from 'react'
import { withRouter } from 'next/router';
import {TabBar, Icon} from 'antd-mobile'
import style from './footer.scss'

const Footer = props => {
    return (<footer className={style.footer}>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={false}
        >
            <TabBar.Item
                key="Life"
                icon={<div className={style.imgContain}>
                    <img alt="极易付" src="https://www.uepay.mo/images/home/home_1/icon_uepay.png"/>
                </div>}
                selectedIcon={<img src="https://www.uepay.mo/images/home/home_1/icon_uepay.png"/>}
                selected={false}
                onPress={() => {props.router.push('/')}}
                data-seed="logId"
            />
            <TabBar.Item
                key="Life"
                icon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  40px 40px no-repeat' }}
                />}
                selectedIcon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  40px 40px no-repeat' }}
                />}
                selected={false}
                onPress={() => {props.router.push('/pay')}}
                data-seed="logId"
            />
            <TabBar.Item
                key="Life"
                icon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  40px 40px no-repeat' }}
                />}
                selectedIcon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  40px 40px no-repeat' }}
                />}
                selected={false}
                onPress={() => {props.router.push('/user')}}
                data-seed="logId"
            />
            <TabBar.Item
                key="Life"
                icon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  40px 40px no-repeat' }}
                />}
                selectedIcon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  40px 40px no-repeat' }}
                />}
                selected={false}
                onPress={() => {props.router.push('/money')}}
                data-seed="logId"
            />
            <TabBar.Item
                key="Life"
                icon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  40px 40px no-repeat' }}
                />}
                selectedIcon={<div style={{
                    width: '40px',
                    height: '40px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  40px 40px no-repeat' }}
                />}
                selected={false}
                onPress={() => {props.router.push('/money')}}
                data-seed="logId"
            />
        </TabBar>
    </footer>)
};

export default withRouter(Footer)