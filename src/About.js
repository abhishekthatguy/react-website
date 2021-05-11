import React from 'react';
import './AboutUs.css';
import { DatePicker,Button ,Tooltip} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const About=()=>{
    return (
        <div className="aboutUs">
           <Layout>
      <Header>Header</Header>
      <Layout>
          <Sider style={{background:"red"}}>Sider</Sider></Layout>
          <Content>Content</Content>
        <Footer>Footer</Footer>
      
      <Layout>
       
        
      </Layout>
     
    </Layout>
        </div>
    )
}
export default About;