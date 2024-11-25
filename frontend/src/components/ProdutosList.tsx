// src/components/ProdutosList.tsx
import React, { useState, useEffect } from 'react'
import { Produto } from '../type/Produto'
import ProdutoModal from './ProdutoModal';

const ProdutosList: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/produtos');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        };

        fetchProdutos();
    }, []);

        // Função para abrir a modal
        const handleOpenModal = (produto: Produto) => {
            setSelectedProduto(produto);
            setModalIsOpen(true);
        };
    
        // Função para fechar a modal
        const handleCloseModal = () => {
            setModalIsOpen(false);
            setSelectedProduto(null);
        };
        return (
            <div className="min-h-screen bg-gray-100 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Nossos Produtos
                    </h1>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {produtos.map(produto => (
                            <div 
                                key={produto.id}
                                className="bg-white rounded-xl shadow-lg overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-48 flex items-center justify-center">
                                    <span className="text-white text-lg font-semibold">
                                        {produto.nome}
                                    </span>
                                </div>
    
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {produto.nome}
                                    </h2>
                                    <p className="text-gray-600 mt-2">
                                        {produto.descricao}
                                    </p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-2xl font-bold text-blue-600">
                                            R$ {produto.preco.toFixed(2)}
                                        </span>
                                        <button 
                                            onClick={() => handleOpenModal(produto)}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                        >
                                            Ver Detalhes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
    
                    {selectedProduto && (
                        <ProdutoModal 
                            produto={selectedProduto}
                            isOpen={modalIsOpen}
                            onClose={handleCloseModal}
                        />
                    )}
                </div>
            </div>
        );
    // return (
    //     <div className="min-h-screen bg-gray-100 py-8">
    //         <div className="container mx-auto px-4">
    //             <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    //                 Nossos Produtos
    //             </h1>

    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //                 {produtos.map(produto => (
    //                     <div 
    //                         key={produto.id}
    //                         className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    //                     >
    //                         {/* Área da imagem (placeholder) */}
    //                         <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-48 flex items-center justify-center">
    //                             <span className="text-white text-lg font-semibold">
    //                                 {produto.nome}
    //                             </span>
    //                         </div>

    //                         <div className="p-6">
    //                             <div className="flex justify-between items-start mb-4">
    //                                 <h2 className="text-xl font-bold text-gray-800">
    //                                     {produto.nome}
    //                                 </h2>
    //                                 <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
    //                                     Em estoque
    //                                 </span>
    //                             </div>

    //                             <p className="text-gray-600 mb-4 line-clamp-2">
    //                                 {produto.descricao}
    //                             </p>

    //                             <div className="flex justify-between items-center">
    //                                 <span className="text-2xl font-bold text-blue-600">
    //                                     R$ {produto.preco.toFixed(2)}
    //                                 </span>

    //                                 <button 
    //                                     onClick={() => setSelectedProduto(produto)}
    //                                     className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
    //                                 >
    //                                     <span>Comprar</span>
    //                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    //                                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
    //                                     </svg>
    //                                 </button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
                
    //             {/* Modal de Produto (pode ser extraído para um componente separado) */}
    //             {/* {selectedProduto && (
    //                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    //                     <div className="bg-white rounded-lg p-6 max-w-lg w-full">
    //                         <h2 className="text-2xl font-bold mb-4">{selectedProduto.nome}</h2>
    //                         <p className="text-gray-600 mb-4">{selectedProduto.descricao}</p>
    //                         <p className="text-xl font-bold text-blue-600 mb-4">
    //                             R$ {selectedProduto.preco.toFixed(2)}
    //                         </p>
    //                         <div className="flex justify-end gap-2">
    //                             <button 
    //                                 onClick={() => setSelectedProduto(null)}
    //                                 className="px-4 py-2 text-gray-600 hover:text-gray-800"
    //                             >
    //                                 Fechar
    //                             </button>
    //                             <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
    //                                 Adicionar ao Carrinho
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             )} */
    //             }
                
    //         </div>
    //     </div>
    // );
};

export default ProdutosList;


// const ProdutosList: React.FC = () => {
//     const [produtos, setprodutos] = useState<Produto[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, seterror] = useState('');

//     useEffect(() => {
//         const fetchProdutos = async () => {
//             try {
//                 setLoading(true);
//                 const response = await fetch('http://127.0.0.1:5000/api/produtos');
//                 const data = await response.json();
//                 setprodutos(data);
//             } catch (error) {
//                 console.error("Erro ao buscar produtos: ", error)
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProdutos();
//     }, []);

//     if (loading) {
//         return (
//             <div className='flex justify-center items-center min-h-screen'>
//                 <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className='text-center p-4'>
//                 <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'></div>
//             </div>
//         )
//     }

    
// };

// export default ProdutosList;
