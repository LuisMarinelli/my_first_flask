// src/components/ProdutoModal.tsx
import React from 'react';
import Modal from 'react-modal';
import { Produto } from '../type/Produto';

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
    },
    content: {
        position: 'relative' as const, // Correção aqui
        inset: 'auto',  // Substitui top, left, right, bottom
        maxWidth: '500px',
        width: '90%',
        padding: 0,
        border: 'none',
        background: 'none',
        overflow: 'visible'
    }
};

interface ProdutoModalProps {
    produto: Produto;
    isOpen: boolean;
    onClose: () => void;
}

const ProdutoModal: React.FC<ProdutoModalProps> = ({ produto, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Detalhes do Produto"
            closeTimeoutMS={300}
        >
            <div className="bg-white rounded-lg shadow-xl animate-slideIn">
                <div className="p-6">
                    {/* Cabeçalho */}
                    <div className="flex justify-between items-start mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {produto.nome}
                        </h2>
                        <button 
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Fechar"
                        >
                            <svg 
                                className="w-6 h-6" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Conteúdo */}
                    <div className="mb-6">
                        <p className="text-gray-600 mb-4">
                            {produto.descricao}
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-2xl font-bold text-blue-600">
                                R$ {produto.preco.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    {/* Rodapé */}
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                // Adicionar ao carrinho aqui
                                onClose();
                            }}
                            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProdutoModal;