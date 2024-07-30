import Application from "@/pages/application";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

// GetByRole
describe.only('Application', () => {
    test('renders correctly', () => {
        render(<Application />);
        const pageHeading = screen.getByRole('heading', {
            level: 1,
        })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        })
        expect(sectionHeading).toBeInTheDocument()

        // getByText
        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        // getAllByAltText
        const imageElement = screen.getAllByAltText('A person with a laptop')
        expect(imageElement).toBeInTheDocument()

        const nameElement = screen.getByRole('textbox', {
            name: 'Name',
        });
        expect(nameElement).toBeInTheDocument();

        // getByLabelText
        const nameElement2 = screen.getByLabelText('Name')
        expect(nameElement2).toBeInTheDocument();
  
        // getByPlaceHolderText
        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument();

        // getByDisplayValue
        const nameElement4 = screen.getByDisplayValue('Zoe')
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument()

        const SubmitButtonElement = screen.getByRole('button')
        expect(SubmitButtonElement).toBeInTheDocument()
    });
});