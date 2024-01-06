import {screen,render} from "@testing-library/react"
import Home from "../pages/Home"

test('Home_test_1',()=>{
    render(<Home />)
    const data1 = screen.getByText(/SRI KRISHNA COLLEGE OF TECHNOLOGY/i);
    expect(data1).toBeInTheDocument();

})
test('Home_test_2',()=>{
    render(<Home />)
    const data2 = screen.getByText(/React testing/i);
    expect(data2).toBeInTheDocument();
})