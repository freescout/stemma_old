import React, { Component } from  'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a href="/api/logout">Logout</a></li>;
    }
  }
  render(){
    return(
      <nav>
        <div className="nav-wrapper #5c6bc0 indigo lighten-1">
        <Link 
          to={this.props.auth ? '/familyTree' : '/'}
          className="left brand-logo" 
        >
          Stemma
        </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            { this.renderContent() }
            {/* <li><a href="">Login with Google</a></li>
            <li><a href="">Facebook</a></li> */}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToprops({ auth }) {
  return ({ auth });
}

export default connect(mapStateToprops)(Header);