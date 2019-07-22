import React from "react";
import {shallow} from 'enzyme'
import ResetPassword from '../pages/registerPage'
import '../testSetup'

describe('Reset Password component' , () => {
    it('Render or pass error',() => {
        expect(shallow(<ResetPassword/>).exists()).toBe(true)
    })
    it('Render Password input',() => {
        expect(shallow(<ResetPassword/>).find('#password').length).toEqual(1) 
    })
    it('Render Confirm Password input',() => {
        expect(shallow(<ResetPassword/>).find('#confirmPassword').length).toEqual(1) 
    })
})

describe('Reset password input', () => {
    it("should responce to change event and change the state of login component",() => {
        const wrapper = shallow(<ResetPassword/>)
        wrapper.find('#password').simulate('change',{
            target : {
                name : 'password',
                value : '123456'
            }
        });
        expect(wrapper.state('password')).toEqual('123456')
    })
})
describe('Confirm Password Input', () => {
    it("should responce to change event and change the state of login component",() => {
        const wrapper = shallow(<ResetPassword/>)
        wrapper.find('#confirmPassword').simulate('change',{
            target : {
                name : 'confirmPassword',
                value : '123456'
            }
        });
        expect(wrapper.state('confirmPassword')).toEqual('123456')
    })
})