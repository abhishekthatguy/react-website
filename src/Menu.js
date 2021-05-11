import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu=()=>{
    return(
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <ul className="f6 fw6 ttu tracked">
                <li className="link dim white dib mr3"><Link to="/">Home </Link></li>
                <li className="link dim white dib mr3"><Link to="/about">About</Link></li>
                <li className="link dim white dib mr3"><Link to="/avtar">PortFolio</Link></li>
                <li className="link dim white dib mr3"><Link to="/contact">Contact</Link></li>
            </ul>
            {/* <nav className="db dt-l w-100 border-box pa3 ph5-l">
  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
  </a>
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <Link to="/" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</Link>
    <Link to="/about" className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">About</Link>
    <Link to="/blog"className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</Link>
    <Link to="/avtar"className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Press">Press</Link>
    <Link to="/contact"className="link dim dark-gray f6 f5-l dib" href="#" title="Contact">Contact</Link>
  </div>
</nav> */}

        </header>
    )
}

export default Menu;