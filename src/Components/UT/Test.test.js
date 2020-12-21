import Test from '../Test';
import LI from '../LI';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';

configure({adapter: new Adapter()});

describe("These are group of test cases for Test.jsx", ()=>
{
    it("Checking home & LI hierarchy", ()=>{
        let component = shallow(<Test></Test>);
        
        expect(component.find(LI)).toHaveLength(3);
    });
})