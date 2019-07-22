import React from "react";
import {shallow} from 'enzyme'
import ForgotPassword from '../pages/forgotPage'
import '../testSetup'

describe('Forgot Password component' , () => {
    it('Render or pass error',() => {
        expect(shallow(<ForgotPassword/>).exists()).toBe(true)
    })
    it('Render Email input',() => {
        expect(shallow(<ForgotPassword/>).find('#email').length).toEqual(1) 
    })
})

describe('Forgot email input', () => {
    it("should responce to change event and change the state of login component",() => {
        const wrapper = shallow(<ForgotPassword/>)
        wrapper.find('#email').simulate('change',{
            target : {
                name : 'email',
                value : 'anubhelkar@gmail.com'
            }
        });
        expect(wrapper.state('email')).toEqual('anubhelkar@gmail.com')
    })
})
