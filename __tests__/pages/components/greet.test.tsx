import {render, screen} from '@testing-library/react'
import Greet from '@/pages/components/greet'

describe('Greet',()=>{
    test('renders correctly',()=>{
        render(<Greet/>)
        const greeting = screen.getByText('Hello')
        expect(greeting).toBeInTheDocument()
    })
    test.only('renders with a name', ()=>{
        render(<Greet name="John"/>)
        const textElement = screen.getByText('Hello John')
        expect(textElement).toBeInTheDocument()
    })
})