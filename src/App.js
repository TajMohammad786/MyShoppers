import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import NewsLetter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';
import {Toaster} from 'react-hot-toast';


function App() {
    return (
        <>
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            iconTheme: {
                                primary: "#62bd6e",
                            },
                        },
                        error: {
                            iconTheme: {
                                primary: "#e3776f",
                            },
                        },
                    }}
                />
            </div>
            <BrowserRouter>
                <AppContext>

                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/category/:id" element={<Category />} />
                        <Route path="/products/:id" element={<SingleProduct />} />

                    </Routes>
                    <NewsLetter />
                    <Footer />

                </AppContext>
            </BrowserRouter>
        </>
    );
}

export default App;
