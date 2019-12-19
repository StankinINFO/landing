import React from 'react';
import { Layout } from 'antd'
import MenuSection from "./components/sections/MenuSectionn/MenuSection";
import ContentSection from "./components/sections/ContentSection/ContentSection";
import FooterSection from "./components/sections/FooterSection/FooterSection";
import './App.css';

const { Content } = Layout

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Layout>
                    <MenuSection/>
                    <Content>
                        <ContentSection/>
                    </Content>
                    <FooterSection/>
                </Layout>
            </div>
        );
    }
}

export default App;
