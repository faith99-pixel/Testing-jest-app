import React from 'react'
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import DashboardIndexPage from '@/pages/dashboard'

describe('Dashboard page', ()=>{
    it('renders the dashboard page', ()=>{
       render(<DashboardIndexPage/>)
       const header = screen.getByRole('heading')
       const headerText = ('Hello World')
       expect(header).toHaveTextContent(headerText)
    });
    it('Should have a disabled button', ()=>{
        render(<DashboardIndexPage/>)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeDisabled()
    });

    it('Should have a p tag with className of blue', ()=>{
        render(<DashboardIndexPage/>);
        const pElement = screen.getByTestId('paragraph-blue')
        expect(pElement).toHaveClass('blue');
        expect(pElement).toHaveTextContent('This is our paragraph');
    })
    it('Should have an input with a text and placeholder', ()=>{
        render(<DashboardIndexPage/>);
        const inputElement = screen.getByPlaceholderText('Enter your name');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('placeholder', 'Enter your name');
    })
    it('Should have a button with a red background color', ()=>{
        render(<DashboardIndexPage/>);
        const buttonElement = screen.getAllByRole('button');
        expect(buttonElement).toHaveClass('red');
        expect(buttonElement).toHaveTextContent('Submit');
    })
})

