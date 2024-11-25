import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProdutosList from './components/ProdutosList';
import ContatoForm from './components/ContatoForm';  

function App() {
    return (
        <Router>
            <div>
                <nav className="bg-blue-500 p-4">
                    <div className="container mx-auto flex gap-4">
                        <Link to="/" className="text-white hover:text-blue-100">
                            Produtos
                        </Link>
                        <Link to="/contato" className="text-white hover:text-blue-100">
                            Contato
                        </Link>
                    </div>
                </nav>

                <main className="container mx-auto py-8">
                    <Routes>
                        <Route path="/" element={<ProdutosList />} />
                        <Route path="/contato" element={<ContatoForm />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;