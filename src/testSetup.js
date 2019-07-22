/**
 * @description :- It will create for setup of test
 */
 const Enzyme = require('enzyme');
 /**
  * @description :- this is where we refrence the adapter package we installed
  */
 const EnzymeAdapter = require('enzyme-adapter-react-16')
 /**
  * @description :-  This sets up the adapter to be use as Enzyme
  */
  Enzyme.configure({ adapter : new EnzymeAdapter() });