//1 createStore form redux

//2 const store = createStore(reducer, initialStore)
// store is a place where store our data
//preku reducer gi promenuvame , reducer  eprv argument
// potoa se pravi funccija reducer
// reducer ima argument state, action
//state = initialState a so action izmenuvame
// toa go pravime so if state proveruvame dali akcijata so ja dispath e ednakva
//akcijata ja potvrduvame so store.dispatch({type: "DECREASE"})
//I PRAVIME nov objecty
//if no one action match than return old state
//RDUCER// one folder for reducer

//WE looking for provider and wrap all apllication
//and we use connect function in each components
//with connect we connect component with state
//export default connect(mapStateProps)(NavCart);

//then create function mapStateToProps
//const mapStateToProps = (state) => {
//console.log(state);
//no we have acsses to state
//};
//
