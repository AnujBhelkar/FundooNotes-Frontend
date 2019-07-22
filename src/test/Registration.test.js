import React from "react";
import {shallow} from 'enzyme'
import Registration from '../pages/registerPage'
import '../testSetup'

describe('Register Component',() => {
    it('should render or pass an error',() => {
        expect(shallow(<Registration/>).exists()).toBe(true)
    })
    it('Render a first Name input',() => {
        expect(shallow(<Registration/>).find('#firstName').length).toEqual(1)
    })
    it('Render a last Name input',() => {
        expect(shallow(<Registration/>).find('#lastName').length).toEqual(1)
    })
    it("render a email Input ",() => {
        expect(shallow(<Registration/>).find('#input').length).toEqual(1)
    })
    it("render a password Input ",() => {
        expect(shallow(<Registration/>).find('#password').length).toEqual(1)
    })
    it("render a confirm password Input ",() => {
        expect(shallow(<Registration/>).find('#confirmPassword').length).toEqual(1)
    })
})

describe('First Name Input', () => {
    it('Responcd to change evevt and change the state of login component',() => {
        const wrapper = shallow(<Registration/>)
        wrapper.find('#firstName').simulate('change', {
            target : {
                name : 'firstName',
                value : 'Ab'
            }
        })
        console.log('First Name is -->',wrapper.state('firstName'))
        expect(wrapper.state('firstName')).toEqual('Ab')
    })
})


describe('Last Name Input', () => {
    it('Responcd to change evevt and change the state of login component',() => {
        const wrapper = shallow(<Registration/>)
        wrapper.find('#lastName').simulate('change', {
            target : {
                name : 'lastName',
                value : 'Develiar'
            }
        })
        console.log('Last Name is -->',wrapper.state('lastName'))
        expect(wrapper.state('lastName')).toEqual('Develiar')
    })
})
describe('Email Input', () => {
    it('Responcd to change evevt and change the state of login component',() => {
        const wrapper = shallow(<Registration/>)
        wrapper.find('#input').simulate('change', {
            target : {
                name : 'email',
                value : 'abDeveliar@gamil.com'
            }
        })
        console.log('Email is -->',wrapper.state('email'))
        expect(wrapper.state('email')).toEqual('abDeveliar@gamil.com')
    })
})
describe('Password Input', () => {
    it('Responcd to change evevt and change the state of login component',() => {
        const wrapper = shallow(<Registration/>)
        wrapper.find('#password').simulate('change', {
            target : {
                name : 'password',
                value : 'Abd@gmail'
            }
        })
        console.log('Password is -->',wrapper.state('password'))
        expect(wrapper.state('password')).toEqual('Abd@gmail')
    })
})
describe('Last Name Input', () => {
    it('Responcd to change evevt and change the state of login component',() => {
        const wrapper = shallow(<Registration/>)
        wrapper.find('#confirmPassword').simulate('change', {
            target : {
                name : 'confirmPassword',
                value : 'Abd@gmail'
            }
        })
        console.log('Confirm password is -->',wrapper.state('confirmPassword'))
        expect(wrapper.state('confirmPassword')).toEqual('Abd@gmail')
    })
})
