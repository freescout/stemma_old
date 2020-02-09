import React, { Component } from  'react';
import { StyleSheet, css } from 'aphrodite';


class AddIndividual extends Component {
  render(){
    return(
      <div className={css(Styles.outerDiv)}>
        <div className={css(Styles.menuDiv)}>
          <div>Events</div>
          <div>FamilyTree</div>
        </div>
        <div className={css(Styles.formDivOuter)}>
          <h5>Add Personal Details</h5>
          <div className={css(Styles.formDivInner)}>
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddIndividual;


{/* <div>
<form class="col s12">
  <div class="row">
    <div class="input-field col s6">
      <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
      <label for="first_name">First Name</label>
    </div>
    <div class="input-field col s6">
      <input id="last_name" type="text" class="validate"/>
      <label for="last_name">Last Name</label>
</div>
  </div>
</form>
</div> */}


const Styles = StyleSheet.create({

  outerDiv: {
    width: '100%',
    display: 'flex',
    //flexDirection: 'column',
    alignItems: 'center',
    background: '#f5f6f7',
    border: 'solid green',
  },

  menuDiv: {
    backgroundColor: '#BDD0F9',
    display: 'flex',
    flexDirection: 'column',
  },

  formDivOuter: {
    backgroundColor: '#E5EBF8',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },

  divColumn: {
    border: 'solid green',
    background: '#f5f6f7',
  }

})