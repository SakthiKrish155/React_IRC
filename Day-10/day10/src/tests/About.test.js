import {screen,render} from "@testing-library/react"
import About from "../pages/About";

test('About_test_1',()=>{
    render(<About />)
    const data1 = screen.getByText(/Sri Sakthi Sneha H/i);
    expect(data1).toBeInTheDocument();

})
test('About_test_2',()=>{
    render(<About />)
    const data2 = screen.getByText(/727822TUCS230/i);
    expect(data2).toBeInTheDocument();
})