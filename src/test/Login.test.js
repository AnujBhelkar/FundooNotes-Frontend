/**
 * @description :- Here we testing the login page
 */
import React from "react";
import { shallow } from "enzyme";
import Login from '../pages/loginPage'
import '../testSetup'

/**
 * @description :  describe is for what we are testing ??
 */
describe('Login Component', () => {
    /**
     * @description : make your assertion and check what happen
     */
    it('should render or pass an error ' , () => {
        expect(shallow(<Login/>).exists()).toBe(true)
    })
    it('render a email input',() => {
        expect(shallow(<Login/>).find("#email").length).toEqual(1)
    })
    it('render a password input',() => {
        expect(shallow(<Login/>).find("#password").length).toEqual(1)
    })
})
/**
 * @description : here i checking login input is working or not
 */
describe('Email Input ',() => {
    it("Respond to change event and change the state of login component",() => {
        const wrapper = shallow(<Login/>)
        
            wrapper.find('#email').simulate('change',{
                target : {
                    name : 'email',
                    value : 'anubhelkar@gmail.com'
                }
            });
        expect(wrapper.state('email')).toEqual('anubhelkar@gmail.com')
    })
})

describe('Password Input ',() => {
    it("Respond to change event and change the state of login component",() => {
        const wrapper = shallow(<Login/>)
        
            wrapper.find('#password').simulate('change',{
                target : {
                    name : 'password',
                    value : '12789'
                }
            });
            // console.log("wrapper password is -->",wrapper.state('password'));
            
        expect(wrapper.state('password')).toEqual('12789')
    })
})